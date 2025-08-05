import { IStrategy } from "../types/strategy";

export class Context {
  private strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.setStrategy(strategy);
  }

  public setStrategy(strategy: IStrategy): void {
    if (!strategy) throw new Error("Strategy cannot be null");
    this.strategy = strategy;
  }

  public execute(num1: number, num2: number): number {
    return this.strategy.execute(num1, num2);
  }
}
