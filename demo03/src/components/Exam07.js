import { useState } from "react";


const Exam07 = ()=>{
    const [member, setMember] = useState({
        memberId :"",
        memberPw :"",
        memberPwRe :""
    });

    const ChangeMember = (e)=>{ //이벤트가 발생할을때 실행되는 함수!!
        setMember({
            ...member,
            [e.target.name] : e.target.value
        });
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 offset-md-2">

                    <div className="row mt-4">
                        <div className="col text-center">
                            <h3>회원가입</h3>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-3 text-start">
                            아이디
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control" name="memberId" value={member.memberId} onChange={ChangeMember}/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 text-start">
                            비밀번호
                        </div>
                        <div className="col-9">
                            <input type="password" className="form-control" name="memberPw" value={member.memberPw} onChange={ChangeMember}/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 text-start">
                            비밀번호 확인
                        </div>
                        <div className="col-9">
                            <input type="password" className="form-control" name="memberPwRe" value={member.memberPwRe} onChange={ChangeMember}/>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5">
                        <div className="col text-end">
                            <button type="submit" className="btn btn-primary w-25">가입하기</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exam07;