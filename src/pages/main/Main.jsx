import React, { useEffect } from "react";
import "./Main.css";
import DetailArticle from "../../components/DetailArticle";
import mainimage from "../../mainimage.png";

function Main({ setpathname }) {
  useEffect(() => {
    setpathname(window.location.pathname);
  }, [setpathname]);

  return (
    <>
      <section>
        <img src={mainimage} alt="인트로 이미지" className="mainimage"></img>
        <DetailArticle />
      </section>
    </>
  );
}

export default Main;
