import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import ModalContext from "../context/modal/ModalContext";
import CartItemDisplay from "./CartItemDisplay";

function Cart() {
  const { cart } = useContext(CartContext);
  const { toggleModal } = useContext(ModalContext);
  // Calculate total number of deserts in cart
  const cartCount = cart ? cart.reduce((acc, curr) => acc + curr.qty, 0) : 0;

  // Calculate total value of cart
  const cartTotal =
    cart && cart.reduce((acc, curr) => acc + +curr.qty * +curr.price, 0);

  return (
    <div className="shadow-md p-8 rounded-md sticky top-0">
      <h1 className="text-2xl text-red-10 font-bold mb-10">
        Your Cart ({cartCount})
      </h1>
      {!cart || cartCount === 0 ? (
        <>
          <div className="my-8 flex justify-center">
            <img
              src="/images/illustration-empty-cart.svg"
              alt="cart is empty"
            />
          </div>
          <p className="text-sm text-red-10 text-center">
            Your added items will appear here.
          </p>
        </>
      ) : (
        <>
          {cart.map((item, index) => (
            <CartItemDisplay
              key={index}
              dessert={item}
            />
          ))}
          {cart && (
            <div className="mt-3 flex justify-between">
              <p className="text-md">Order Total</p>
              <p className="text-xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(cartTotal)}
              </p>
            </div>
          )}
        </>
      )}
      {cart && (
        <button
          onClick={toggleModal}
          className="border rounded-full py-2 px-8 text-white bg-red-700 mt-5 w-full">
          Confirm Order
        </button>
      )}
    </div>
  );
}
export default Cart;
