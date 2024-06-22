import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faCirclePlay,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testi-box">
        <div className="texti-title">
          <div className="quote">
            <div className="quote-icon">
              <FontAwesomeIcon className="testi-icon" icon={faQuoteLeft} />
            </div>
            <h1>TestiMonials</h1>
          </div>
        </div>
        <div className="testi-para">
          <p>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, whicha can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
        <div className="testi-detail">
          <div className="testi-play">
            <div className="play">
              <FontAwesomeIcon
                className="testi-play-icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="progress-bar">
              <div className="player"></div>
            </div>
            <div className="player-profile">
              <div className="player-user-profile">
                <FontAwesomeIcon className="player-user-profile-icon" icon={faMicrophone} />
              </div>
            </div>
          </div>

          <div className="testi-user">
            <div className="testi-user-profile">
              
            </div>
            <div className="testi-user-text">
              <h3>Shubha Nagarajan</h3>
              <p>Clasic Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
