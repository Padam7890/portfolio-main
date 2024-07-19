import React from "react";
import notfoundimg from "../../public/pagenotfound.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: "60%",
          width: "60%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
          backgroundImage: `url(${notfoundimg})`,
        }}
      ></div>
      <Link to="/">
        <a
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Home Page
        </a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
