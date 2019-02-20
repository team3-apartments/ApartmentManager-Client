import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/home"><img src={require("../Images/qa-logo.png")} /></a>
                    <a className="Title">Accommodation Management</a>
                        <ul id="nav-ul">
                            <li><Link to="/addapartment">Add Apartment</Link></li>
                            <li><Link to="/updateform">Update Trainee Info</Link></li>
                            <li><Link to="/deleteapartment">Delete Apartment</Link></li>
                            <li><Link to="/" onClick={() => { sessionStorage.removeItem("Account"); window.location.reload() }}>Log out</Link></li>
                        </ul>

                    </nav>
                    
                    
                    
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div aria-labelledby="navbarDropdown">
                            {/* {JSON.parse(sessionStorage.getItem("Account")) === null ? (
                                <div>
                                </div>
                            ) : ( */}
                                    <div>
                                        {/* <div className="nav-link"></div>
                                        <p> <Link to="/addapartment">Add Apartment</Link></p>
                                        <p className="nav-link"><Link to="/updateform">Update Trainee Info</Link></p>
                                        <p className="nav-link"><Link to="/deleteapartment">Delete Apartment</Link></p>
                                         <p className="nav-link"><Link to="/" onClick={() => { sessionStorage.removeItem("Account"); window.location.reload() }}>Log out</Link></p> */}  
                                    </div>
                                
                        </div>
             
        );
    }
}

export default Navbar;

