import { useState } from 'react';

export function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{ color: 'red' }}>Vite + React Go fuck yourself</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
