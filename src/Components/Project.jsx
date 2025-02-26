import React from "react";
import "./All.css";
import Pi from "./PersonalInformation/Pi";
import Navbar from "./Navbar/Navbar";
import section from "../assets/Section_D.png";
import stone from "../assets/stonepaperscissors.jpg";
import quiz from "../assets/projectquiz.jpg";
import pattern from "../assets/pattern.jpg";

function Project() {
  const projects = [
    {
      image: pattern,
      description:
        "This was the project that I have presented in the department-level Innotech. This was a web-based project showcasing my skillset to draw various patterns.",
      link: "https://pattern-printing.vercel.app/name.html",
    },
    {
      image: stone,
      description:
        "This is the command-line-based game of Stone Paper Scissors written in the C language.",
    },
    {
      image: quiz,
      description:
        "This project includes a quiz on several topics like Ramayana, Mahabharat, Cricket, and Football.",
    },
    {
      image: section,
      description:
        "This was my individual class project where I collected student information and presented it in a website for departmental use.",
    },
  ];

  return (
    <div className="p-3">
      <div className="row highlighted shadow-lg rounded p-4">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-white">
          <Pi />
        </div>

        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 text-white">
          <Navbar />

          {projects.map((project, index) => (
            <div
              key={index}
              className="row justify-content-around border-bottom py-4 text-center">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-10">
                <img
                  src={project.image}
                  width="100%"
                  className="projectpicture"
                  alt="Project"
                />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-10  text-center">
                <span className="heading px-2 d-none d-xl-inline-block mt-xl-2">
                  Description{" "}
                </span>{" "}
                <br />
                {project.description}
              </div>
              <div className="col-xl-2 col-lg-2 col-md-2 col-sm-10 d-flex row mt-md-2 mt-sm-3 mt-xs-2 justify-content-around">
                <button
                  className="clickhere d-block col-10"
                  style={{ fontSize: "1vw" }}>
                  <a
                    href={project.link}
                    className=""
                    target="blank"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      cursor: "pointer",
                    }}>
                    Click here
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
