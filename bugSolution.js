import React, { useState, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = useRef(() => {
    setCount(prevCount => prevCount + 1);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount.current}>Increment</button>
    </div>
  );
}

export default MyComponent;