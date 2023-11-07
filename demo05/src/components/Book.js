import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import "./Book.css"
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";
import {GrAddCircle} from "react-icons/gr"
import { Modal } from "bootstrap";

const Book = (props) =>{
    const [bookList, setBookList] = useState([]);
    const loadBook = ()=>{
        axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/`,
            method:"get"
        })
        .then(response=>{
            setBookList(response.data);
        })
        .catch(err=>{});
    };

    //새로운 방식
    // const loadBook1 = async()=>{
    //     const response = await axios({
    //         url:"${process.env.REACT_APP_REST_API_URL}/book/",
    //         method:"get"
    //     });
    //     setBookList(response.data)
    // };

    useEffect(()=>{
        loadBook();
    },[])

    const deleteByBook =(book)=>{
        const choice = window.confirm("정말 삭제하나요?");
        if(choice ===false) return;

        axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`, //백틱은 jsp에서 못쓴다~~
            method:"delete"
        })
        .then(response=>{
            loadBook()
        })
        .catch(err=>{});
    }

    const bsModal = useRef();
    const openModal = ()=>{
        const modal = new Modal(bsModal.current);
        modal.show();
    };

    const closeModal = ()=>{
        const modal = Modal.getInstance(bsModal.current);
        modal.hide();
        clearBook();
    };
    
    //등록과 관련된 state
    const [book, setBook] = useState({
        bookTitle:"",
        bookAuthor:"",
        bookPublicationDate:"",
        bookPrice:"",
        bookPublisher:"",
        bookPageCount:"",
        bookGenre:""
    });

    const changebook = (e)=>{
        setBook({
            ...book,
            [e.target.name] : e.target.value
        });
    };

    //입력창 클리어
    const clearBook = ()=>{
        setBook({
            bookTitle:"",
            bookAuthor:"",
            bookPublicationDate:"",
            bookPrice:"",
            bookPublisher:"",
            bookPageCount:"",
            bookGenre:""
        });
    };

    //도서 등록
    const saveBook = ()=>{
        axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/`,
            method:"post",
            data:book
        })
        .then(response=>{
            loadBook();
            closeModal();
        })
        .catch(err=>{})
    };

    //ES6부터
    // async 함수와 await 키워드를 사용한 간소화 작업이 가능
    // -비동기 작업을 동기화된 코드로 작성할 수 있다
    // const saveBook1 = async ()=>{
    //     const response = await axios({
    //         url:"${process.env.REACT_APP_REST_API_URL}/book/",
    //         method:"post",
    //         data:book
    //     });
    //     loadBook();
    //     closeModal();
    // };

    // 도서 수정
    const editBook = (target)=>{
        setBook({...target});
        openModal();
    };

    //도서 수정 처리
    // const updateBook = ()=>{
    //     //검사 후 차단코드 있으면 좋음

    //     const {bookId, bookTitle, bookAuthor, bookPublicationDate, 
    //         bookPrice, bookPublisher, bookPageCount, bookGenre} = book;
    //     axios({
    //         url:`${process.env.REACT_APP_REST_API_URL}/book/${bookId}`,
    //         method:"put",
    //         data:{
    //             bookTitle:bookTitle,
    //             bookAuthor:bookAuthor,
    //             bookPublicationDate:bookPublicationDate,
    //             bookPrice:bookPrice,
    //             bookPublisher:bookPublisher,
    //             bookPageCount:bookPageCount,
    //             bookGenre:bookGenre
    //         }
    //     })
    //     .then(response=>{
    //         loadBook();
    //         closeModal();
    //     })
    //     .catch(err=>{})
    // };

    // 강사님 풀이 코드
    // const updateBook = ()=>{
    //     //검사 후 차단코드 있으면 좋음
    //     const copyBook = {...book};
    //     delete copyBook.bookId;
    //     axios({
    //         url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
    //         method:"put",
    //         data:copyBook
    //     })
    //     .then(response=>{
    //         loadBook();
    //         closeModal();
    //     })
    // };

    const updateBook1 = async ()=>{
        const copyBook = {...book};
        delete copyBook.bookId;
        const response = await axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/${book.bookId}`,
            method:"put",
            data:copyBook
        });
        loadBook();
        closeModal();
    };


    return(
        <>
            <Jumbotron title="도서관리" content="도서 CRUD 연습"/>

            <div className="row mt-4 text-end">
                <div className="col">
                    <button className="btn btn-success" onClick={openModal}>
                        추가<GrAddCircle className="text-center"/>
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">

                    <table className="table table-hover text-center">
                        <thead className="table-info">
                            <tr>
                                <th className="pc-only">번호</th>
                                <th>제목</th>
                                <th>저자</th>
                                <th className="pc-only">출간일</th>
                                <th>가격</th>
                                <th>출판사</th>
                                <th className="pc-only">페이지수</th>
                                <th className="pc-only">장르</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map(book=>(
                                <tr key={book.bookId}>
                                    <td className="pc-only">{book.bookId}</td>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td className="pc-only">{book.bookPublicationDate}</td>
                                    <td>{book.bookPrice}</td>
                                    <td>{book.bookPublisher}</td>
                                    <td className="pc-only">{book.bookPageCount}</td>
                                    <td className="pc-only">{book.bookGenre}</td>
                                    <td>
                                        <FiEdit className="text-warning" onClick={e=>editBook(book)}/>
                                        <MdDelete className="text-danger" onClick={e=>deleteByBook(book)}/>
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
                            <h5 className="modal-title fs-5">
                                {book.bookId ===undefined ? 
                                    "신규 도서 등록" : `${book.bookId}번 도서 수정`}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {/* 수정화면 */}
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">제목</label>
                                    <input type="text" name="bookTitle" className="form-control" 
                                        value={book.bookTitle} onChange={changebook}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">저자</label>
                                    <input type="text" name="bookAuthor" className="form-control"
                                        value={book.bookAuthor} onChange={changebook}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">출간일</label>
                                    <input type="date" name="bookPublicationDate" className="form-control"
                                        value={book.bookPublicationDate} onChange={changebook}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">가격</label>
                                    <input type="text" name="bookPrice" className="form-control"
                                        value={book.bookPrice} onChange={changebook}/>
                                </div>
                            </div>
                        
                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">출판사</label>
                                    <input type="text" name="bookPublisher" className="form-control"
                                        value={book.bookPublisher} onChange={changebook}/>
                                </div>
                            </div>
                        
                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">페이지수</label>
                                    <input type="text" name="bookPageCount" className="form-control"
                                        value={book.bookPageCount} onChange={changebook}/>
                                </div>
                            </div>

                            <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">장르</label>
                                    <input type="text" name="bookGenre" className="form-control"
                                        value={book.bookGenre} onChange={changebook}/>
                                </div>
                            </div>
                        
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={closeModal}>닫기</button>
                            {book.bookId ===undefined ? 
                                    <button className="btn btn-success" onClick={saveBook}>저장</button>
                                    : 
                                    <button className="btn btn-success" onClick={updateBook1}>수정</button>
                                }
                            
                        </div>
                    </div>
                </div>
            </div>  

        </>
    );
};

export default Book;