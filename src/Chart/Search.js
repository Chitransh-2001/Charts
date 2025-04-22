import { useState, useEffect } from "react";

const CryptoSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/search?query=${query}`
        );
        const data = await response.json();
        setResults(data.coins || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    const timer = setTimeout(fetchData, 500); 

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px" }}>
      <h2>Live Crypto Search</h2>
      <input
        type="text"
        placeholder="Search cryptocurrency..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      {loading && <p>Loading...</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.map((coin) => (
          <li key={coin.id} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            <img src={coin.thumb} alt={coin.name} width="20" height="20" /> {coin.name} ({coin.symbol.toUpperCase()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoSearch;
