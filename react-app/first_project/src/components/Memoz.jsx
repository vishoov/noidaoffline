import React, { useState, useMemo } from 'react';

const Memoz = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');

  // Simple expensive calculation
  const expensiveCalculation = (num) => {
    console.log('🔥 Calculating...');
    // Simulate expensive operation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num;
    }
    return result;
  };

  // ❌ Without useMemo - runs every render
  // const expensiveValue = expensiveCalculation(count);

  // ✅ With useMemo - runs only when count changes
  const expensiveValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      
      <div>
        <p>Count: {count}</p>
        <p>Expensive Result: {expensiveValue}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment (triggers calculation)
        </button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <div>
        <p>Name: {name}</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name (won't trigger calculation)"
        />
      </div>

      <p style={{ fontSize: '12px', color: '#666' }}>
        Check console - calculation only runs when count changes, not when name changes!
      </p>
    </div>
  );
};

export default Memoz;
