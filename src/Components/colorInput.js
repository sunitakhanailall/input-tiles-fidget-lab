import React, {Component} from 'react';

class ColorInput extends Component {
  // Add a constructor with state
  constructor(props){
      super(props);
          this.state= {
              text: null
          
      }
  };

  handleChange = (event) => {
      this.setState({"color": event.target.value});
  }

  render() {
    return(
        <li className="ColorInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-image" style={{backgroundColor: this.state.color}}></div>
            <div className="card-title">Color</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="color" className="colorButton" onChange={this.handleChange}/>
              </div>
              <div className="output" >
                <label for="colorOutput">State: </label>
                <span name="colorOutput">{this.state.color}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default ColorInput;