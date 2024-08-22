import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import ModalContext from "../context/modal/ModalContext";
import CartSummerizeItem from "./CartSummerizeItem";

function CartSummerize() {
  const { cart, clearCart } = useContext(CartContext);
  const { isOpen, toggleModal } = useContext(ModalContext);

  // Calculate total value of cart
  const cartTotal =
    cart && cart.reduce((acc, curr) => acc + +curr.qty * +curr.price, 0);

  const handleCloseModal = () => {
    clearCart();
    toggleModal();
  };

  return (
    <>
      {isOpen && (
        <div
          id="modal"
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto ">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="mb-10 p-4">
              <img
                className="mb-5"
                src="/images/icon-order-confirmed.svg"
                alt="order confirmed icon"
              />
              <h3 className="text-3xl font-bold mb-3">Order Confirmed</h3>
              <p className="text-gray-950 opacity-45">
                We hope you enjoy your food!
              </p>
            </div>

            <div className="p-4 rounded-md bg-green-100 mx-5">
              {cart.map((item, index) => (
                <CartSummerizeItem
                  key={index}
                  item={item}
                />
              ))}
              <div className="mt-4 flex justify-between">
                <p>Order Total</p>
                <p className="text-xl font-bold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(cartTotal)}
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-5 px-4">
              <button
                onClick={handleCloseModal}
                id="closeModalFooter"
                className="border rounded-full py-2 px-8 text-white bg-red-700 mt-5 w-full">
                Start New Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default CartSummerize;
