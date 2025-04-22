import React, { useEffect, useState } from 'react'
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS,Title,Tooltip,Legend,ArcElement,  plugins,} from 'chart.js'
ChartJS.register(Title,Tooltip,Legend,ArcElement);
const PieChart = () => {
  const[charData,setCharData]=useState({
    labels:[],
    datasets:[
      {
        data:[],
        backgroundColor:[],
      }
    ]
  })
  useEffect(()=>{
    const fetchData=()=>{
      const jsonData=[
        {category:'Red',value:160,color:'red'},
        {category:'Yellow',value:50,color:'yellow'},
        {category:'Blue',value:100,color:'blue'},
        {category:'Green',value:30,color:'green'},
         {category:'purple',value:21,color:'purple'},
         {category:'Grey',value:40,color:'grey'}
      ]
     
      const labels=jsonData.map(item=>item.category);
      const data=jsonData.map(item=>item.value);
      const backgroundColor=jsonData.map(item=>item.color);
      setCharData({
        labels:labels,
        datasets:[
          {
            data:data,
            backgroundColor:backgroundColor,
            hoverOffset:6,
          },
        ],
      });
    };
    setTimeout(fetchData,2000);
  },[]);
  const options={
    responsive:true,
    plugins:{
      legend:{
        position:'top',
      },
      tooltip:{
        enabled:true
      }
    }
  }
  return (
    <div>PieChart
      <Pie data={charData} options={options}/>
    </div>
  )
}

export default PieChart
