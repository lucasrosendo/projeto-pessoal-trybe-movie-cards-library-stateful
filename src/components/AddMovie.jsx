import React from 'react';
import PropTypes from 'prop-types';
import SubtitleForm from '../InputsForm/SubtitleForm';
import TitleForm from '../InputsForm/TitleForm';
import ImagePathForm from '../InputsForm/ImagePathForm';
import StorylineForm from '../InputsForm/StorylineForm';
import RatingForm from '../InputsForm/RatingForm';
import GenreForm from '../InputsForm/GenreForm';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

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
    const { title, subtitle, imagePath, storyline,
      rating, genre } = this.state;
    return (
      <section>
        <form data-testid="add-movie-form">
          <TitleForm value={ title } onChange={ this.handleChange } />
          <SubtitleForm value={ subtitle } onChange={ this.handleChange } />
          <ImagePathForm value={ imagePath } onChange={ this.handleChange } />
          <StorylineForm value={ storyline } onChange={ this.handleChange } />
          <RatingForm value={ rating } onChange={ this.handleChange } />
          <GenreForm value={ genre } onChange={ this.handleChange } />
          <button
            data-testid="send-button"
            type="submit"
            onClick={ this.handleClick }
          >
            Adicionar filme
          </button>
        </form>

      </section>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
