import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { __getComments } from "../../redux/modules/contentsSlice";
import "./comment.css";

function CommentInput() {
  const dispatch = useDispatch();

  const { isLoading, error, comments } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className="commentwrap">
      <form className="commentInput">
        <input
        // type="text"
        // value={comments}
        // onChange={(e) => {
        // setComments(e.target.value);
        // console.log(e.target.value);
        // console.log("현재 comment:", comments);
        // }}
        />
        <button>입력</button>
      </form>
      <article>
        <ul className="commentContents">
          {comments.map((comment) => (
            <li className="commentlist">
              <p>{comment.content}</p>

              {/* <p>{post[0]?.comment[0]?.commenText}</p> */}
              <div className="commentbtndiv">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default CommentInput;
