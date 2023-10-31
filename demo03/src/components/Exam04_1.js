import { useEffect, useState } from "react";

const Exam04_1 =()=>{
    const [content, setContent] = useState("");
    const [length, setLength] = useState(0);

    //state끼리 의존성이 생기는 경우가 있다
    //- content가 변하면 length가 변해야 한다
    //- 수동으로 하는 것이 아니라 자동으로 변하도록 설정할 수 있다
    // -> useEffect(라고 부름) 훅 사용
    // - useEffect(함수,[감지항목]);
    useEffect(()=>{
        setLength(content.length);
    },[content]);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <div className="row mt-4 text-center">
                        <div className="row">
                            <h3>주말에 뭐하세요(강사님 풀이)</h3>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col">
                            <textarea name="content" className="form-control" rows="6"
                                value={content} onChange={e=>setContent(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col text-end">
                            {length} / 1000
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exam04_1;