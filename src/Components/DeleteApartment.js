import React, { Component } from 'react';
import axios from 'axios';
import { DeleteApt, GetAll} from '../Constants'

class DeleteApartment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apartmentNumber: null,
            apartmentBuilding: null,
        }
    }

    handleApartmentNumber = event => {
        this.setState({
            apartmentNumber: event.target.value
        });
    }

    handleApartmentBuilding = event => {
        this.setState({
            apartmentBuilding: event.target.value
        });
    }

    handleApartmentToDelete = (id) => {
        axios.delete(DeleteApt + id)
        .then(response => {
            alert("Apartment has successfully been deleted.");
            this.props.history.push("/home");
        });

    }

    handleSubmit = () => {

        let deleteStatus = false;

        axios({
            method: "get",
            url: GetAll,
        }).then(response => {
            let apartmentLists = response.data;
            for (let i = 0; i < apartmentLists.length; i++) {
                if (Number(this.state.apartmentNumber) === apartmentLists[i].apartmentNumber &&
                    this.state.apartmentBuilding === apartmentLists[i].apartmentBuilding) {
                    deleteStatus = true;
                    console.log(apartmentLists[i].apartmentId);
                    this.handleApartmentToDelete(apartmentLists[i].apartmentId);
                }
            }
            if (deleteStatus === false) {
                alert("Invalid Apartment Building or Number is invalid.");
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
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to delete the apartment.
                </div>
                                <fieldset onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleApartmentBuilding} placeholder="Apartment Name" name="username" type="text" required/>
                                    </div>
                                    <div className="form-group has-success">
                                        <input id="password" className="form-control input-lg"onChange={this.handleApartmentNumber} placeholder="Apartment Number" type="text" required/>
                                    </div>
                                    <div className="checkbox">
                                        <label className="small">
                                            <input name="terms" type="checkbox" required={true}/>I confirm I wish to delete the apartment
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