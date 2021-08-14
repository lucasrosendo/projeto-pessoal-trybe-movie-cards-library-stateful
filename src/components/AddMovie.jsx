import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    const { onClick } = this.props;
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  };
  render(){
    return (
      <section>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">
            Título
          </label>
          <input type="text" value={ this.state.title }
            data-testid="title-input" onchange={ this.handleInputChange }/>
          <label data-testid="subtitle-input-label">
            Subtítulo
          </label>
          <input type="text" value={ this.state.subtitle }
            data-testid="subtitle-input" onchange={ this.handleInputChange }/>
          <label data-testid="image-input-label">
            Imagem
          </label>
          <input type="text" value={ this.state.imagePath }
            data-testid="image-input" onchange={ this.handleInputChange }/>
          <label data-testid="storyline-input-label">
            Sinopse
          </label>
          <textarea value={ this.state.storyline }
            data-testid="storyline-input" 
            onchange={ this.handleInputChange }></textarea>
          <label data-testid="rating-input-label">Avaliação</label>
            <input type="number" value={ this.state.rating }
              data-testid="rating-input" onchange={ this.handleInputChange }/>
          <label data-testid="genre-input-label">Gênero</label>
          <select value={ this.state.genre }data-testid="genre-input" onchange={ this.handleInputChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
          <button data-testid="send-button">Adicionar filme</button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
