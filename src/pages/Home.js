import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Row from '../components/Row';
import Col from '../components/Col';
import Card from '../components/Card';
import Div from '../components/Div'
import {withFirebase} from '../components/Firebase/index'
import { searchTmdb, saveMovie, recMovies, removeMovie, getSavedMovies } from '../utils/API';

class HomeBase extends Component {
  state = {
    searchTerm: '',
    movieData: {},
    savedMovieIds: [],
    movieId: "",
    movieRec: [],
    currentChat: []
  };

  // componentDidMount() {
  //   this.props.firebase.chat().on('value', snapshot => {
  //     this.setState({currentChat: Object.values(snapshot.val())})
  //   }) 
  // }


  reRun = (title) => {
    this.setState({
      searchTerm: title
    }, this.mainSearch)
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.mainSearch();
  }

  // Main function to search for a movie
  mainSearch = () => {
    searchTmdb(this.state.searchTerm)
      .then(({ data: movieData }) => {
        console.log(movieData);
        this.setState({
          movieData: {
            title: movieData.results[0].title,
            movieId: movieData.results[0].id,
            plot: movieData.results[0].overview,
            image: movieData.results[0].poster_path,
            vote: movieData.results[0].vote_average
          }
        }, this.recSearch);
      })
      .catch(err => console.log(err));
      this.setState({searchTerm: ""})
  };

  
  recSearch = () => {
    console.log(this.state.movieData.movieId);
    recMovies(this.state.movieData.movieId)
      .then(({ data: movieRec }) => {
        console.log(movieRec);
        this.setState({movieRec: movieRec.results
          // movieRec: {
          //   title: movieRec.results.title,
          //   movieId: movieRec.results.id,
          //   plot: movieRec.results.overview,
          //   image: movieRec.results.poster_path,
          //   vote: movieRec.results.vote_average
          // }
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
    console.log(this.state)
    console.log(this.props)
    return (
      <React.Fragment>
        <Navbar />
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
                  <button type="submit" className="btn btn-outline-info">Search For Movies</button>
                </form>
              </Card>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col className="text-center" md={6}>
                {
                  !Object.keys(this.state.movieData).length ? "Search For A Movie To Begin" : (
                          <Card className="text-center" title={this.state.movieData.title} image={this.state.movieData.image} vote={this.state.movieData.vote} movieId={this.state.movieData.movieId}>
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
                  <Div>
                    {
                      this.state.movieRec.map(movie => (
                        <Card secondSearch reRun={this.reRun} key={movie.id} className="text-center" title={movie.title} image={movie.poster_path} vote={movie.vote_average} id={movie.id}>
                            {/* <p>
                              {movie.overview}
                            </p> */}
                            {/* <button 
                              disabled={this.state.savedMovieIds.includes(movie.movieId) ? true : undefined}
                              onClick={() => this.handleSaveMovie(movie.movieId)}
                              className="btn btn-success btn-sm">
                              Save Movie
                            </button> */}
                          </Card>
                      ))
                    }
                  
                  </Div>

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

const Home = withFirebase(HomeBase)

export default Home;