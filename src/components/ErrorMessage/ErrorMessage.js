import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage({ error }) {
  return (
    <div>
      {error === 0 ? (
        <div></div>
      ) : error === "welcomeMsg" ? (
        <div>
          <div className="ErrorContainer demoInstruction">
            <p>
              For demonstration purposes I have registered few dummy accounts,
              they have the following pincodes :
              <ul class="list ph3 ph5-ns pv4">
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110001
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110011
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110022
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110033
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110044
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    110048
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    122001
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    122002
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    302018
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400011
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400014
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400021
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400023
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400050
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400053
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400080
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    400101
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    412207
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    500032
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    600011
                  </span>
                </li>
                <li class="dib mr1 mb2">
                  <span class="f6 f5-ns b db pa2 link  ba b--black">
                    825403
                  </span>
                </li>
              </ul>
              To get a result while searching use one of these pincodes. Also
              feel free to register new accounts and play around!
            </p>
          </div>
          <div className="ErrorContainer fw6 shadow-3">
            <p>
              Welcome to Monthly Mess! Your one-stop solution for affordable and
              convenient food options. Say goodbye to the hassle of cooking and
              searching for food. With Monthly Mess, you can find the best
              messes in your area with just a few clicks. Simply enter your
              pincode and discover a variety of options with ratings from fellow
              users.
            </p>
            <br />
            <p>
              We understand the struggle of finding a reliable, affordable and
              quality mess, especially in today's fast-paced world. This is why
              we have created a platform that not only helps you find the right
              mess but also connects mess owners with the new generation of
              tech-savvy students, working professionals and people who are
              always on the go. With our advanced search engine and user
              ratings, finding the perfect mess has never been easier. Whether
              you're looking for a mess for monthly subscription or just a
              one-time meal, Monthly Mess has got you covered. So why wait?
              Start exploring now and enjoy delicious, hassle-free meals every
              day!'
            </p>
          </div>
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
      ) : error === "" ? (
        <div></div>
      ) : (
        <div className="ErrorContainer fw6 shadow-3">{error}</div>
      )}
    </div>
  );
}
