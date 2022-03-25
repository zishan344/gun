import React from "react";
import "./MrModal.css";

const MrModal = ({ cart }) => {
  console.log(cart);
  const { img, name, price } = cart;
  return (
    <div className="modal">
      <div className="modal-img">
        <img src={img} alt="" />
      </div>
      <div className="modal-info">
        <h3>{name}</h3>
        <p>price: {price}</p>
      </div>
    </div>
  );
};

export default MrModal;
