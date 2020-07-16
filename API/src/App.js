import React from 'react';
import './App.css';
import Users from './Users';

class App extends React.Component{

  constructor(props){
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inputValue: '',
      value: ''
    }
  }

  updateInputValue(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit(event) {
    // prevent send us to new page
    event.preventDefault();

    this.setState(() => {
      return{
        value: parseInt(this.state.inputValue)
      }
    })
  }

  render(){

    var userArray = [];
    var i;
    for (i = 0; i< this.state.value; i++){
      userArray.push(
        <Users key={i} />
      )
    }
    return(
      <div>

        <div>
          <input value={this.state.inputValue} onChange={this.updateInputValue} />
          <button onClick={this.handleSubmit} >submit</button>
        </div>

        <div>
          <table>
          <thead>
              <tr>
                <td>Avatar</td>
                <td>username</td>
                <td>password</td>
                <td>gender</td>
              </tr>
          </thead>
          <tbody>
            {userArray}
          </tbody>
          </table>
        </div>

      </div>
    )
  }
}


export default App;