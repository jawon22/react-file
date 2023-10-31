import { useEffect, useState } from "react";


const Exam07 = ()=>{
    const [member, setMember] = useState({ //입력 데이터
        memberId :"",
        memberPw :"",
        memberPwRe :""
    });
    const [result, setResult] = useState({ //검사 결과
        memberId:null,
        memberPw:null,
        memberPwRe:null
    });
    //입력데이턱 변하먄 검사결과가 자동으로 계산되도록 처리
    const checkMember = ()=>{
        // console.log("멤버가 변함")
        // ID검사
        const idRegex = /^[a-z][a-z0-9]{7,19}$/;
        const idMatch = member.memberId.length ===0 ? null : idRegex.test(member.memberId);

        // PW검사
        const pwRegex = /^[A-Za-z0-9!@#$]{8,16}$/;
        const pwMatch = member.memberPw.length ===0 ? null : pwRegex.test(member.memberPw);

        // PWRE검사
        // const pwReMatch = 비밀번호 1글자이상 && 비밀번호 == 확인값;
        const pwReMatch = member.memberPwRe.length ===0 ? null : 
                member.memberPw.length>0 && member.memberPw === member.memberPwRe;
        
        setResult({
            memberId :idMatch,
            memberPw : pwMatch,
            memberPwRe : pwReMatch
        });
    }

    // useEffect(()=>checkMember,[member]);
    

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
                            <input type="text" className={`
                                form-control 
                                ${result.memberId ===true ? 'is-valid' :''}
                                ${result.memberId ===false ? 'is-invalid' :''}
                                `} name="memberId" 
                                value={member.memberId} onChange={ChangeMember} onBlur={checkMember}/>
                            <div className="valid-feedback">사용가능한 아이디 입니다</div>
                            <div className="invalid-feedback">사용할 수 없는 아이디입니다</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 text-start">
                            비밀번호
                        </div>
                        <div className="col-9">
                            <input type="password" className={`
                                form-control 
                                ${result.memberPw ===true ? 'is-valid' :''}
                                ${result.memberPw ===false ? 'is-invalid' :''}
                            `} name="memberPw" value={member.memberPw} onChange={ChangeMember} onBlur={checkMember}/>
                            <div className="valid-feedback">올바른 형식의 비밀번호입니다</div>
                            <div className="invalid-feedback">비밀번호 형식이 올바르지 않습니다</div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-3 text-start">
                            비밀번호 확인
                        </div>
                        <div className="col-9">
                            <input type="password" className={`
                                form-control ${result.memberPwRe ===true ? 'is-valid' :''}
                                ${result.memberPwRe ===false ? 'is-invalid' :''}
                            `} 
                            name="memberPwRe" value={member.memberPwRe} onChange={ChangeMember} onBlur={checkMember}/>
                            <div className="valid-feedback">비밀번호가 일치합니다</div>
                            <div className="invalid-feedback">비밀번호 형식이 올바르지 않습니다</div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-5">
                        <div className="col text-end">
                            <button type="submit" className="btn btn-primary w-25"
                                disabled={!(result.memberId ===true && result.memberPw ===true && result.memberPwRe ===true)}>가입하기</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exam07;