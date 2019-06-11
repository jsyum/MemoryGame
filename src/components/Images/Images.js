import React, { Component } from "react";
import Paintings from "./Paintings";
import Header from "../Header/Header";
import "./Images.css";

class Images extends Component {
  state = {
    score: 0,
    topScore: 0,
    paintings: [
      {
        id: 1,
        name: "rothko chapel",
        src: "https://i.ibb.co/PZrpHPg/chapel.jpg",
        clicked: false
      },
      {
        id: 2,
        name: "with my back to the world",
        src: "https://i.ibb.co/w0KFQRF/martinback.jpg",
        clicked: false
      },
      {
        id: 3,
        name: "gratitude",
        src: "https://i.ibb.co/dj7Kmt7/martingratitude.jpg",
        clicked: false
      },
      {
        id: 4,
        name: "buds",
        src: "https://i.ibb.co/xJS5177/martinbuds.jpg",
        clicked: false
      },
      {
        id: 5,
        name: "faraway love",
        src: "https://i.ibb.co/QHP1xMd/martinlove.jpg",
        clicked: false
      },
      {
        id: 6,
        name: "morning",
        src: "https://i.ibb.co/PzKTjwL/martinmorning.jpg",
        clicked: false
      },
      {
        id: 7,
        name: "rothko grey",
        src: "https://i.ibb.co/4PYM0xR/rothkogrey.jpg",
        clicked: false
      },
      {
        id: 8,
        name: "four darks in red",
        src: "https://i.ibb.co/V3DCgB8/rothkored.jpg",
        clicked: false
      },
      {
        id: 9,
        name: "rust and blue",
        src: "https://i.ibb.co/1J7Rb1H/rothkorust.jpg",
        clicked: false
      }
    ]
  };

  changeClickedState = id => {
    this.state.paintings.map(painting => {
      if (painting.id === id && painting.clicked === false) {
        painting.clicked = true;
        this.setState({ score: this.state.score + 1 });

        if (this.state.score >= this.state.topScore) {
          this.setState({
            topScore: this.state.score + 1
          });
        }
      } else if (painting.id === id && painting.clicked === true) {
        this.setState({ score: 0 });
        this.state.paintings.map(painting => {
          painting.clicked = false;
          return painting;
        });
      }
      return painting;
    });
    this.shuffleArr(this.state.paintings);
  };

  //Fisher-Yates shuffle algorithm
  shuffleArr = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Paintings
          paintings={this.state.paintings}
          changeClickedState={this.changeClickedState}
        />
      </div>
    );
  }
}
export default Images;
