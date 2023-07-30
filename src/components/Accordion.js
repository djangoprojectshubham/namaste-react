import { useState } from "react";
import { ITEMS_CARD_LOGO } from "../utils/constants";
import AddMenuItems from "./AddMenutems";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { cardData, itemCards } = props;
  console.log("cardData", cardData);
  console.log("itemCards", itemCards);
  const { title } = cardData?.card?.card;

  return (
    <div className="bg-gray-200 cursor-pointer m-4 rounded-md ">
      <div
        className="font-bold text-xl m-4"
        onClick={() => setIsActive(!isActive)}
      >
        <h2>{title}</h2>
      </div>

      {isActive && (
        <div className="accordion-content m-4">
          {itemCards?.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <p className="font-bold">
                    {item.card.info.name} <br />
                    Rs.
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p>{item.card.info.description}</p>{" "}
                </div>
                <div>
                  <img src={ITEMS_CARD_LOGO + item.card.info.imageId} />
                  <div>
                    <AddMenuItems item={item.card.info} />
                  </div>
                </div>
                <div className="border-t border-red-600"></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;
