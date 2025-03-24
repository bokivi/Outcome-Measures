import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Outcome Measures Website</h1>
      <p className="mt-4">List of clinical outcome measures categorized by type.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
