import { useState } from "react";

const Exam10 = ()=>{
    //객체 배열 상태 변수
    const [products,setProducts] = useState([
        {itemNo:1, itemName:"포켓몬스터빵", itemPrice:500, itemType:"식품", edit:"false"},
        {itemNo:2, itemName:"허니버터칩", itemPrice:1300, itemType:"식품", edit:"false"},
        {itemNo:3, itemName:"참이슬후레시", itemPrice:2200, itemType:"주류", edit:"false"},
        {itemNo:4, itemName:"카스", itemPrice:2500, itemType:"주류", edit:"false"},
        {itemNo:5, itemName:"테라", itemPrice:1300, itemType:"주류", edit:"false"},
        {itemNo:6, itemName:"켈리", itemPrice:1400, itemType:"주류", edit:"false"},
        {itemNo:7, itemName:"처음처럼", itemPrice:2000, itemType:"주류", edit:"false"},
        {itemNo:8, itemName:"오징어땅콩", itemPrice:3500, itemType:"식품", edit:"false"},
        {itemNo:9, itemName:"신라면", itemPrice:1500, itemType:"식품", edit:"false"},
        {itemNo:10, itemName:"하리보젤리", itemPrice:5500, itemType:"식품", edit:"false"}
    ]);

    return(
        
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    
                    <div className="row card text-white bg-primary mb-3">
                        <div className="col text-center card-body">
                            <h1>상품 목록 현황</h1>
                        </div>
                    </div>

                
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th className="col-2">번호</th>
                                <th className="col-4">종류</th>
                                <th className="col-4">상품이름</th>
                                <th className="col-2">가격</th>
                            </tr>
                        </thead>
                        {products.map((product,index)=>(
                            <tbody key={product.itemNo}>
                                <tr>
                                <td>{product.itemNo}</td>
                                <td>{product.itemName}</td>
                                <td>{product.itemPrice}</td>
                                <td>{product.itemType}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>

                    <div className="row mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-primary">추가</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exam10;