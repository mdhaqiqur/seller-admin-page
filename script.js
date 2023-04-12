const form = document.getElementById('product-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const productName = document.getElementById('product-name').value;
  const category = document.getElementById('category').value;
  const price = document.getElementById('price').value;
  
  const response = await fetch('https://crudcrud.com/api/019c5dc5a0594f8abe36ac67e95805b4/api/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_name: productName, category, price })
  });
  
  if (response.ok) {
    console.log('Product added successfully');
    form.reset();
  } else {
    console.error('Failed to add product');
  }
});
const categorySelect = document.getElementById('category');

categorySelect.addEventListener('change', async (event) => {
  const category = event.target.value;
  
  const response = await fetch(`https://crudcrud.com/api/019c5dc5a0594f8abe36ac67e95805b4/api/products?category=${category}`);
  const products = await response.json();
  
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  
  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.product_name} - $${product.price}`;
    productList.appendChild(listItem);
  });
});
