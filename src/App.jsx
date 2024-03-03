import React from "react";
import FormInput from "./__test__/FormInput";

function App() {
  return (
    <>
      <div className="text-center py-6 text-3xl font-bold bg-green-600 text-white">
        <h1>Software Testing with Jest</h1>
      </div>

      <div className="grid md:grid-cols-2  gap-4">
        <div className=" border border-green-700 m-2 p-4">
          <div>
            <h3 className="text-2xl text-center mb-2">
              Image Testing with title
            </h3>
            <img
              title="Software Testing Banner"
              src="https://img.freepik.com/free-vector/software-tester-concept-illustration_114360-16115.jpg"
              alt="cat image"
            />
          </div>
        </div>
        <div className=" border border-green-700 m-2 p-4">
          <h3 className="text-2xl text-center mb-2">Form Input Testing</h3>
          Name : <FormInput />
        </div>
      </div>
    </>
  );
}

export default App;
