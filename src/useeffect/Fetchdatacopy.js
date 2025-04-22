import React, { useEffect, useState } from "react";
function Fetchdatacopy(){
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>setUsers(users))
        .catch(error=>console.error("Error finding data error",error));
        
    
    },[])
    if(!users){
        return<div>Loading....</div>
    }
    return(
        <div>
        <h1>User List</h1>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.website}</li>
            ))}
        </ul>
        </div>
    )
}
export default Fetchdatacopy