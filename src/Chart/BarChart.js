import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js";
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend)
function BarChart(){
    const[chartdata,setChartData]=useState({
        labels:[],
        datasets:[
            {
            data:[],
            backgroundColor:[]
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
                labeldata.push(`User ${item.userId} `);
                chartdata.push(1);
            }
            else{
                   const index=labeldata.indexOf(`User ${item.userId}`);
                   chartdata[index]+=1
            }
           })
           const backgroundColor=[
            "Red",
            "yellow",
            "orange",
            "blue",
            "grey",
            "purple",
            "brown"
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
             console.error("Error Fetching Data ",error)
             setISLoading(false)
        })
    },[])
    if(isLoading){
        return<div>Loading...</div>

    }
    return(
        <>
        <h1> Bar Chart</h1>
        <Bar data={chartdata}/>
        </>
    )
}
export default BarChart;