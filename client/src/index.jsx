import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";
// import AnyComponent from './components/filename.jsx'
import Search from "./components/Search.jsx";
import Movies from "./components/Movies.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesByGenre: [],
      movies: [],
      favorites: [],
      showFaves: false
    };

    this.swapFavorites = this.swapFavorites.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
    this.setMovie = this.setMovie.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }
  // make an axios request to your server on the GET SEARCH endpoint
  getMovies() {
    // console.log("hitting the getMOVIES in client");
    axios
      .get("/movies")
      .then(res => {
        // console.log('RES.DATA in axios.getMOVIES', res.data)  
        this.setState({ movies: res.data })
        // console.log('this is the STATE', this.state.movies)
      })
      .catch(err => console.error(`err in getMovies in index.jsx: ${err}`));
  }
  
  setMovie(movies) {
    // console.log('these are the movies being passed in by the handle search ', movies)
    this.setState({
      movies: movies
    })
  }
  

  saveMovie(movie) {
    console.log("you saved this to your favorites", movie);
    // same as above but do something diff
    axios.post("/save", movie)
    
    
  }

  deleteMovie() {
    console.log("you deleted this from your favorites");
    // same as above but do something diff
  }

  swapFavorites() {
    //dont touch
    this.setState({
      showFaves: !this.state.showFaves
    });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar">
          <h1>Bad Movies</h1>
        </header>

        <div className="main">
          <Search
            swapFavorites={this.swapFavorites}
            showFaves={this.state.showFaves}
            setMovie={this.setMovie}
          />
          <Movies
            movies={
              this.state.showFaves ? this.state.favorites : this.state.movies
            }
            showFaves={this.state.showFaves}
            saveMovie={this.saveMovie}
            deleteMovie={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
