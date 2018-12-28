import React from "react";
import "./style.css";
// import Greeting from "../component/Greeting"

//this component keeps the score and top score which are changable

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg  bg-warning">
      <div className="brand">
        <a href="/">Tinderee</a>
      </div>
      <div className="text align-center mx-auto">Click to start</div>
      {/* <li>{Greeting}</li> */}

      <div className="" pullright="true">
        Score: 0{props.score} | Top Score: 11{props.topScore}
      </div>
    </nav>
  );
}

export default Navbar;
