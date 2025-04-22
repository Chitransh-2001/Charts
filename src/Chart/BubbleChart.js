import { Bubble } from "react-chartjs-2";
import { Chart as ChartJS,Title,Tooltip,Legend,CategoryScale,LinearScale,ArcElement } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(Title,Tooltip,Legend,CategoryScale,LinearScale,ArcElement);
function BubbleChart(){
    const[charData,setCharData]=useState({
        
        datasets:[],
    })
    useEffect(()=>{
     const data=   {
            datasets:[
                {
                    label:"Bubble Dataset",

                    data:[
                        {x:10,y:20,r:15},
                        {x:45,y:60,r:25},
                        {x:25,y:30,r:20},
                        {x:35,y:40,r:5},
                        {x:45,y:50,r:25}
                    ],
                    backgroundColor:'rgba(75,192,192,0.6)',
                    borderColor:'rgba(75,192,192,1)',
                    borderWidth:1
                }
            ]
        }
        setCharData(data);
    },[])
    return(
        <div>
            <h1>Bubble Chart</h1>
            <Bubble data={charData} options={{
                responsive:true,
                plugins:{
                    title:{
                        display:true,
                        text:'Bubble Chart with Chart.js in React'
                    },
                    tooltip:{
                        enabled:true
                    },
                },
                scales:{
                    x:{
                        title:{
                            display:true,
                            text:'X Axis',
                        },
                    },
                    y:{
                        title:{
                            display:true,
                            text:'Y Axis',
                        }
                    }
                }
            }}/>
        </div>
    )
} 
export default BubbleChart
