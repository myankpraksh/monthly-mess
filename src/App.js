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
      error: "",
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
        <CardContainer />
      </div>
    );
  }
}

export default App;
