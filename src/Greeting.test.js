import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Make sure this import is at the top
import Greeting from './Greeting'; // Assuming your component is located in src/Greeting.js

test("renders greeting with provided name", () => {
  render(<Greeting name="John" />);
  expect(screen.getByText("Hello, John!")).toBeInTheDocument(); // This matcher works after importing jest-dom
});

test("renders greeting with default name", () => {
  render(<Greeting />);
  expect(screen.getByText("Hello, Guest!")).toBeInTheDocument();
});
