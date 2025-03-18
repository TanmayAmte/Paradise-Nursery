// Add to cart
export const ADD = (item) => ({
    type: "ADD_CART",
    payload: item
  });
  
  // Remove single quantity
  export const REMOVE = (item) => ({
    type: "REMOVE_CART",
    payload: item
  });
  
  // Delete the entire product from cart
  export const DELETE = (id) => ({
    type: "DELETE_CART",
    payload: id
  });
  