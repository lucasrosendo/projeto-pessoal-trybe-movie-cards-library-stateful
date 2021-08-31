import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imagem, onChange } = this.props;

    return (
      <label data-testid="image-input-label" htmlFor="imagePath">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          value={ imagem }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imagem: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default ImagePath;
