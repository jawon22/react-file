import { useState } from "react";

const Exam04 = ()=>{
    const [text,setText] = useState('');

    const TextChange = (e) => {
        const newText = e.target.value;
        // 글자 수를 1000자로 제한
    if (newText.length <= 1000) {
        setText(newText);
      }
    };
    const isMax = text.length >=1000;
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <div className="row mt-4 text-center">
                        <div className="col">
                            <h2>(Q) 주말에 뭐하세요?</h2>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-8 offset-md-2">
                            <textarea className="form-control" rows={8} 
                                placeholder="1000글자 내로 입력하세요"
                                value={text}
                                onChange={TextChange}/>

                            <div className="text-end">
                                <span style={{ color: isMax ? 'red' : 'black' }}>
                                    {text.length}</span>/ 1000  
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exam04;