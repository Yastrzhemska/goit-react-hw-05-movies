import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { fetchTrendingMovies, fetchMovieDetails } from './api';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="/movies/:movieId/cast" element={<Cast />} />
      <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
      </Routes>
    </div>
  );
};
