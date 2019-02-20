import React, { Component } from 'react';
import FilterBar from '../Components/FilterBar';

class Home extends Component {
    render() {
        return (
            <div className="table">
                <div className="filterbar">
                    <FilterBar />
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Building Name</th>
                            <th scope="col">Apartment Number</th>
                            <th scope="col">Room Number</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Intake (Month)</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>X1</td>
                            <th><a href="/apartmentdetail">1502</a></th>
                            <td>43</td>
                            <td>Henry Chia</td>
                            <td>December Intake</td>
                            <td>01/12/2018</td>
                            <td>28/02/2019</td>
                        </tr>
                        <tr className="table-danger">
                            <td>Number One</td>
                            <th><a href="/apartmentdetail">1803</a></th>
                            <td>14</td>
                            <td>Josh Dowling</td>
                            <td>December Intake</td>
                            <td>01/12/2018</td>
                            <td>28/02/2019</td>
                        </tr>
                        <tr className="table-warning">
                            <td>Heart</td>
                            <th><a href="/apartmentdetail">2201</a></th>
                            <td>20</td>
                            <td>Jim Bob</td>
                            <td>February Intake</td>
                            <td>01/02/2019</td>
                            <td>01/04/2019</td>
                        </tr>
                        <tr className="table-primary">
                            <td >Number One</td>
                            <th scope="row"><a href="/apartmentdetail">1101</a></th>
                            <td>34</td>
                            <td>Beyonce Knowles</td>
                            <td>March Intake</td>
                            <td>01/03/2019</td>
                            <td>01/05/2019</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;