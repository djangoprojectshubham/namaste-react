import { CDN_URL } from "../utils/constants";

const CartItems = (props) => {
  const { name, imageId, description, price, defaultprice } = props.item;
  return (
    <div className=" m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + imageId}></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{description}</h4>
      <h4>Cost: ₹{price / 100 || defaultprice / 100} </h4>
    </div>
  );
};

export default CartItems;
