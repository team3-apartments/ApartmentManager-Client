import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateForm from './Components/UpdateForm';
import DeleteApartment from './Components/DeleteApartment';
import AddApartment from './Components/AddApartment';
import Login from './Components/Login';
import Home from './Components/Home';
import ApartmentDetail from './Components/ApartmentDetail';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className= "Mainpara">
          
           <Route exact path="/" component={Login} />
           <Route exact path="/apartmentdetail" component={ApartmentDetail} />
           
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/addapartment" component={Login} />:<Route exact path="/addapartment" component={AddApartment} />}\*/} <Route exact path="/addapartment" component={AddApartment} /> 
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/delete" component={Login} />:<Route exact path="/delete" component={DeleteForm} /> } */} <Route exact path="/deleteapartment" component={DeleteApartment} />
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/updatetrainee" component={Login} />:<Route exact path="/updatetrainee" component={UpdateTrainee} />  } */} <Route exact path="/updateform" component={UpdateForm} />
            {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/home" component={Login} />:<Route exact path="/home" component={Home} />  } */}<Route exact path="/home" component={Home} /> 
               </div> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
