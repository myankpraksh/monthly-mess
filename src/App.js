import React, { Component } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import MessProfile from "./components/MessProfile/MessProfile";
import Register from "./components/Register/Register";
class App extends Component {
  constructor() {
    super();
    this.state = {
      rating : 0,
      route: "home",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        phone: "",
        short_description: "",
        address: "",
        pincode: "",
        city: "",
        rating : "",
      },
      pin: "",
      messArray: [],
      error:
        'Welcome!! Please enter your pincode above to find mess in your city and enjoy homely food. If you are mess owner, Register with us to grow your business and get discovered by the new generation of students, the "Tech Savy" students and working professionals. Let us help you grow your business in this hyper-competitive market. So what are you waiting for? Register now by clicking on "Sign Up" above.',
    };
  }
  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        short_description: data.short_description,
        address: data.address,
        pincode: data.pincode,
        city: data.city,
        rating: data.rating,
      },
    });
  };
  onRatingChange = (id)=>{
   
  // let value = (id)=>{return document.getElementById(id).value};
  //  alert(id + value);
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  onSignInChange = (siginstatus) => {
    this.setState({ isSignedIn: siginstatus });
  };
  setPin = (pin) => {
    this.setState({ pin });
  };
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
    if (this.state.route === "home") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
            onSignInChange={this.onSignInChange}
          />
          <Menu loadMessArray={this.loadMessArray} setPin={this.setPin} />
          <ErrorMessage error={this.state.error} />
          <CardContainer
            messArray={this.state.messArray}
            pin={this.state.pin}
            onRatingChange={this.onRatingChange}
          />
        </div>
      );
    } else if (this.state.route === "signin") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          <SignIn
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
            onSignInChange={this.onSignInChange}
          />
        </div>
      );
    } else if (this.state.route === "register") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
          />
          <Register
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
            onSignInChange={this.onSignInChange}
          />
        </div>
      );
    } else if (this.state.route === "messprofile") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange}
            onSignInChange={this.onSignInChange}
          />
          <MessProfile
            isSignedIn={this.state.isSignedIn}
            user={this.state.user}
          />
        </div>
      );
    }
  }
}

export default App;
