import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./comment.css";
import { __postPost } from "../../redux/modules/commentSlice";

function CommentInput() {
  const { isLoading, error, post } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  // useEffect(() => {     dispatch(__getPosts());   }, [dispatch]);

  return (
    <section className="commentwrap">
      <form className="commentInput">
        <input
          type="text"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.log(e.target.value);
            console.log("현재 comment:", comment);
          }}
        />
        <button
          onClick={() => {
            const newComment = {
              postId: 0,
              id: 1,
              commenText: "축구 합니다!",
            };
            dispatch(__postPost(comment));
          }}
        >
          입력
        </button>
      </form>
      <article>
        <ul className="commentContents">
          <li className="commentlist">
            {/* <p>{post[0]?.comment[0]?.commenText}</p> */}
            <div className="commentbtndiv">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
          <li className="commentlist">
            {/* <p>{post[1]?.comment[0]?.commenText}</p> */}
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
