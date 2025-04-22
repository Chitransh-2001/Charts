import React, { useEffect } from 'react'

const Effect = () => {
    useEffect(()=>{
        console.log("this will run after every render!")
    },[])
  return (
    <div>Check the console</div>
  )
}

export default Effect