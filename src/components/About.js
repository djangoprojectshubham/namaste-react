import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //API CALL
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name="Shubham Kumar (class)" location="Banglore (class)" />
        <UserClass name="Awdesh Kumar (class)" location="Ranchi (class)" />
      </div>
    );
  }
}

export default About;
