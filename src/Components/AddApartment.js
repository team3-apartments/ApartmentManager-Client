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
           ensuite: null,
            bedStatus: null,
            notes: null,
        }
        this.handleChange = this.handleChange.bind(this);
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
                ensuite: this.state.ensuite,
                bedStatus: this.state.bedStatus,
                notes: this.state.notes,
            }
        })
            .then(response => {
                console.log(response.data)
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
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
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please enter all fields to add an apartment to the list. <br/>If field is not applicable at this time, please enter n/a.
                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Apartment Number" name="apartmentNumber" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Apartment Building" name="apartmentBuilding" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Room Number" name="roomNumber" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Student Name" name="studentName" type="text" />
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Intake (Month)" name="intake" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Start Date" name="startDate" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="End Date" name="endDate" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Clean Status" name="cleanStatus" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Ensuite: True or False" name="ensuite" type="text"/>
                                    </div>
                                     <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Single/Double Bed" name="bedStatus" type="text"/>
                                    </div>
                                    <div className="form-group has-error">
                                        <input className="form-control input-lg" onChange={this.handleChange} placeholder="Notes" name="notes" type="text"/>
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