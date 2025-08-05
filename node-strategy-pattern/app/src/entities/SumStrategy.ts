import { IStrategy } from "../types/strategy";

export class SumStrategy implements IStrategy {
  execute(num1: number, num2: number): number {
    return num1 + num2;
  }
}
