import axios from 'axios';

export const saveMovie = movieData => {
    return axios.post('/api/movies', 
    movieData);
};


export const getSavedMovies = () => {
    return axios.get('/api/movies');
};


export const removeMovie = movieId => {
    return axios.delete(`/api/movies/${movieId}`);
};


export const searchOmdb = query =>
{
    return axios.get(`https://www.omdbapi.com`, {
        params: {
            t: query,
            apikey: "9542a52"
        }
    });
};

export default {
    saveMovie,
    getSavedMovies,
    removeMovie,
    searchOmdb
}