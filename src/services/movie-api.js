import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const API_KEY = 'c4e62f486bd2f4fbddd12f01862612a1';

const options = {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGU2MmY0ODZiZDJmNGZiZGRkMTJmMDE4NjI2MTJhMSIsIm5iZiI6MTcyNTgwMzA3MS4xNjYwODksInN1YiI6IjY2ZGRhODAzZGVhMzFmMjcwNzZkMmNmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xnpifxnsj5pUgUfTnuI6lFSvE5uOD2HmHMN58qQnWcE'
  }
};

export const getTrandingMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`, options);
    return response.data.results;
}

export const getMovies = async (query) => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`, options);
    return response.data.results;
}

export const getMoviesById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`, options);
    return response.data;
}

export const getMoviesCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`, options);
    return response.data.cast;
}

export const getMoviesReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`, options);
    return response.data.results;
}