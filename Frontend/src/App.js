import "./App.css";
import Cart from "./components/cart/Cart";
import Products from "./components/product/Products";

import { useState, useEffect } from "react";
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  //update total price
  const updateTotal = (cart) => {
    let inital = 0;
    cart.forEach((item) => {
      inital += item.price * item.quantity;
    });
    inital = Number.parseFloat(inital).toFixed(2);
    setTotal(inital);
  };
  // select data from local storage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      updateTotal(cart);
      setCart(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  //update local storage

  const updateLocalStorage = (data) => {
    updateTotal(data);
    localStorage.setItem("cart", JSON.stringify(data));
    setCart(data);
  };

  //add to cart
  const addToCart = (product) => {
    const data = [...cart];
    data.push({ ...product, quantity: 1 });

    updateLocalStorage(data);
  };

  //Increment quantity

  const increment = (id) => {
    const data = [...cart];
    const dataIncrement = data.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity += 1) };
      }
      return item;
    });

    updateLocalStorage(dataIncrement);
  };
  //Decrement quantity

  const decrement = (id, quantity) => {
    const data = [...cart];
    let dataDecrement;
    if (quantity > 1) {
      dataDecrement = data.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity -= 1) };
        }
        return item;
      });
    } else {
      dataDecrement = data.filter((item) => item.id !== id);
    }

    updateLocalStorage(dataDecrement);
  };
  //delete item

  const deleteHandler = (id) => {
    const data = [...cart];
    const deleteItem = data.filter((item) => item.id !== id);

    updateLocalStorage(deleteItem);
  };
  return (
    <div className="App">
      <Products addToCart={addToCart} cart={cart} />
      <Cart
        cart={cart}
        increment={increment}
        decrement={decrement}
        deleteHandler={deleteHandler}
        total={total}
      />
    </div>
  );
}

export default App;
