import './App.css';
import DropFileInput from './components/drop-file-input/DropFileInput';
import ErrorUpload from './components/errorUpload/errorUpload';
import CropImage from './components/cropImage/cropImage';
// import UploadImage from './components/uploadImage/uploadImage';

function App() {

  const onFileChnage = (files) => {
    console.log(files);
  }

  return (
    <section className="box">
      <article className='single-box'>
        <DropFileInput/>
      </article>
      <article className='single-box'>
      <ErrorUpload/>
      </article>
      <article className='single-box'>
      <CropImage/>
      </article>
      {/* <article className='single-box'>
      <UploadImage/>
      </article> */}
    </section>
  );
}

export default App;
