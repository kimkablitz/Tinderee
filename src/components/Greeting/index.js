
import React from "react";
import "./style.css";

function Greeting(props) {
    return <h1>{props.phrase}</h1>;
  }
  const element = <Greeting phrase="Click to start" />;
