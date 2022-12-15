import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { __getpost, __DeletePost } from "../../redux/modules/contentsSlice";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./DetailArticle.css";

const DetailAriticle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, error, post } = useSelector((state) => state.content);
  const [Uppostdate, setUppostdate] = useState(true);

  const changeHandler = () => {
    setUppostdate(false);
  };

  const DeletePostHandler = (id) => {
    dispatch(__DeletePost(id));
    window.location.href = "/main";
  };

  const postlist = post.find((post) => {
    return post.id === Number(id);
  });

  // console.log("아이디값입니다.", postlist);

  useEffect(() => {
    dispatch(__getpost());
    // console.log("제발 되라>", post);
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      {Uppostdate === true ? (
        <section className="DtSection">
          <div className="DtTitle">
            <span>글번호</span>
            <p>{postlist.id} </p>
            <span>제목</span>
            <p>{postlist.title}</p>

            <span>작성자</span>
            <p>{postlist.name}</p>
          </div>
          <article className="DtContent">
            <div className="DtContent2">
              <p>{postlist.context}</p>
            </div>
          </article>
          <div className="DtContentBtn">
            <button
              onClick={() => {
                DeletePostHandler(postlist.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                changeHandler(false);
              }}
            >
              수정하기
            </button>
          </div>
        </section>
      ) : (
        <from className="DtSection">
          <div className="DtTitle">
            <span>글번호</span>
            <p>{postlist.id} </p>
            <span>제목</span>
            <input type="text" defaultValue={postlist.title} />

            <span>작성자</span>
            <p>{postlist.name}</p>
          </div>
          <article className="DtContent">
            <div className="DtContent2">
              <textarea defaultValue={postlist.context} />
            </div>
          </article>
          <div className="DtContentBtn">
            <button
              onClick={() => {
                DeletePostHandler(postlist.id);
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                changeHandler(true);
              }}
            >
              완료하기
            </button>
          </div>
        </from>
      )}
    </>
  );
};

export default DetailAriticle;
