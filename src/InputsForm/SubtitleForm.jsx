import React from 'react';
import PropTypes from 'prop-types';

class SubtitleForm extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section>
        <label htmlFor="subtitle-f" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            name="subtitle-f"
            value={ value }
            id="subtitle"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

SubtitleForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
SubtitleForm.defaultProps = {
  value: undefined,
};

export default SubtitleForm;
