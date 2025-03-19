import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD, REMOVE, DELETE } from '../actions/Action';
import './style.css';
import { useNavigate } from 'react-router-dom';



const ShoppingCart = () => {
    const navigate = useNavigate();
  const getData = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const totalItems = getData.reduce((acc, item) => acc + item.quantity, 0);
  const incrementQuantity = (item) => {
    dispatch(ADD(item));
  };

  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(REMOVE(item));
    } else {
      dispatch(DELETE(item.id));
    }
  };

  // ✅ Calculate the total price
  const totalPrice = getData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ✅ Clear the entire cart
  const clearCart = () => {
    getData.forEach(item => dispatch(DELETE(item.id)));
  };

  const handleCheckout = () => {
    alert("Checkout successful!");
    clearCart();
  }

  return (
    <div className="container">
      <h2 className="text-center text-decoration-underline text-white">Shopping Cart</h2>

      <section className="cart-section">
        {getData.length === 0 ? (
          <div className="cart-empty-message text-center text-white"><img src={`${process.env.PUBLIC_URL}/images/empty_cart.jpg`}></img></div>
        ) : (
          getData.map((item) => (
            <div key={item.id} className="itemDetails">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-info">
                <h5>{item.name}</h5>
                <p>Price: ${item.price}</p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-danger me-2" onClick={() => decrementQuantity(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-success ms-2" onClick={() => incrementQuantity(item)}>+</button>
                </div>
              </div>
            </div>
          ))
        )}

        {/* ✅ Display Total Price and Buttons */}
        {getData.length > 0 && (
          <div className="cart-footer">
            <span className="total-price">Total: ${totalPrice}</span>
            <span className="total-items">Total Items:{totalItems}</span>
            <div>
              <button className="clear-btn me-2" onClick={clearCart}>Clear Cart</button>
              <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
              <button className="continue-btn" onClick={() => navigate('/home')}>
  Continue Shopping
</button>
            
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ShoppingCart;
