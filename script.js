// Масив товарів
const products = [
    {
      id: 1,
      title: "Крем для обличчя",
      price: 250,
      img: "https://placehold.co/200x200?text=Крем"
    },
    {
      id: 2,
      title: "Сироватка Luxe",
      price: 350,
      img: "https://placehold.co/200x200?text=Сироватка"
    },
    {
      id: 3,
      title: "Маска з вітамінами",
      price: 300,
      img: "https://placehold.co/200x200?text=Маска"
    },
    {
      id: 4,
      title: "Тонік освітлюючий",
      price: 200,
      img: "https://placehold.co/200x200?text=Тонік"
    },
    {
      id: 5,
      title: "Олія для тіла",
      price: 280,
      img: "https://placehold.co/200x200?text=Олія"
    },
    {
      id: 6,
      title: "Пінка для вмивання",
      price: 180,
      img: "https://placehold.co/200x200?text=Пінка"
    }
  ];
  
  // Кошик
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function renderProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    products.forEach(p => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
        <div class="product-card">
          <img src="${p.img}" alt="${p.title}">
          <h5>${p.title}</h5>
          <p>₴${p.price}</p>
          <button class="btn btn-sm btn-primary" data-id="${p.id}">Додати в кошик</button>
        </div>`;
      container.appendChild(col);
    });
    container.querySelectorAll("button[data-id]").forEach(btn => {
      btn.onclick = () => addToCart(btn.dataset.id);
    });
  }
  
  function addToCart(id) {
    const prod = products.find(p => p.id == id);
    cart.push(prod);
    saveCart();
    document.getElementById("cart-count").textContent = cart.length;
  }
  
  function showcaseCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";
    if (cart.length === 0) {
      list.innerHTML = "<p>Ваш кошик порожній.</p>";
      return;
    }
    cart.forEach(p => {
      const div = document.createElement("div");
      div.textContent = `${p.title} — ₴${p.price}`;
      list.appendChild(div);
    });
  }
  
  // Відкрити модальне вікно кошика
  document.getElementById("cart-btn").onclick = () => {
    showcaseCart();
    const modal = new bootstrap.Modal(document.getElementById("cart-modal"));
    modal.show();
  };
  
  // Оформлення замовлення
  document.getElementById("checkout-form").onsubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
  
    if (!name || !phone) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }
  
    alert(`Дякуємо, ${name}, ваше замовлення прийнято!`);
    cart = [];
    saveCart();
    form.reset();
    document.getElementById("cart-count").textContent = 0;
    bootstrap.Modal.getInstance(document.getElementById("cart-modal")).hide();
  };
  
  // Ініціалізація
  renderProducts();
  document.getElementById("cart-count").textContent = cart.length;
  