const products = [
    { id: 1, name: 'Зволожуючий крем', price: 350, category: 'face', image: 'https://via.placeholder.com/300x200?text=Крем' },
    { id: 2, name: 'Шампунь для обʼєму', price: 250, category: 'hair', image: 'https://via.placeholder.com/300x200?text=Шампунь' },
    { id: 3, name: 'Скраб для тіла', price: 320, category: 'body', image: 'https://via.placeholder.com/300x200?text=Скраб' },
    { id: 4, name: 'Сироватка з вітаміном C', price: 410, category: 'face', image: 'https://via.placeholder.com/300x200?text=Сироватка' },
    { id: 5, name: 'Кондиціонер для волосся', price: 270, category: 'hair', image: 'https://via.placeholder.com/300x200?text=Кондиціонер' },
    { id: 6, name: 'Помада натуральна', price: 280, category: 'cosmetics', image: 'https://via.placeholder.com/300x200?text=Помада' }
  ];
  
  let cart = [];
  let currentCategory = 'face';
  
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
            <button class="btn btn-pink animated-btn" data-id="${product.id}">Додати до кошика</button>
          </div>
        </div>
      `;
      list.appendChild(card);
    });
  
    // Додаємо обробник на кнопки "Додати до кошика"
    document.querySelectorAll('.btn-pink[data-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        addToCart(Number(btn.getAttribute('data-id')));
      });
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
        <span>${item.name} (${item.qty} x ${item.price} грн)</span>
        <div>
          <button class="btn btn-sm btn-outline-dark me-1" data-action="minus" data-index="${index}">-</button>
          <button class="btn btn-sm btn-outline-dark me-1" data-action="plus" data-index="${index}">+</button>
          <button class="btn btn-sm btn-outline-danger" data-action="remove" data-index="${index}">×</button>
        </div>
      `;
      cartItems.appendChild(div);
    });
  
    // Кнопки +/-/×
    cartItems.querySelectorAll('button').forEach(btn => {
      const idx = Number(btn.getAttribute('data-index'));
      if (btn.getAttribute('data-action') === 'minus') {
        btn.onclick = () => { changeQty(idx, -1); };
      }
      if (btn.getAttribute('data-action') === 'plus') {
        btn.onclick = () => { changeQty(idx, 1); };
      }
      if (btn.getAttribute('data-action') === 'remove') {
        btn.onclick = () => { removeFromCart(idx); };
      }
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
  
  // Категорії
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      renderProducts(btn.getAttribute('data-category'));
    });
  });
  
  // Кошик
  document.getElementById('cart-btn').addEventListener('click', () => {
    showCart();
    new bootstrap.Modal(document.getElementById('cart-modal')).show();
  });
  
  // Оформлення замовлення
  document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Замовлення надіслано!');
    cart = [];
    updateCartCount();
    bootstrap.Modal.getInstance(document.getElementById('cart-modal')).hide();
  });
  
  // Початковий рендер
  window.onload = () => {
    renderProducts('face');
  };