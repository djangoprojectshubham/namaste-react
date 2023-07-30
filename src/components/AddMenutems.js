import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItems, removeItems } from "../utils/cartSlice";

const AddMenuItems = ({ item }) => {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCounter((prevCount) => {
      return (prevCount += 1);
    });
    dispatch(addItems(item));
  };
  const decrement = () => {
    dispatch(removeItems(item));
    setCounter((prevCount) => {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  };
  return (
    <div className=" font-bold ml-4 min-h-0">
      <h3>Add Items {counter}</h3>

      <button
        className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 rounded-sm mr-2 mb-2"
        onClick={decrement}
      >
        -
      </button>
      <button
        className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 rounded-sm mr-2 mb-2"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};
export default AddMenuItems;
