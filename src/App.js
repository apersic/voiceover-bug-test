import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((oldArr) => [...oldArr, "message" + Math.random()]);
    }, Math.floor(Math.random() * 3000) + 1000);
    // After 20 messages we stop sending new ones.
    if (data.length === 20) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="App" aria-live="polite">
      <ol>
        {data.map((item, index) => (
          <li key={index} aria-label={item}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
