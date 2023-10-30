import logo from './kh.png';

//JSX에서는 프로그래밍 변수를 속성에 넣을때는 {}를 사용한다
// src="hello"로 되어 있으면 경로를 의미
// src={hello}로 되어 있으면 변수를 의미

//JSX에서는 모든 태그가 닫혀야 한다
function App() {
  var width =300;
  return (
    <>
      <img src={logo} width={width}/>
      <h1>KH 정보교육원 React 수업자료</h1>
    </>
  );
}

export default App;
