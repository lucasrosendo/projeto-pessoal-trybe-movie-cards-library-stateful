import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label htmlFor="xxx" data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            id="xxx"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label htmlFor="yyy" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="yyy"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
        <label htmlFor="zzz" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="zzz"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  searchText: '',
  bookmarkedOnly: false,
  selectedGenre: '',
};

export default SearchBar;
