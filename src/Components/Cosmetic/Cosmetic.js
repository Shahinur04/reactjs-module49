import React from "react";
import { localDb } from "../../Utilites/Localstorage";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, age, id } = props.cosmetic;
  // console.log(props)
  const addToCart = (id) => {
    // console.log('id',id);
    // localStorage.setItem(id,1)
    localDb(id)
  };
  const addToCartWithParam = () => addToCart(id);
  return (
    <div id="container">
      <h2>buy:{name}</h2>
      <p>Age;{age}</p>
      <h3>id:{id}</h3>
      <button onClick={addToCartWithParam} className="btn">
        Add-to cart
      </button>

      <button onClick={() => addToCart(id)} className="btn">
        Purchase
      </button>
    </div>
  );
};

export default Cosmetic;
