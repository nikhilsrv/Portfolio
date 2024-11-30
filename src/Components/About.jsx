import React from "react";
import { Link } from "react-scroll";
import resume from "../Nikhil_Resume.pdf"

const About = () => {

  return (
    <div name="about" className="w-screen py-16">
      <div className="w-[40%] mx-auto">
        <div className="text-center text-2xl sm:text-3xl font-bold ">
          ABOUT ME
        </div>
        <div className="h-[2px] mt-1 w-[30px] mx-auto border-[2px] space-x-4 border-[#846ADD] bg-[#846ADD] rounded-sm"></div>
      </div>
      <div className="w-[90%] lg:w-[85%] mt-8 mx-auto gap-x-[20px] gap-y-[15px] grid grid-cols-1 md:grid-cols-2">
        <div className="px-[10px]">
          <div className="font-bold text-2xl text-center md:text-left">
            Get to know me !
          </div>
          <div className="mt-8 font-semibold text-[12px] lg:text-[16px]">
            <div>
              Hi there ! I'm Nikhil Srivastava, a final-year student with a
              passion for software development and web technologies.
            </div>
            <div className="mt-4">
              Currently seeking opportunities for software development intern or
              web development intern where I can further hone my skills,
              collaborate with talented teams, and contribute to innovative
              projects.
            </div>
            <div className="mt-4 ">
              I am an ardent learner who is dedicated to continuous learning and
              staying updated with the latest trends in technology. I'm eager to
              leverage my expertise and passion for coding to make meaningful
              contributions.
            </div>
            <div className="w-full flex justify-evenly">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                <div className="bg-[#846ADD] bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out mx-auto md:mx-0 w-[120px] h-9 md:w-[160px] md:h-[50px] text-[20px] rounded-3xl mt-4 flex justify-center font-bold items-center text-[white]">
                  <button className="w-full h-full rounded-lg">Contact</button>
                </div>
              </Link>

              <a href={resume} target="_blank">
                <div className="bg-[#846ADD] bg-gradient-to-top bg-top bg-[length:100%_200%] hover:bg-bottom transition-all duration-1000 ease-out mx-auto md:mx-0 w-[120px] h-9 md:w-[160px] md:h-[50px] text-[20px] rounded-3xl mt-4 flex justify-center font-bold items-center text-[white]">
                  <button className="w-full h-full rounded-lg">Resume</button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-[25px] font-bold tracking-wider text-center md:text-left">
            My Skills
          </div>
          <div className="flex justify-center flex-wrap gap-[10px] mt-8 text-[12px]  md:hidden">
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  HTML
                </div>
                <div className="flex h-full justify-center items-center">
                  HTML
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  CSS
                </div>
                <div className="flex h-full justify-center items-center">
                  CSS
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Javascript
                </div>
                <div className="flex h-full justify-center items-center">
                  Javascript
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Reactjs
                </div>
                <div className="flex h-full justify-center items-center">
                  Reactjs
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Nodejs
                </div>
                <div className="flex h-full justify-center items-center">
                  Nodejs
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Expressjs
                </div>
                <div className="flex h-full justify-center items-center">
                  Expressjs
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Mongodb
                </div>
                <div className="flex h-full justify-center items-center">
                  Mongodb
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Git
                </div>
                <div className="flex h-full justify-center items-center">
                  Git
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Github
                </div>
                <div className="flex h-full justify-center items-center">
                  Github
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  Redux
                </div>
                <div className="flex h-full justify-center items-center">
                  Redux
                </div>
              </div>
            </div>
            <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
              <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                <div className="flex h-full justify-center items-center">
                  C++
                </div>
                <div className="flex h-full justify-center items-center">
                  C++
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 tracking-normal text-[12px] hidden md:block lg:text-[16px] lg:tracking-wider">
            <div className="flex gap-x-[10px]">
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    HTML
                  </div>
                  <div className="flex h-full justify-center items-center">
                    HTML
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    CSS
                  </div>
                  <div className="flex h-full justify-center items-center">
                    CSS
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Javascript
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Javascript
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Reactjs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Reactjs
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Nodejs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Nodejs
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-x-[10px]">
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Expressjs
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Expressjs
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Mongodb
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Mongodb
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Git
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Git
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Github
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Github
                  </div>
                </div>
              </div>
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    Redux
                  </div>
                  <div className="flex h-full justify-center items-center">
                    Redux
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex  gap-x-[10px]">
              <div className="techButton overflow-y-hidden bg-[#E7E7E7]">
                <div className="px-[10px] hover:translate-y-[-100%] duration-500  h-[40px]  font-semibold rounded-sm">
                  <div className="flex h-full justify-center items-center">
                    C++
                  </div>
                  <div className="flex h-full justify-center items-center">
                    C++
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
