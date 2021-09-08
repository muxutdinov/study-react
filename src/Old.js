import React, { Component } from 'react'
class Old extends Component {
    constructor(){
        super()
        this.state = {
            number:0,
            status:'Student'
        }
    }
    render() {
        return (
                <>
                <h1>Old {this.state.number}</h1>
                <input placeholder="Old" value={this.state.status}
                onChange={(e)=>this.setState({status:e.target.value})}
                />
            <div>
                Old versiya
                <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
                <button onClick={()=>this.setState({number:this.state.number-1})}>-</button>
            </div>
                </>
        )
    }
}
export default Old