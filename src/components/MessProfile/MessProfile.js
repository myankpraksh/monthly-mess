import React, { Component } from "react";
import "./MessProfile.css";
import PopupBackground from "../PopupBackground/PopupBackground";

export default class MessProfile extends Component {
  constructor() {
    super();
    this.state = {
      popUp: false,
    };
  }
  deleteUser = () => {
    fetch("http://localhost:3000/delete/" + this.props.user.id, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response === 1) {
          this.props.onSignInChange(false);
          this.props.onRouteChange("home");
          alert(
            "Your profile has been successfully deleted. Sad to see you go :-("
          );
        } else {
          alert(
            "Some error occurred trying to delete. Sorry. Please try again later."
          );
        }
      });
  };

  setPopUp = (value) => {
    this.setState({ popUp: value });
  };

  editRoute = () => {
    this.props.onRouteChange("profileEdit");
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        {(() => {
          if (this.state.popUp) {
            return (
              <div>
                <PopupBackground />
                <div className="pa4-l delete-box">
                  <div className="bg-pink mw7 center pa4 br2-ns ba b--black-10">
                    <div className="cf bn ma0 pa0">
                      <p className="pa0 f5 f4-ns mb3 black">
                        This will permanently delete your account!
                      </p>
                      <div className=" flex justify-around">
                        <input
                          className="f6 f5-l input-reset dib fl pv3 grow tc bn bg-animate bg-black-70 hover-bg-dark-red red b hover-white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                          type="submit"
                          value="Delete"
                          onClick={this.deleteUser}
                        />
                        <input
                          className="f6 f5-l input-reset dib fl pv3 grow tc bn bg-animate bg-black-70 hover-bg-dark-green b green hover-white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"
                          type="submit"
                          value="Cancel"
                          onClick={() => this.setPopUp(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
        <div className="MessProfile mb4 pv5 shadow-5">
          <section className="mw7 center">
            <h2 className=" ph3 ph0-l tc f2">Welcome! </h2>
            <h2 className="ph3 ph0-l tc f2">{user.name}</h2>
            <article className="pv4 bt bb b--black-10 ph3 ph0-l pointer near-black">
              <div className="flex flex-column flex-row-ns">
                <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                  <h1 className="f3  mt0 lh-title ttc">Short Description</h1>
                  <p className="f5 f4-l lh-copy ">{user.short_description}</p>
                </div>
                <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                  <img
                    src={
                      "http://localhost:3000/public/" +
                      user.img_name +
                      "?time=" +
                      new Date()
                    }
                    className="db"
                    alt={user.name}
                  />
                </div>
              </div>
              <div className="pt2 ttc">
                <p className="b pb2">Address -</p>
                <p>{user.address}</p>
                <p>{"Phone no. " + user.phone}</p>
              </div>
              <div className="pt2 ttc">
                <p className="b pb2 di">Your Rating - </p>
                <p className="di">{user.rating + " ⭐/5 ⭐"}</p>
              </div>
            </article>
            <div className="button-section flex items-center justify-around mt3">
              <div className="">
                <input
                  onClick={this.editRoute}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-bg-navy hover-white"
                  type="submit"
                  value="Edit Profile"
                />
              </div>
              <div className="">
                <input
                  onClick={() => this.setPopUp(true)}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-bg-dark-red hover-white"
                  type="submit"
                  value="Delete Account"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
