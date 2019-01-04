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
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    
    console.log("I was clicked")
    this.setState(prevState => {
      return{
        score: prevState.score +1 
      } 
    })
  
  }


  render() {
    return (
      <Wrapper>
        <Navbar score = {this.state.score}/>
        <Jumbotron />
        <main onClick={this.handleClick}>
          {this.state.friends.map(friend => <FriendCard friend={friend} key={friend.id} />
          )}
        </main>
        <Footer />
      </Wrapper>
    );
  }
}


export default App;
