import React, { Component } from "react";

export class RateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3,
      rating: this.props.mess.rating,
    };
  }
  onRatingChange = (event) => {
    this.setState({ score: event.target.value });
  };
  updateRating = (rating) => {
    this.setState({ rating: rating });
  };
  render() {
    const { mess } = this.props;
    const rate = () => {
      fetch(
        "http://localhost:3000/rate/" +
          this.props.mess.id +
          "/" +
          this.state.score,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((status) => {
          if (typeof status === "string") {
            alert(status);
          } else {
            this.updateRating(status);
          }
        });
    };
    return (
      <div>
        <div className="pt2 ttc">
          <p className="b pb2 di">Rating - </p>
          <p className="di">{this.state.rating + " ⭐/5 ⭐"}</p>
        </div>
        <div className="pt2 ttc">
          <label htmlFor={mess.id} className="b pb2">
            Rate this mess -{" "}
          </label>
          <select
            id={mess.id}
            name={mess.id}
            onChange={this.onRatingChange}
            defaultValue="3"
          >
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="4">5 ⭐</option>
          </select>
          <input
            type="submit"
            className="ma2"
            value="Rate it!"
            onClick={rate}
          />
        </div>
      </div>
    );
  }
}

export default RateButton;
