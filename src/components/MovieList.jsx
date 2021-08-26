import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="movie-list" className="movie-list">
          { movies.map(
            (movieList) => <MovieCard key={ movieList.title } movie={ movieList } />,
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
