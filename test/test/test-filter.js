const chai = require("chai");
const assert = chai.assert;


let leonidas = {
  name: "Leondias",
  skill: "JavaScript",
};
let nicole = {
  name: "Nicole",
  skill: "Python",
};
let richard = {
  name: "Richard",
  skill: "Python",
};
let angela = {
  name: "Angela",
  skill: "JavaScript",
};

const employees = [leonidas, nicole, richard, angela];

const knowPython = (employee) => {
  return employee.skill === "Python";
};

const sabePython = employees.filter(knowPython);

assert.deepEqual(sabePython, [
  { name: "Nicole", skill: "Python" },
  { name: "Richard", skill: "Python" },
]);


describe("Tests about Filter's Lections", function () {
  describe("Test content employees know Python", function () {
  it("Testings logs", function () {
    assert.deepEqual(sabePython, [
      { name: "Nicole", skill: "Python" },
      { name: "Richard", skill: "Python" },
    ]);
  });
  });
});
