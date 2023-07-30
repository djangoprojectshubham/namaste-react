import { useContext } from "react";

import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-gray-600 text-white p-4 mt-">
      <p>© 2023 Your Company. All rights reserved.</p>
      <span>copyright@{user.name}</span>
    </div>
  );
};

export default Footer;
