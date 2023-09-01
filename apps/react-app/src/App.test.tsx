import { render, screen } from "@testing-library/react";
import App from "../src/App";

// @ts-ignore
describe("App", () => {
  // @ts-ignore
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/SabkaBazaar/i);
    // @ts-ignore
    expect(headline).toBeInTheDocument();
  });
});
