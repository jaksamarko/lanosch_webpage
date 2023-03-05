import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tw-elements";
import Footer from "./components/Footer";
import BackToTop from "./components/Misc/BackToTop";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import PostLayout from "./layouts/PostLayout";
import { Context } from "./providers/ContextProvider";
import "./styles/index.css";

const PostsLayout = lazy(() => import("./layouts/PostsLayout"));
const NoPageLayout = lazy(() => import("./layouts/NoPageLayout"));

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Context.Provider value={{ activeLink: "/" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/posts" element={<PostsLayout />} />
          <Route path="/posts/:id" element={<PostLayout />} />
          <Route path="*" element={<NoPageLayout />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <BackToTop />
    </Context.Provider>
  </React.StrictMode>
);
