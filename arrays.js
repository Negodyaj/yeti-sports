const furniture = [
  {
    id: 31,
    categoryId: 1,
    categoryName: 'tables',
    material: 'wood',
    x: 70,
    y: 90,
    z: 70,
    legsCount: 4,
    cost: 2000,
    quantity: 2,
    hasSpecialDiscount: true,
  }, {
    id: 546,
    categoryId: 1,
    categoryName: 'tables',
    material: 'plastic',
    x: 120,
    y: 90,
    z: 120,
    legsCount: 1,
    cost: 4500,
    quantity: 4,
  }, {
    id: 131,
    categoryId: 2,
    categoryName: 'chairs',
    material: 'wood',
    x: 40,
    y: 110,
    z: 40,
    legsCount: 4,
    cost: 1000,
    quantity: 3,
  }, {
    id: 231,
    categoryId: 3,
    categoryName: 'dressers',
    material: 'something strange, but not wood',
    x: 100,
    y: 110,
    z: 60,
    boxesCount: 5,
    cost: 5000,
    quantity: 2,
    hasSpecialDiscount: false,
  }, 
];

// array with id and total cost only
const newArray = furniture.map((product) => ({ id: product.id, totalCost: product.cost * product.quantity }));
const superUberFinalCost = newArray.reduce((acc, current) => acc += current.totalCost, 0);
console.log(superUberFinalCost);