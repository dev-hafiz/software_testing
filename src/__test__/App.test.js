import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Testing InputBox Onchange Event", () => {
  // Arrange
  const onChangeMock = jest.fn(); // Mocking the onChange handler
  const { getByRole } = render(<App onChange={onChangeMock} />);

  //Act
  const inputElement = getByRole("textbox"); // Get the input element by its role
  fireEvent.change(inputElement, { target: { value: "New value" } }); // Simulate change event with new value
  // Assert

  expect(inputElement.value).toBe("New value"); // Ensure input value has been updated
});

// Describe Test Method of JEST
describe("Unit Testing Group 1", () => {
  test("Second test case for App Component", () => {
    render(<App />);
    const headingText = screen.getByText("Software Testing with Jest");
    const imageTitle = screen.getByTitle(/Software testing banner/i);
    expect(headingText).toBeInTheDocument();
    expect(imageTitle).toBeInTheDocument();
  });
  test("Third test case for App Component", () => {
    render(<App />);
    const headingText = screen.getByText("Software Testing with Jest");
    const imageTitle = screen.getByTitle(/Software testing banner/i);
    expect(headingText).toBeInTheDocument();
    expect(imageTitle).toBeInTheDocument();
  });
});

describe("UI testing Group 2", () => {
  test("Fourth test case for App Component", () => {
    render(<App />);
    const headingText = screen.getByText("Software Testing with Jest");
    const imageTitle = screen.getByTitle(/Software testing banner/i);
    expect(headingText).toBeInTheDocument();
    expect(imageTitle).toBeInTheDocument();
  });

  describe.skip("Nested Testing Business Logic Group 3", () => {
    test("Fifth test case for App Component", () => {
      render(<App />);
      const headingText = screen.getByText("Software Testing with Jest");
      const imageTitle = screen.getByTitle(/Software testing banner/i);
      expect(headingText).toBeInTheDocument();
      expect(imageTitle).toBeInTheDocument();
    });
  });
});
