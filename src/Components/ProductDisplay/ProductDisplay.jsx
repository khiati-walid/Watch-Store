import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="prod-left">
        <div className="prod-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img className="prod-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="prod-right">
        <h1>{product.name}</h1>
        <div className="stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="description">
          Silver-tone stainless steel case with a two-tone (silver-tone and
          yellow gold PVD) stainless steel bracelet. Fixed yellow gold PVD
          stainless steel bezel. Silver dial with luminous gold-tone hands and
          crystal hour markers.
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="category">
          <span>Category :</span>Women, Watch, Automatic
        </p>
        <p className="category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};
