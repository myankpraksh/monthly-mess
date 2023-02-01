import React, { Component } from "react";
import CardContainer from "./components/CardContainer/CardContainer";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
import SignIn from "./components/SignIn/SignIn";
import MessProfile from "./components/MessProfile/MessProfile";
import Register from "./components/Register/Register";
import ProfileEdit from "./components/ProfileEdit/ProfileEdit";

//App component begins
class App extends Component {
  constructor() {
    super();
    this.state = {
      rating: 0,
      route: "home", //to manage routing
      isSignedIn: false, //to store signed in status
      user: {
        //object to store user details when signed in
        id: "",
        name: "",
        email: "",
        phone: "",
        short_description: "",
        address: "",
        pincode: "",
        city: "",
        rating: "",
      },
      pin: "", //to store pin which was searched
      messArray: [], //to store list of mess with their details when database returns after searching

      //to display welcome and error message
      error: "welcomeMsg",
    };
  }

  //function to set user details when logging in
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

  //function to update routing status
  onRouteChange = (route) => {
    this.setState({ route: route });
  };
  onSignInChange = (siginstatus) => {
    this.setState({ isSignedIn: siginstatus });
  };
  setPin = (pin) => {
    this.setState({ pin });
  };

  //to check data received when searching for mess and store it in messArray
  loadMessArray = (data) => {
    if (typeof data === "string") {
      if (data === "Mess not found")
        this.setState({
          messArray: [],
          error: "locationNotAvailable",
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
    //home route, to search for mess
    if (this.state.route === "home") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn} //to display correct navigation option
            onRouteChange={this.onRouteChange} //to change route to when clicking on nav buttons
            onSignInChange={this.onSignInChange} //to change signed in state to false when clicking on sign out
          />
          <Menu
            loadMessArray={this.loadMessArray} //to store mess search results fetched
            setPin={this.setPin} //to update pincode
          />
          <ErrorMessage error={this.state.error} />
          <CardContainer
            messArray={this.state.messArray} //To send mess details to be displayed as search result
            pin={this.state.pin} //to display pin in card container title message
          />
        </div>
      );
      //signin route to display signin page
    } else if (this.state.route === "signin") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn}
            onRouteChange={this.onRouteChange} //to change route to when clicking on nav buttons
            onSignInChange={this.onSignInChange} //to change signed in state to false when clicking on sign out
          />
          <SignIn
            onRouteChange={this.onRouteChange} //to update route to register when clicked on register in sign in form & home when signin successful
            loadUser={this.loadUser} //to load user details fetched from db if signin successful
            onSignInChange={this.onSignInChange} //to change signedin status to true if signin successful
          />
        </div>
      );
      //register route to display register page
    } else if (this.state.route === "register") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn} //to display correct navigation
            onRouteChange={this.onRouteChange} //to change route to when clicking on nav buttons
            onSignInChange={this.onSignInChange} //to change signed in state to false when clicking on sign out
          />
          <Register
            onRouteChange={this.onRouteChange} //to update route to messprofile if register successful
            loadUser={this.loadUser} //to load user details in users object on successful register
            onSignInChange={this.onSignInChange} //to change signedin status to true if register successful
          />
        </div>
      );
      //messprofile route to display profile details of mess
    } else if (this.state.route === "messprofile") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn} //to display correct navigation
            onRouteChange={this.onRouteChange} //to change route to when clicking on nav buttons
            onSignInChange={this.onSignInChange} //to change signed in state to false when clicking on sign out
          />
          <MessProfile
            user={this.state.user} //to display user details
            onRouteChange={this.onRouteChange} //to change route to home after account deletion
            onSignInChange={this.onSignInChange} //to change signed in state to false after account deletion
          />
        </div>
      );
    }
    //profileEdit route to let users edit their profile
    else if (this.state.route === "profileEdit") {
      return (
        <div>
          <Navigation
            isSignedIn={this.state.isSignedIn} //to display correct navigation
            onRouteChange={this.onRouteChange} //to change route to when clicking on nav buttons
            onSignInChange={this.onSignInChange} //to change signed in state to false when clicking on sign out
          />
          <ProfileEdit
            user={this.state.user} //to display user details
            onRouteChange={this.onRouteChange} //to change route to profile after successfully updating or cancel
            loadUser={this.loadUser} //to load updated user details after update
          />
        </div>
      );
    }
  }
}

export default App;
