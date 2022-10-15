
// import { InlineWidget } from "react-calendly";
import './contact.css';

import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="p-20 calendar-btn">
    <div className="calendly-btn">
         <a
        href="
https://calendly.com/jessicaga941/30min?hide_gdpr_banner=1" id="calen-btn"
      >
   Click here to book an interview (❁´◡`❁) {" "}
        
      </a>
      </div>
    <div className="container-form">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"> Name: </label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message"> Message: </label>
        <textarea id="message" required />
      </div>
      <div>
      <button id="buttn" type="submit">{status}</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default ContactForm;








