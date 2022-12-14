import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __getComments,
  __DeleteComments,
} from "../../redux/modules/contentsSlice";
import "./comment.css";

function CommentInput() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, error, comments } = useSelector((state) => state.content);

  const commentlist = comments.filter((comment) => {
    return comment.postId === Number(id);
  });
  console.log("코멘트 나오나?", commentlist);

  const DeleteHandler = (id) => {
    dispatch(__DeleteComments(id));
    window.location.href = "/main";
  };

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
          {commentlist?.map((comment) => (
            <li className="commentlist">
              <p>{comment.comment}</p>

              {/* <p>{post[0]?.comment[0]?.commenText}</p> */}
              <div className="commentbtndiv">
                <button>수정</button>
                <button
                  onClick={() => {
                    DeleteHandler(comment.id);
                  }}
                >
                  삭제
                </button>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default CommentInput;
