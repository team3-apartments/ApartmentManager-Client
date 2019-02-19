import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src={require("../Images/qa-logo.png")} /></a>
                    <a className="Font-size">Accommodation Management</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {JSON.parse(sessionStorage.getItem("Account")) === null ? (
                                <div>
                                </div>
                            ) : (
                                    <div>
                                        <div className="dropdown-divider"></div>
                                        <p className="dropdown-item"> <Link to="/createform">Create Form</Link></p>
                                        <div className="dropdown-divider"></div>
                                        <p className="dropdown-item"><Link to="/updateform">Update Form</Link></p>
                                        <div className="dropdown-divider"></div>
                                        <p className="dropdown-item"><Link to="/deleteform">Delete Form</Link></p>
                                        <div className="dropdown-divider"></div>
                                        <p className="dropdown-item"><Link to="/logout">Log out</Link></p>
                                    </div>
                                )}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

