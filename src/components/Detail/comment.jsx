import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getpost } from "../../redux/modules/AppSlisce";
import { __postPost } from "../../redux/modules/commentSlice";

import "./comment.css";

function CommentInput() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [postId, setPostId] = useState();

  const { isLoading, error, post } = useSelector((state) => state.post);

  const postlist = post.find((post) => {
    return post.id === Number(id);
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setPostId(postId + 1);
    const newComment = {
      postId: postId,
      commenText: comment,
    };
    dispatch(__postPost(...postlist?.comment, newComment));
  };

  useEffect(() => {
    dispatch(__getpost());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <section className="commentwrap">
      <form onSubmit={onSubmitHandler} className="commentInput">
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.log(e.target.value);
            console.log("현재 comment:", comment);
          }}
        />
        <button>입력</button>
      </form>
      <article>
        <ul className="commentContents">
          {postlist?.comment.map((comment) => (
            <li className="commentlist" key={postlist.id}>
              <p>{comment.commenText}</p>
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
