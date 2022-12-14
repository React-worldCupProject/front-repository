import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/intro/Intro";
import Main from "../pages/main/Main";
import Detail from "../pages/Detail/Detail";
import Layout from "./Layout";

const Router = () => {
  const [pathname, setpathname] = useState(window.location.pathname);

  return (
    <BrowserRouter>
      <Layout pathname={pathname}>
        <Routes>
          <Route path="/" element={<Intro setpathname={setpathname} />} />
          <Route path="/main" element={<Main setpathname={setpathname} />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
