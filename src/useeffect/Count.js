import React, { useEffect, useState } from "react";
function Depend(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
         console.log(`Count has been updated ${count}`)
    },[count])
    return(
        <>
        <h1>IT is a Counter Function which is used to increment and decrement the value of the count depend upon the operation which the user has perform </h1>
          <p> Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>increment </button>
        <button onClick={()=>count>0 &&    setCount(count-1)}>Decrement</button>
        </>
    )

}
export default Depend;