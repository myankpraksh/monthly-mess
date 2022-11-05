import React from "react";
import logo from "./logo.png";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav className="flex items-center justify-between bb b--white-10 shadow-3">
      <div className="flex items-center">
      <img id="logo" src={logo} alt="logo" className="pa1 pr3"/>
      <h1 id="title" className="di">Monthly Mess</h1>
      </div>
      <div className="flex-grow menu flex items-center">
        <a className="f5 link dib white dim mr3 mr4-ns" href="#0">
          About
        </a>
        <a className="f5 link dib white dim mr3 mr4-ns" href="#0">
          Sign In
        </a>
        <a
          className="f5 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20"
          href="#0"
        >
          Sign Up
        </a>
      </div>
    </nav>

    // <nav >
    // <img src={logo} alt="logo"/>
    // </nav>
  );
};

export default Navigation;
