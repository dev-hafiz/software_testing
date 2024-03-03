import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormInput from "./FormInput";

test("Form Input Testing", () => {
  render(<FormInput />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter your Name");

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
});
