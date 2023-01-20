import React from "react";
import image1 from "../assets/p1.png";
import image2 from "../assets/unearthlyvenues.png";
import image3 from "../assets/quiz.png";
import image4 from "../assets/passwordgenerator.png";
// import image5 from "";
import image6 from "../assets/workday-Scheduler.jpg";
import "./projects.css";

function Projects() {
  return (

<>

    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

    <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image1} alt="take-a-hike" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Take a Hike</div>
        <p className="text-gray-100 text-base">
        New to hiking? Ease yourself into the outdoors step-by-step with this primer on how to get comfortable getting outside to enjoy the outdoors' natural beauty.Discover the best hiking trails and routes, view maps by city and state and local weather. 🏔️🚵🏻‍♀️
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/take-a-hike" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://frosty-boyd-a7cb21.netlify.app/" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image2} alt="unearthly-venues" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Unearthly Venues</div>
        <p className="text-gray-100 text-base">
         Search for private venues for wedding showers or rehearsal dinners. Historic museums or spooky loft spaces are ideal for epic celebrations. 👻 
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/the-web-spinners" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://safe-garden-63694.herokuapp.com/" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
      </div>
    </div>


    <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image3} alt="progressive-budget" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Quick Quiz</div>
        <p className="text-gray-100 text-base">
        Looking to improve your intelligence? Try this Short thinking game that uses old school riddles and a score card. 🧠
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/Progressive-Budget" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://friendly-easley-d27070.netlify.app/game.html" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
        
      </div>
    </div>

    <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image4} alt="password-generator" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Password Generator</div>
        <p className="text-gray-100 text-base">
        Instantly generate a secure password using the prompts provided. Just copy and paste when you are done! 🔒
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/Generating_password" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://jessicaga9410.github.io/Generating_password/" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
       
      </div>
    </div>


    {/* <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image5} alt="book-search" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Fitness Tracker</div>
        <p className="text-gray-100 text-base">
          Easily find your excersice type resistance or cardio workout routine for a healthier and more active lifestyle. With this easy fitness tracker you can find what kind of activity you need to stay healthy. 
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/Fitness-tracker" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://quiet-plateau-40444.herokuapp.com/?id=6195aded30b5920016d2c2ed" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
      </div>
    </div> */}
    <div className="rounded-lg overflow-hidden shadow-lg  border border-gray-200">
      <img className="w-full" src={image6} alt="note-taker" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-pink-200">Workday Scheduler</div>
        <p className="text-gray-100 text-base">
        It's so much easier to have a schedule in hand when you're busy working. This scheduler allows you to easily update it by hour! ⌚
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
      <a href="https://github.com/jessicaga9410/WorkDay_Scheduler" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6">Github</a>
      <a href="https://jessicaga9410.github.io/WorkDay_Scheduler/" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-6"> Click for website</a>
      </div>
    </div>
    
  </div>
</>
 );
}

export default Projects;
