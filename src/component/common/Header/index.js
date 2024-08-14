import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        src="https://www.bartecautoid.com/images/service-centre-logo.png"
        width={200}
        height={50}
      />
      <div className="titleComp">
        <div className="headerLink" onClick={() => navigate("/")}>
          Home
        </div>
        <div
          className="headerLink"
          onClick={() => navigate("/ticket-creation")}
        >
          Report an Issue
        </div>
        <div className="headerLink">Order & Request</div>
        <div className="headerLink">Login</div>
      </div>
    </div>
  );
};

export default Header;
