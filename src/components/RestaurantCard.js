import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("props: ", resData);
  const {
    name,
    cuisines,
    avgRating,
    maxDeliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{maxDeliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
