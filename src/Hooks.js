import React, {useState} from "react"
const Hooks = ()=>{
const [number,setNumber]=useState(0)
const [status,setStatus]=useState("Student")
    return(
        <>
        <h1>Hooks {number}</h1>
        <input value={status} onChange={(e)=>setStatus(e.target.value)}/>
        <div>
            Hooks versiya
            <button onClick={()=>setNumber(number+1)}>+</button>
            <button onClick={()=>setNumber(number-1)}>-</button>
        </div>
        </>
    )
}
export default Hooks