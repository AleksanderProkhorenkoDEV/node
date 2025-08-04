import { calculateIVA } from "..";

describe("Calculate tax IVA", () => {
  it("Calculate with (21%)", () => {
    expect(calculateIVA(100)).toBe(121);
  });

  it("Correct return type", () => {
    const result: number = calculateIVA(100);
    expect(typeof result).toBe("number");
  });

  it("Throw error if the param is negative", () => {
    expect(() => calculateIVA(-50)).toThrow(
      "The price need be positive"
    );
  });
});
