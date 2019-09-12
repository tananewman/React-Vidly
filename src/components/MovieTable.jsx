import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import "./MovieTable.css";
import Movie from "./Movie";

class MovieTable extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: getMovies() };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(movieId) {
    this.setState({
      movies: this.state.movies.filter(m => m._id !== movieId)
    });
  }

  getMovieTitle() {
    return <p>Showing {this.state.movies.length} movies in the database.</p>;
  }

  getMovieHeader() {
    return (
      <div className="row movieTableHeader">
        <div className="col-2">Title</div>
        <div className="col-2">Genre</div>
        <div className="col-2">Stock</div>
        <div className="col-2">Rate</div>
        <div className="col-2">Delete</div>
      </div>
    );
  }

  getMovieElements() {
    return this.state.movies.map(movie => (
      <Movie key={movie._id} movie={movie} onDelete={this.handleDelete} />
    ));
  }

  render() {
    return (
      <div>
        {this.getMovieTitle()}
        {this.getMovieHeader()}
        {this.getMovieElements()}
      </div>
    );
  }
}

export default MovieTable;
