import React from "react";
import "../App.css"
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id="home" className="w-screen py-40">
      <div className="w-[70%] mx-auto">
        <div className="text-4xl font-bold text-center">HII, I'M NIKHIL SRIVASTAVA</div>
        <div className="w-[80%] mx-auto text-xs lg:text-xl font-semibold text-center mt-8">
          A tech enthusiast,an ardent learner who loves building products from
          scratch. Loves competitive programming.
        </div>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
        >
           <div className="bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out w-[150px] h-[50px] rounded-3xl bg-[#846ADD] mx-auto mt-8">
            <button className="w-full h-full text-white font-bold">Projects</button>
        </div>
        </Link>
       
      </div>
    </div>
  );
};

export default Home;
