
import './App.css';



import First from './First';
import  ReactDOM  from 'react-dom';
import  {Portal} from './Modal/Portal';
function App() {
  return ReactDOM.createPortal(

    // <div>
    //   {/* <First/> */}
   
    // </div>
    <Portal/>,

document.getElementById('portal')

  );
}

export default App;
