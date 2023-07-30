import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItems from "./CartItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const restaurantInfo = JSON.parse(localStorage.getItem("restaurantInfo"));
  const { resId, resName } = restaurantInfo;

  return (
    <div>
      <div>
        <span className="m-2 p-2 font-bold text-3xl">{resName}</span>
        <span className="float-right mr-3 underline text-lg">
          <Link key={resId} to={"/restaurants/" + parseInt(resId)}>
            Go to FoodMenu
          </Link>
        </span>
      </div>
      <span className="m-2 p-2 font-bold text-xl">
        Total Cart Items: {cartItems?.length}
      </span>

      <div className="flex flex-wrap">
        {cartItems?.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
