import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  console.log("State Value", value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  return (
    <>
      <div className="text-center py-6 text-3xl font-bold bg-green-600 text-white">
        <h1>Software Testing with Jest</h1>
      </div>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter your text"
        aria-label="Input Box"
      />
    </>
  );
}

export default App;
