import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import Div from '../components/Div'
import { searchOmdb, saveMovie, removeMovie, getSavedMovies } from '../utils/API';

class Home extends Component {
  state = {
    searchTerm: '',
    movieData: {},
    savedMovieIds: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    searchOmdb(this.state.searchTerm)
      .then(({ data: movieData }) => {
        console.log(movieData);
        this.setState({
          movieData: {
            title: movieData.Title,
            actors: movieData.Actors,
            plot: movieData.Plot,
            image: movieData.Poster
          }
        })
      })
      .catch(err => console.log(err));
  };

  handleSaveMovies = (movieId) => {
    const movie = this.state.movieList.find(movie => movie.movieId === movieId);

    saveMovie(movie)
      .then(() => {
        const savedMovieIds = [...this.state.savedMovieIds, movieId];
        this.setState({ savedMovieIds })
      })
  }

  retrieveSavedMovies = () => {
    getSavedMovies()
      .then(({ data: dbSavedMovies }) => {
        const savedMovieIds = dbSavedMovies.map(({ movieId }) => movieId);
        this.setState({ savedMovieIds });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <div className="container-fluid">
          <Row>
            <Col xs={12} md={4}>
              <Card title="Search for a Movie">
                <form onSubmit={this.handleFormSubmit}>
                  <input type="text" className="form-control" placeholder="Search for a Movie"
                    onChange={this.handleInputChange}
                    value={this.state.searchTerm}
                    name="searchTerm"
                  />
                  <button type="submit" className="btn">Search For Movies</button>
                </form>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col className="text-center" md={6}>
                {
                  !Object.keys(this.state.movieData).length ? "Search For A Movie To Begin" : (
                          <Card className="text-center" title={this.state.movieData.title} image={this.state.movieData.image}>
                            <p>
                              {this.state.movieData.plot}
                            </p>
                            {/* <button 
                              disabled={this.state.savedMovieIds.includes(movie.movieId) ? true : undefined}
                              onClick={() => this.handleSaveMovie(movie.movieId)}
                              className="btn btn-success btn-sm">
                              Save Movie
                            </button> */}
                          </Card>
                  )
                }
                </Col>
                <Col md={6}>
                  <Div/>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;