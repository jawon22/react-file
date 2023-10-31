import { useEffect, useState } from "react";

const Exam05 =()=>{
    const [java, setJava] = useState("");
    const [database, setDatabase] = useState("");
    const [springboot, setSpringboot] = useState("");
    const [total, setTotal] = useState(0);

    const Change = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseFloat(value) || 0;
    
        if (name === 'java') {
          setJava(parsedValue);
        } else if (name === 'database') {
          setDatabase(parsedValue);
        } else if (name === 'springboot') {
          setSpringboot(parsedValue);
        }
      };

    useEffect(() => {
        const sum = java + database + springboot;
        setTotal(sum);
      }, [java, database, springboot]);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <div className="row mt-4">
                        <div className="col text-center">
                            <h3>성적 계산기</h3>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-4">
                            자바
                        </div>
                        <div className="col-8">
                            <input name="java" className="form-control"
                                value={java} onChange={Change}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            데이터베이스
                        </div>
                        <div className="col-8">
                            <input name="database" className="form-control"
                                value={database} onChange={Change}></input>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-4">
                            스프링부트
                        </div>
                        <div className="col-8">
                            <input name="springboot" className="form-control"
                                value={springboot} onChange={Change}></input>
                        </div>
                    </div>
                    <hr/>

                    <div className="row mt-3 mb-5">
                        <div className="col">
                            총점 = {total}점 , 평균 = {total/3}점
                        </div>
                    </div>

                </div> 
            </div>
        </div>
    );
};

export default Exam05;