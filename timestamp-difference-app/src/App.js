import React, { useState } from 'react';

function App() {
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');
  const [differenceInSeconds, setDifferenceInSeconds] = useState(null);

  const calculateDifference = () => {
    fetch('https://whimsical-choux-7b4c56.netlify.app/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ timestamp1, timestamp2 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setDifferenceInSeconds(data.differenceInSeconds);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>Timestamp Difference Calculator</h1>
      <div>
        <label htmlFor="timestamp1">Timestamp 1: </label>
        <input
          type="text"
          id="timestamp1"
          value={timestamp1}
          onChange={(e) => setTimestamp1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="timestamp2">Timestamp 2: </label>
        <input
          type="text"
          id="timestamp2"
          value={timestamp2}
          onChange={(e) => setTimestamp2(e.target.value)}
        />
      </div>
      <button onClick={calculateDifference}>Calculate</button>
      {differenceInSeconds !== null && (
        <div>
          <p>Difference in Seconds: {differenceInSeconds}</p>
        </div>
      )}
    </div>
  );
}

export default App;
