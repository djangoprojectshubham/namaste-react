import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    //  constructor called automatically during creation of object in a class
    super(props); // used to call the contructor of its parent class

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {}

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          className="btn-inc"
          onClick={() => {
            // NEVER UPDATE YOUR STATE DIRECTLY
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: shubham1870</h4>
      </div>
    );
  }
}

export default UserClass;
