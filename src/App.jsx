import React, { useState } from "react";

function App() {
  const [data, setDate] = useState("");

  return (
    <div>
      <div className="text-center py-6 text-3xl font-bold bg-green-600 text-white">
        <h1>Software Testing with Jest</h1>
      </div>

      <button type="button" onClick={() => setDate("Updated Data")}>
        Update
      </button>

      <h2 className="text-3xl">{data}</h2>
    </div>
  );
}

export default App;
