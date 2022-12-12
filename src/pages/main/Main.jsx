import React, { useEffect } from "react";
import "./Main.css";
import mainimage from "../../mainimage.png";
import MainSection from "../../components/main/mainSection";

function Main({ setpathname }) {
  useEffect(() => {
    setpathname(window.location.pathname);
  }, [setpathname]);

  return (
    <>
      <section>
        <img src={mainimage} alt="인트로 이미지" className="mainimage"></img>
        <MainSection />
      </section>
    </>
  );
}

export default Main;
