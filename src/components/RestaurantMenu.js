import { useParams } from "react-router-dom";

import Accordion from "./Accordion";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo", resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, areaName, city, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;
  const { lastMileTravelString, maxDeliveryTime } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  const cardsList =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("cardList", cardsList);

  const restaurantInfo = {
    resId: resId,
    resName: name,
  };

  localStorage.setItem("restaurantInfo", JSON.stringify(restaurantInfo));

  return (
    <div>
      <div>
        <div className="m-4  font-bold text-lg">
          <h1>{name} </h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {areaName}-{city} {lastMileTravelString}
          </p>
        </div>
        <div className="border-t border-gray-600"></div>

        <div className="m-4 flex flex-wrap">
          <ul>
            <li>
              <h4 className="text-md text-green-600 font-bold">
                {" "}
                {costForTwoMessage}
              </h4>
            </li>
            <li>
              <h4 className="text-red-600 font-bold">
                {" "}
                Delivery Time {maxDeliveryTime} minutes
              </h4>
            </li>
            <li>
              <h4 className="font-bold">Rating {avgRatingString}</h4>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-600"></div>
        <div>
          {cardsList.map((card, index) => {
            return (
              <Accordion
                key={index}
                cardData={card}
                itemCards={card?.card?.card?.itemCards}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
