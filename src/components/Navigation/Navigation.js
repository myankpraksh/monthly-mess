import React from "react";
import logo from "./logo.png";
import "./Navigation.css";
const Navigation = ({ isSignedIn, onRouteChange, onSignInChange }) => {
  if (isSignedIn) {
    return (
      <nav className="flex items-center justify-between bb b--white-10 shadow-3">
        <div className="flex items-center">
          <img id="logo" src={logo} alt="logo" className="pa1 pr3" />
          <h1 id="title" className="di">
            Monthly Mess
          </h1>
        </div>
        <div className="flex-grow menu flex items-center">
          <a
            onClick={() => onRouteChange("home")}
            className="f5 link dib white dim mr3 mr4-ns"
            href="#0"
          >
            Home
          </a>
          <a
            onClick={() => onRouteChange("messprofile")}
            className="f5 link dib white dim mr3 mr4-ns"
            href="#0"
          >
            My Profile
          </a>
          <a
            onClick={() => {
              onRouteChange("home");
              onSignInChange(false);
            }}
            className="f5 link dib white dim mr3 mr4-ns"
            href="#0"
          >
            Sign Out
          </a>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex items-center justify-between bb b--white-10 shadow-3">
        <div className="flex items-center">
          <img id="logo" src={logo} alt="logo" className="pa1 pr3" />
          <h1 id="title" className="di">
            Monthly Mess
          </h1>
        </div>
        <div className="flex-grow menu flex items-center">
          <a
            onClick={() => onRouteChange("home")}
            className="f5 link dib white dim mr3 mr4-ns"
            href="#0"
          >
            Home
          </a>
          <a
            onClick={() => onRouteChange("signin")}
            className="f5 link dib white dim mr3 mr4-ns"
            href="#0"
          >
            Sign In
          </a>
          <a
            onClick={() => onRouteChange("register")}
            className="f5 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
            href="#0"
          >
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
};

export default Navigation;
