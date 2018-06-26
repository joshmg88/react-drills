import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "balogna", "cheese"],
      userInput: ""
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  render() {
    let displayFood = this.state.foods
      .filter(e => e.includes(this.state.userInput))
      .map((elem, i) => {
        return <h2 key={i}>{elem}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} />
        {displayFood}
      </div>
    );
  }
}

export default App;
