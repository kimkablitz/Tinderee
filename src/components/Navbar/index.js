import React from "react";
import "./style.css";
// import Greeting from "../component/Greeting"


class Navbar extends React.Component {
  
  // constructor() {
  //   super()
  //   this.state = {
  //     // msg: "Click here to start",
  //     isInProgress: true
  //   }
  // }
  render() {
    // console.log(this.props.score)
    // let msg
    // if (this.state.isInProgress){
    //   msg = "CLICK HERE TO START"
    // } else{
      let msg = "GAME IS IN PROGRESS"
    // }

    return (
      <nav className="navbar navbar-expand-lg  bg-warning">
        <div className="brand">
          <a href="/">Tinderee</a>
        </div>
        <div className="text align-center mx-auto ins" style={{ color: "purple" }}>{msg}</div>
        <div className="score" pullright="true">
          Score: {this.props.score} | Top Score: {this.props.topScore}
        </div>
      </nav>
    );
  }

}

export default Navbar;
