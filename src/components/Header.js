import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { user } = useContext(UserContext);

  const color = onlineStatus ? "green" : "red";

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-orange-300">
      <div>
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex p-4 m-4 ">
          <li className="p-4" style={{ color }}>
            Online Status: {onlineStatus ? "Active" : "Inactive"}
          </li>
          <li className="p-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="p-4 font-bold">
            <Link to="/cart">Cart- {cartItems.length}</Link>
          </li>
          <li className="p-4 text-red-600">{user.name}</li>
          <button
            className="p-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
