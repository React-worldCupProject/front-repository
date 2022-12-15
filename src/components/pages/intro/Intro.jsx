import React, { useEffect } from "react";
import "./Intro.css";
import IntroImage from "../../IntroImage.png";
import { useNavigate } from "react-router-dom";

function Intro({ setpathname }) {
  const navigate = useNavigate();

  useEffect(() => {
    setpathname(window.location.pathname);
    const timeout = setTimeout(() => {
      navigate("/main");
    }, 3000);
    return () => {
      // clear 해줌
      clearTimeout(timeout);
    };
  }, [navigate, setpathname]);

  return (
    <section className="intro">
      <div className="introBox">
        <img src={IntroImage} alt="인트로 이미지"></img>
        <h1>대한민국 국가대표의 선전에 감사드립니다</h1>
        <h2>월드컵 감사 이벤트 홈페이지</h2>
        <h3>3초 후에 메인페이지로 이동합니다</h3>
      </div>
    </section>
  );
}

export default Intro;
