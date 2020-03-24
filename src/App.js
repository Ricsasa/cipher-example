import React, { Component } from 'react';
import Input from './components/Input';
import Output from './components/Output';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {mostrarOutput: false, value: '' };

    this.handleCifrar = this.handleCifrar.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleCifrar(event) {
    //para LEER el estado, se lee directamente
    this.setState({mostrarOutput: true});
  }

  handleTextAreaChange(text) {
    //para MODIFICAR el estado, se usa la función especial this.setState
    this.setState({value: text});
  }

  reset(){
    this.setState({mostrarOutput: false, value: ''});
  }

  render() {
    return (
      <div className="App">
          <Input 
            handleCifrar={this.handleCifrar}
            handleTextAreaChange={this.handleTextAreaChange}
            value={this.state.value}
          />
          <hr />
          { this.state.mostrarOutput &&
            <Output 
              textValue={this.state.value}
              resetFunction={this.reset}
            />
          }
      </div>
    );
  }
}

export default App;
