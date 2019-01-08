import React from "react";
import "./style.css";
// let a = []

class FriendCard extends React.Component {

  render() {
    // console.log(this.props.friend.id)

    // const shuffle = (id) => {

    //   for (let i = a.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [a[i], a[j]] = [a[j], a[i]];
    //   }
    // }
   

    return (
      <button >
        <div className="card" >
          <div className="img-container" onClick = {() => this.props.handleClick (this.props.cardId)}>
            <img alt={this.props.friend.name} src={this.props.friend.image} />
          </div>
        </div>
      </button>

    );
  }
}

export default FriendCard;
