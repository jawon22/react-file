import { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "./Jumbotron";
import "./Book.css"
import {FiEdit} from "react-icons/fi";
import {MdDelete} from "react-icons/md";

const Book = (props) =>{
    const [bookList, setBookList] = useState([]);
    const loadBook = ()=>{
        axios({
            url:"http://localhost:8080/book/",
            method:"get"
        })
        .then(response=>{
            setBookList(response.data);
        })
        .catch(err=>{});
    };

    useEffect(()=>{
        loadBook();
    },[])

    const deleteByBook =(book)=>{
        const choice = window.confirm("정말 삭제하나요?");
        if(choice ===false) return;

        axios({
            url:`http://localhost:8080/book/${book.bookId}`,
            method:"delete"
        })
        .then(response=>{
            loadBook()
        })
        .catch(err=>{});
    }

    return(
        <>
            <Jumbotron title="도서관리" content="도서 CRUD 연습"/>

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
                                        <FiEdit className="text-warning"/>
                                        <MdDelete className="text-danger" onClick={e=>deleteByBook(book)}/>
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

export default Book;