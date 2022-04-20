import './App.css';
import DropFileInput from './components/drop-file-input/DropFileInput';
import ErrorUpload from './components/errorUpload/errorUpload';

function App() {
  return (
    <div className="box">
      <div className='single-box'>
      <DropFileInput />
      </div>
      <div className='single-box'>
      <ErrorUpload/>
      </div>
    </div>
  );
}

export default App;
