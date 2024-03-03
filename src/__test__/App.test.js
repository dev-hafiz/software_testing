import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("First test case for App Component", () => {
  render(<App />);
  const headingText = screen.getByText("Software Testing with Jest");
  const imageTitle = screen.getByTitle(/Software testing banner/i);
  expect(headingText).toBeInTheDocument();
  expect(imageTitle).toBeInTheDocument();
});
