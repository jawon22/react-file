import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Jumbotron from "./components/Jumbotron";

function App1() {
  const [todoList, setTodoList] = useState([
      {no:1, title:"학원가기", type:"공부"},
      {no:2, title:"영어단어외우기", type:"공부"},
      {no:3, title:"헬스장가기", type:"운동"},
      {no:4, title:"친구만나기", type:"일상"}
  ]);
  const [data,setData] = useState({title:"",type:""});

  const deleteTodoList = (todo)=>{
    setTodoList(todoList.filter(t =>t.no !==todo.no))
  };
  const changeData = (e)=>{
    setData({
        ...data,
        [e.target.name] : e.target.value
    })
  };

  const addTodoList = ()=>{
    //data의 내용을 todoList에 추가 후 data를 초기화
    //내용 검사 코드 추가 if(맘에 안들면) return;
    if(data.title.length ===0 || data.type.length ===0) return; // 내용과 체크박스 선택안하면 추가 못함

    const no = todoList.length ==0 ? 1 :todoList[todoList.length-1].no+1;

    setTodoList([
        ...todoList,{...data,no:no}
    ]);
    setData({title:"",type:""});
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">

          {/* 점보트론을 만들면서 제목과 내용을 전달 */}
          <Jumbotron title="일정 관리 프로그램" content="KH정보교육원 수업자료"/>

          {/* 입력 화면 */}
            <div className="row mt-4">
                <div className="col-6">
                    <input className="form-control" name="title" value={data.title} onChange={changeData}/>
                </div>
                <div className="col-3">
                    <select className="form-select" name="type" value={data.type} onChange={changeData}>
                        <option value="">선택하세요</option>
                        <option>약속</option>
                        <option>일상</option>
                        <option>취미</option>
                        <option>공부</option>
                    </select>
                </div>
                <div className="col-3">
                    <button className="btn btn-success w-100" onClick={addTodoList}>
                        <AiOutlinePlus/>
                        추가
                    </button>
                </div>
            </div>

          {/* 출력 화면 */}
          <div className="row mt-4">
            {todoList.map(todo=>(
            <div className="col-12 fs-4 mb-2">
              <span className="badge bg-primary me-2">
                {todo.type}
              </span>
              {todo.title}
            
              <FaRegEdit className="text-warning ms-1"/>
              <FaXmark className="text-danger"/>
            </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App1;