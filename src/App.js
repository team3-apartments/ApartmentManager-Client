import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateForm from './Components/UpdateForm';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Route exact path="/" component={Home} /> */}

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
