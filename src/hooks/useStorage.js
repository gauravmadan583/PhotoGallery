import  { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/Config";

const useStorage = (file) => {
    
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        const createdAt = timestamp();

        storageRef.put(file).on('state_change', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            collectionRef.add({url, createdAt});
            setUrl(url);
        })
    }, [file] );

    return { progress, error, url };
}

export default useStorage;