import React, { Component } from 'react';
import axios from 'axios';

class DeleteApartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null,
            loggedInUser: JSON.parse(sessionStorage.getItem("Account")),
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        });
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    clearSession = () => {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    handleAccountToDelete = (id) => {
        axios({
            method: "delete",
            // url:  Constants.hotspot_ip + ":8080/HotSpot-Project/api/userAccount/deleteAccount/" + id,
        }).then(response => {
            let deleteAccount = response.data;
            this.clearSession();
            alert("Account has successfully been deleted.");
            this.props.history.push("/");
        });

    }

    handleSubmit = () => {
        axios({
            method: "get",
            // url: Constants.hotspot_ip + ":8080/HotSpot-Project/api/userAccount/getAllAccounts",
        }).then(response => {
            let userAccounts = response.data;
            console.log(userAccounts);
            for (let account = 0; account < userAccounts.length; account++) {
                if ((this.state.userName === this.state.loggedInUser.userName) &&
                    (this.state.password === this.state.loggedInUser.password)) {
                    this.handleAccountToDelete(this.state.loggedInUser.userID);
                }
            }
        })
    }


    render() {
        return (
            <div className="register-background">
                <div>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Delete Apartment</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="">×</a>Please enter all fields to delete the apartment.
                </div>
                                <fieldset onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUserName} placeholder="Apartment Number" name="username" type="text" required/>
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg" onChange={this.handlePassword} placeholder="Apartment Building" name="password" type="text" required/>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required/>I confirm I wish to delete the apartment
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit} value="Delete Apartment" type="submit" />
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteApartment;