import React from "react";
import "./comment.css";

function CommentInput() {
  return (
    <section className="commentwrap">
      <form className="commentInput">
        <input />
        <button>입력</button>
      </form>
      <article>
        <ul className="commentContents">
          <li className="commentlist">
            <p>여기는 내용이 들어갈 자리입니다.</p>
            <div className="commentbtndiv">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
          <li className="commentlist">
            <p>여기는 내용이 들어갈 자리입니다.</p>
            <div className="commentbtndiv">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
          <li className="commentlist">
            <p>여기는 내용이 들어갈 자리입니다.</p>
            <div className="commentbtndiv">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default CommentInput;
