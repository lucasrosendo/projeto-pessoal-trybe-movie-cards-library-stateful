import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstComp from './comp-for-AddMovie/FirstComp-AddMovie';
import SecondComp from './comp-for-AddMovie/SecondComp-AddMovie';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  // Função desenvolvida com a ajuda do repósitório de aulas da T13A no dia 12.2
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Função desenvolvida com a ajuda da pessoa estudante Luíza Antiques
  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <div>
          <FirstComp
            title={ title }
            subtitle={ subtitle }
            imagePath={ imagePath }
            handleChange={ this.handleChange }
          />
          <SecondComp
            storyline={ storyline }
            rating={ rating }
            genre={ genre }
            handleChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </div>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
