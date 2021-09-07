import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                {
                    this.props.data.map((value)=>{
                        return(
                            <tbody>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.status}</td>
                            </tbody>
                        )
                    })
                }
            </table>
        )
    }
}

