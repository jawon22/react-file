import { useState } from "react";

//const Exam03 = function(){}; 같은 코드
//const Exam03 = ()=>{}; 같은 코드
function Exam03(){
    //데이터
    const [money, setMoney] = useState(0);

    return(
        <>
            <h1>세 번째 예제</h1>
            <h3 className="text-info">
                출금 금액 : {money}원
            </h3>
            {/* 
            <input placeholder="금액을 입력하세요" value={money} onInput={e=>setMoney(parseInt(e.target.value))}/>
                <button className="btn btn-primary">입력</button><br/><br/>
            */}
            <input placeholder="금액을 입력하세요"/><button className="btn btn-primary">입력</button><br/><br/>
            <button className="btn btn-info me-1" onClick={()=>setMoney(money+100000)}>10만원</button>
            <button className="btn btn-info me-1" onClick={()=>setMoney(money+50000)}>5만원</button>
            <button className="btn btn-info me-1" onClick={()=>setMoney(money+10000)}>1만원</button>
            <button className="btn btn-danger" onClick={()=>setMoney(0)}>초기화</button>
            <br/>
            <input type="range" min="0" max="1000000" step="10000" value={money} onChange={e=>setMoney(parseInt(e.target.value))} />
        </>
    );
}

export default Exam03;