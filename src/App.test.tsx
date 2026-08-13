import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("redirects to login page when no auth token is present", () => {
    render(<App />);

    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });
});
