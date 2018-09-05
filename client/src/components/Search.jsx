import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    console.log("these are the genres", this.state.genres);
    // make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios
      .get("/genres")
      .then(res => {
        console.log("this is the res in axios get in getgenres", res),
          this.setState({
            genres: res.data,
            genreID: res.data[0].id
          });
      })
      .catch(err => console.error(`err in getGenres in search.jsx: ${err}`));
  }

  render() {
    return (
      <div className="search">
        <button
          onClick={() => {this.props.swapFavorites();}}
        >
          {this.props.showFaves ? "Show Results" : "Show Favorites"}
        </button>
        <br /> <br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}

        <select onChange={this.handleSelectChange}>
          {this.state.genres.map(genre => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        <br />
        <br />

        <button>Search</button>
      </div>
    );
  }
}

export default Search;
