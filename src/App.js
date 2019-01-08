import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import friendsData from "./friends.json";
import FriendCard from "./components/FriendCard";

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: friendsData,
      score: 0,
      game: []

    }
    this.handleClick = this.handleClick.bind(this)
    this.shuffleCards = this.shuffleCards.bind(this)
  }

  handleClick(cardId) {
    // console.log(cardId)
    const currentList = this.state.game
    currentList.push(cardId)
    console.log(currentList)
   if(currentList.indexOf(cardId) === -1){
     console.log("uhoh")
   }

    this.setState(prevState => {

      return {
        score: prevState.score + 1
      }
    })
    this.shuffleCards(this.state.friends)
  }

  shuffleCards(myArray) {
    let arrLength = myArray.length - 1;
    for (let i = 0; i <= arrLength; i++) {
      const j = Math.floor(Math.random() * (arrLength));
      let temp = myArray[i];
      myArray[i] = myArray[j]
      myArray[j] = temp
    }
    this.setState({ friends: myArray })
  }

  render() {

    return (
      <Wrapper>
        <Navbar score={this.state.score} />
        <Jumbotron />
        {this.state.friends.map(friend => <FriendCard friend={friend} key={friend.id} cardId={friend.id} handleClick={this.handleClick} />)
        }
        <Footer />
      </Wrapper>
    );
  }
}


export default App;
