![testing banner](https://i.ibb.co/yQq8jxF/software-testing.jpg)
# Software Testing 🔬📰⚗️👨‍🔬


## Technologies for Testing 🚩
| Jest               |⚛ React Testing Library |
|------------------------|------------------- |

### Simplifying React Testing with Jest and React Testing Library
#### Testing is a crucial aspect of software development that ensures the reliability and stability of your application. In React applications, Jest and React Testing Library are popular choices for writing tests. This tutorial will guide you through setting up the Jest and React Testing Library for testing React components, specifically focusing on configuring Jest to handle ES modules and writing tests for a simple React component.

### Setting up Jest and React Testing Library:

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
