// const localDb = (id) => {
  const localDb = (id) => {
    let shoppingCart;
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    } else {
      shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
    } else {
      shoppingCart[id] = 1;
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  };
  
  export { localDb };
  