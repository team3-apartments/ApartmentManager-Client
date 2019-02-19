import React, { Component } from 'react';
import axios from 'axios';

class AddApartment extends Component {

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
        }
    }

    createAccount = () => {
        axios({
            method: "post",
            // url: Constants.hotspot_ip + ":8080/HotSpot-Project/api/userAccount/createAccount",
            data: {
                userName: this.state.userName,
                userFullName: this.state.userFullName,
                emailAddress: this.state.emailAddress,
                password: this.state.password
            }
        })
            .then(response => {
                let bannedUser = null;
                bannedUser = response.data.message
                alert(bannedUser)
            })
            .catch(function (error) {
                console.log(error);
            }); 
            this.props.history.push("/login")
        }

    handleSubmit = event => {
        event.preventDefault();
        this.createAccount();
        console.log(this.state.userName);
    }

    handleUsername = event => {
        this.setState({
            userName: event.target.value
        });
        console.log(this.state.userName);
    }

    handleEmail = event => {
        this.setState({
            emailAddress: event.target.value
        });
        console.log(this.state.emailAddress);
    }

    handleFullname = event => {
        this.setState({
            userFullName: event.target.value
        });
        console.log(this.state.userFullName);
    }

    handlePassword = event => {
        this.setState({
            password: event.target.value
        });
        console.log(this.state.password);
    }

    render() {
        return (

            <div className="register-background">
                <div >
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Add A New Apartment</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="">×</a>Please enter all fields to add an apartment to the list. <br/>If field is not applicable at this time, please enter n/a.
                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Apartment Number" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleFullname} placeholder="Apartment Building" name="fullname" type="text" minLength="4" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Room Number" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Student Name" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Intake (Month)" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Start Date" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="End Date" name="username" type="text" minLength="2" required/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Clean Status" name="username" type="text" minLength="2" required/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Occupied: True or False" name="username" type="text" minLength="2" required/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Ensuite: True or False" name="username" type="text" minLength="2" required/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleUsername} placeholder="Bed Status" name="username" type="text" minLength="2" required/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEmail} placeholder="Notes" name="email" type="email" pattern=".+@gmail.com" required/>
                                    </div>
                                    <input className="btn btn-lg btn-primary btn-block" value="Add New Apartment" type="submit" />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddApartment;