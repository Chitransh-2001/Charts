
import PieChart, { Pie } from './Chart/PieChart';
import './App.css';
import LineChart from './Chart/LineChart';
import Effect from './useeffect/Effect';
import Count from './useeffect/Count'
import Time from './useeffect/Time';
import FetchData from './useeffect/FetchData';
import BubbleChart from './Chart/BubbleChart'
import Fetchdatacopy from './useeffect/Fetchdatacopy';
import PieChartwithliveapi from './Chart/PieChartwithliveapi';
import Dough, { Doughnut } from './Chart/Doughnut';
import BarChart, { Bar } from './Chart/BarChart';
import LineLive from './Chart/LineLive';
import Search from "./Chart/Search"
import TopGainerandLosser from './Chart/TopGainerandLosser';
import SearchUser from './useeffect/Searchbyword';
function App() {
  return (
    <div className="App">
    {/* <LineChart/> */}
    
    {/* <PieChart/> */}
    {/* <Fetchdatacopy/>
     <FetchData/>
      <Effect/>
      <Count/> 
      <Time/> */}
      {/* <PieChartwithliveapi/> */}
      {/* <TopGainerandLosser/>
      <Search/>
      <LineLive/> */}
      <SearchUser/>
      {/* <Dough/> */}
      {/* <BarChart/> */}
      {/* <BubbleChart/> */}
    </div>
  );
}

export default App;
