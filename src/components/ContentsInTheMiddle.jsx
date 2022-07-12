import React from "react";
import ButtonViewPlan from "./ButtonViewPlan";
import ButtonHowWeWork from "./ButtonHowWeWork";

function ContentsInTheMiddle() {
  return (
    <div className="center-container">
      <img
        className="bg-left-desktop"
        src="bg-pattern-intro-left-desktop.svg"
        alt="pattern"
      />
      <div className="top-introduction">
        <hr />
        <img src="image-intro-desktop.jpg" alt="intro-insure" />
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your insurance coverage easier and faster. We blend our expertise
          and technology to help you fond the plan that's right for you. Ensure
          you and you loved ones are protected.
        </p>

        <ButtonViewPlan />
      </div>
      <div className="middle-introduction">
        <hr />
        <h1>We're different</h1>
        <div className="grid-container">
          <div className="grid-item">
            <img src="icon-snappy-process.svg" alt="icon-snappy-process" />
            <h3>Snappy Process</h3>
            <p>
              Our Application process can be completed in minutes, not hours.
              Don't get stuck in filling in tedious forms.
            </p>
          </div>
          <div className="grid-item">
            <img
              src="icon-affordable-prices.svg"
              alt="icon-affordable-prices"
            />
            <h3>Affordable Prices</h3>
            <p>
              We don't want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="grid-item">
            <img src="icon-people-first.svg" alt="icon-people-first" />
            <h3>People First</h3>
            <p>
              Our plans aren't full of conditions and clauses to prevent
              payouts. We make sure you're covered when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="in-the-box">
          <h1>Find out more about how we work</h1>
          <ButtonHowWeWork />
        </div>
      </div>
      <img
        className="bg-pattern-right"
        src="bg-pattern-intro-right-mobile.svg"
        alt="bg-pattern"
      />
      <img
        className="bg-pattern-left"
        src="bg-pattern-intro-left-mobile.svg"
        alt="bg-pattern-mobile"
      />
    </div>
  );
}

export default ContentsInTheMiddle;
