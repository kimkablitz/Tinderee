import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import FriendCard from "./components/FriendCard";


class App extends Component {
  state = {
    friends: friends
  }

  render() {
    return (
      <Wrapper>

        <Navbar />
        <Jumbotron>

        </Jumbotron>
        {this.state.friends.map(friend => {

          return (
            <FriendCard friend={friend} key={friend.id} />
          )
        })}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
