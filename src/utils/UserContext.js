import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "shubham",
    email: "shubham@gmail.com",
  },
});

export default UserContext;
