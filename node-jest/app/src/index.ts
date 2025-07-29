export function sum(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}

export function div(divisor: number, dividendo: number): number {
  if (dividendo === 0) throw new Error("Cannot be divided by zero");
  return divisor / dividendo;
}
