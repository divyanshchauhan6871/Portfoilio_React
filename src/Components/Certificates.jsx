import React from "react";
import Pi from "./PersonalInformation/Pi";
import Navbar from "./Navbar/Navbar";
import rsoft from "../assets/Certificates/Foundations of R Software.jpeg";
import cprog from "../assets/Certificates/Introduction to programming in C.jpg";
import dbms from "../assets/Certificates/Data Base Management System.jpg";
import soft from "../assets/Certificates/Enhancing Soft Skills and Personality.jpg";

function Certificates() {
  return (
    <>
      <div className="p-3">
        <div className="row highlighted shadow-lg rounded p-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-white">
            <Pi></Pi>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 text-white">
            <Navbar></Navbar>
            <div className="row justify-content-around">
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 mt-3 rounded">
                <img
                  src={cprog}
                  className="rounded scaling1"
                  width="90%"
                  alt=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 mt-3 rounded">
                <img
                  src={rsoft}
                  className="rounded scaling1"
                  width="90%"
                  alt=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 mt-3 rounded">
                <img
                  src={dbms}
                  className="rounded scaling1"
                  width="90%"
                  alt=""
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-11 mt-3 rounded">
                <img
                  src={soft}
                  className="rounded scaling1"
                  width="90%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
