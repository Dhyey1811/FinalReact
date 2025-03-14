import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Import jest-dom for custom matchers
import Counter from './Counter'; // Assuming your component is located in src/Counter.js

test("increments counter on button click", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument(); // Check if the counter has incremented
});
