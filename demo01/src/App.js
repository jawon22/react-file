import logo from './logo.svg';
import './App.css';

// 리액트의 함수형 컴포넌트(Functional Component)
// - 리액트에서는 화면의 조각을 컴포넌트라고 부른다
// - 리액트에서는 화면이 무수히 많은 컴포넌트의 조합이다
// - 컴포넌트를 class 또는 함수로 만들 수 있다 -> 공식문서에서는 함수로 개발하는 것을 권장함
// - 컴포넌트 함수에서는 반드시 화면 코드를 반환해야 한다(JSX)
// - 이 화면 코드를 JSX라고 부른다 (JavaScript Xml)
// - (주의) JSX는 반드시 한개의 태그로 감싸져야 한다 ( 정 감쌀 태그가 없다면 <> </> 이렇게 쓰자!)
function App() {
  return (
    <>
      <h1>Hello React!</h1>
      <p>
        첫 번째 리액트 앱
      </p>
    </>
  );
}
// 모듈형 자바스크립트에서 export라는 키워드는 import가 가능하도록 만드는 요소 (외부에서 import를 할 수 있음!)
export default App;
