import React from "react";
import "./Menu.css";
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: "",
    };
  }
  onPinChange = (event) => {
    this.setState({ pincode: event.target.value });
  };
  validPin = () => {
    let flag = true;
    if (this.state.pincode.length !== 6) {
      flag = false;

      return flag;
    }
    for (let i = 0; i < 6; i++) {
      let char = this.state.pincode.charCodeAt(i);
      if (!(char >= 48 && char <= 57)) flag = false;
    }

    return flag;
  };
  getCards = () => {
    fetch("https://monthly-mess-backend.onrender.com/mess/" + this.state.pincode, {
      method: "get",
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(messArray => {
      this.props.setPin(this.state.pincode);
      this.props.loadMessArray(messArray);
    })
  };
  onSubmit = () => {
    let bool = this.validPin();
    if (bool) {
      this.getCards();
    } else {
      alert("Please Enter a Valid Pincode");
    }
  };

  render() {
    return (
      <div className="pinmenu flex flex-column pa3 items-center ma3 shadow-5">
        <fieldset className="b--transparent flex flex-column pa3 items-center">
          <legend className="f1 fw6">Enter your Pincode</legend>
          <input
            type="text"
            placeholder="Pincode"
            id="pinIn"
            className="f5"
            onChange={this.onPinChange}
          />
          <br />
          <input
            onClick={this.onSubmit}
            className="b ph3 pv2 ba  bg-transparent grow pointer f5 dib"
            type="submit"
            value="Find Mess"
          />
        </fieldset>
      </div>
    );
  }
}

export default Menu;
