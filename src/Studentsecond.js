import React, { Component } from 'react'

export default class Studentsecond extends Component {
    render() {
        return (
            <div>
                <div>id:{this.props.id}</div>
                <div>name:{this.props.name}</div>
                <div>status:{this.props.status}</div>
            </div>
        )
    }
}
