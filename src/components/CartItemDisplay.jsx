import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

function CartItemDisplay({ dessert }) {
  const { removeDessert } = useContext(CartContext);

  return (
    <div className="my-5">
      <h1 className="text-sm font-bold text-rose-800 mb-2">{dessert.name}</h1>
      <div className="flex justify-between">
        <div>
          <span className="me-4 text-rose-600 font-semibold">
            {dessert.qty}x
          </span>
          <span className="me-4 text-rose-300">
            @
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
            }).format(dessert.price)}
          </span>
          <span className="text-rose-500">
            {new Intl.NumberFormat("en-Us", {
              style: "currency",
              currency: "USD",
            }).format(dessert.price * dessert.qty)}
          </span>
        </div>
        <img
          onClick={() => removeDessert(dessert)}
          className="border h-5 rounded-full p-1 cursor-pointer"
          src="/images/icon-remove-item.svg"
          alt=""
        />
      </div>
      <hr className="mt-5" />
    </div>
  );
}

CartItemDisplay.propTypes = {
  dessert: PropTypes.object.isRequired,
};

export default CartItemDisplay;
