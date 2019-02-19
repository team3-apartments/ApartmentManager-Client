import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateForm from './Components/UpdateForm';
import DeleteApartment from './Components/DeleteApartment';
import AddApartment from './Components/AddApartment';
import Login from './Components/Login';
import FilterBar from './Components/FilterBar';
import OverviewTable from './Components/OverviewTable';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className= "filterbar">
           <FilterBar />
          </div>
          <div className= "Mainpara">
          
           <Route exact path="/" component={Login} />
           <Route exact path="/overviewtable" component={OverviewTable} /> 
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/addapartment" component={Login} />:<Route exact path="/addapartment" component={AddApartment} />}\*/} <Route exact path="/addapartment" component={AddApartment} /> 
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/delete" component={Login} />:<Route exact path="/delete" component={DeleteForm} /> } */} <Route exact path="/deleteapartment" component={DeleteApartment} />
           {/* {(sessionStorage.getItem("Account"))=== null? <Route exact path="/updatetrainee" component={Login} />:<Route exact path="/updatetrainee" component={UpdateTrainee} />  } */} <Route exact path="/updateform" component={UpdateForm} />
               </div> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
