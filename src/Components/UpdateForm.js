import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartmentNumber: null,
            apartmentBuilding: null,
            roomNumber: null,
            studentName: null,
            intake: null,
            startDate: null,
            endDate: null,
            cleanStatus: null,
            occupied: null,
            ensuite: null,
            bedStatus: null,
            notes: null,
            loggedInUser: JSON.parse(sessionStorage.getItem("Account")),
        }
    }

    handleUserName = event => {
        this.setState({
            userName: event.target.value
        });
    }

    handleFullName = event => {
        this.setState({
            userFullName: event.target.value
        });
    }

    handleEmailAddress = event => {
        this.setState({
            emailAddress: event.target.value
        });
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
    }

    updateAccount = () => {
        axios({
            method: "post",
            // url: Constants.hotspot_ip + ":8080/HotSpot-Project/api/userAccount/updateAccount/" + this.state.loggedInUser.userID,
            data: {
                userName: this.state.userName,
                userFullName: this.state.userFullName,
                emailAddress: this.state.emailAddress,
                password: this.state.password
            }
        })
            .then(function (response) {
                console.log(response.data);
                alert("Account details have been successfully updated.");
            })
            .catch(function (error) {
                console.log(error);
            })
        this.props.history.push("/")
    }

    render() {
        return (
            <div className="register-background">
                <div>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Update Form</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert">×</a>Please enter all fields to update Account.
                    </div>
                                <form onSubmit={this.updateAccount}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Apartment Number" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleFullname} placeholder="Apartment Building" name="fullname" type="text" minLength="4" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Room Number" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Student Name" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Intake (Month)" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Start Date" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="End Date" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Clean Status" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Occupied: True or False" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Ensuite: True or False" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Bed Status" name="username" type="text" minLength="2" required />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEmail} placeholder="Notes" name="email" type="email" pattern=".+@gmail.com" required />
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" />I confirm I wish to <a>update details</a>
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" value="Add New Apartment" type="submit" />


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateForm;