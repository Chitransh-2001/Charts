import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from "chart.js";
ChartJS.register(ArcElement,Tooltip,Legend)
function Dough(){
     const[chartData,setCharData]=useState({
        labels:[],
        datasets:[
            {
                data:[],
                backgroundColor:[
                    "red",
                    "Pink",
                    "orange",
                    "blue",
                    "grey"
                ]
            }
        ]
     })


     useEffect(()=>{
        const FetchData=[
            {label:"Category A",value:30},
            {label:"Category B",value:50},
            {label:"Category C",value:20}
        ]
        const label=FetchData.map(item=>item.label)
        const data=FetchData.map(item=>item.value)
        setCharData({
            labels:label,
            datasets:[
                {
                    data:data,
                    backgroundColor:[
                        "red",
                        "Pink",
                        "orange",
                        "blue",
                        "grey"
                    ]
                }
            ]
        })
     },[])
     return(
        <div>
            <Doughnut data={chartData}/>
            <h2>Doughnut Chart</h2>
        </div>
     )
}
export default Dough