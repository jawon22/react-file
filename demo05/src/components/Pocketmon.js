import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";

const Pocketmon = (props) =>{
    const [pocketmonList, setPocketmonList] = useState([]);

    //서버에서 pocketmon list를 불러와서 state에 설정하는 코드
    const loadPocketmon = ()=>{
        axios({
            url:"http://localhost:8080/pocketmon/", 
            method:"get"
        })
        .then(response=>{
            setPocketmonList(response.data)
        })
        .catch(err=>{});
    };

    useEffect(()=>{ //한번만 실행하는
        loadPocketmon(); //목록 갱신
    },[])

    //포켓몬스터 삭제
    //- 이제는 state에서 삭제하는 것이 아니라 서버에 통신을 보낸 뒤 목록을 갱신하면 된다
    const deletePocketmon = (pocketmon)=>{
        const choice = window.confirm("정말 삭제할껀가요??");
        if(choice ===false) return;

        //axios({옵션}).then(성공시 실행할 함수).catch(실패시 실행할 함수);
        axios({
            url:`http://localhost:8080/pocketmon/${pocketmon.no}`, //백틱으로 헀을경우
            method:"delete" //DeleteMapping 
        })
        .then(response=>{
            loadPocketmon(); //목록갱신
        })
        .catch(err=>{});
    };

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
                                    <td>
                                        <FiEdit className="text-warning"/>
                                        <MdDelete className="text-danger" onClick={e=>deletePocketmon(pocketmon)}/>
                                    </td>
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