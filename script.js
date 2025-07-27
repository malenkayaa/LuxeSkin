// Дані товарів
const products = [
  { id: 1, name: 'Зволожуючий крем', price: 350, category: 'cosmetics', image: 'https://via.placeholder.com/300x200?text=Крем' },
  { id: 2, name: 'Шампунь для обʼєму', price: 250, category: 'hair', image: 'https://via.placeholder.com/300x200?text=Шампунь' },
  { id: 3, name: 'Помада натуральна', price: 280, category: 'makeup', image: 'https://via.placeholder.com/300x200?text=Помада' },
  { id: 4, name: 'Скраб для тіла', price: 320, category: 'body', image: 'https://via.placeholder.com/300x200?text=Скраб' },
  { id: 5, name: 'Сироватка з вітаміном C', price: 410, category: 'cosmetics', image: 'https://via.placeholder.com/300x200?text=Сироватка' },
  { id: 6, name: 'Кондиціонер для волосся', price: 270, category: 'hair', image: 'https://via.placeholder.com/300x200?text=Кондиціонер' }
];

let cart = [];
let currentCategory = 'cosmetics';

function renderProducts(category) {
  currentCategory = category;
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  const filtered = products.filter(p => p.category === category);
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} грн</p>
          <button class="btn btn-outline-dark" onclick="addToCart(${product.id})">Додати</button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartCount();
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function showCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Кошик порожній</p>';
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'd-flex justify-content-between align-items-center mb-2';
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong> (${item.qty})
      </div>
      <div>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">−</button>
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, 1)">+</button>
        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">✖</button>
      </div>
    `;
    cartItems.appendChild(div);
  });
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartCount();
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  showCart();
}

// Обробка кнопок категорій
document.querySelectorAll('[data-category]').forEach(btn => {
  btn.addEventListener('click', () => {
    renderProducts(btn.getAttribute('data-category'));
  });
});

// Обробка кошика
document.getElementById('cart-btn').addEventListener('click', () => {
  showCart();
  new bootstrap.Modal(document.getElementById('cart-modal')).show();
});

// Пошук
document.getElementById('search-input').addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.category === currentCategory && p.name.toLowerCase().includes(term));
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} грн</p>
          <button class="btn btn-outline-dark" onclick="addToCart(${product.id})">Додати</button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
});

// Оформлення замовлення
document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Замовлення надіслано!');
  cart = [];
  updateCartCount();
  bootstrap.Modal.getInstance(document.getElementById('cart-modal')).hide();
});

window.onload = () => {
  renderProducts('cosmetics');
};
