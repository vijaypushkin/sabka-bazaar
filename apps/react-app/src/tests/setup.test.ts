import { expect, afterEach, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

describe("setup", () => {
  // @ts-ignore
  it("should pass", () => {
    expect(true).toBe(true);
  });
});
