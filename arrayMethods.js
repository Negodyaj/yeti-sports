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
    hasSpecialDiscount: false,
  }, 
];



const filteredProducts = furniture.filter((product) => product.categoryId === 3);

// products with legs
const filteredProducts2 = furniture.filter((product) => product.legsCount > 1);


for (const filteredProduct of filteredProducts2) {
  console.log(filteredProduct);  
}

const products = [
  {
    id: 1,
    imageSrc: './assets/products/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: '17490 ₽',
    sizes: ['S', 'L'],
  }, {
    id: 2,
    imageSrc: './assets/products/product2.png',
    title: 'Женская сноубордическая куртка Sula 2',
    price: '14490 ₽',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['red', 'orange', 'black'],
  }, {
    id: 3,
    imageSrc: './assets/products/product3.png',
    title: 'Женская сноубордическая куртка Sula 3',
    price: '14990 ₽',
    sizes: ['XL'],
  }, {
    id: 4,
    imageSrc: './assets/products/product4.png',
    title: 'Женская сноубордическая куртка Sula 4',
    price: '12990 ₽',
    sizes: ['M'],
  }, 
];

const productsGrid = document.querySelector('.products-grid');

let filteredJackets = products;

for (const product of filteredJackets) {
  renderProduct(product);
}

function filterProductsBySize() {
  // let's see which sizes are selected
  const checkedInputsForSizes = document.querySelectorAll('[name="size"]:checked');  // links to inputs
  const checkedSizes = [];
  checkedInputsForSizes.forEach((input) => checkedSizes.push(input.value));
  
  // let's filter the data
  filteredJackets = products.filter((product) => {
    for (const size of product.sizes) {
      if (checkedSizes.includes(size)) {
        return true;
      }
    }
    return false;
  });

  // let's refresh the layout of Catalog page
  productsGrid.innerHTML = '';
  for (const product of filteredJackets) {
    renderProduct(product);
  }
}

function renderProduct(product) {
  const productCard = document.createElement('div');
  productsGrid.append(productCard);
  productCard.outerHTML = `
  <div class="product-card" id="product${product.id}">
    <img src="${product.imageSrc}" alt="">
    <div class="title">${product.title}</div>
    <div class="price">${product.price}</div>
  </div>`;
}