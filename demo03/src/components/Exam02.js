import { useState } from 'react';
import sadimage from '../assets/images/image2.gif';

function Exam02(){
    //이 화면의 상태(state)는 한 개이다.
    const [size,setSize] = useState(200);

    // 이런 예약 함수를 callback함수라 함
    // function small(){
    //     // size = 100; //React에선 사용 불가
    //     setSize(50); //올바른 방법(React 방법)
    // }
    // function normal(){
    //     setSize(200);
    // }
    // function big(){
    //     setSize(400);
    // }

    return(
        <>
            <h1>두 번째 예제</h1>
            {/* 애로우function으로 쓴다 / 람다를 쓴 예제 */}
            <button onClick={()=>setSize(50)}>작게</button>
            <button onClick={()=>setSize(200)}>기본</button>
            <button onClick={()=>setSize(400)}>크게</button><br/>
            <img src={sadimage} width={size} height={size}/>
        </>
    );
}

export default Exam02;