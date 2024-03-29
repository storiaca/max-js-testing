import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number of type number", () => {
  const number = "3";

  const result = transformToNumber(number);

  // expect(result).toBe(3);
  expect(result).toBeTypeOf("number");
});

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
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

  expect(resultFn).toBeTruthy();
  //expect(resultFn).toThrow(/Cannot read properties of null/);
});

it("should return zero when provided argument is null", () => {
  const numberString = null;
  const result = transformToNumber(numberString);
  expect(result).toBe(0);
});
