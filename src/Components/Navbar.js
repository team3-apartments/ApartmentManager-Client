import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/home"><img src={require("../Images/qa-logo.png")} alt="" /></a>
                    <div className="Title"> Accommodation Management</div>
                        <ul id="nav-ul">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/addapartment">Add Apartment</Link></li>
                            <li><Link to="/deleteapartment">Delete Apartment</Link></li>
                            {(sessionStorage.getItem("logUser"))=== null? null :<li><Link to="/" onClick={() => { sessionStorage.removeItem("logUser"); window.location.reload() }}>Log out</Link></li>}
                        </ul>

                    </nav>
                                
                                
            </div>
             
        );
    }
}

export default Navbar;

