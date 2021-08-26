import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <section>
          <SearchBar />
        </section>
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
