import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, plugins} from 'chart.js'
ChartJS.register(
    CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend
);

const LineChart = () => {
const data={
    labels:["January","February","March","April","May"],
    datasets:[
        {
            label:'Sales Dataset',
            data:[65,59,80,81,56],
            fill:false,
            borderColor:'rgb(75,192,192)',
            tension:0.1,
        }
    ]
};
const options={
    responsive:true,
    plugins:{
        title:{
            display:true,
            text:'Monthly Sales',
        },
        Tooltip:{
            callbacks:{
                label:function(tooltipItem){
                    return tooltipItem.raw +"units"
                }
            }
        }
    }
}

  return (
    <div>

        <h2>Line Chart</h2>
        <Line data={data} options={options}/>
    </div>
  )
}

export default LineChart