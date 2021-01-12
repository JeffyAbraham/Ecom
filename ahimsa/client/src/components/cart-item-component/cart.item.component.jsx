import React from "react";
import "./cart.item.component.scss";

//get item and retrive name ,imageurl,price
const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity}X ${price}
      </span>
    </div>
  </div>
);
export default CartItem;