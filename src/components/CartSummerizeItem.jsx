import PropTypes from "prop-types";

function CartSummerizeItem({ item }) {
  const itemTotal = item.qty * item.price;
  return (
    <>
      <article className="grid grid-cols-12 gap-2 ">
        <div className="col-span-3">
          <img
            className="rounded-md"
            src={item.image.thumbnail.slice(8)}
            alt=""
          />
        </div>
        <div className="col-span-7 flex flex-col justify-between py-3">
          <p className="font-bold">{item.name}</p>
          <p className="opacity-45">
            {item.qty} x @
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.price)}
          </p>
        </div>
        <div className="col-span-2 self-center">
          <p className="font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(itemTotal)}
          </p>
        </div>
      </article>
      <hr className="my-5" />
    </>
  );
}

CartSummerizeItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartSummerizeItem;
