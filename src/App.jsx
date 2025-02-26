import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Home />}></Route>
        <Route path="/certificates" element={<Home />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
