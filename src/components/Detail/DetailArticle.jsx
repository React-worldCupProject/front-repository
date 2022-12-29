import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  __getpost,
  __DeletePost,
  __upDatePost,
} from "../../redux/modules/contentsSlice";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import "./DetailArticle.css";

const DetailAriticle = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { isLoading, error, post } = useSelector((state) => state.content);
  const [Uppostdate, setUppostdate] = useState(true);

  const [inputs, setInputs] = useState({
    ids: state.id,
    titles: state.title,
    names: state.name,
    contexts: state.context,
  });

  const { ids, titles, names, contexts } = inputs;

  console.log("잘 넘어오나?", inputs);
  const onChnage = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const changeHandler = () => {
    setUppostdate(false);
  };

  const DeletePostHandler = () => {
    dispatch(__DeletePost(state.id));
    window.location.href = "/main";
  };

  const updateHandler = () => {
    if (titles.trim() === "" || contexts.trim() === "") {
      alert("내용과 제목을 입력해주세요");
      return;
    }
    const upDateContent = {
      id: ids,
      title: titles,
      name: names,
      context: contexts,
    };
    const payload = [upDateContent.id, upDateContent];
    dispatch(__upDatePost(payload));
    setUppostdate(true);
    navigate(`/main`);
    // console.log("잘 넘어갔나?", upDateContent);
  };

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
            <p>{ids} </p>
            <span>제목</span>
            <p>{titles}</p>

            <span>작성자</span>
            <p>{names}</p>
          </div>
          <article className="DtContent">
            <div className="DtContent2">
              <p>{contexts}</p>
            </div>
          </article>
          <div className="DtContentBtn">
            <button
              onClick={() => {
                DeletePostHandler(ids);
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
        <section className="DtSection2">
          <div className="DtTitle">
            <span>글번호</span>
            <p>{ids} </p>
            <span>제목</span>
            <input
              type="text"
              name="titles"
              value={titles}
              onChange={onChnage}
            ></input>

            <span>작성자</span>
            <p>{names}</p>
          </div>

          <div className="DtContent">
            <textarea
              className="DtContent2"
              name="contexts"
              value={contexts}
              onChange={onChnage}
            />
          </div>

          <div className="DtContentBtn">
            <button
              onClick={() => {
                DeletePostHandler(ids);
              }}
            >
              삭제
            </button>
            <button onClick={updateHandler}>완료하기</button>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailAriticle;
