import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="rating-f" data-testid="rating-input-label">
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            name="rating-f"
            value={ value }
            id="rating"
            onChange={ onChange }
            defaultValue="0"
          />
        </label>
      </section>
    );
  }
}

RatingForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
RatingForm.defaultProps = {
  value: undefined,
};

export default RatingForm;
