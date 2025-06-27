import { useState } from "react"
function Counter(){
    let [counter,setcounter] = useState(10);
    let add = ()=>{
        if(counter<20){

            setcounter(counter+1);
        }
    }
    let sub = ()=>{
        if(counter>0){
            setcounter(counter-1);
        }
        
    }
    return (
        <>
        <h1>Value is {counter}</h1>
        <br />
        <button onClick = {add}>Add</button>
        <button onClick = {sub}>Remove</button>
        </>
    )
}
export default Counter