import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ["spaghetti ", "ice cream ", "sushi ", "bologna ", "cheese"]
    };
  }

  render() {
    let displayFood = this.state.food.map((elem, i) => {
      return <h2 key={i}>{elem}</h2>;
    });
    return <div className="App">{displayFood}</div>;
  }
}
export default App;
