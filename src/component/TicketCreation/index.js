import React from "react";
import "./ticket.css";
import { useDispatch } from "react-redux";
import { submitIssue } from "./ticketSlice";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";

const TicketCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const resultObj = Object.fromEntries(formData.entries());
    resultObj.id = getRandomInt(100000, 200000);
    resultObj.status = "In-Progress";
    dispatch(submitIssue(resultObj));
    navigate("/");
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      <Header />
      <div className="homeContainer">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h3>Report an Issue</h3>
            <div className="inputComp">
              <label>Reporter Name</label>
              <input name="reporter" type="name" required />
            </div>
            <div className="inputComp">
              <label>Issue type</label>
              <input name="issueType" type="name" required />
            </div>
            <div className="inputComp">
              <label>Description</label>
              <textarea name="description" type="name" required />
            </div>
            <div>
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketCreation;
