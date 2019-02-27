import React, { Component } from 'react';
import axios from 'axios';
import { TestURL, EmptyByDate } from '../Constants';
import moment from 'moment';
import Calendar from 'ciqu-react-calendar';

import "react-datepicker/dist/react-datepicker.css";

class AvailableRooms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            availableRoomList: [],
            value: moment(),
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleAvailableRooms = () => {

        let list = [];

        axios.get(TestURL + EmptyByDate + this.state.value.format('YYYY-MM-DD'))
            .then(response => {
                let roomList = response.data;
                for (let i = 0; i < roomList.length; i++) {
                    list.push(roomList[i]);
                    this.setState({
                        availableRoomList: list
                    })
                }
            });
    }

    onChange = (value) => {
        this.setState({ value })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.handleAvailableRooms();
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        const { onChange } = this
        return (

            <div>
                <div >
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card card-body">
                                <h3 className="text-center mb-4">Available Room Searcher</h3>
                                <div className="alert alert-danger">
                                    <a className="close font-weight-light" data-dismiss="alert" href="/">×</a>Please select a date to view total available rooms
                    </div>
                                <form onSubmit={this.handleSubmit}>
                                    <Calendar 
                                        onChange={onChange}
                                        value={this.state.value}
                                        placeholder={'YYYY-MM-DD'}
                                        format={'YYYY-MM-DD'}
                                    />
                                    <input id="submit-button" className="btn btn-sm btn-primary" value="Submit" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="room-features">
                    Available Rooms: {this.state.availableRoomList.length}
                    {(this.state.availableRoomList.map((room) =>
                        <div key={room.apartmentId}>
                            <br></br>
                            <br />Apartment Building: {room.apartmentBuilding}
                            <br /> Apartment Number: {room.apartmentNumber}
                            <br />Room Number: {room.roomNumber}
                        </div>))}
                    </div>
                </div>
            </div>
        );
    }
}

export default AvailableRooms;

