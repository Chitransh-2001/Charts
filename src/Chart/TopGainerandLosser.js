import React, { useEffect, useState } from 'react'


const TopGainerandLosser = () => {
    const [coins,setCoins]= useState({ gainers: [], losers: [] });
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async()=>{
        setLoading(true);
        try{
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const data = await response.json();

            const sortedCoins = [...data].sort((a,b)=>b.price_change_percentage_24h - a.price_change_percentage_24h);
            const gainers = sortedCoins.slice(0,5);
            console.log("Top 5 gainers",gainers)
            const losers = sortedCoins.slice(-5).reverse();
            setCoins({gainers,losers});
        }catch(error){
                console.error("Error fetching data",error)
        }
        setLoading(false);
    } 

  return (
    <>
       <h2>Top Gainers & Losers (24h)</h2>  
       {loading ? (
        <p>Loading...</p>
       ):(
        <>
        <h4>Top 5 Gainers</h4>
        <ul>
            {
                coins.gainers.map((coin)=>(
                    <li key={coin.id}>
                        {coin.name} ({coin.symbol.toUpperCase()}) - <strong style={{color:"green"}}> +{coin.price_change_percentage_24h.toFixed(2)}% </strong>
                    </li>
                ))
            }
        </ul>
        <h4>Top 5 Losers</h4>
        <ul>
            {
                coins.losers.map((coin)=>(
                    <li  key={coin.id}>
                        {coin.name} ({coin.symbol.toUpperCase()}) - <strong style={{color :" red"}}> {coin.price_change_percentage_24h.toFixed(2)}%</strong>
                    </li>
                ))
            }
        </ul>
        </>
       )
    }
    </>
  )
}

export default TopGainerandLosser