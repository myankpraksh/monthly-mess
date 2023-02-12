import React from "react";
import "./Register.css";
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      phone: "",
      short_description: "",
      address: "",
      pincode: "",
      city: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
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
  onSubmitSignIn = () => {
    let bool = this.isValid();
    if (!bool) {
      alert(
        "All fields are required for registration. Please fill registration from completely."
      );
    }
    if (bool) {
      fetch("https://monthly-mess-backend.onrender.com/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          phone: this.state.phone,
          short_description: this.state.short_description,
          address: this.state.address,
          pincode: this.state.pincode,
          city: this.state.city
        }),
      })
        .then((response) => response.json())
        .then((user) => {

          if (typeof(user)==="string") {
            alert(user)}
            else{
            this.props.loadUser(user);
            this.props.onSignInChange(true);
            this.props.onRouteChange("messprofile");
            alert("Registration Successful!");
          }
        });
    }
  };

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center register">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
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
                  maxLength = "300"
                  placeholder="max 300 characters"
                  rows = "4"
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
                  rows = "3"
                  name="address"
                  id="address"
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
                  onChange={this.onPincodeChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="city">
                  City
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="city"
                  id="city"
                  onChange={this.onCityChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
