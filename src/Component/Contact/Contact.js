
// // import { InlineWidget } from "react-calendly";
// import './contact.css';

// import React, { useState } from "react";

// const ContactForm = () => {
//   const [status, setStatus] = useState("Submit");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };
//     let response = await fetch("https://localhost:3000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(details),
//     });
//     setStatus("Submit");
//     let result = await response.json();
//     alert(result.status);
//   };
//   return (
//     <div className="p-20 calendar-btn">
//     <div className="calendly-btn">
//          <a
//         href="
// https://calendly.com/jessicaga941/30min?hide_gdpr_banner=1" id="calen-btn"
//       >
//    Click here to book an interview (❁´◡`❁) {" "}
        
//       </a>
//       </div>
//     <div className="container-form">
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name"> Name: </label>
//         <input type="text" id="name" required />
//       </div>
//       <div>
//         <label htmlFor="email"> Email: </label>
//         <input type="email" id="email" required />
//       </div>
//       <div>
//         <label htmlFor="message"> Message: </label>
//         <textarea id="message" required />
//       </div>
//       <div>
//       <button id="buttn" type="submit">{status}</button>
//       </div>
//     </form>
//     </div>
//     </div>
//   );
// };

// export default ContactForm;



import React from "react";
import "./contact.css";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div>
      <section className="text-gray-100 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-100">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Contact me here if you have any questions
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-200"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">Jessicaga941@gmail.com</a>
               
                <span className="inline-flex">
                 
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





