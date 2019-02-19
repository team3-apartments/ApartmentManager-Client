import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateForm from './Components/UpdateForm';
import DeleteForm from './Components/DeleteForm';
import CreateForm from './Components/CreateForm';
import Login from './Components/Login';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Login />
          {/* <Route exact path="/" component={CreateForm} /> */}
          {/* <Route exact path="/" component={DeleteForm} /> */}
          {/* <Route exact path="/" component={UpdateForm} /> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
