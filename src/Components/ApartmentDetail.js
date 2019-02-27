import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { GetByDetails, UpdateApt } from '../Constants'
import axios from 'axios';

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
};

class ApartmentDetail extends Component {

  state = {
    aptmt: [],
  };

  constructor(props) {
    super(props);
    let params1 = window.location.search.substring(1);
    let params2 = params1.split('/');
    axios.get(GetByDetails + "/" + params2[0] + "/" + params2[1]).then(response => {
      this.setState({ aptmt: response.data },
      )
    })
  }

  updateApartment = (e) => {
    for (let i = 0; i < this.state.aptmt.length; i++) {
      this.axiosUpdate(i);
    }
  }

  axiosUpdate = (i) => {

    axios.put(UpdateApt + this.state.aptmt[i].apartmentId, {
      apartmentNumber: this.state.aptmt[i].apartmentNumber,
      apartmentBuilding: this.state.aptmt[i].apartmentBuilding,
      roomNumber: parseInt(this.state.aptmt[i].roomNumber),
      studentName: this.state.aptmt[i].studentName,
      intake: this.state.aptmt[i].intake,
      startDate: this.state.aptmt[i].startDate,
      endDate: this.state.aptmt[i].endDate,
      cleanStatus: this.state.aptmt[i].cleanStatus,
      ensuite: this.state.aptmt[i].ensuite,
      bedStatus: this.state.aptmt[i].bedStatus,
      notes: this.state.aptmt[i].notes,
    }).then(response => {
      alert('The Apartments have been updated');
    });

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    return (

      <div className="mainPara">

        <BootstrapTable data={this.state.aptmt} cellEdit={cellEditProp} striped={true} hover={true}>
          <TableHeaderColumn dataField='apartmentId' isKey={true}>ID</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='apartmentBuilding' dataSort={true}>Apartment Building</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='apartmentNumber' dataSort={true}>Apartment Number</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='studentName' dataSort={true}>Student Name</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='roomNumber' dataSort={true}>Room Number</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='intake' dataSort={true}>Intake</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='startDate' dataSort={true}>Start Date</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='endDate' dataSort={true}>End Date</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='occupied' dataSort={true}>Occupied</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='bedStatus' dataSort={true}>Bed type</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='ensuite' dataSort={true}>Ensuite</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='cleanStatus' dataSort={true}>Cleaned</TableHeaderColumn>
          <TableHeaderColumn onChange={this.handleChange} dataField='notes' dataSort={true}>Notes</TableHeaderColumn>
        </BootstrapTable>
        <br /><br />
        <button id='updateButton' className="btn btn-lg btn-primary btn-block" onClick={this.updateApartment}>Update</button>
      </div>


    );
  }

}

export default ApartmentDetail;

