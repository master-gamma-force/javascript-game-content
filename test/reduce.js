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

const sum = (employee) => {
  return employee[0].salary + employee[1].salary + employee[2].salary + employee[3].salary;
}

const total = employees.reduce(sum);

console.log(total);
