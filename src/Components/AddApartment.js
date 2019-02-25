import React, { Component } from 'react';
import axios from 'axios';
import { TestURL, CreateApt} from '../Constants';

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

    createApartment = () => {
        axios({
            method: "post",
            url: TestURL + CreateApt,
            data: {
                apartmentNumber: this.state.apartmentNumber,
                apartmentBuilding: this.state.apartmentBuilding,
                roomNumber: this.state.roomNumber,
                studentName: this.state.studentName,
                intake: this.state.intake,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                cleanStatus: this.state.cleanStatus,
                occupied: this.state.occupied,
                ensuite: this.state.ensuite,
                bedStatus: this.state.bedStatus,
                notes: this.state.notes,
            }
        })
            .then(response => {
            })
            .catch(function (error) {
                console.log(error);
            });
            alert("New Apartment has been added into the system.") 
            this.props.history.push("/home");
            window.location.reload(); 
        }

    handleSubmit = event => {
        event.preventDefault();
        this.createApartment();
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

    handleRoomNumber = event => {
        this.setState({
            roomNumber: event.target.value
        });
    }

    handleStudentName = event => {
        this.setState({
            studentName: event.target.value
        });
    }

    handleIntake = event => {
        this.setState({
            intake: event.target.value
        });
    }

    handleStartDate = event => {
        this.setState({
            startDate: event.target.value
        });
    }

    handleEndDate = event => {
        this.setState({
            endDate: event.target.value
        });
    }

    handleCleanStatus = event => {
        this.setState({
            cleanStatus: event.target.value
        });
    }

    handleOccupied = event => {
        this.setState({
            occupied: event.target.value
        });
    }

    handleEnsuite = event => {
        this.setState({
            ensuite: event.target.value
        });
    }

    handleBedStatus = event => {
        this.setState({
            bedStatus: event.target.value
        });
    }

    handleNotes = event => {
        this.setState({
            notes: event.target.value
        });
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
                                        <input className="form-control input-lg" onChange={this.handleApartmentNumber} placeholder="Apartment Number" name="apartmentNumber" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleApartmentBuilding} placeholder="Apartment Building" name="apartmentBuilding" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleRoomNumber} placeholder="Room Number" name="roomNumber" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleStudentName} placeholder="Student Name" name="studentName" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleIntake} placeholder="Intake (Month)" name="intake" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleStartDate} placeholder="Start Date" name="startDate" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEndDate} placeholder="End Date" name="endDate" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleCleanStatus} placeholder="Clean Status" name="cleanStatus" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleOccupied} placeholder="Occupied: True or False" name="occupied" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleEnsuite} placeholder="Ensuite: True or False" name="ensuite" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleBedStatus} placeholder="Single/Double Bed" name="bedStatus" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleNotes} placeholder="Notes" name="notes" type="text"/>
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