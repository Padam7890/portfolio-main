import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
