import React from "react";
// import profilepic from "../assets/profile.pic.png";
import profilepic from "../assets/photo1.png";
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
        Front-end web developer, <br />
        seeking full-time or contract position. <br />
        I'm looking to build and help clients <br />
        improve their website performance <br />
      using hands-on collaboration and <br />
      problem solving skills. <br />
        It is my desire to be a <br />
        part of an exciting team that <br />
         fosters creativity and<br />
          innovation.I like to<br />
           use HTML, CSS and React.js on my websites. <br />
         I love using Tailwind, <br />
         Bootstrap and Materialize CSS.<br />
         It would be a pleasure to learn more about you and how I can be of assistance.
         <br />
         <br />
         </h2>

          <hr  style={{
    color: 'white',
    backgroundColor: 'white',
    height: .2,
    marginLeft:700,
    marginRight:700,
    borderColor : 'white'
}}/>
<p className="text-white text-3l font-light mt-5" id=""><strong>Hobbies : </strong>
Some of my favorite pastimes are enjoying nature with my dog.<br />
I enjoy reading self-development books and listening to podcasts. <br />It is also important for me to maintain a healthy lifestyle and 
<br />to remain active so a pleasant way for me to wind down after a long day is to jog or do Pilates. 
<br />
        <br />
      </p> 

      <div className="p-20">
        <div className="resume1">
          <a href="https://docs.google.com/document/d/1aJkjCVKUdmxN_Spp2HoZ-J4rfgHyd6Sj/edit?usp=sharing&ouid=108318488811351275148&rtpof=true&sd=true">
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
