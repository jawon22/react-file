import { useEffect, useRef, useState } from "react";
import { Modal } from "bootstrap/dist/js/bootstrap.esm";

const Exam01 = ()=>{
    const [todoList, setTodoList] = useState([
        {no:1, title:"학원가기", type:"공부", edit:false},
        {no:2, title:"영어단어외우기", type:"공부", edit:false},
        {no:3, title:"헬스장가기", type:"운동", edit:false},
        {no:4, title:"친구만나기", type:"일상", edit:false}
    ]);
    const [backup, setBackup] = useState([]);
    const [data, setData] = useState({
        title:"",
        type:""
    });

    const bsModal = useRef();

    const changeData = e=>{
        const newData = {
            ...data,
            [e.target.name] : e.target.value
        };
        setData(newData);
    };

    //시작하자마자 백업
    useEffect(()=>{
        setBackup(todoList.map(todo=>{
            return{...todo}
        }));
    },[]);

    //할일 수정
    const changeToEdit = (target) =>{
        
        const newTodo = todoList.map(todo=>{
            if(todo.no === target.no){
                return{
                    ...todo,
                   edit:true 
                };
            }
            return todo;
        });
        setTodoList(newTodo);
    }

    // 할일 데이터 변경 함수
    const changeTodo = (target, e) =>{
        setTodoList(todoList.map(todo=>{
            if(todo.no === target.no){
                return{
                    ...todo,
                    [e.target.name] : e.target.value
                }
            }
            return todo;
        }));
    }

    // 취소 버튼 누르면 실행 함수
    const cancelTodo = (target) =>{
        //backup에서 누른 줄의 해당하는 번호 찾기
        const findResult = backup.filter(todo=> todo.no ===target.no);

        //할일 변경
        const  newTodo = todoList.map(todo=>{
            setTodoList( todoList.map(todo=>{
                if(todo.no ===target.no){
                    return{
                        ...findResult[0],
                        edit:false
                    };
                }
                return todo;
            }));
        })
    }

    const saveTodo = (target)=>{
        setBackup(backup.map(todo=>{
            if(todo.no === target.no){
                return{
                    ...target,
                    edit:false
                };
            }
            return todo;
        }));

        setTodoList(todoList.map(todo=>{
            if(todo.no ===target.no){
                return{
                    ...todo,
                    edit:false
                }
            }
            return todo;
        }));
    }

    const deleteTodo = (target) =>{

        //할일 삭제
        setTodoList(todoList.filter(todo=> todo.no !== target.no));
        //백업 삭제
        setBackup(backup.filter(todo=> todo.no !== target.no));
    };

    const addTodo = ()=>{
        const todoNo = todoList.length ==0 ?1 :todoList[todoList.length-1].no+1;

        //할일 추가
        setTodoList([...todoList,{
            ...data,
            edit:false,
            no:todoNo
        }]);
        
        //백업 추가
        setBackup([...backup,{
            ...data,
            edit:false,
            no:todoNo
        }]);

        setData({
            title:"",
            type:""
        });
        
        //모달 닫기
        closeModal();
    };

    const cancelAddTodo = ()=>{
        setData({
            title:"",
            type:""
        });
        
        //모달 닫기
        closeModal();
    }

    //모달 여는 함수
    const openModal = ()=>{
        // var modal = new Modal(document.querySelector("#exampleModal"));
        var modal =  new Modal(bsModal.current); //이렇게 쓰자
        modal.show();
    };
    //모달 닫는 함수
    const closeModal = ()=>{
        // var modal = Modal.getInstance(document.querySelector("#exampleModal")); //VanillaJS style
        var modal = Modal.getInstance(bsModal.current); //React style
        modal.hide();
    }

    return(
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <div className="p-4 text-light bg-dark rounded text-center">
                        <h1>할일 목록</h1>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-primary" 
                                onClick={openModal}>
                                신규등록
                            </button>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">

                            <table className="table text-center table-hover table-success" data-bs-theme="light">
                                <thead className="text-center" style={{backgroundColor:"beige"}}>
                                    <tr>
                                        <th width="10%">번호</th>
                                        <th width="40%">할일</th>
                                        <th width="30%">종류</th>
                                        <th width="20%">관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todoList.map((todo,index)=>(
                                        todo.edit ?(
                                            <tr key={todo.no}>
                                                <td>{todo.no}</td>
                                                <td>
                                                    <input className="form-control" type="text" value={todo.title}
                                                        name="title" onChange={e=>changeTodo(todo,e)}/>
                                                </td>
                                                <td>
                                                    <input className="form-control" type="text" value={todo.type}
                                                        name="type" onChange={e=>changeTodo(todo,e)}/>
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-secondary"
                                                        onClick={e=>cancelTodo(todo)}>취소</button>
                                                    <button className="btn btn-sm btn-success ms-1"
                                                        onClick={e=>saveTodo(todo)}>완료</button>
                                                </td>
                                            </tr>

                                        ):(
                                        <tr key={todo.no}>
                                            <td>{todo.no}</td>
                                            <td>{todo.title}</td>
                                            <td>{todo.type}</td>
                                            <td className="text-center">
                                                <button className="btn btn-sm btn-warning"
                                                    onClick={e=>changeToEdit(todo)}>수정</button>
                                                <button className="btn btn-sm btn-danger ms-1"
                                                    onClick={e=>deleteTodo(todo)}>삭제</button>
                                            </td>
                                        </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>


                </div>
            </div>

            {/*  Modal  */}
            <div className="modal fade" ref={bsModal} id="exampleModal" tabIndex="-1" 
                   data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fs-5" id="exampleModalLabel">신규 할일 등록</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">할일</label>
                                    <input name="title" className="form-control"
                                        value={data.title} onChange={changeData} />
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col">
                                    <label className="form-label">종류</label>
                                    <input name="type" className="form-control"
                                        value={data.type} onChange={changeData} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* 자동으로 닫히게 하는 버튼 */}
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">취소</button> */}

                            {/* 수동으로 원하는 로직을 추가하여 닫히게 하는 버튼 */}
                            <button type="button" className="btn btn-secondary" onClick={cancelAddTodo}>취소</button>
                            <button type="button" className="btn btn-primary" onClick={addTodo}>추가</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exam01;