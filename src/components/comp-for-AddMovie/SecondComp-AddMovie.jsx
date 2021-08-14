import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondComp extends Component {
  render() {
    const {
      storyline,
      rating,
      genre,
      handleChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="ddd" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="ddd"
            name="storyline"
            data-testid="storyline-input"
            onChange={ handleChange }
            value={ storyline }
          />
        </label>
        <label htmlFor="eee" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="eee"
            data-testid="rating-input"
            onChange={ handleChange }
            value={ rating }
          />
        </label>
        <label htmlFor="fff" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="fff"
            value={ genre }
            onChange={ handleChange }
            data-testid="genre-input"
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

SecondComp.propTypes = {
  storyline: PropTypes.string,
  rating: PropTypes.string,
  genre: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

SecondComp.defaultProps = {
  storyline: '',
  rating: 0,
  genre: '',
};

export default SecondComp;
