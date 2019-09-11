import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class MovieTable extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: getMovies() }
    }
    
    render() { 
        return ( 

         );
    }
}
 
export default MovieTable;