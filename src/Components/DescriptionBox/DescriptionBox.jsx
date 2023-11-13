import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="db-navigator">
        <div className="db-navbox">Description</div>
        <div className="db-navbox fade">Reviews (122)</div>
      </div>
      <div className="db-description">
        <p>
          An ecommerce website is an online platform blabla and the global reach
          they offer.
        </p>
        <p>just another blabla from the other side but smaller</p>
      </div>
    </div>
  );
};
