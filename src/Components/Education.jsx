import React from "react";
import "./All.css";
import Pi from "./PersonalInformation/Pi";
import dit from "../assets/dit.jpg";
import kiet from "../assets/KIET.png";
import vvs from "../assets/vvs.jpg";
import Navbar from "./Navbar/Navbar";

function Education() {
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
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-9 xol-xs-12 p-4">
                <div className="scaling p-3 educontainer text-center">
                  <img src={kiet} className="mt-1" width="75%" alt="" />
                  <h5 className="mt-2">Masters of Computer Application</h5>
                  <h6>KIET Group of Institutions Ghaziabad</h6>
                  <p>Current percentage : 82.3</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-9 xol-xs-12 p-4">
                <div className="scaling p-3 educontainer text-center">
                  <img src={dit} className="mt-1" width="90%" alt="" />
                  <h5 className="mt-2">
                    Bachelors of Science Hons(Mathematics)
                  </h5>
                  <h6>DIT University Dehradun</h6>
                  <p>Passed with percentage : 88.3%</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-9 xol-xs-12 p-4">
                <div className="scaling p-3 educontainer text-center">
                  <img src={vvs} className="mt-1" width="100%" alt="" />
                  <h4 className="mt-2">Intermediate</h4>
                  <h5>Vision Valley School Kashipur</h5>
                  <p>Passed with percentage : 85.8</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-11 col-sm-9 xol-xs-12 p-4">
                <div className="scaling p-3 educontainer text-center">
                  <img src={vvs} className="mt-1" width="100%" alt="" />
                  <h4 className="mt-2">Matriculate</h4>
                  <h5>Vision Valley School Kashipur</h5>
                  <p>Passed with percentage : 87.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
