import React from 'react';
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./content/Home";
import About from "./content/About";
import Education from "./content/Education";
import Skills from './content/Skills';
import Contact from './content/Contact';
import Portfolio from './content/Portfolio';

const routes = [
    {
        path:"/",
        main: () => <Home />
    },
    {
        path:"/about",
        main: () => <About />
    },
    {
        path:"/education",
        main: () => <Education />
    },
    {
      path:"/skills",
      main: () => <Skills />
  },
  {
    path:"/protfolio",
    main:() => <Portfolio />
  },
  {
    path:"/contact",
    main: () => <Contact />
},
];



function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/protfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
        <Routes>
          {routes.map(({ path, main }) => (
            <Route key={path} path={path} element={main()} />
          ))}
        </Routes>
    </div>
  );
}

export default App