import React, { useState, useEffect } from "react";
import axios from "axios";
import layout from "../css/layout.module.css";
import classes from "./Products.module.css";

export default function Products({ addToCart, cart }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://shoes-web.onrender.com/product").then((result) => {
      setData(result.data);
    });
  }, []);
  return (
    <div className={layout["container"]}>
      <img
        className={layout["img-nike"]}
        src="./assets/nike.png"
        alt="img-nike"
      />
      <div className={layout["title"]}>
        <span>Our Products</span>
      </div>
      <div className={classes["products_container"]}>
        {data.map((product) => {
          return (
            <div key={product.id} className={classes["product-element"]}>
              <div
                className={classes["product-img"]}
                style={{ backgroundColor: product.color }}
              >
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className={classes["cart"]}>
                <span>${product.price}</span>
                {!cart.some((p) => p.id === product.id) && (
                  <button onClick={() => addToCart(product)}>
                    ADD TO CART
                  </button>
                )}
                {cart.some((p) => p.id === product.id) && (
                  <div className={classes["product-check"]}>
                    <img src="./assets/check.png" alt="check" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
