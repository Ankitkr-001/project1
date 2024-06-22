import React from "react";
import "./Listing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUserGroup, faLocationDot, faCartShopping, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const Listing = () => {
  return (
    <div className="listing">
      <div className="listings">
        <div className="listing-title">
          <h1>
            {/* <FontAwesomeIcon className="list-icon-blue" icon={faCirclePlus} /> */}
            <span>  Your listing</span>
          </h1>
        </div>

        <div className="lists">
          <div className="upper-lists">
            <div className="list1 hover-purple ">
              <div className="list-title list-icon-purple ">
                <FontAwesomeIcon className="list-icon list-icon-purple " icon={faUserGroup} />
                <h2>People</h2>
              </div>
              <div className="list-para">
                <p>An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.</p>
              </div>
            </div>

            <div className="list1 border-grren hover-green ">
              <div className="list-title list-icon-green ">
              <FontAwesomeIcon className="list-icon list-icon-green " icon={faLocationDot} />
                <h2>Place</h2>
              </div>
              <div className="list-para">
                <p>An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
              </div>
            </div>

            
          </div>

          <div className="lower-lists">
          <div className="list1 border-orange hover-orange ">
              <div className="list-title list-icon-orange">
              <FontAwesomeIcon className="list-icon list-icon-orange" icon={faCartShopping} />
                <h2>Product</h2>
              </div>
              <div className="list-para">
                <p>An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.</p>
              </div>
            </div>

            <div className="list1 border-blue hover-blue ">
              <div className="list-title list-icon-blue">
              <FontAwesomeIcon className="list-icon list-icon-blue" icon={faCalendarCheck} />
                <h2>Program</h2>
              </div>
              <div className="list-para">
                <p>An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
