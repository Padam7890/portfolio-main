import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { SyncLoader } from "react-spinners";
import GetDataFromApi from "../CustomHook/getData";
import { useData } from "../Context/DataProvider";
const AppLayout = () => {
  const { data, isLoading, error } = useData();

  if (isLoading) {
    return (
      <SyncLoader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          height: "100vh",
        }}
        color="yellow"
      />
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  console.log(data)
  return (
    <main>
      <Sidebar getDatas={data} />
      <div className="main-content">
        <Navbar />
        <Outlet context={{ data, isLoading, error }} />
      </div>
    </main>
  );
};

export default AppLayout;
