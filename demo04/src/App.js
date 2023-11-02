import Exam01 from './components/Exam01';
import './App.css';
// font Awesome import하는 법
import {FaXmark} from "react-icons/fa6"
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <>
    <Jumbotron title="일정 관리 프로그램" content="kh 일정 자료"/>
    <Exam01/>
    <hr/>
    <div className="my-5 py-5"></div>
    </>
  );
}

export default App;
