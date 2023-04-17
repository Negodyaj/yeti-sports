const products = [
  {
    id: 1,
    imageSrc: './assets/products/product1.png',
    title: 'Женская сноубордическая куртка Sula',
    price: '17490 ₽',
  }, {
    id: 2,
    imageSrc: './assets/products/product2.png',
    title: 'Женская сноубордическая куртка Sula 2',
    price: '14490 ₽',
  }, {
    id: 3,
    imageSrc: './assets/products/product3.png',
    title: 'Женская сноубордическая куртка Sula 3',
    price: '14990 ₽',
  }, {
    id: 4,
    imageSrc: './assets/products/product4.png',
    title: 'Женская сноубордическая куртка Sula 4',
    price: '12990 ₽',
  }, 
];

const productsGrid = document.querySelector('.products-grid');

for (const product of products) {
  renderProduct(product);
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
