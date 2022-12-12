import React from "react";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./DetailArticle.css";

const DetailAriticle = () => {
  //   const [textNumber, setTextNumber] = useState("");
  //   const [title, setTitle] = useState("");
  //   const [writer, setWriter] = useState("");

  return (
    <section className="DtSection">
      <div className="DtTitle">
        <span>글번호</span>
        <p>1 </p>
        <span>타이틀</span>
        <p>나도 할수있다,나는 할수있다,나는 반드시 해낸다</p>

        <span>작성자</span>
        <p>이개똥 </p>
      </div>
      <article className="DtContent">
        <div className="DtContent2">
          <p>내용이 들어갑니다.</p>
        </div>
      </article>
      <div className="DtContentBtn">
        <button>삭제</button>
        <button>수정하기</button>
      </div>
    </section>
  );
};

export default DetailAriticle;
