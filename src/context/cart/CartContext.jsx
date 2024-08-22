import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);

  /**
   *
   * @description Clears cart after order is confirmed
   */
  const clearCart = () => setCart(null);

  /**
   *
   * @param {object} dessert
   * @description - Removes completly sigle desert form cart or when number of desert equals zero
   */
  const removeOne = (dessert) => {
    const cartItems = cart;
    const dessertIndex = cartItems.findIndex(
      (item) => item.name === dessert.name,
    );
    if (dessertIndex !== -1) {
      cartItems[dessertIndex] = {
        ...cartItems[dessertIndex],
        qty: cartItems[dessertIndex].qty - 1,
      };
    }

    const updatedCart = cartItems.filter((item) => item.qty !== 0);

    setCart(() => [...updatedCart]);
  };

  /**
   *
   * @param {object} dessert
   * @description Updates count of specific desert in cart or adds desert to cart if not present
   */
  const addToCartOrUpdate = (dessert) => {
    //Add desert to cart if cart is empty
    if (!cart) {
      setCart([dessert]);
      return;
    }

    const cartItems = cart;

    //Find desert in cart if cart is not empty
    const desertIndex = cartItems.findIndex(
      (item) => item.name === dessert.name,
    );

    if (desertIndex !== -1) {
      cartItems[desertIndex] = {
        ...cartItems[desertIndex],
        qty: cartItems[desertIndex].qty + 1,
      };
    } else {
      cartItems.push(dessert);
    }

    const updatedCart = cartItems.filter((item) => item.qty !== 0);

    setCart(() => [...updatedCart]);
  };

  /**
   *
   * @param {object} dessert
   * @description Removes desert from cart despite quantity
   */
  const removeDessert = (dessert) =>
    setCart(() => cart.filter((item) => item.name !== dessert.name));

  useEffect(() => {
    if (!cart || cart.length === 0) {
      setCart(null);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCartOrUpdate, removeOne, removeDessert, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
