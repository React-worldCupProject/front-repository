import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { __getpost } from "../../redux/modules/AppSlisce";
import "./Main.css";
import mainimage from "../../mainimage.png";
import MainSection from "../../components/main/mainSection";

function Main({ setpathname }) {
  // const dispatch = useDispatch();

  useEffect(() => {
    setpathname(window.location.pathname);
  }, [setpathname]);

  // useEffect(() => {
  //   dispatch(__getpost({ id: 2 }));
  // }, [dispatch]);

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
