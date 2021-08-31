// renderiza a página principal com os componentes de filtro ('SearchBar'), a lista de filmes ('MovieList') e o formulário para criar um novo filme ('AddMovie')

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props; // no estado é definido o texto de busca no input text, um boolean para associar aos filmes marcados ou não, um seletor de gênero e um array de movies recebidos como props de App.js
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange({ target }) {
  // funcao enviada para os componentes do filtr
    const { name } = target; // pega o nome do target (componente do input)
    const value = target.type === 'checkbox' ? target.checked : target.value; // se o type for checkbox, pega como valor target.checked, se não pega como valor o 'value' do target
    this.setState({ // altera o estado deste componente 'MovieLibrary' com o nome do target e o value (definidos nas consts acima)
      [name]: value,
    });
  }

  addMovie(novoFilme) { // funcao que adiciona um novo filme em 'MovieLibrary'
    const { movies } = this.state; // pega os filmes do estado deste componente - 'MovieLibrary'
    this.setState({
      movies: [...movies, novoFilme], // Adiciona o novoFilme (recebido como parametro) ao array de filmes salvos.
    });
  }

  filtrarFilmes() { // função que filtra os filmes da MovieLibrary por meio da SearchBar
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      movies,
    } = this.state; // pega tudo o que está no estado de MovieLibrary
    const arrayDeFilmes = movies // a constante arrayDeFilmes é definida da seguinte forma: pega-se o array de 'movies' ...
      .filter((movie) => { // ... [filtragem 1] filtra o array de movies ...
        if (bookmarkedOnly) { // ... pegando os filmes que estão com 'bookmark' ativo (favoritados com checkbox) da seguinte forma:
          return movie.bookmarked === true; // se o checkbox estiver ativo
        } return movie; // ... retorne apenas os filmes que estiverem favoritados (se não, retorne todos os filmes);
      }).filter((movie) => (movie.title // ... [filtragem 2] depois, pega o resultado da filtragem 1 e filtra-se o array retornado pegando apenas aqueles cuja propriedade 'title' ...
        .toLowerCase() // ... (com todas as letras em minúsculas) ...
        .includes(searchText.toLowerCase())) // ... incluir o que está no estado 'searchText' (também com todas as letras minúsculas) ...
      || movie.subtitle // ou aqueles cuja propriedade 'subtitle' ...
        .toLowerCase() // ... (também com todas as letras minúsculas) ...
        .includes(searchText.toLowerCase()) // ... incluir o que estiver no estado 'searchText' (também com todas as letras minúsculas) ...
      || movie.storyline // ou aqueles cuja propriedade 'storyline' ...
        .toLowerCase() // ... (também com todas as letras minúsculas) ...
        .includes(searchText.toLowerCase())) // ... incluir o que estiver no estado 'searchText' (também com todas as letras minúsculas) ...
      .filter((movie) => movie.genre.includes(selectedGenre)); // por fim, pega o que retornou da filtragem 2 e executa a filtragem 3, pegando apenas aqueles filmes cuja propriedade 'genre' incluir o que estiver no estado 'selectedGenre'
    return arrayDeFilmes; // a const arrayDeMovies é retoranada ao fim da função filtrarFilmes, como sendo o array movies passado pelos 3 filtros acima.
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filtrarFilmes() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MovieLibrary;
