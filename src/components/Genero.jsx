import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Genero extends Component {
  render() {
    const { genero, onChange } = this.props;

    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genero }
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genero.propTypes = {
  genero: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Genero;
