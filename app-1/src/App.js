import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  word(val) {
    this.setState({ message: val });
  }
  render() {
    return (
      <div>
        <input onChange={e => this.word(e.target.value)} />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
