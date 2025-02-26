import React from "react";
import "./All.css";
import Pi from "./PersonalInformation/Pi";
import section from "../assets/Section_D.png";
import stone from "../assets/stonepaperscissors.jpg";
import quiz from "../assets/projectquiz.jpg";
import pattern from "../assets/pattern.jpg";
import Navbar from "./Navbar/Navbar";

function Project() {
  return (
    <>
      <div className="p-3">
        <div className="row highlighted shadow-lg rounded p-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-white">
            <Pi></Pi>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 text-white">
            <Navbar />

            <div className="row justify-content-around border-bottom py-4 text-center">
              <div className="col-3">
                <img
                  src={pattern}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-7 text-center">
                <span className="heading px-2">Description </span> <br />
                This was the project that I have presented in the department
                level Innotech. This was the web based project showcasing my
                skillset to draw the various patterns.
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                    fontSize: "1vw",
                  }}>
                  Click here
                </button>
              </div>
            </div>

            <div className="row justify-content-around border-bottom py-4 text-center">
              <div className="col-3">
                <img
                  src={stone}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-7 text-center">
                <span className="heading px-2">Description </span> <br />
                This is the Command line based game of Stone Papar Scissors game
                writern in the C language.
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                    fontSize: "1vw",
                  }}>
                  Click here
                </button>
              </div>
            </div>
            <div className="row justify-content-around border-bottom py-4 text-center">
              <div className="col-3">
                <img
                  src={quiz}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-7 text-center">
                <span className="heading px-2">Description </span> <br />
                This Project include the quiz on several topics like Ramayana,
                Mahabharat, Cricket and Football.
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                    fontSize: "1vw",
                  }}>
                  Click here
                </button>
              </div>
            </div>
            <div className="row justify-content-around border-bottom py-4 text-center">
              <div className="col-3">
                <img
                  src={section}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-7 text-center">
                <span className="heading px-2">Description </span> <br />
                This was my individual class project in which I was assigned to
                collect the information of the students studying along side and
                present them in the website to access them when needed for the
                department.
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                    fontSize: "1vw",
                  }}>
                  Click here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
