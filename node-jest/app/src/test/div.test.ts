import { div } from "..";

test("Test the division 4/2 = 2", () => {
  expect(div(4, 2)).toBe(2);
});

test("Cannot divide by zero", () => {
  expect(() => div(4, 0)).toThrow("Cannot be divided by zero");
});
