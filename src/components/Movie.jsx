import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.movie._id,
      title: props.movie.title,
      genre: props.movie.genre.name,
      numberInStock: props.movie.numberInStock,
      dailyRentalRate: props.movie.dailyRentalRate,
      publishDate: props.movie.publishDate
    };
  }

  onDelete = () => {
    this.props.onDelete(this.state.id);
  };

  render() {
    return (
      <div className="row movie">
        <div className="col-2">{this.state.title}</div>
        <div className="col-2">{this.state.genre}</div>
        <div className="col-2">{this.state.numberInStock}</div>
        <div className="col-2">{this.state.dailyRentalRate}</div>
        <button className="btn btn-danger col-2" onClick={this.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default Movie;
