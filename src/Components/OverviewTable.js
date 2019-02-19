import React, { Component } from 'react';

class OverviewTable extends Component {
    render() {
        return (
            <div className="App">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Apartment Number</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-danger">
                            <th scope="row">1</th>
                            <td>Henry Chia</td>
                            <td>01/12/2018</td>
                            <td>28/02/2019</td>
                        </tr>
                        <tr class="table-danger">
                            <th scope="row">2</th>
                            <td>Josh Dowling</td>
                            <td>01/12/2018</td>
                            <td>28/02/2019</td>
                        </tr>
                        <tr class="table-warning">
                            <th scope="row">3</th>
                            <td>Jim Bob</td>
                            <td>01/02/2019</td>
                            <td>01/04/2019</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">4</th>
                            <td>Beyonce Knowles</td>
                            <td>01/03/2019</td>
                            <td>01/05/2019</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default OverviewTable;