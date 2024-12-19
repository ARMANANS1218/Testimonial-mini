import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
     
      <div className="text-center">
        
        <h1 className="text-4xl font-bold ">Our Testimonials</h1>
        
        <div className="bg-violet-600 h-[4px] w-1/5 mt-1 mx-auto hover:w-1/3 transition-all duration-500"></div>
        
        <Testimonials reviews={reviews}/>

      </div>
    </div>
  );
};

export default App;
