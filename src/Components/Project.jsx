import React from "react";
import "./All.css";
import Pi from "./PersonalInformation/Pi";
import Navbar from "./Navbar/Navbar";
import section from "../assets/Section_D.png";
import stone from "../assets/stonepaperscissors.jpg";
import quiz from "../assets/projectquiz.jpg";
import pattern from "../assets/pattern.jpg";
import dcommerce from "../assets/Dcommerce.png";
import clock from "../assets/clock.png";
import qa from "../assets/qa.jpg";
import key from "../assets/keyboardlogo.png";
import calc from "../assets/calclogo.jpg";

function Project() {
  const projects = [
    {
      image: dcommerce,
      description:
        "A complete full stack project based on MERN technology. This was the self paced learning project in which I have learned the practical knowledge of MERN technology and how to implement it into the larger projects. This Project made me build up the strong understanding of the MERN tech stack.",
      link: "https://d-commerce-frontend.vercel.app/home",
    },
    {
      image: clock,
      description:
        "This is the mini project that i have build to test my knowledge of the ES6 concpets of JavaScript and developed the a watch, stopwatch, and a countdown timer.",
      link: "https://indian-clock.vercel.app/",
    },
    {
      image: pattern,
      description:
        "This was the project that I have presented in the department-level Innotech. This was a web-based project showcasing my skillset to draw various patterns.",
      link: "https://pattern-printing.vercel.app/name.html",
    },
    {
      image: qa,
      description:
        "This project is the updated version of my previously worked project of dynamic Quiz bsed on React.",
      link: "https://dc-modern-quiz.netlify.app/",
    },
    {
      image: key,
      description:
        "This project made using React library for practicing the DOM manipulation and event handelling.",
      link: "https://lighting-keys.netlify.app/",
    },
    {
      image: calc,
      description:
        "Developed a fully functional calculator using HTML, CSS, and JavaScript. The application supports basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a responsive design, user-friendly interface, and efficient event handling for seamless user interaction.",
      link: "https://dc-calcl.netlify.app/",
    },
    {
      image: stone,
      description:
        "This is the command-line-based game of Stone Paper Scissors written in the C language.",
      link: "https://replit.com/@DivyanshChauh12/Stone-paper-ans-scissors",
    },
    {
      image: quiz,
      description:
        "This project includes a quiz on several topics like Ramayana, Mahabharat, Cricket, and Football.",
      link: "https://online-quiz-chi.vercel.app/",
    },
    {
      image: section,
      description:
        "This was my individual class project where I collected student information and presented it in a website for departmental use.",
      link: "https://section-d.vercel.app/",
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
                  className="projectpicture"
                  alt="Project"
                />
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6 col-sm-10 text-center">
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
