import React from "react";
import profilepic from "../assets/profile.pic.png";
// import { InlineWidget } from "react-calendly";
import "./about.css";

function About() {
  return (
    <div className="p-12">
      <div className="flex flex-wrap justify-center">
        <div className="w-6/12 sm:w-2/12 px-2">
          <img
            src={profilepic}
            alt="..."
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
      <br />
      <h2 className="text-white text-3xl font-light mt-5">I'm</h2>
      <div className="text-white text-4xl font-bold">
        <h2>Jessica</h2>
      </div>

      <h2 className="text-white text-3xl font-light mt-5" id="about-me-section">
        A Full-Stack Web Developer with healthcare background experience, <br />
        graduated from the University of Central Florida. <br />
        Seeking a Front-end Web Developer position, <br />
        looking forward to creating and building innovative <br />
        software with hands-on collaboration and problem solving. <br />
        Aware of agile development, eager to add creativity and <br />
        innovation to an exciting team.
        <br />
      </h2>

      <div className="p-20">
        <div className="resume1">
          <a href="https://docs.google.com/document/d/1IZibhVb9kiyMWpp4avub-nIgTqPaLvTol6VVVrq2LAk/edit?usp=sharing">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Hire me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
