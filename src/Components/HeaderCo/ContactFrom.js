import Button from "@restart/ui/esm/Button";
import React from "react";
import "./ContactFrom.css";
 import { Link } from "react-router-dom";
 import imageContact from '../../image/Group+918.png'
 const ContactFrom = () => {
  return (
    <div className="">
      <div className="contact pt-4 d-grid">
           <h1>Contact Us</h1>
        <div className="row">
        <div className="col-md-7 col-sm-12 p-5 text-left">
          <div class="mb-3 ">
            <input
              type="name"
              class="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Your Name"
            />
          </div>
          <div class="mb-3  ">
            <input
              type="email"
              class="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3  ">
            <input
              type="text"
              class="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div class="mb-3  ">
            <input
              type="text"
              class="form-control input-div"
              id="exampleFormControlInput1"
              placeholder="Subject"
            />
          </div>
          <div class="mb-3">
            <textarea
              placeholder="Message"
              class="form-control input-div-m"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
           <Link>
           <button class="button-48" type="button"><span class="text">Send Message <i class="fas fa-paper-plane ps-2"></i></span></button>
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
