import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      labelText,
      labelDataTestId,
      value,
      checked,
      onChange,
      inputDataTestId,
      nome,
      inputType,
    } = this.props; // props recebidas de SearchBar, perceba que algumas props não precisavam ser necessariamente passadas como props, poderiam ter sido definidas aqui diretamente, como nome, labelDataTestId por exemplo

    return (
      <label
        htmlFor={ nome }
        data-testid={ labelDataTestId }
      >
        { labelText }
        <input
          data-testid={ inputDataTestId }
          type={ inputType }
          name={ nome }
          value={ value }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  labelText: PropTypes.string,
  labelDataTestId: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  inputDataTestId: PropTypes.func,
  nome: PropTypes.string,
  inputType: PropTypes.string,
}.isRequired;

export default Input;
