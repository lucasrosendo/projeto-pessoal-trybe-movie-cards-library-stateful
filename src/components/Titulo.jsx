import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titulo extends Component {
  render() {
    const { titulo, onChange } = this.props;

    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          data-testid="title-input"
          name="title"
          value={ titulo }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  titulo: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Titulo;
