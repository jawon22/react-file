import { useState } from "react";

const Exam06 = ()=>{
    // const [alias,setAlias] = useState("");
    // const [gender,setGender] =useState("남자");

    //상태를 하나의 객체로 관리할 때 
    const [info,setInfo] = useState({ //alias-> 별칭
        alias :"",
        gender :"남자"
    });

    // function changeInfo(e)
    const changeInfo = e=>{
        // console.log(e.target); //이벤트 발생 태그 확인
        // console.log(e.target.name, e.target.value); //이름 , 값 확인

        //info에서 이벤트가 발생한 태그명에 해당하는 필드만 입력값으로 바꾸고 나머진 그대로 둬라!!
        // ...info는 info의 나머지 항목을 의미한다(rest 연산/나머지 연산)
        //- 객체의 [] 표시를 쓰면 필드명을 변수로 지정할 수 있다.
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        });
    };

    return(
        <>
            <h1>상태변수가 객체인 경우</h1>
            {/* 여기서 name을 지정하는 이유는 값을 전달하기 위해서가 아니라 구별하기 위해 지정함 */}
            이름 <input type="text" name="alias" value={info.alias} onChange={changeInfo}/><br/><br/>
            성별
            <select value={info.gender} name="gender" onChange={changeInfo}> 
                <option>남자</option>
                <option>여자</option>
            </select>
        </>
    );
};

export default Exam06;