import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends Component {
  render() {
    const { nota, onChange } = this.props;

    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          value={ Number(nota) }
          onChange={ onChange }
          min="0"
          max="5"
          step="0.1"
          type="number"
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  nota: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default Avaliacao;
