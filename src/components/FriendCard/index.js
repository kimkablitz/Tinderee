import React from "react";
import "./style.css";
// let a = []

class FriendCard extends React.Component {

  render() {

    // a = [this.props.friend.image];
    // function shuffle(a) {
    //   for (let i = a.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [a[i], a[j]] = [a[j], a[i]];
    //   }
    //   return a;
    // }
    // shuffle(friendArr);
  
    return (
      <button >
        <div className="card" >
          <div className="img-container">
            <img alt={this.props.friend.name} src={this.props.friend.image} onChange=
              {() => console.log("Changed")} />
          </div>
        </div>
      </button>

    );
  }
}

export default FriendCard;
