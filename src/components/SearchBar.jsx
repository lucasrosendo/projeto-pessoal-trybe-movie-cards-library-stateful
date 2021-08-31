import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props; // recebe as props passadas por MovieLibrary

    return (
      <form data-testid="search-bar-form">
        <Input
          labelDataTestId="text-input-label"
          inputType="text"
          nome="searchText"
          labelText="Inclui o texto"
          value={ searchText }
          onChange={ onSearchTextChange }
          inputDataTestId="text-input"
        />
        <Input
          labelDataTestId="checkbox-input-label"
          inputType="checkbox"
          nome="bookmarkedOnly"
          labelText="Mostrar somente favoritos"
          checked={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          inputDataTestId="checkbox-input"
        />
        <Select
          labelDataTestId="select-input-label"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          optionDataTestId="select-option"
          nome="selectedGenre"
        />

      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
}.isRequired;

export default SearchBar;
