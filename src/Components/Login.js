import React, { Component } from 'react';
import axios from 'axios';
import { TestURL, CheckPassword} from '../Constants'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: null
    };
  }

  handlePassword = event => {
     this.setState({
       password: event.target.value
     })
  }

  checkUser = () => {

    axios.get(TestURL+CheckPassword + this.state.password) 
      .then((response) => {
        let message = response.data;
        if (message.message === ("Login success")) {
          sessionStorage.setItem("logUser", JSON.stringify(message));
          window.location.reload(); 
          alert(message.message + ".");
          console.log(message);

        }else {
          alert(message.message + ". Please enter the correct password.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = (e) => {

    this.checkUser();

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <div className= "login-box">
          <div>
            <div className="col-md-6 mx-auto">
              <div className="card card-body">
                <h1 className="text-center mb-4">Admin</h1>
                <div className="alert alert-danger">
                  <a className="close font-weight-light" data-dismiss="alert" href="">×</a>Please enter the password to log in.
                </div>
                <fieldset onSubmit={this.handleSubmit }>
                  <div className="form-group has-success">
                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password*" name="password" type="password" required/>
                  </div>
                  <input className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} value="Log In" type="submit" />
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login; 




