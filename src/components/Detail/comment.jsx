import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  __getComments,
  __postComments,
  __updatecomment,
  __DeleteComments,
} from "../../redux/modules/contentsSlice";
import "./comment.css";

function CommentInput() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const { isLoading, error, comments } = useSelector((state) => state.content);

  // console.log(comments);

  const commentlist = comments.filter(
    (comment) => comment.postId === Number(id)
  );

  const [postcomment, setcomment] = useState({
    postId: null,
    id: null,
    comment: "",
  });

  const [editcomment, setEditcomment] = useState("");

  // console.log("무엇인지1", editcomment);

  const upDateCommentHandler = (commentId) => {
    // console.log("무엇인지?", editcomment);
    let newcomment = {
      postId: Number(id),
      id: commentId,
      comment: editcomment,
    };

    dispatch(__updatecomment([commentId, newcomment]));
    setUpdate(true);
    navigate(`/main`);
  };

  // console.log("코멘트 나오나?", commentlist);

  // const changeCommentHandler = () => {
  //   const newUpdate = {
  //     id: commentlists.id,
  //     update: false,
  //   };
  //   dispatch(__changeComment(newUpdate));
  //   window.location.href = "/main";
  // };

  const commentHandler = () => {
    dispatch(__postComments([postcomment, Number(id)]));
    // console.log("comments", __postComments);
    navigate(`/main`);
  };

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
          type="text"
          onChange={(event) => {
            setcomment({ ...postcomment, comment: event.target.value });
          }}
        />
        <button onClick={commentHandler}>입력</button>
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
                          setEditcomment(comment.comment);
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
                    <input
                      type="text"
                      value={editcomment}
                      onChange={(event) => {
                        setEditcomment(event.target.value);
                      }}
                    />
                    <button
                      onClick={() => {
                        upDateCommentHandler(comment.id);
                      }}
                    >
                      수정완료
                    </button>
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
