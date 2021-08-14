import React, { Component } from 'react';

import MovieList from './MovieList';

class MovieLibrary extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     serchText:'',
  //     bookmarkedOnly:false,
  //     selectedGenre:'',};
  //   const { movies }= this.props;
  // }

  render() {
    return (
      <div>
        <MovieList movies={ this.props.movies } />
      </div>
    );
  }
}

export default MovieLibrary;
