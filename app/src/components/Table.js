import React, { Component } from "react";
import axios from "axios"

class Table extends Component {
    state = {
        userInfo: []
    }
    componentDidMount() {
        this.getUserInfo()
    }
    getUserInfo() {
        axios.get('https://randomuser.me/api/')
            .then( (response) => {
                // handle success
                console.log(response.data.results);
                this.setState({ userInfo:response.data.results })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>

                        </tr>
                    </thead>
                    <tbody>
                    { this.state.userInfo.map((employee, i) => {
  return(<td>{employee.name.first}</td>)
})}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;