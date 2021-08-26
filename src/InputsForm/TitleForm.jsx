import React from 'react';
import PropTypes from 'prop-types';

class TitleForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="title-f" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            name="title-f"
            value={ value }
            id="title"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

TitleForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
TitleForm.defaultProps = {
  value: undefined,
};

export default TitleForm;
