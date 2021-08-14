import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, 
      selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <section>
        <form data-testid="search-bar-form">
          <label htmlFor="searchText" 
            data-testid="text-input-label"
          >
            Inclui o texto:
          </label>
          <input
            type="text"
            value={ searchText }
            onChange={ onSearchTextChange }
            data-testid="text-input"
          />
          <label
            htmlFor="bookmarkedOnly"
            data-testid="checkbox-input-label">
            Mostrar somente favoritos
          </label>
          <input 
            type="checkbox"
            value={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
          <label
            htmlFor="selectedGenre"
            data-testid="select-input-label"
          >
            Filtrar por gênero
          </label>
          <select
            data-testid="select-input-label"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </section>
    );
  }
}

export default SearchBar;
