import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sinopse extends Component {
  render() {
    const { copy, onChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          data-testid="storyline-input"
          name="storyline"
          value={ copy }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  copy: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Sinopse;
