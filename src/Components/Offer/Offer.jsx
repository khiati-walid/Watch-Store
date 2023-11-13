import React from "react";
import "./Offer.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
