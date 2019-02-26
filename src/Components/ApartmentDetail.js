import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { TestURL, GetByDetails } from '../Constants'
import axios from 'axios';


class ApartmentDetail extends Component {

  state = {
    aptmt: [],
  };

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
      notes: null
  }
}

getApartmentDetails = () => {
  axios({
      method: "get",
      url: GetByDetails + this.props.apartmentBuilding + "/" + this.props.apartmentNumber,
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
          notes: this.state.notes
      }
  })
      .then(response => {
          console.log(response.data)
      })
      .catch(function (error) {
          console.log(error);
      });
   
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
        <div>
            
        </div>
    );
  }
  
}

export default ApartmentDetail;