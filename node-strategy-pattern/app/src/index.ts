import { Context } from "./entities/Context";
import { DifStrategy } from "./entities/DifStrategy";
import { SumStrategy } from "./entities/SumStrategy";

console.log("Server is running now");

//Sum context
const context = new Context(new SumStrategy());
console.log("SUM CONTEXT", context.execute(10, 20));
//Dif context
context.setStrategy(new DifStrategy());
console.log("DIF CONTEXT", context.execute(20, 10));
