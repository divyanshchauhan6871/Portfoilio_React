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
            <div className="row justify-content-around border-bottom mt-2 py-4">
              <div className="col-xl-4 col-lg-6 col-md-4 col-sm-12">
                <img
                  src={pattern}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center">
                <span className="heading px-2">Description </span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia, voluptatibus atque architecto ipsam aliquid
                consectetur iste ut tempora saepe ullam quis aperiam
                consequuntur ad nulla culpa doloribus accusantium totam voluptas
                sequi sint velit. Maiores animi quam cupiditate mollitia
                assumenda?
              </div>
              <div className="col-xl-2 col-lg-6 col-md-2 col-sm-12 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                  }}>
                  Click here
                </button>
              </div>
            </div>
            <div className="row justify-content-around border-bottom py-4">
              <div className="col-4">
                <img
                  src={stone}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-6 text-center">
                <span className="heading px-2">Description </span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia, voluptatibus atque architecto ipsam aliquid
                consectetur iste ut tempora saepe ullam quis aperiam
                consequuntur ad nulla culpa doloribus accusantium totam voluptas
                sequi sint velit. Maiores animi quam cupiditate mollitia
                assumenda?
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                  }}>
                  Click here
                </button>
              </div>
            </div>
            <div className="row justify-content-around border-bottom py-4">
              <div className="col-4">
                <img
                  src={quiz}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-6 text-center">
                <span className="heading px-2">Description </span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia, voluptatibus atque architecto ipsam aliquid
                consectetur iste ut tempora saepe ullam quis aperiam
                consequuntur ad nulla culpa doloribus accusantium totam voluptas
                sequi sint velit. Maiores animi quam cupiditate mollitia
                assumenda?
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
                  }}>
                  Click here
                </button>
              </div>
            </div>
            <div className="row justify-content-around border-bottom py-4">
              <div className="col-4">
                <img
                  src={section}
                  width="100%"
                  className="projectpicture"
                  alt=""
                />
              </div>
              <div className="col-6 text-center">
                <span className="heading px-2">Description </span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia, voluptatibus atque architecto ipsam aliquid
                consectetur iste ut tempora saepe ullam quis aperiam
                consequuntur ad nulla culpa doloribus accusantium totam voluptas
                sequi sint velit. Maiores animi quam cupiditate mollitia
                assumenda?
              </div>
              <div className="col-2 d-flex">
                <button
                  className="clickhere text-white"
                  style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "fitcontnet",
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
