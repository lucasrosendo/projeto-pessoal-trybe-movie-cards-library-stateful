import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends Component {
  render() {
    const { subtitulo, onChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          value={ subtitulo }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  subtitulo: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Subtitulo;
