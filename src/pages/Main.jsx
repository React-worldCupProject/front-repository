import React from "react";
import "./Main.css";

import mainimage from "../mainimage.png";

function Main() {
  console.log(window.location.pathname);
  return (
    <>
      <section>
        <img src={mainimage} alt="인트로 이미지" className="mainimage"></img>
      </section>
    </>
  );
}

export default Main;
