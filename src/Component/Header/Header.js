import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="bg-gradient-to-tl from-purple-400 to-green-700 h-96 w-full relative">
        <img
          src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="p-36">
          <h1 className="text-white text-6xl font-bold">
         hello,
          </h1>
          <h2 className="text-white text-3xl font-light mt-5">
Welcome
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
