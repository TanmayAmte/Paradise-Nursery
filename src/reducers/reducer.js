const INIT_STATE = {
    carts: []
  };
  
  export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
  
      // ✅ ADD ITEM TO CART OR INCREASE QUANTITY
      case "ADD_CART": {
        const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
  
        if (itemIndex >= 0) {
          // Create a new array with updated quantity
          const updatedCarts = state.carts.map((item, index) => 
            index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
  
          return { ...state, carts: updatedCarts };  // Return new state
        } else {
          const newItem = { ...action.payload, quantity: 1 };
          return { ...state, carts: [...state.carts, newItem] };
        }
      }
  
      // ✅ REMOVE SINGLE QUANTITY
      case "REMOVE_CART": {
        const updatedCarts = state.carts.map((item) => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
  
        return { ...state, carts: updatedCarts };  // Return new state
      }
  
      // ✅ DELETE PRODUCT FROM CART
      case "DELETE_CART": {
        const filteredCarts = state.carts.filter((item) => item.id !== action.payload);
        return { ...state, carts: filteredCarts };
      }
  
      default:
        return state;
    }
  };
  
  export default cartreducer;
  