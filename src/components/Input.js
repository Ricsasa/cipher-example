import React, {Component} from 'react';

class Input extends Component {

  constructor(props) {
    super(props);
    
    //Unir los elementos CON los eventos
    this.handleClick = this.handleClick.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleClick(event) {
    this.props.handleCifrar();
  }

  handleTextAreaChange(event) {
    //para MODIFICAR el estado, se usa la función especial this.setState
    this.props.handleTextAreaChange(event.target.value);
  }

  render() {
    return (
      <div>
        <textarea
          value={this.props.value}
          onChange={this.handleTextAreaChange}
        />
        <button
          onClick={this.handleClick}
        >
          Cifrar
      </button>
      </div>
    )
  }
}

export default Input;
