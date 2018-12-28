import React from "react";
import "./style.css";


function FriendCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.friend.name} src={props.friend.image} />
        </div>
      </div>
    );
  }
  
  export default FriendCard;
  