import { sum } from "..";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("decimal args", () => {
    expect( sum(1.5, 5.99)).toBe(7.49)
})