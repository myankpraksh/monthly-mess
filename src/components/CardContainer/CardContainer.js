import React, { Component } from "react";
import RateButton from "../RateButton/RateButton";
import "./CardContainer.css";

class CardContainer extends Component {
  render() {
    const { messArray, pin } = this.props;

    return (
      <div>
        {messArray.length > 0 ? (
          <div className="CardContainer mb4 pv5 shadow-5">
            <section className="mw7 center">
              <h2 className=" ph3 ph0-l tc f2">
                Mess found at pincode - {pin}
              </h2>
              {messArray.map((mess, index) => {
                return (
                  <article
                    className="pv4 bt bb b--black-10 ph3 ph0-l pointer near-black"
                    key={mess.id}
                  >
                    <div className="flex flex-column flex-row-ns">
                      <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                        <h1 className="f3  mt0 lh-title ttc">{mess.name}</h1>
                        <p className="f5 f4-l lh-copy ">
                          {mess.short_description}
                        </p>
                      </div>
                      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                        <img
                          src={"https://monthly-mess-backend.onrender.com/public/" + mess.img_name}
                          className="db"
                          alt={mess.name}
                        />
                      </div>
                    </div>
                    <div className="pt2 ttc">
                      <p className="b pb2">Address -</p>
                      <p>{mess.address}</p>
                      <p>{"Phone no. " + mess.phone}</p>
                    </div>

                    <RateButton mess={mess} />
                  </article>
                );
              })}
            </section>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default CardContainer;
