import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ApartmentDetail extends Component {

  render() {
    return (
      <BootstrapTable data={ "products" }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default ApartmentDetail;


{/* <div id="current-upcoming-container">
          <div>
            <ul className="list-group">
              <li id="border-header" className="list-group-item">Current:</li>
              <li id="border" className="list-group-item">Room Number: 43</li>
              <li id="border" className="list-group-item">Intake Month: December</li>
              <li id="border" className="list-group-item">Student Name: Henry Chia</li>
              <li id="border" className="list-group-item">Start Date: 01/12/2018</li>
              <li id="border" className="list-group-item">End Date: 28/02/2019</li>
              <li id="border" className="list-group-item">Clean Status: Cleaned</li>
              <li id="border" className="list-group-item">Occupied: True</li>
              <li id="border" className="list-group-item">Ensuite: True</li>
              <li id="border" className="list-group-item">Single Or Double Bed: Double</li>
              <li id="border" className="list-group-item">Notes: NA</li>
            </ul>
            <ul className="list-group">
              <li id="border-header2" className="list-group-item">Upcoming:</li>
              <li id="border" className="list-group-item">Room Number: 43</li>
              <li id="border" className="list-group-item">Intake Month: December</li>
              <li id="border" className="list-group-item">Student Name: Tim Brad</li>
              <li id="border" className="list-group-item">Start Date: 01/03/2019</li>
              <li id="border" className="list-group-item">End Date: 31/05/2019</li>
              <li id="border" className="list-group-item">Clean Status: NA</li>
              <li id="border" className="list-group-item">Occupied: False</li>
              <li id="border" className="list-group-item">Ensuite: True</li>
              <li id="border" className="list-group-item">Single Or Double Bed: Double</li>
              <li id="border" className="list-group-item">Notes: NA</li>
            </ul>
          </div>
          <div className="right-hand-side-table">
            <ul className="list-group">
              <li id="border-header" className="list-group-item">Current:</li>
              <li id="border" className="list-group-item">Room Number: 43</li>
              <li id="border" className="list-group-item">Intake Month: December</li>
              <li id="border" className="list-group-item">Student Name: Henry Chia</li>
              <li id="border" className="list-group-item">Start Date: 01/12/2018</li>
              <li id="border" className="list-group-item">End Date: 28/02/2019</li>
              <li id="border" className="list-group-item">Clean Status: Cleaned</li>
              <li id="border" className="list-group-item">Occupied: True</li>
              <li id="border" className="list-group-item">Ensuite: True</li>
              <li id="border" className="list-group-item">Single Or Double Bed: Double</li>
              <li id="border" className="list-group-item">Notes: NA</li>
            </ul>
            <ul className="list-group">
              <li id="border-header2" className="list-group-item">Upcoming:</li>
              <li id="border" className="list-group-item">Room Number: 43</li>
              <li id="border" className="list-group-item">Intake Month: December</li>
              <li id="border" className="list-group-item">Student Name: Tim Brad</li>
              <li id="border" className="list-group-item">Start Date: 01/03/2019</li>
              <li id="border" className="list-group-item">End Date: 31/05/2019</li>
              <li id="border" className="list-group-item">Clean Status: NA</li>
              <li id="border" className="list-group-item">Occupied: False</li>
              <li id="border" className="list-group-item">Ensuite: True</li>
              <li id="border" className="list-group-item">Single Or Double Bed: Double</li>
              <li id="border" className="list-group-item">Notes: NA</li>
            </ul>
          </div>
        </div>  */}