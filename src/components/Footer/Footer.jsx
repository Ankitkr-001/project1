import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import search_icon from "../../assets/search.png";
import {
  faGoogle,
  faFacebook,
  faInstagram,
  faYoutube,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-con1 con">
          <h3>Hobbycue</h3>
          <p>About Us</p>
          <p>Quick Services</p>
          <p>Work With Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-con2 con">
          <h3>How Do I</h3>
          <p>Sign Up</p>
          <p>Add a Listing</p>
          <p>Claim Listing</p>
          <p>Post a Query</p>
          <p>Add a Blog Post</p>
          <p>Other Queries</p>
        </div>
        <div className="footer-con3 con">
          <h3>Quick Links</h3>
          <p>Listing</p>
          <p>Blog Post</p>
          <p>Shop/Store</p>
          <p>Communty</p>
        </div>
        <div className="footer-con4">
          <div className="social-media">
            <h1>Social Media</h1>
            <div className="icons-f">
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faTelegram} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="fotter-icon">
                <FontAwesomeIcon icon={faMessage} />
              </div>
            </div>
          </div>
          <div className="invite">
            <h1>Invite Friends</h1>
            <div className="">
              <form action="">
                <input
                  className="search1"
                  type="search"
                  placeholder="Search here"
                  aria-label="Search"
                />
                <button className="btn1" type="submit">
                  <img className="img22" src={search_icon} alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
