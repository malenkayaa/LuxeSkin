// Дані товарів
const products = [
  { id: 1, name: 'Крем Dr. Althea 345 Relief Cream', price: 850, category: 'face', image: 'https://beautysmart.com.ua/content/images/27/536x341l50nn0/dr.althea-345na-relief-cream-vidnovliuiuchyi-krem-z-antyoksydantamy-26791746246133.png' },
  { id: 2, name: 'Маска K18 Leave-In Molecular Repair Hair Mask', price: 1250, category: 'hair', image: 'https://lip.com.ua/files/products/s2547248-main-zoom_1.1000x1000.webp' },
  { id: 3, name: 'Тональний крем L\'Oreal True Match', price: 280, category: 'cosmetics', image: 'https://media.prostor.ua/catalog/product/2/0/206988.png?width=566&height=566' },
  { id: 4, name: 'Гель для душу Dove Deeply Nourishing', price: 320, category: 'body', image: 'https://www.brocard.ua/media/catalog/product/cache/V17244194/eyJ3Ijo1MDAsImgiOjUwMCwibyI6ImNhdGFsb2dcL3Byb2R1Y3RcL1wvNFwvOFwvNDgyMDIyNzc4MTAzNF8xLmpwZyJ9/sister-s-aroma-sea-salt.webp' },
  { id: 5, name: 'Сироватка The Ordinary Niacinamide 10% + Zinc 1%', price: 410, category: 'face', image: 'https://shine-bright.com.ua/image/cache/catalog/products/The_Ordinary/769915190311/rdn-niacinamide-10pct-zinc-1pct-30ml-e1546704838358-600x315.jpg' },
  { id: 6, name: 'Шампунь Olaplex No.4 Bond Maintenance', price: 900, category: 'hair', image: 'https://profcare-stage.s3.eu-central-1.amazonaws.com/products/3904/19400_64d4a01ce3281469214e888615055a43.webp' },
  { id: 7, name: 'Шовковий тюрбан MOLODO Silk Hair Turban', price: 3300, category: 'hair', image: 'https://www.molodo.me/cdn/shop/files/silk-turban-microfiber-molodo-blue.png?v=1747979489&width=1920' },
  { id: 8, name: 'Крем для тіла Rituals The Ritual of Sakura', price: 300, category: 'body', image: 'https://shop-cdn1-2.vigbo.tech/shops/235966/products/22287444/images/2-5ad7c19493675ca5ed80e52fbb08e69f.jpg' },
  { id: 9, name: 'Пудра Catrice All Matt Plus', price: 250, category: 'cosmetics', image: 'https://i.pinimg.com/1200x/06/11/56/0611568bd71218842a6febd5fa6450f1.jpg' },
  { id: 10, name: 'Скраб для тіла Frank Body Original Coffee Scrub', price: 400, category: 'body', image: 'https://images.prom.ua/4416032721_w1280_h640_kofejnij-skrab-frank.jpg' },
  { id: 11, name: 'Зволожуючий сонцезахисний крем Dr.Ceuracle Hyal Reyouth Moist Sun SPF 50', price: 1150, category: 'face', image: 'https://lemonhouse.com.ua/wp-content/uploads/2023/02/Dr.Ceuracle-Hyal-Reyouth-Moist-Sun-SPF-50-PA-50-ml.png' },
  { id: 12, name: 'Кондиціонер Briogeo Don\'t Despair, Repair!, Repair!', price: 950, category: 'hair', image: 'https://angelsglow.com.ua/content/images/32/600x600l80mc0/56639385663338.webp' },
  { id: 13, name: 'Гель для вмивання La Roche-Posay Effaclar', price: 450, category: 'face', image: 'https://image.maudau.com.ua/webp/size/lg/products/9e/12/02/9e1202b6f657eaf56646736542cc99d7.jpg' },
  { id: 14, name: 'Зволожувальний крем CeraVe Moisturizing Cream', price: 400, category: 'face', image: 'https://dnk.by/upload/iblock/a10/2ge3l9zq2t035rccg02ogkn7pdhap3o2.jpg' },
  { id: 15, name: 'Олія для тіла Ambre Vanille Bath and Body Oil', price: 950, category: 'body', image: 'https://storeesbeauty.com.ua/cdn/shop/files/AmbreVanilleBathandBodyOil.jpg?v=1697126530&width=600' },
  { id: 16, name: 'Палетка тіней Makeup Up Factory 20 Pro Effect Eye Palette Brown Selectio', price: 300, category: 'cosmetics', image: 'https://www.brocard.ua/media/catalog/product/cache/V188573270690/eyJ3Ijo1MDAsImgiOjUwMCwibyI6ImNhdGFsb2dcL3Byb2R1Y3RcL1wvNFwvMFwvNDA0NTkxNTk2MTg2OF8xLmpwZyJ9/make-up-factory-pro-effect.webp' },
  { id: 18, name: 'Молочко для тіла Neutrogena Hydro Boost', price: 400, category: 'body', image: 'https://pwa-api.eva.ua/img/512/512/resize/1/2/1207941_1_1753860378.jpg' },
  { id: 19, name: 'Сироватка незмивна L\'Oreal Paris Elseve Glycolic Gloss', price: 500, category: 'hair', image: 'https://img.auchan.ua/rx/q_90,ofmt_webp/auchan.ua/media/catalog/product/5/5/555daccf1bec19cfd84ebac1a468ab2e.jpeg' },
  { id: 20, name: 'Блиск крем для губ KIKO Milano Lip', price: 980, category: 'cosmetics', image: 'https://isnuyou.com.ua/Media/shop-6580/F335C33A-1871-4C2A-93D4-5118491B89A7.jpeg' },
  { id: 17, name: 'Туш для вій Maybelline Lash Sensational Sky High', price: 170, category: 'cosmetics', image: 'https://ezebra.com.ua/hpeciai/e869d7bc2162e28ac485fec9212bd16f/ukr_pl_MAYBELLINE-LASH-SENSATIONAL-SKY-HIGH-TUSH-DLIA-VII-01-VERY-BLACK-7-2ML-126799_1.webp' },
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

// --- АКЦІЙНІ ТОВАРИ ---
const saleProducts = [
  // Обличчя
  { id: 1, oldPrice: 850, price: 680, discount: 20, type: 'percent', category: 'face', label: 'Акція', until: '31.08.2025' },
  { id: 5, oldPrice: 410, price: 350, discount: 15, type: 'percent', category: 'face', label: '-15%', until: '31.08.2025' },
  // Волосся
  { id: 2, oldPrice: 1250, price: 999, discount: 251, type: 'fixed', category: 'hair', label: 'Знижка', until: '31.08.2025' },
  { id: 6, oldPrice: 900, price: 720, discount: 20, type: 'percent', category: 'hair', label: '-20%', until: '31.08.2025' },
  // Тіло
  { id: 4, oldPrice: 320, price: 256, discount: 20, type: 'percent', category: 'body', label: '-20%', until: '31.08.2025' },
  { id: 8, oldPrice: 300, price: 255, discount: 15, type: 'percent', category: 'body', label: 'Акція', until: '31.08.2025' },
  // Косметика
  { id: 3, oldPrice: 280, price: 224, discount: 20, type: 'percent', category: 'cosmetics', label: '-20%', until: '31.08.2025' },
  { id: 9, oldPrice: 250, price: 200, discount: 20, type: 'percent', category: 'cosmetics', label: 'Знижка', until: '31.08.2025' }
];

function getSaleProductData(id) {
  return saleProducts.find(sp => sp.id === id);
}

function renderProducts(category) {
  currentCategory = category;
  const list = document.getElementById('product-list');
  list.innerHTML = '';

  // Удаляем старый фильтр, если он есть
  const oldFilterBar = document.getElementById('sale-filter-bar');
  if (oldFilterBar) oldFilterBar.remove();

  let filtered = [];
  if (category === 'sale') {
    filtered = saleProducts.map(sp => {
      const prod = products.find(p => p.id === sp.id);
      return { ...prod, ...sp };
    });
  } else {
    filtered = products.filter(p => p.category === category);
  }

  // Фільтри для акційної категорії
  if (category === 'sale') {
    // Додаємо фільтр тільки якщо його ще немає
    if (!document.getElementById('sale-filter-bar')) {
      const filterBar = document.createElement('div');
      filterBar.className = 'sale-filter-bar mb-3';
      filterBar.id = 'sale-filter-bar';
      filterBar.innerHTML = `
        <div class="d-flex flex-wrap justify-content-center gap-3 w-100">
          <select id="sale-category-filter" class="sale-filter-select form-select form-select-sm">
            <option value="all">Всі категорії</option>
            <option value="face">Обличчя</option>
            <option value="hair">Волосся</option>
            <option value="body">Тіло</option>
            <option value="cosmetics">Косметика</option>
          </select>
          <select id="sale-discount-filter" class="sale-filter-select form-select form-select-sm">
            <option value="all">Всі знижки</option>
            <option value="20">20% і більше</option>
            <option value="15">15% і більше</option>
          </select>
        </div>
      `;
      list.parentElement.insertBefore(filterBar, list);

      document.getElementById('sale-category-filter').addEventListener('change', function() {
        const val = this.value;
        let arr = saleProducts.map(sp => {
          const prod = products.find(p => p.id === sp.id);
          return { ...prod, ...sp };
        });
        if (val !== 'all') arr = arr.filter(p => p.category === val);
        renderSaleCards(arr);
      });
      document.getElementById('sale-discount-filter').addEventListener('change', function() {
        const val = parseInt(this.value);
        let arr = saleProducts.map(sp => {
          const prod = products.find(p => p.id === sp.id);
          return { ...prod, ...sp };
        });
        if (!isNaN(val)) arr = arr.filter(p => p.discount >= val);
        renderSaleCards(arr);
      });
    }
    renderSaleCards(filtered);
    return;
  }

  filtered.forEach(product => {
    const saleData = getSaleProductData(product.id);
    let priceBlock = `<p class="card-text">${product.price} грн</p>`;
    let sticker = '';
    if (saleData) {
      priceBlock = `<p class="card-text"><span style="text-decoration:line-through;color:#888;font-size:0.95em;">${saleData.oldPrice} грн</span> <span style="color:#e295b5;font-weight:600;">${saleData.price} грн</span></p>`;
      sticker = `<span class="badge" style="background:#e295b5;color:#fff;position:absolute;top:12px;left:12px;font-size:1em;z-index:2;">${saleData.label}</span>`;
    }
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 text-center position-relative">
        ${sticker}
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          ${priceBlock}
          ${saleData ? `<div style="font-size:0.95em;color:#e295b5;margin-top:0px;">Акція до ${saleData.until}</div>` : ''}
          <button class="btn btn-outline-dark" onclick="addToCart(${product.id})">Додати</button>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

function renderSaleCards(arr) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  arr.forEach(product => {
    const priceBlock = `<p class="card-text"><span style="text-decoration:line-through;color:#888;font-size:0.95em;">${product.oldPrice} грн</span> <span style="color:#e295b5;font-weight:600;">${product.price} грн</span></p>`;
    const sticker = `<span class="badge" style="background:#e295b5;color:#fff;position:absolute;top:12px;left:12px;font-size:1em;z-index:2;">${product.label}</span>`;
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.innerHTML = `
      <div class="card h-100 text-center position-relative">
        ${sticker}
        <img src="${product.image}" class="card-img-top" alt="${product.name}" />
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          ${priceBlock}
          <div style="font-size:0.95em;color:#e295b5;margin-top:0px;">Акція до ${product.until}</div>
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

const saleBtn = document.getElementById('sale-btn');
if (saleBtn) {
  saleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    renderProducts('sale');
    setActiveCategory(null); // снимаем выделение с обычных категорий
  });
}

window.onload = () => {
  loadCart();
  updateCartCount();
  renderProducts('cosmetics');
};
