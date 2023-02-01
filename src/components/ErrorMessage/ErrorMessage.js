import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage({ error }) {
  return (
    <div>
      {error === 0 ? (
        <div></div>
      ) : error === "welcomeMsg" ? (
        <div className="ErrorContainer fw6 shadow-3">
          <p>
            Welcome to Monthly Mess! Your one-stop solution for affordable and
            convenient food options. Say goodbye to the hassle of cooking and
            searching for food. With Monthly Mess, you can find the best messes
            in your area with just a few clicks. Simply enter your pincode and
            discover a variety of options with ratings from fellow users.
          </p>
          <br />
          <p>
            We understand the struggle of finding a reliable, affordable and
            quality mess, especially in today's fast-paced world. This is why we
            have created a platform that not only helps you find the right mess
            but also connects mess owners with the new generation of tech-savvy
            students, working professionals and people who are always on the go.
            With our advanced search engine and user ratings, finding the
            perfect mess has never been easier. Whether you're looking for a
            mess for monthly subscription or just a one-time meal, Monthly Mess
            has got you covered. So why wait? Start exploring now and enjoy
            delicious, hassle-free meals every day!'
          </p>
        </div>
      ) : error === "locationNotAvailable" ? (
        <div className="ErrorContainer fw6 shadow-3">
          <p>
            "Sorry, none of member mess serve at your location currently. We
            sincerely apologize for the inconvenience caused and insure that we
            are working to increase our network and onboard new mess everyday.
            Please retry after some days."
          </p>
        </div>
      ) : (
        <div className="ErrorContainer fw6 shadow-3">{error}</div>
      )}
    </div>
  );
}
