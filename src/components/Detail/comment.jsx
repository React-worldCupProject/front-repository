import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  __getComments,
  __DeleteComments,
  __changeComment,
} from "../../redux/modules/contentsSlice";
import "./comment.css";

function CommentInput() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);

  const { isLoading, error, comments } = useSelector((state) => state.content);

  console.log(comments);

  const commentlist = comments.filter(
    (comment) => comment.postId === Number(id)
  );
  console.log("코멘트 나오나?", commentlist);

  // const changeCommentHandler = () => {
  //   const newUpdate = {
  //     id: commentlists.id,
  //     update: false,
  //   };
  //   dispatch(__changeComment(newUpdate));
  //   window.location.href = "/main";
  // };

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
          {commentlist?.map((comment) => {
            return (
              <>
                {update === false ? (
                  <li className="commentlist">
                    <p>{comment.comment}</p>
                    {/* <p>{post[0]?.comment[0]?.commenText}</p> */}
                    <div className="commentbtndiv">
                      <button
                        onClick={() => {
                          setUpdate(true);
                        }}
                      >
                        수정
                      </button>
                      <button
                        onClick={() => {
                          DeleteHandler(comment.id);
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </li>
                ) : (
                  <li>
                    <input type="text" defaultValue={comment.comment} />
                    <button>완료</button>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default CommentInput;
