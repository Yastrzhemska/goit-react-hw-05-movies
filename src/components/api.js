import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = 'c9968193f7dd3654afd6e156c489f5c2';

const options = {
  method: 'GET',
  params: {
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTk2ODE5M2Y3ZGQzNjU0YWZkNmUxNTZjNDg5ZjVjMiIsInN1YiI6IjY1MTY5NDM5OWI4NjE2MDExYzQ4NTVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-4oO3_t1x4vnbC_OWFGbHWqy8lZXJDWLRgTemC9ISY',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day`, options);
  console.log(response.data.results);
  return response.data.results;
};
console.log(fetchTrendingMovies());

export const fetchMovieDetails = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}`, options);
  console.log(response.data);
  return response.data;
};
console.log(fetchMovieDetails(980489));

export const fetchMovieCast = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits`, options);
  console.log(response.data);
  return response.data.cast;
};
console.log(fetchMovieCast());

export const fetchMovieReviews = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, options);
  console.log(response.data);
  return response.data.results;
};
console.log(fetchMovieReviews());

export const fetchMovieSearch = async query => {
  const response = await axios.get(`/search/movie?query=${query}`, options);
  console.log(response.data);
  return response.data.results;
};
console.log(fetchMovieSearch());
