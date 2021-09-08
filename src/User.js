import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <h1>ID:{this.props.data.id}</h1>
                <h1>Name:{this.props.data.name}</h1>
                <h1>Status:{this.props.data.status}</h1>
            </div>

        )
    }
}
