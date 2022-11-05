import React, { Component } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
class App extends Component {
  constructor() {
    super();
    this.state = {
      messArray: [],
      error: "Welcome!! Please enter your pincode above to find mess in your city and enjoy homely food. If you are mess owner, Register with us to grow your business and get discovered by the new generation of students, the \"Tech Savy\" students and working professionals. Let us help you grow your business in this hyper-competitive market. So what are you waiting for? Register now by clicking on \"Sign Up\" above."
    };
  }
  loadMessArray = (data) => {
    if (typeof data === "string") {
      if (data === "Mess not found")
        this.setState({
          messArray: [],
          error:
            "Sorry, none of member mess serve at your location currently. We sincerely apologize for the inconvenience caused and insure that we are working to increase our network and onboard new mess everyday. Please retry after some days.",
        });
      else if (data === "error getting mess")
        this.setState({
          messArray: [],
          error:
            "There was an error connecting to database.  We sincerely apologize for the inconvenience caused and insure that we are working to fix the issue. Please retry after sometime.",
        });
    } else {
      this.setState({ messArray: data, error: "" });
    }
  };
  render() {
    return (
      <div>
        <Navigation />
        <Menu loadMessArray={this.loadMessArray} />
        <ErrorMessage error={this.state.error}/>
        <CardContainer messArray={this.state.messArray}/>
      </div>
    );
  }
}

export default App;
