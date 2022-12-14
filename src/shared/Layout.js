import React from "react";
import { useNavigate } from "react-router-dom";

function Layout(props) {
  const navigate = useNavigate();

  return (
    <>
      <Header navigate={navigate} />
      {props.children}
      <Footer />
    </>
  );
}

const HeaderStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: " wrap",
  width: "100%",
  border: "none",
  backgroundColor: "#E98181",
  boxShadow: "2% 2% 2% 2%",
  padding: "0% 1% 0% 1%",
};

const HeaderLeftStyles = {
  width: "50%",
  display: "block",
  float: "left",
};

const HeaderRightStyles = {
  width: "50%",
  display: "block",
  float: "rigth",
};

const HeaderUlStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "5% 5% 5% 5%",
  fontSize: "21px",
  fontWeight: "500",
  listStyle: "none",
};

const HeaderliStyles = {
  fontSize: "1.2rem",
  fontWeight: "500",
  cursor: "pointer",
  lineHeight: "20px",
};

const FooterStyles = {
  width: "100%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "1% 1% 1% 1%",
  margin: "0% auto",
  backgroundColor: "#E98181",
  boxShadow: "2% 2% 2% 2%",
  fontSize: "21px",
  fontWeight: "500",
};

const divStyle = {
  margin: "0 auto",
};

function Header({ navigate }) {
  if (window.location.pathname === "/") return null;

  return (
    <section style={{ ...HeaderStyles }}>
      <div style={{ ...HeaderLeftStyles }}>
        <h2>๐ธ๋ํ๋ฏผ๊ตญ ์ถ๊ตฌ๋ฅผ ์์ํฉ๋๋ค๐ธ</h2>
      </div>
      <div style={{ ...HeaderRightStyles }}>
        <ul style={{ ...HeaderUlStyles }}>
          <li
            style={{ ...HeaderliStyles }}
            onClick={() => {
              navigate(`/main`);
            }}
          >
            ๋ฉ์ธํ์ด์ง
          </li>
          <li style={{ ...HeaderliStyles }}>์กฐ์ ์๊ฐ ํ์ด์ง</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  if (window.location.pathname === "/") return null;
  return (
    <section style={{ ...FooterStyles }}>
      <div style={{ ...divStyle }}>์ด๊ฒ์ด ๋ง๋ก๋ง ๋ฃ๋ ํธํฐ๋ ๋ง์ธ๊ฐ!?</div>
    </section>
  );
}

export default Layout;
