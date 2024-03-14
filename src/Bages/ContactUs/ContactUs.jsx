import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [supject, setSupject] = useState("");
  const [email, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    let data = { email_address: email, supject, message };
    emailjs
      .send("service_8co2e7k", "template_d5vi31y", data, "paa0tOmZsamyw8Vqb")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div className="d-flex flex-column gap-5 justify-content-center align-items-center vh-100 bg-dark">
        <h2 className="text-center fs-3 text-info pe-3 ps-3 pe-md-0 ps-md-0 ">
          Contact with the Website developer!
        </h2>
        <form
          onSubmit={(e) => sendEmail(e)}
          style={{ boxShadow: " 0 0 20px 20px #00000054" }}
          className="d-flex flex-column gap-4 col-10 col-sm-7 col-md-6 col-lg-4 col-xl-3 p-3  "
        >
          <div>
            <label className="fw-bold fs-5 text-light form-label">
              Email address
            </label>
            <input
              placeholder="Please enter email"
              type="text"
              value={email}
              onChange={(e) => setMail(e.target.value)}
              className="text-info border border-info form-control"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div>
            <label className="fw-bold fs-5 text-light form-label">
              Your Subject
            </label>
            <input
              placeholder="Please enter your Subject"
              type="text"
              value={supject}
              onChange={(e) => setSupject(e.target.value)}
              className="text-info border border-info form-control"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
          <div>
            <label className="fw-bold fs-5 text-light form-label">
              Your Message
            </label>
            <textarea
              rows="4"
              cols="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please enter your Message"
              className="text-info border border-info form-control"
              style={{ backgroundColor: "transparent" }}
            ></textarea>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button type="submit" className="pe-5 ps-5 btn btn-outline-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
