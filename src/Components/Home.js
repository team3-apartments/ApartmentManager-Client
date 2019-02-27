import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import {GetAll, AllIntakes } from '../Constants'

class Home extends Component {

  state = {

    aptmt: [],

  };

  constructor(props) {
    super(props);

    axios.get(GetAll).then(response => {
      this.setState({ aptmt: response.data }, () => {
      })
    })
  }


  colFormatter = (event, cell, row) => {
    return <a href={"/apartmentDetail/?" + cell.apartmentBuilding + "/" + cell.apartmentNumber} > {cell.apartmentNumber}</a>;
  }

  firstIntakes = (e) => {
    let intakefix = true;
    axios.get(AllIntakes + intakefix).then(response => {
      this.setState({ aptmt: response.data }, () => {
      })
    })
  }

  secondIntakes = (e) => {
    let intakefix = false;
    axios.get(AllIntakes + intakefix).then(response => {
      this.setState({ aptmt: response.data }, () => {
      })
    })
  }

  render() {

    if (this.props.changed) {
      this.state.aptmt.push({

        apartmentBuilding: this.props.apartmentBuilding,
        apartmentNumber: this.props.apartmentNumber,
        roomNumber: this.props.roomNumber,
        studentName: this.props.studentName,
        intake: this.props.intake,
        startDate: this.props.startDate,
        endDate: this.props.endDate,

      });
    }

    return (<div>

      <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <BootstrapTable id='MainTable' ref='table' data={this.state.aptmt} search strictSearch={true} striped={true} hover={true}>
        <TableHeaderColumn dataField='apartmentBuilding' dataSort={true}>Building Name</TableHeaderColumn>
        <TableHeaderColumn dataField='apartmentNumber' isKey={true} dataSort={true} dataFormat={this.colFormatter}> Apartment Number</TableHeaderColumn>
        <TableHeaderColumn dataField='roomNumber' dataSort={true} >Room Number</TableHeaderColumn>
        <TableHeaderColumn dataField='studentName' dataSort={true}>Full Name</TableHeaderColumn>
        <TableHeaderColumn dataField='intake' dataSort={true}>Intake (Month)</TableHeaderColumn>
        <TableHeaderColumn dataField='startDate' dataSort={true}>Start Date</TableHeaderColumn>
        <TableHeaderColumn dataField='endDate' dataSort={true}>End Date</TableHeaderColumn>
      </BootstrapTable>
      <br></br>
      <button id='currentButton' className="btn btn-primary btn-lg mybtn" onClick={this.firstIntakes}>Current Intakes</button>
      <button id='futureButton' className="btn btn-primary btn-lg mybtn" onClick={this.secondIntakes}>Later Intakes</button>
    </div>
    );
  }
}

export default Home;