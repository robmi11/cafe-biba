/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import CartContext from "../context/cart/CartContext";

function Desert({ dessert }) {
  const { addToCartOrUpdate, cart, removeOne } = useContext(CartContext);
  const [isActive, setIsActive] = useState(null);

  function handleAddToCart() {
    const item = {
      name: dessert.name,
      price: dessert.price,
      image: dessert.image,
      qty: 1,
    };

    addToCartOrUpdate(item);
  }

  useEffect(() => {
    setIsActive(cart && cart.find((item) => item.name === dessert.name));
  }, [handleAddToCart, cart]);

  return (
    <div className="shadow-md pb-10 font-redhat rounded-t-md">
      <div className="relative w-full flex justify-center items-end">
        <img
          className="aspect-auto rounded-t-md"
          src={dessert.image.desktop.slice(8)}
          alt={dessert.name}
        />
        {!isActive || isActive.qty === 0 ? (
          <button
            onClick={handleAddToCart}
            type="button"
            className="flex border border-red-10 px-10 py-1 rounded-full bg-white absolute translate-y-1/2 ">
            <img
              className="inline"
              src="/images/icon-add-to-cart.svg"
              alt=""
            />{" "}
            Add to Cart{dessert.qty}
          </button>
        ) : (
          <button
            type="button"
            className="flex items-center border border-red-10 px-20 py-1 rounded-full bg-red-800 absolute translate-y-1/2 cursor-auto">
            <img
              onClick={() => removeOne(isActive)}
              src="/images/icon-decrement-quantity.svg"
              className="absolute left-2 cursor-pointer w-6 h-6 border p-1 rounded-full"
            />
            <p className="text-rose-200 font-bold text-xl">{isActive.qty}</p>
            <img
              onClick={handleAddToCart}
              src="/images/icon-increment-quantity.svg"
              className="absolute right-2 cursor-pointer h-6 border p-1 rounded-full"
            />
          </button>
        )}
      </div>
      <div className="px-3 pt-3 mt-5">
        <h1 className="text-rose-500 text-sm">{dessert.category}</h1>
        <p className="mt-2 text-xl font-bold">{dessert.name}</p>
        <p className="mt-2 font-bold text-red-10">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(dessert.price)}
        </p>
      </div>
    </div>
  );
}

Desert.propTypes = {
  dessert: PropTypes.object.isRequired,
};

export default Desert;
