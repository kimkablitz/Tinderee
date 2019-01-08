import React from "react";
import "./style.css";


class Navbar extends React.Component {
 
  render() {
  

    return (
      <nav className="navbar navbar-expand-lg  bg-warning sticky-top">
        <div className="brand">
          <a href="/">Tinderee</a>
        </div>
        <div className="text align-center mx-auto ins" style={{ color: "purple" }}>{this.props.msg}</div>
        <div className="score" pullright="true">
          Score: {this.props.score} | Top Score: {this.props.topScore}
        </div>
      </nav>
    );
  }

}

export default Navbar;
