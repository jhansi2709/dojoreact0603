import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: ''
        
      };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
    const username=this.state.username
  }
  render() {
    const mystyle = {
        
        backgroundColor: "Grey",
        padding: "20px",
        textAlign: "center"
      };

    return (
        <div style={mystyle}>
            <h1>Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <div >
            <label>Username: </label>
            <br />
            <input
              type="text"
              name="username"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          
          <br />
          <Button variant="primary" type="submit">Login</Button>{''}
        </form>
        </div>
     
    );
  }
}

export default Login;
