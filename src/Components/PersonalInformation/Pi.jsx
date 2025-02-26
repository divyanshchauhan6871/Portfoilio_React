import React from "react";
import "./Pi.css";
import "../All.css";
import profilePic from "../../assets/profilePic.jpg";
import git from "../../assets/github.png";
import insta from "../../assets/insta.png";
import linkedin from "../../assets/linked.png";
import leet from "../../assets/leetcode.jpg";

function Pi() {
  return (
    <>
      <div className="Picontainer p-2 mt-4">
        <div className="text-center mt-2">
          <img src={profilePic} className="profilepic rounded" />
          <div className="p-1 mt-3">
            <button className="sp sizes sp1">Divyansh Chauhan</button>
          </div>
          <div className="p-1">
            <button className="sp sizes sp1">+91 7983817872</button>
          </div>
          <div className="p-1 mb-3">
            <button className="sp sizes sp1">dchauhan6871@gmail.com</button>
          </div>
          <div className="d-flex justify-content-around mt-3">
            <div className="hyperlinks socialnetworking">
              <a
                className=""
                href="https://www.linkedin.com/in/divyansh-chauhan-931684237/"
                target="blank">
                <img width="60%" src={linkedin} alt="" />
              </a>
            </div>
            <div className="hyperlinks socialnetworking">
              <a
                className=""
                href="https://github.com/divyanshchauhan6871"
                target="blank">
                <img
                  width="60%"
                  className="bg-light rounded"
                  src={git}
                  alt=""
                />
              </a>
            </div>
            <div className="hyperlinks socialnetworking">
              <a
                className=""
                href="https://www.instagram.com/sanatani_divyansh8032/"
                target="blank">
                <img width="60%" src={insta} alt="" />
              </a>
            </div>
            <div className="hyperlinks socialnetworking">
              <a
                className=""
                href="https://leetcode.com/u/divyansh6871/"
                target="blank">
                <img
                  width="60%"
                  className="bg-light rounded"
                  src={leet}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pi;
