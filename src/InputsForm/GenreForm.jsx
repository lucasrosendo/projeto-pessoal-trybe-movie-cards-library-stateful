import React from 'react';
import PropTypes from 'prop-types';

class GenreForm extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="genre-f" data-testid="genre-input-label">
          Gênero
          <select
            data-testid="genre-input"
            type="text"
            name="genre-f"
            value={ value }
            id="genre"
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

GenreForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
GenreForm.defaultProps = {
  value: undefined,
};

export default GenreForm;
