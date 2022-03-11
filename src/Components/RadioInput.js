import React, {Component} from 'react';

class RadioInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      button1: "",
      
    };
  }
    
// Add a constructor with state
handleChange = (event) => {
    this.setState({"radio": event.target.value});
  }

  render () {
      return(
        <li className="RadioInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Radio</div>
            <p className="card-text">
              <div className="input">
                <input type="radio" name="radioInput" value="1" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="2" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="3" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="4" className="checkboxInput" onChange={this.handleChange}/>
                <input type="radio" name="radioInput" value="5" className="checkboxInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label for="radioOutput">State: </label>
                <span name="radioOutput">{this.state.radio}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
      )
  } 
}

export default RadioInput;