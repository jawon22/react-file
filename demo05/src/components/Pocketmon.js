import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
import {GrAddCircle} from "react-icons/gr"
import { Modal } from "bootstrap";


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

    const bsModal = useRef();
    const openModal = ()=>{
        const modal = new Modal(bsModal.current);
        modal.show();
    };
    const closeModal = ()=>{
        const modal = Modal.getInstance(bsModal.current);
        modal.hide();
        clearPocketmon();
    };

    //등록과 관련된 state
    const [pocketmon, setPocketmon] = useState({name:"",type:""});
    const changePocketmon = (e)=>{
        setPocketmon({
            ...pocketmon,
            [e.target.name] : e.target.value
        });
    };

    //입력창 클리어
    const clearPocketmon= ()=>{
        setPocketmon({name:"",type:""});
    };

    //axios로 서버에 등록 요청을 보낸 뒤 등록이 성공하면 목록을 갱신하도록 처리
    const savePocketmon = ()=>{
        axios({
            url:"http://localhost:8080/pocketmon/",
            method:"post",
            data:pocketmon
        })
        .then(response=>{ //성공시
            loadPocketmon(); //목록갱신 후
            closeModal(); //모달 닫기
        })
        .catch(err=>{});
    };

    return(
        <>
            <Jumbotron title="포켓몬스터 관리" content="React CRUD 연습"/>
            
            <div className="row mt-4">
                <div className="col text-end">
                    <button className="btn btn-success" onClick={openModal}>
                        추가<GrAddCircle className="text-center"/>
                    </button>
                </div>
            </div>

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

            {/*  Modal  */}
            <div className="modal fade" ref={bsModal} tabIndex="-1" role="dialog" data-bs-backdrop="static" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5">포켓몬변경</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {/* 수정화면 */}
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">이름</label>
                                    <input type="text" name="name" className="form-control" 
                                        value={pocketmon.name} onChange={changePocketmon}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">속성</label>
                                    <input type="text" name="type" className="form-control"
                                        value={pocketmon.type} onChange={changePocketmon}/>
                                </div>
                            </div>
                        
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                            <button className="btn btn-success" onClick={savePocketmon}>저장</button>
                        </div>
                    </div>
                </div>
            </div>  

        </>
    );
};

export default Pocketmon;