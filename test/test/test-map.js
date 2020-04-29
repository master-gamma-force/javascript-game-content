const chai = require('chai');
const assert = chai.assert;

let leonidas = {
  name: "Leondias",
  timeOfWork: 48,
};
let nicole = {
  name: "Nicole",
  timeOfWork: 36,
};
let richard = {
  name: "Richard",
  timeOfWork: 24,
};
let angela = {
  name: "Angela",
  timeOfWork: 12,
};

const employees = [leonidas, nicole, richard, angela];

const monthsToYears = (employee) => {
  return employee.timeOfWork / 12;
};

const timeInYears = employees.map(monthsToYears);

console.log(timeInYears);

assert.deepEqual(timeInYears, [4, 3, 2, 1]);

describe("Tests about Map's Lections", function () {
  describe("Test content time of work in years", function () {
    it("Testing logs", function () {
      assert.deepEqual(timeInYears, [4, 3, 2, 1]);
    });
  });
});