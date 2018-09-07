import React from "react";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      genreID: ""
    };
    this.getGenres = this.getGenres.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    this.getGenres();
  }

  getGenres() {
    // console.log("these are the genres", this.state.genres);
    // make an axios request in this component to get the list of genres from your endpoint GET GENRES
    axios
      .get("/genres")
      .then(res => {
        // console.log("this is the res in axios get in getgenres", res),
          this.setState({
            genres: res.data,
            genreID: res.data[0].id
          });
      })
      .catch(err => console.error(`err in getGenres in search.jsx: ${err}`));
  }

handleSearch() {
 
  // console.log('this is the handle search ', this.state.genreID)
  //send and axios request to server
  axios.get("/search", {
        params: {
          id: this.state.genreID
          }
        })
       //set the returned res to state
       .then( res => {
       // console.log("this is the data in the then in handle search ", res.data),
        this.props.setMovie(res.data)
       })
        //catch error
       .catch(err => console.error('error in handleSearch in search.jsx: ', err))
}

handleSelectChange(e) {
  // console.log('this is the genre id in select ', e.target.value)
  this.setState({
    genreID: e.target.value 
  })
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
          {this.state.genres.map(genre => (<option key={genre.id} value={genre.id}>{genre.name}</option>))}
        </select>

        <br />
        <br />
        {/* on click handleSearch */}
        <button onClick={this.handleSearch}>Search</button>

      </div>
    );
  }
}

export default Search;
