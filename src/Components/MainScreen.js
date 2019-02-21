import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { BaseURL, GetAll} from '../Constants'

class MainScreen extends Component {

  state = {
        // remove data to use the axios command
    aptmt: [],
  //   { "buildingName": "Heart", "apartmentNumber": "2101", "roomNumber": "2", "fullName": "Husnan Sultan", "intake": "December 2018" , "startDate": "02/12/2018" , "endDate": "04/2/2019"},
  //   { "buildingName": "Number One", "apartmentNumber": "401", "roomNumber": "2", "fullName": "Josh Dowling", "intake": "December 2018" , "startDate": "02/12/2018" , "endDate": "01/3/2019"}, 
  //   { "buildingName": "Heart", "apartmentNumber": "510", "roomNumber": "1", "fullName": "Katie Nobbs", "intake": "January 2019" , "startDate": "06/01/2019" , "endDate": "02/12/2019"} 
   };

  constructor(props) {
    super(props);

    axios.get(BaseURL+GetAll).then(response => {
      this.setState({ aptmt: response.data }, () => {
      })
    })
  }

  popWorkingList() {

    var temp = [];

    for (let i = 0; i < this.state.aptmt.length; i++) {

      temp.push({
        buildingName: this.state.aptmt[i].buildingName,
        apartmentName: this.state.aptmt[i].apartmentNumber,
        roomNumber: this.state.aptmt[i].roomNumber,
        fullName: this.state.aptmt[i].fullName,
        intake: this.state.aptmt[i].intake,
        startDate: this.state.aptmt[i].startDate,
        endDate: this.state.aptmt[i].endDate

      });

      this.setState({ aptmt: temp });
     }
  }
  
  render() {

    if (this.props.changed) {
      this.state.aptmt.push({
        buildingName: this.props.buildingName,
        apartmentNumber: this.props.apartmentNumber,
        roomNumber: this.props.roomNumber,
        fullName: this.props.fullName,
        intake: this.props.intake,
        startDate: this.props.startDate,
        endDate: this.props.endDate,
       
      });
    }

    return (<div>
      
      <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <BootstrapTable ref='table' data={this.state.aptmt} search strictSearch={true}  striped={true} hover={true}>
        <TableHeaderColumn dataField='buildingName' dataSort={true}>Building Name</TableHeaderColumn>
        <TableHeaderColumn dataField='apartmentNumber' isKey={true} dataSort={true}>Apartment Number</TableHeaderColumn>
        <TableHeaderColumn dataField='roomNumber' dataSort={true}>Room Number</TableHeaderColumn>
        <TableHeaderColumn dataField='fullName' dataSort={true}>Full Name</TableHeaderColumn>
        <TableHeaderColumn dataField='intake' dataSort={true}>Intake (Month)</TableHeaderColumn>
        <TableHeaderColumn dataField='startDate' dataSort={true}>Start Date</TableHeaderColumn>
        <TableHeaderColumn dataField='endDate' dataSort={true}>End Date</TableHeaderColumn>
      </BootstrapTable>
    </div>
    );
  }
}

export default MainScreen;