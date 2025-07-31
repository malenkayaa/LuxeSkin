// Дані товарів
const products = [
  { id: 1, name: 'Зволожуючий крем', price: 350, category: 'cosmetics', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Шампунь для обʼєму', price: 250, category: 'hair', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: 'Помада натуральна', price: 280, category: 'makeup', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Скраб для тіла', price: 320, category: 'body', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Сироватка з вітаміном C', price: 410, category: 'cosmetics', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Кондиціонер для волосся', price: 270, category: 'hair', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: 'Гель для вмивання', price: 190, category: 'face', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Маска для обличчя', price: 220, category: 'face', image: 'https://images.unsplash.com/photo-1519864600265-abb23843a6c1?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Бальзам для губ', price: 120, category: 'makeup', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Молочко для тіла', price: 260, category: 'body', image: 'https://images.unsplash.com/photo-1519864600265-abb23843a6c1?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Сонцезахисний крем', price: 330, category: 'face', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Олія для волосся', price: 350, category: 'hair', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 13, name: 'Тонік для обличчя', price: 180, category: 'face', image: 'https://images.unsplash.com/photo-1519864600265-abb23843a6c1?auto=format&fit=crop&w=400&q=80' },
  { id: 14, name: 'Пінка для очищення', price: 210, category: 'face', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80' },
  { id: 15, name: 'Лосьйон для тіла', price: 240, category: 'body', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 16, name: 'Туш для вій', price: 300, category: 'makeup', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' },
  { id: 17, name: 'Блиск для губ', price: 170, category: 'makeup', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' },
  { id: 18, name: 'Крем для рук', price: 150, category: 'body', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 19, name: 'Маска для волосся', price: 320, category: 'hair', image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80' },
  { id: 20, name: 'Пудра компактна', price: 260, category: 'makeup', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' }
];

let cart = [];

// Завантаження кошика з LocalStorage
function loadCart() {
  const saved = localStorage.getItem('cart');
  cart = saved ? JSON.parse(saved) : [];
}

// Збереження кошика у LocalStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
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
  saveCart();
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
    // fallback: якщо немає image у item, беремо з products
    let imgSrc = item.image;
    if (!imgSrc) {
      const prod = products.find(p => p.id === item.id);
      imgSrc = prod ? prod.image : '';
    }
    const div = document.createElement('div');
    div.className = 'd-flex justify-content-between align-items-center mb-2';
    div.innerHTML = `
      <div class="d-flex align-items-center" style="min-width:0;">
        <img src="${imgSrc}" alt="${item.name}" class="cart-item-img">
        <span class="cart-item-name"><strong>${item.name}</strong></span>
      </div>
      <div class="d-flex align-items-center gap-1">
        <button class="btn btn-sm btn-outline-secondary" onclick="changeQty(${index}, -1)">−</button>
        <span class="cart-qty-badge">${item.qty}</span>
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
  saveCart();
  updateCartCount();
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  showCart();
}

// Обробка кнопок категорій
const categoryBtns = document.querySelectorAll('[data-category]');
function setActiveCategory(category) {
  categoryBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    }
  });
}
if (categoryBtns.length) {
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      renderProducts(cat);
      setActiveCategory(cat);
    });
  });
  // Встановити активну категорію при завантаженні
  setActiveCategory('cosmetics');
}

// Обробка кошика
const cartBtn = document.getElementById('cart-btn');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    showCart();
    new bootstrap.Modal(document.getElementById('cart-modal')).show();
  });
}

// Пошук
const searchInput = document.getElementById('search-input');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
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
}

// Оформлення замовлення
document.getElementById('checkout-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Замовлення надіслано!');
  cart = [];
  saveCart();
  updateCartCount();
  bootstrap.Modal.getInstance(document.getElementById('cart-modal')).hide();
});

window.onload = () => {
  loadCart();
  updateCartCount();
  renderProducts('cosmetics');
};
