import React, { useState, useEffect, useRef } from 'react';
const SearchUser = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const debounceTimeout = useRef(null);
  useEffect(() => {
    if (query === '') {
      setSuggestions([]);
      setNoResult(false);
      return;
    }
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(query);
    }, 500);
  }, [query]);
  const fetchSuggestions = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const filtered = data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
      setNoResult(filtered.length === 0);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>🔍 Live User Search</h2>
      <input
        type="text"
        value={query}
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: '12px',
          width: '300px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '16px',
        }}
      />
      <div style={{ position: 'relative', marginTop: '10px', width: '300px' }}>
        {loading && (
          <div style={{ padding: '10px', background: '#fff', border: '1px solid #ccc' }}>
            ⏳ Loading...
          </div>
        )}
        {!loading && suggestions.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              maxHeight: '200px',
              overflowY: 'auto',
            }}
          >
            {suggestions.map((user) => (
              <li
                key={user.id}
                style={{
                  padding: '8px',
                  borderBottom: '1px solid #eee',
                  cursor: 'pointer',
                }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        )}
        {!loading && noResult && (
          <div
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              marginTop: '5px',
              color: '#999',
            }}
          >
            ❌ No results found
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchUser;
