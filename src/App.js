import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import DeleteApartment from './Components/DeleteApartment';
import AddApartment from './Components/AddApartment';
import Login from './Components/Login';
import Home from './Components/Home';
import ApartmentDetails from './Components/ApartmentDetails';
import ApartmentDetail from './Components/ApartmentDetail';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className= "mainPara">

          {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/" component={Login} />:<Route exact path="/" component={Home} />}
           {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/apartmentDetails" component={Login} />:<Route exact path="/apartmentDetails" component={ApartmentDetails} />}
           {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/apartmentDetail" component={Login} />:<Route exact path="/apartmentDetail" component={ApartmentDetail} />}
            {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/addapartment" component={Login} />:<Route exact path="/addapartment" component={AddApartment} />}
            {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/deleteapartment" component={Login} />:<Route exact path="/deleteapartment" component={DeleteApartment} /> } 
            {(sessionStorage.getItem("logUser"))=== null? <Route exact path="/home" component={Login} />:<Route exact path="/home" component={Home} />  }
               </div> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
