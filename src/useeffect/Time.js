import React, { useEffect, useState } from 'react'

const Time = () => {
    const[Timer ,setTimer]=useState(0);
    useEffect(()=>{
      const time=setInterval(()=>{
        setTimer(prevTime=>prevTime+1);
      },1000)
      return()=>{
        clearInterval(time)
        console.log("timer clear up")
      }
    },[])
  return (
    <div>Time:{Timer} second</div>
  )
}

export default Time