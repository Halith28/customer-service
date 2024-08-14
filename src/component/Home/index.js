import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTicket, updateIssue } from "../TicketCreation/ticketSlice";
import "./home.css";
import Modal from "../common/Modal";
import Header from "../common/Header";

const Home = () => {
  const [modal, setModal] = useState(false);
  const state = useSelector(selectTicket);
  const dispatch = useDispatch();

  const handleConnect = (ticket, id) => {
    if (ticket?.status !== "closed") {
      setModal(true);
    } else if (ticket?.status === "closed") {
      dispatch(updateIssue(id));
    }
  };

  console.log(state);
  return (
    <div>
      <Header />
      <div className="homeComp">
        <h3>List of Reports</h3>
        <table border="true">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Incident Number</th>
              <th>Description</th>
              <th>Status</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.id}</td>
                  <td>{item?.description}</td>
                  <td>{item?.status}</td>
                  <td>
                    <button
                      className={
                        item?.status != "closed" ? "green-btn" : "blue-btn"
                      }
                      onClick={() => handleConnect(item, index)}
                    >
                      {item?.status == "closed" ? "Re-Open" : "Connect"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {modal && <Modal setModal={setModal} />}
      </div>
    </div>
  );
};

export default Home;
