//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import princess from "./princess.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    princess,
    clickedPrincess: [],
    score: 0
  };

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentPrincess = event.target.alt;
    const PrincessAlreadyClicked =
      this.state.clickedPrincess.indexOf(currentPrincess) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (PrincessAlreadyClicked) {
      this.setState({
        princess: this.state.princess.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPrincess: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          princess: this.state.princess.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPrincess: this.state.clickedPrincess.concat(
            currentPrincess
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Excellent! You Win!");
            this.setState({
              princess: this.state.princess.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPrincess: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.princess.map(princess => (
            <FriendCard
              imageClick={this.imageClick}
              id={princess.id}
              key={princess.id}
              image={princess.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;