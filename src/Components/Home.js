import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { TestURL, GetAll} from '../Constants'

class Home extends Component {

  state = {

    aptmt: [],

   };

  constructor(props) {
    super(props);

  axios.get(TestURL+GetAll).then(response => {
    this.setState({ aptmt: response.data }, () => {
    })
  })
 }


 getApartmentDetails(){
   
 }


  popWorkingList() {

    var temp = [];

    for (let i = 0; i < this.state.aptmt.length; i++) {
      console.log(this.state.aptmt[i].occupied);
      if (this.state.aptmt[i].occupied === false){

        // console.log(this.state.aptmt[i].occupied);

      temp.push({
        apartmentBuilding: this.state.aptmt[i].apartmentBuilding,
        apartmentName: this.state.aptmt[i].apartmentNumber,
        roomNumber: this.state.aptmt[i].roomNumber,
        studentName: this.state.aptmt[i].studentName,
        intake: this.state.aptmt[i].intake,
        startDate: this.state.aptmt[i].startDate,
        endDate: this.state.aptmt[i].endDate
      });
   }
      this.setState({ aptmt: temp });
     }
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
      <BootstrapTable id='MainTable' ref='table' data={this.state.aptmt} search strictSearch={true}  striped={true} hover={true}>
        <TableHeaderColumn dataField='apartmentBuilding' dataSort={true}>Building Name</TableHeaderColumn>
        <TableHeaderColumn dataField='apartmentNumber' isKey={true} dataSort={true} onClick= {'/apartmentdetails'} > Apartment Number</TableHeaderColumn>
        <TableHeaderColumn dataField='roomNumber' dataSort={true} >Room Number</TableHeaderColumn>
        <TableHeaderColumn dataField='studentName' dataSort={true}>Full Name</TableHeaderColumn>
        <TableHeaderColumn dataField='intake' dataSort={true}>Intake (Month)</TableHeaderColumn>
        <TableHeaderColumn dataField='startDate' dataSort={true}>Start Date</TableHeaderColumn>
        <TableHeaderColumn dataField='endDate' dataSort={true}>End Date</TableHeaderColumn>
      </BootstrapTable>

    </div>
    );
  }
}

export default Home;