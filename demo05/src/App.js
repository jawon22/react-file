import { NavLink, Route, Routes } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Pocketmon from './components/Pocketmon';
import Book from './components/Book';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {/* <Jumbotron title="demo05 생성" content="생성했지렁"/> */}
          {/* 상단 메뉴 영역 */}
          <Menu/>

          {/* 본문 영역 */}
            <div>
              <Routes>
                <Route exact path="/" element={<Home/>}></Route> 
                <Route path="/pocketmon" element={<Pocketmon/>}></Route>
                <Route path="/book" element={<Book/>}></Route>
              </Routes>
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;
