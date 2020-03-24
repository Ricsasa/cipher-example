import React, {Component} from 'react';

class Output extends Component {
  constructor(props) {
    super(props);

    this.reset = this.reset.bind(this);
  }

  reset(e){
    this.props.resetFunction();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.textValue.toUpperCase()}
        </div>
        <button
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    )
  }
}

export default Output;
