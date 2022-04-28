import React from "react";
import { Link } from "react-router-dom";
import imageContact from '../../image/Group+918.png';
import "./ContactFrom.css";
 const ContactFrom = () => {
  return (
    <div className="">
      <div className="contact pt-4 d-grid">
           <h1>Contact Us</h1>
        <div className="row">
        <div className="col-md-7 col-sm-12 p-5 text-left">
          <div className="mb-3 ">
            <input
              type="name"
              className="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3  ">
            <input
              type="email"
              className="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
          </div>
          <div className="mb-3  ">
            <input
              type="text"
              className="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3  ">
            <input
              type="text"
              className="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Subject"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Message"
              className="form-control input-div-m"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
           <Link>
           <button className="button-48" type="button"><span className="text">Send Message <i className="fas fa-paper-plane ps-2"></i></span></button>
           </Link>
        </div>
        <div className="col-md-5 col-sm-12 p-4 mt-4">
        <img
         src={imageContact}
         alt='Standard Turnaround Time'
         loading="lazy"
         width="100%"
         />
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
