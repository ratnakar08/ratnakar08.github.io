import { useEffect, useState } from 'react';
import '../styles/snowflakes.css';

export default function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    // Create initial snowflakes
    const initialSnowflakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 10 + Math.random() * 15,
    }));
    setSnowflakes(initialSnowflakes);
  }, []);

  return (
    <div className="snowflakes-container">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="snowflake"
          style={{
            left: `${snowflake.left}%`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.duration}s`,
            fontSize: `${snowflake.size}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
