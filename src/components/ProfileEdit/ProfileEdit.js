import React, { Component } from "react";
import "./ProfileEdit.css";
export default class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      phone: this.props.user.phone,
      short_description: this.props.user.short_description,
      address: this.props.user.address,
      pincode: this.props.user.pincode,
      city: this.props.user.city,
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };
  onDescriptionChange = (event) => {
    this.setState({ short_description: event.target.value });
  };
  onAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  onPincodeChange = (event) => {
    this.setState({ pincode: event.target.value });
  };
  onCityChange = (event) => {
    this.setState({ city: event.target.value });
  };
  isValid = () => {
    let bool = true;
    Object.values(this.state).forEach((val) => {
      if (val.length === 0) bool = false;
    });

    return bool;
  };
  resetForm = () => {
    this.setState({
      name: this.props.user.name,
      email: this.props.user.email,
      phone: this.props.user.phone,
      short_description: this.props.user.short_description,
      address: this.props.user.address,
      pincode: this.props.user.pincode,
      city: this.props.user.city,
    });
  };
  cancelUpdate = () => {
    this.props.onRouteChange("messprofile");
  };
  updateProfile = () => {
    let bool = this.isValid();
    if (!bool) {
      alert("All fields are required. Please fill update from completely.");
    }
    if (bool) {
      fetch("http://localhost:3000/updateuser/" + this.props.user.id, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          phone: this.state.phone,
          short_description: this.state.short_description,
          address: this.state.address,
          pincode: this.state.pincode,
          city: this.state.city,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (typeof user === "string") {
            alert(user);
          } else {
            this.props.loadUser(user);
            this.props.onRouteChange("messprofile");
            alert("Profile updated Successfully!");
          }
        });
    }
  };
  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center update">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Profile Update</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="phone">
                  Phone no.
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="phone"
                  id="phone"
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="description">
                  About You
                </label>
                <textarea
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  name="description"
                  id="description"
                  maxLength="300"
                  placeholder="max 300 characters"
                  rows="4"
                  value={this.state.short_description}
                  onChange={this.onDescriptionChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="address">
                  Address
                </label>
                <textarea
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  maxLength="200"
                  rows="3"
                  name="address"
                  id="address"
                  value={this.state.address}
                  onChange={this.onAddressChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="pincode">
                  Pincode
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="pincode"
                  id="pincode"
                  value={this.state.pincode}
                  onChange={this.onPincodeChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="city">
                  City
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="city"
                  id="city"
                  value={this.state.city}
                  onChange={this.onCityChange}
                />
              </div>
            </fieldset>
            <div className="mv3 flex justify-center">
              <input
                onClick={this.resetForm}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white hover-bg-navy"
                type="submit"
                value="Reset"
              />
            </div>
            <div className="flex justify-around">
              <input
                onClick={this.updateProfile}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white hover-bg-dark-green"
                type="submit"
                value="Update"
              />
              <input
                onClick={this.cancelUpdate}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white hover-bg-dark-red"
                type="submit"
                value="Cancel"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}
