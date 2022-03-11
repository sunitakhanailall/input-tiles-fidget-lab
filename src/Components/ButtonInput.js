import React, {Component} from 'react';

class ButtonInput extends Component {
  // Add a constructor with a state
  constructor(props) {
    super(props);
    this.state = {
      button1: "True",
      
    };
  }
    
// Add a constructor with state
handleButton1 = () => {
    let currentStatus = this.state.button1
    if (currentStatus === "True"){
        this.setState({button1: "False"})
    } else {
        this.setState({button1: "True"})
    }
  }



    

render () {
    return(
        <li className="ButtonInput cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Button</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="button" value="Click Me!" className="btn"  onClick={this.handleButton1}/>
              </div>
              <div className="output">
                <label for="buttonOutput">State: </label>
                <span name="buttonOutput">{this.state.button1}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
}
}

export default ButtonInput;