import React from "react";
import "./All.css";
import Pi from "./PersonalInformation/Pi";
import Navbar from "./Navbar/Navbar";

function Home() {
  return (
    <>
      <div className="p-3">
        <div className="row highlighted shadow-lg rounded p-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-white">
            <Pi></Pi>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 text-white">
            <Navbar></Navbar>
            <div className="text-center mt-4">
              <p className="heading text-center">Career Objective</p>
              <p className="details text-center pb-3">
                My name is Divyansh Chauhan. I am a dynamic person with
                knowledge and experience of cross cultural fields like
                Mathematics and Computer Science.
              </p>
            </div>
            <p className="heading text-center">Language proficiency</p>
            <div className="details text-center pb-3 d-flex justify-content-around row">
              <div className="lanugages col-xl-2 col-lg-3 col-md-4 col-5 col-sm-4 mx-2 my-1">
                C
              </div>
              <div className="lanugages col-xl-2 col-lg-3 col-md-4 col-5 col-sm-4 mx-2 my-1">
                C++
              </div>
              <div className="lanugages col-xl-2 col-lg-3 col-md-4 col-5 col-sm-4 mx-2 my-1">
                Java
              </div>
              <div className="lanugages col-xl-2 col-lg-3 col-md-4 col-5 col-sm-4 mx-2 my-1">
                python
              </div>
              <div className="lanugages col-xl-2 col-lg-3 col-md-4 col-5 col-sm-4 mx-2 my-1">
                JavaScript
              </div>
            </div>
            <p className="heading text-center mt-3">Skills Acquired</p>
            <div className="px-5 row justify-content-around">
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">HTML</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill1"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">CSS</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill2"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">JavaScript</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill3"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">React</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill4"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">Node.js</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill5"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">Express.js</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill6"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">MongoDB</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill7"></div>
                  </div>
                </div>
              </div>
              <div className="row col-xl-5 col-lg-5 col-12">
                <button className="col-4 skillheading">UI/UX</button>
                <div className="col-8">
                  <div className="skillouter mt-5 mb-2">
                    <div className="skill8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
