import "./WorkProgress.css"
import React from "react";

export default function WorkProgress() {
  return (
    <div className="babes">
      <div>
        <p className="text">
          Oops..
          <br />
          Work in progress
        </p>
        <div className="container">
          <div className="bg">
            <div className="light" />
          </div>
          <div className="ufo">
            <div className="ufo-bottom" />
            <div className="ufo-top" />
            <div className="ufo-glass">
              <div className="alien">
                <div className="alien-eye" />
              </div>
            </div>
          </div>
          <div className="bed">
            <div className="mattress" />
          </div>
          <div className="man">
            <div className="foot" />
            <div className="head">
              <div className="face" />
              <div className="hair" />
            </div>
            <div className="man-body" />
            <div className="arm" />
          </div>
        </div>
        {/* //////////////// CREDIT //////////////// */}
        <a href="https://codepen.io/SofiaSergio/" target="_blank">
          <div id="link">
            <i className="fab fa-codepen" />
            <p>watch other pens</p>
          </div>
        </a>
      </div>
    </div>
  );
}
