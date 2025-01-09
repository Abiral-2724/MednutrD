import React from "react";
import Logo from "../assets/Logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "rgb(109,167,231)",
        background:
          "linear-gradient(90deg, rgba(109,167,231,1) 0%, rgba(79,28,186,1) 100%, rgba(1,24,17,1) 100%)",
      }}
    >
      <div>
        <img
          src={Logo}
          style={{
            width: "90px",
            height: "90px",
            mixBlendMode: "multiply",
            marginLeft: "20px",
          }}
        />
      </div>
      <div>
        <button
          style={{
            width: "120px",
            height: "45px",
            marginTop: "18px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            marginRight: "40px",
          }}
          onClick={() => navigate("/register")}
        >
          Signup
        </button>
        <button
          style={{
            width: "120px",
            height: "45px",
            marginTop: "18px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
            marginRight: "40px",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Navbar;
