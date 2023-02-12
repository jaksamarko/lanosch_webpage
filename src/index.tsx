import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tw-elements";
import "./styles/index.css";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const EventsLayout = lazy(() => import("./layouts/EventsLayout"));
const GameLayout = lazy(() => import("./layouts/GameLayout"));
const NoPageLayout = lazy(() => import("./layouts/NoPageLayout"));
const EventLayout = lazy(() => import("./layouts/EventLayout"));

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/game" element={<GameLayout />} />
        <Route path="/events" element={<EventsLayout />} />
        <Route path="/:page" element={<EventLayout />} />
        {/* <Route path="*" element={<NoPageLayout />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
