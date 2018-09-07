import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  // Make an onClick for each list item. If the movies shown is the search results,
  // onClick add it to the database (do it in the main app, and pass down the function)
handleClick(movie) {
  this.props.showFaves ? this.props.deleteMovie(movie.id) : this.props.saveMovie(movie)
}
  // If you're currently showing the fave list, delete the movie instead
  // You can tell which list is currently being rendered based on whether the prop "showFaves" is false (search results) or true (fave list) (within index.jsx)

  render() {
    return (
      <ul className="movies">
        {/* {console.log("These is them props", this.props.movies)} */}
        {this.props.movies.map(movie => {
          return (
            <li key={movie.id} className="movie_item" onClick={() => {this.handleClick(movie)}} >
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
              <div className="movie_description">
                <h2>{movie.original_title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.vote_average}</span>
                  </div>
                </section>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;
