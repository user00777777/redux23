import React, { useState, useMemo } from 'react';

function Homepage() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count + 2;
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double count: {doubleCount}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Homepage;

