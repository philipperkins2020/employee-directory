import React, { Component } from "react";
import axios from "axios"

class Table extends Component {
    state = {
        userInfo: [],
        filteredUserInfo: [],
        nameFilter: ""
    }
    componentDidMount() {
        this.getUserInfo()
    }
    getUserInfo() {
        axios.get('https://randomuser.me/api/?results=30')
            .then((response) => {
                // handle success
                console.log(response.data.results);
                this.setState({ userInfo: response.data.results, filteredUserInfo: response.data.results })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    handleInputChange = (event) => {
        console.log(event.target.value)
       
       console.log(this.state.userInfo)
        const filterThis = this.state.filteredUserInfo.filter((employee, i) => {
            return (employee.name.first.toUpperCase().includes(event.target.value.toUpperCase()))
        })

        this.setState({ nameFilter: event.target.value, filteredUserInfo: filterThis })

    }
    render() {
        return (

            <div className="container">
                {this.state.nameFilter}
                <input type="text" id="search" name="search" onChange={this.handleInputChange} />
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
                        {this.state.filteredUserInfo.map((employee, i) => {
                            return (<tr><td><img src={employee.picture.thumbnail}></img></td><td>{`${employee.name.first} ${employee.name.last}`}</td><td>{employee.gender}</td><td>{employee.email}</td><td>{employee.phone}</td></tr>
                            )

                        })}


                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;