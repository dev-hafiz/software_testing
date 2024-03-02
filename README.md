![testing banner](https://i.ibb.co/yQq8jxF/software-testing.jpg)
# Software Testing 🔬📰⚗️👨‍🔬


## Technologies for Testing 🚩
| Jest               |⚛ React Testing Library |
|------------------------|------------------- |

### Simplifying React Testing with Jest and React Testing Library
#### Testing is a crucial aspect of software development that ensures the reliability and stability of your application. In React applications, Jest and React Testing Library are popular choices for writing tests. This tutorial will guide you through setting up the Jest and React Testing Library for testing React components, specifically focusing on configuring Jest to handle ES modules and writing tests for a simple React component.

### 1. Setting up Jest and React Testing Library:

- **Step 1:**
  - Install Jest and React Testing Library as development dependencies.
   ```bash
    npm install --save-dev jest @testing-library/react @testing-library/jest-dom
   ```
- **Step 2:**
  -  Ensure Jest is configured to handle ES modules by installing `babel-jest`, `@babel/core`, and `@babel/preset-env`
   ```bash
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   ```
- **Step 3:**
  -  Create a Babel configuration file (`.babelrc` or `babel.config.json`) in the project root.
   ```bash
   {
   "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
   ```
- **Step 4:**
  -  Update `package.json` to include a test script that executes Jest.
   ```bash
 "scripts": {
  "test": "jest"
}
   ```

###  2. Configuring Jest Environment:

- **Step 1:**
  -  Install `jest-environment-jsdom`
   ```bash
  npm install --save-dev @testing-library/jest-dom
   ```
- **Step 2:**
  -   Update Jest configuration in `package.json` to use `jest-environment-jsdom`
   ```bash
  {
  "jest": {
    "testEnvironment": "jest-environment-jsdom"
  }
   }
   ```
- **Step 3:**
  -  Install `jest-environment-jsdom`
   ```bash
  npm install --save-dev @testing-library/jest-dom
   ```

### 3. Writing Tests for React Components:

- **Step 1:**
  -  Create a simple React component (`eg,. App.js`).

   ```bash
  import React from "react";
    function App() {
      return (
        <div>
          <h1>Software Testing With Jest</h1>
        </div>
      );
    }export default App;
   ```

- **Step 2:**
  -  Write a test for the App component (`eg,. App.test.js`)

```bash
  import { render, screen } from '@testing-library/react';
  import '@testing-library/jest-dom/extend-expect'; 
  
  import App from '../path/to/App'; 
  
  test("First test case for App Component", () => {
    render(<App />);
    const text = screen.getByText("Software Testing With Jest");
    expect(text).toBeInTheDocument();
  });
 ```




