import React, { Component } from 'react'
import lightOn from './assets/on.jpeg'
import lightOff from './assets/off.jpeg'
export default class Render extends Component {
constructor(props){
    super(props)
    this.state={
        light:true
    }
}
    render() {
const onRender = ()=>{
this.setState({
    light:!this.state.light
})
}
        return (
            <div>
                {/* {
                    this.state.light?
                    <img width="200px" height="270px" src={lightOff} />
                    :
                    <img width="200px" height="270px" src={lightOn} />
                } */}
                < img width="200px" height="270px" src={this.state.light?lightOff:lightOn} />
                <button onClick={onRender}>onChange</button>
            </div>
        )
    }
}
