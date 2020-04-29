const chai = require('chai');
const assert = chai.assert;

let leonidas = {
  name: "Leonidas",
  salary: 3400,
};
let nicole = {
  name: "Nicole",
  salary: 4000,
};
let richard = {
  name: "Richard",
  salary: 2800,
};
let angela = {
  name: "Angela",
  salary: 3200,
};

const employees = [leonidas, nicole, richard, angela];

const sum = (accumulator, employee) => {
  return accumulator + employee.salary;
};

const total = employees.reduce(sum, 0);

console.log(total);

describe("Test about reduce's lections", function () {
  describe("Test total salary", function () {
    it("Testing logs", function () {
      assert.deepEqual(total, 13400);
    });
  });
});