import React, { useRef, useState } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Loader from "./Components/Loader"
import { Toaster } from "react-hot-toast";

const App = () => {
  const cursorRef = useRef();
  const [loading, setloading] = useState(true);
  const handleMouseMove = (e) => {
    cursorRef.current.style.left = `${e.pageX}px`;
    cursorRef.current.style.top = `${e.pageY}px`;
  };

  setTimeout(() => {
    setloading(false)
  }, 2000);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="overflow-x-hidden font-sans" onMouseMove={(e) => handleMouseMove(e)}>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <div
            ref={cursorRef}
            className="cursordiv absolute w-[50px] h-[50px]  translate-x-[-50%] translate-y-[-50%] rounded-full pointer-events-none z-40"
          ></div>
          <Toaster/>
        </div>
      )}
    </>
  );
};

export default App;
