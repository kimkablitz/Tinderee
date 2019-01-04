import React, { Component } from "react";
import "./style.css";

import friendsData from "./src/friends.json";
import FriendCard from "./src/components/FriendCard";

class MainContent extends Component {
  constructor() {
    super()
    this.state = {
      friends: friendsData
    }
  }

  render() {
    return (
    
        <div className="list-of-cards container">
          {this.state.friends.map(friend => <FriendCard friend={friend} key={friend.id} />
          )}
        </div>

    );
  }
}


export default MainContent;
