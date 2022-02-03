import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const filetype = ["image/png", "image/jpeg"];


    const changeHandler = (e) => {

        let selected = e.target.files[0];
        if (selected && filetype.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setError('Please select an image format (jpeg or png).')
            setFile(null);
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;