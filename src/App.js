import React, { Component } from "react";
import "./App.css";
import MovieTable from "./components/MovieTable";

class App extends Component {
  render() {
    return (
      <main className="container">
        <MovieTable></MovieTable>
      </main>
    );
  }
}

export default App;
