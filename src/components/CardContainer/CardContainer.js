import React from "react";
import "./CardContainer.css";
import food from "./food-placeholder.jpg";
export default function CardContainer({ messArray, pin }) {
  return (
    <div>
      {messArray.length > 0 ? (
        <div className="CardContainer mb4 pv5 shadow-5">
          <section className="mw7 center">
            <h2 className=" ph3 ph0-l tc f2">Mess found at pincode - {pin}</h2>
            {messArray.map((mess) => {
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
                      <img src={food} className="db" alt={mess.name} />
                    </div>
                  </div>
                  <div className="pt2 ttc">
                    <p className="b pb2">Address -</p>
                    <p>{mess.address}</p>
                    <p>{"Phone no. " + mess.phone}</p>
                  </div>
                  <div className="pt2 ttc">
                    <p className="b pb2 di">Rating - </p>
                    <p className="di">{mess.rating + " ⭐/5 ⭐"}</p>
                  </div>
                  <div className="pt2 ttc">
                    <label for="messrating" className="b pb2">
                      Rate this mess -{" "}
                    </label>
                    <select name="messrating" id="messrating">
                      <option value="1">1 ⭐</option>
                      <option value="2">2 ⭐</option>
                      <option value="3">3 ⭐</option>
                      <option value="4">4 ⭐</option>
                      <option value="4">5 ⭐</option>
                    </select>
                    <input type="submit" className="ma2" value="Rate it!" />
                  </div>
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
