## Test Case: First Test Case for App Component

```jsx
test("First test case for App Component", () => {
  // Render the App component
  render(<App />);
  
  // Find the heading element by text
  const headingText = screen.getByText("Software Testing With Jest");
  
  // Find the image element by title using a regular expression
  const imageTitle = screen.getByTitle(/Software testing banner/i);
  
  // Assert that the heading element is present in the document
  expect(headingText).toBeInTheDocument();
  
  // Assert that the image element is present in the document
  expect(imageTitle).toBeInTheDocument();
});
