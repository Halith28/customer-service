import React from "react";
import "./modal.css";

const Modal = ({ setModal }) => {
  const assistants = ["Karthik", "Mani", "Priya", "Mohammad"];
  const name = assistants[Math.floor(Math.random() * assistants.length)];
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onClick={() => setModal(false)}>
          &times;
        </span>
        <p>{name} will connect with you soon....</p>
      </div>
    </div>
  );
};

export default Modal;
