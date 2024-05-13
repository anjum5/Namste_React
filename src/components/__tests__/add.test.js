// import { sum } from "../sum";

import {add}  from "../add"
test("Sum function should calculate the sum of two numbers", () => {
  const result = add(2, 3);

   //Assertion
   expect(result).toBe(5);
 });
 
