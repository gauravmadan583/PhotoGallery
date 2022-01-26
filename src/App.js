import './App.css';
import PhotoGrid from './components/PhotoGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {

	return (
		<div className="">
			<Title />
			<UploadForm />
			<PhotoGrid />
		</div>
	);
}

export default App;