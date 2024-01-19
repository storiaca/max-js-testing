import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform string to number", () => {
  const number = "3";

  const result = transformToNumber(number);

  expect(result).toBe(3);
});

it("should yield 0 if an empty string is provided", () => {
  const arg = "";

  const result = transformToNumber(arg);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  const resultFn = () => {
    transformToNumber();
  };

  expect(resultFn).toThrowError(/no argument/);
});
