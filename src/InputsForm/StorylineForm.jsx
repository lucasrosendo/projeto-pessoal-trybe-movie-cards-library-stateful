import React from 'react';
import PropTypes from 'prop-types';

class StorylineForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="storyline-f" data-testid="storyline-input-label">
          Sinopse
          <input
            data-testid="storyline-input"
            type="textarea"
            name="storyline-f"
            value={ value }
            id="storyline"
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

StorylineForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
StorylineForm.defaultProps = {
  value: undefined,
};

export default StorylineForm;
