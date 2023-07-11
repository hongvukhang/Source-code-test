import React from "react";
import classes from "./Cart.module.css";
import layout from "../css/layout.module.css";

export default function Cart({
  cart,
  increment,
  decrement,
  deleteHandler,
  total,
}) {
  return (
    <div className={layout["container"]}>
      <img
        className={layout["img-nike"]}
        src="./assets/nike.png"
        alt="img-nike"
      />
      <div className={layout["title"]}>
        <span>Your cart</span>
        <span>${total}</span>
      </div>
      <div className={classes["cart-container"]}>
        {cart.map((item) => {
          return (
            <div key={item.id} className={classes["cart-item"]}>
              <div
                className={classes["item-img"]}
                style={{ backgroundColor: item.color }}
              >
                <img src={item.image} alt="img" />
              </div>
              <div style={{ width: "180px" }}>
                <p className={classes["item-name"]}>{item.name}</p>
                <p className={classes["item-price"]}>${item.price}</p>
                <div className={classes["item-quantity"]}>
                  <div className={classes["quantity-change"]}>
                    <div
                      className={classes["btn-decre"]}
                      onClick={() => decrement(item.id, item.quantity)}
                    >
                      -
                    </div>
                    <span className={classes["quantity-value"]}>
                      {item.quantity}
                    </span>
                    <div
                      className={classes["btn-incre"]}
                      onClick={() => increment(item.id)}
                    >
                      +
                    </div>
                  </div>
                  <div
                    onClick={() => deleteHandler(item.id)}
                    className={classes["btn-delete"]}
                  >
                    <img src="./assets/trash.png" alt="trash" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {cart.length === 0 && (
          <p className={classes.warning}>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}
