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
