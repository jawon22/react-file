import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";

const Pocketmon = (props) =>{
    const [pocketmonList, setPocketmonList] = useState([]);
    useEffect(()=>{ //한번만 실행하는
        //서버에서 pocketmon list를 불러와서 state에 설정하는 코드
        axios({
            url:"http://localhost:8080/pocketmon/",
            method:"get"
        })
        .then(response=>{ //성공했을때
            console.log(response);
            setPocketmonList(response.data);
        }) 
        .catch(err=>{});
    },[])

    return(
        <>
            <Jumbotron title="포켓몬스터 관리" content="React CRUD 연습"/>
            <div className="row mt-4">
                <div className="col">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>속성</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pocketmonList.map(pocketmon=>(
                                <tr key={pocketmon.no}>
                                    <td>{pocketmon.no}</td>
                                    <td>{pocketmon.name}</td>
                                    <td>{pocketmon.type}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
};

export default Pocketmon;