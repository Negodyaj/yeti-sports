const table1 = {
  material: 'wood',
  x: 70,
  y: 90,
  z: 70,
  legsCount: 4,
  cost: 2000,
};

const table2 = {
  material: 'plastic',
  x: 120,
  y: 90,
  z: 120,
  legsCount: 1,
  cost: 4500,
};

const computer = {
  name: 'home workstation',
  isLaptop: false,
  RAM: 16,
  SSD: 1024,
  HDD: undefined,
};

const computer2 = {
  name: 'laptop for travel',
  isLaptop: true,
  RAM: 4,
  SSD: undefined,
  HDD: 512,
};

const computers = [computer, computer2];

for (const computer of computers) {  
  printComputerInfo(computer);
}

console.log(`after the function's call:`);
console.log(computer.RAM);
console.log(computer2.RAM);


function printComputerInfo(computer) {
  computer.RAM = 8;
  const hardDrive = computer.SSD ? `SSD ${computer.SSD}` : `HDD ${computer.HDD}`;
  console.log(`I have a ${computer.name} with ${hardDrive}`);
}