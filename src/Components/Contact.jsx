import React from "react";
import "./All.css";
import Navbar from "./Navbar/Navbar";
import Pi from "./PersonalInformation/Pi";

function Contact() {
  return (
    <>
      <div className="p-3">
        <div className="row highlighted shadow-lg rounded p-4">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-white">
            <Pi></Pi>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12 text-white">
            <Navbar></Navbar>
            <div className="max-w-lg mx-auto p-6 bg-[#0a0216] text-white rounded-xl shadow-lg border border-blue-500">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">
                Contact Me
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-blue-500 rounded-lg bg-[#1a012a] text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-blue-500 rounded-lg bg-[#1a012a] text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea className="w-full p-2 border border-blue-500 rounded-lg bg-[#1a012a] text-white h-28"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
