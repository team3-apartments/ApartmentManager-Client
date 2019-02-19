import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      account: [],
      username: null,
      password: null
    };
  }

  checkUser = () => {

    axios.post(' #URL# ', {

      username: this.state.username,
      password: this.state.password
    })
      .then((response) => {
        if (response.data[0] == this.state.username) {
          sessionStorage.setItem("logUser", response.data[0]);

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
                <h3 className="text-center mb-4">Log In</h3>
                <div className="alert alert-danger">
                  <a className="close font-weight-light" data-dismiss="alert" href="">×</a>Please enter all fields to login.
                </div>
                <fieldset onSubmit={this.handleSubmit}>
                  <div className="form-group has-error">
                    <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Username*" name="username" type="text" />
                  </div>
                  <div className="form-group has-success">
                    <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Password*" name="password" type="password" />
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