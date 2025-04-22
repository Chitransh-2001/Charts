
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import{Chart as ChartJS,ArcElement,Tooltip,Legend} from "chart.js"
ChartJS.register(ArcElement,Tooltip,Legend);
function PieChartwithliveapi(){
    const[chartdata,setChartData]=useState({
        labels:[],
        datasets:[
            {
                data:[],
                backgroundColor:[],
            }
        ]
    })
 const[isLoading,setISLoading]=useState(true);
 useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())
    .then((data)=>{
        const labeldata=[];
        const chartdata=[];

        data.forEach((item)=>{
            if(!labeldata.includes(`User ${item.userId}`)){
                   labeldata.push(`User ${item.userId}`);
                   chartdata.push(1);
            }
            else{
                const index=labeldata.indexOf(`User ${item.userId}`);
                chartdata[index]+=1;
            }
        });
        const backgroundColor=[
            "#ff6384",
            "#36a2eb",
            "#ffce56",
            "#4bc0c0",
            "#9966ff",
            "Red",
            "Blue"
        ]
        setChartData({
            labels:labeldata,
            datasets:[
                {
                    data:chartdata,
                    backgroundColor:backgroundColor.slice(0,labeldata.length)
                }
            ]    
        })
        setISLoading(false);
    })
    .catch((error)=>{
        console.error("Error Fetching Data",error)
        setISLoading(false)
    })
 },[])
 if(isLoading){
    return<div>Loading...</div>
 }   
return(
    <div>
        <h1>Pie Chart Post by users</h1>
        <Pie data={chartdata}/>
    </div>
)}
export default PieChartwithliveapi