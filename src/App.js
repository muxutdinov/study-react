import './App.css';
import React, { Component } from 'react'
import Student from './Student';
// import Studentsecond from './Studentsecond';
var students = [
  {id:1,name:"Jaxongir",status:"Student"},
  {id:2,name:"Sardor",status:"Student"},
  {id:3,name:"Akmal",status:"Student"},
  {id:4,name:"Azizbek",status:"Student"}
]
// var newData = [
//   {id:1,name:"Jaxongir",status:"Student"},
//   {id:2,name:"Sardor",status:"Student"},
//   {id:3,name:"Akmal",status:"Student"},
//   {id:4,name:"Azizbek",status:"Student"}
// ]
export default class App extends Component {
  render() {
    return (
      <div>
      <Student data={students}/>
     {/* {
       newData.map((value,index)=>{
         return(
           <Studentsecond 
           id={value.id}
           name={value.name}
           status={value.status}
           />
         )
       })
     } */}
       )
      </div>
    )
  }
}