import React from 'react';
import PropTypes from 'prop-types';

class ImagePathForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="imagePath-f" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imagePath-f"
            value={ value }
            id="imagePath"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

ImagePathForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
ImagePathForm.defaultProps = {
  value: undefined,
};

export default ImagePathForm;
