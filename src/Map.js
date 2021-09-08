import React, { Component } from 'react'
import { data } from './server'
import User from './User'
export default class Map extends Component {
    render() {
        return (
            <div>
               {
                   data.map((value,index)=>(
                           <User key={value.id} data={value}/>
                   ))
               }
            </div>
        )
    }
}




