// Edit this array to add, remove, or update your restaurant dishes.
const dishes = [
  { id: 1, name: "Pad Thai", category: "Noodles", price: "8,500 Ks", short: "Stir-fried rice noodles with tamarind, egg and roasted peanuts.", description: "Thailand's much-loved stir-fried noodles, tossed in a tangy tamarind sauce with egg, tofu, bean sprouts and roasted peanuts. Finished with fresh lime.", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=85", tags: ["Popular", "Contains peanuts"], spice: "Mild" },
  { id: 2, name: "Tom Yum Soup", category: "Starters", price: "7,000 Ks", short: "Hot and sour soup with fragrant herbs and fresh mushrooms.", description: "A bright, aromatic Thai soup with lemongrass, galangal, kaffir lime leaves, mushrooms and a lively balance of sour, savoury and spicy flavours.", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", tags: ["Chef's favourite"], spice: "Spicy" },
  { id: 3, name: "Green Curry", category: "Main Course", price: "9,500 Ks", short: "Creamy coconut green curry with vegetables and Thai basil.", description: "A fragrant green curry made with coconut milk, green curry paste, seasonal vegetables and fresh Thai basil. Served with steamed jasmine rice.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85", tags: ["Vegetarian option"], spice: "Medium" },
  { id: 4, name: "Basil Chicken", category: "Main Course", price: "9,000 Ks", short: "Wok-fried chicken, garlic, chilli and fragrant holy basil.", description: "Tender chicken stir-fried over high heat with garlic, chilli, savoury sauce and aromatic Thai basil. Served with jasmine rice.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85", tags: ["Popular"], spice: "Medium" },
  { id: 5, name: "Mango Sticky Rice", category: "Desserts", price: "6,000 Ks", short: "Sweet coconut sticky rice with ripe mango slices.", description: "A classic Thai dessert pairing warm coconut sticky rice with slices of ripe mango and a delicate drizzle of coconut cream.", image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?auto=format&fit=crop&w=900&q=85", tags: ["Vegetarian", "Sweet"], spice: "Not spicy" },
  { id: 6, name: "Papaya Salad", category: "Starters", price: "6,500 Ks", short: "Green papaya, lime, tomato, chilli and crunchy peanuts.", description: "Freshly shredded green papaya pounded with lime, tomatoes, chilli and a savoury dressing for a crisp, refreshing Thai salad.", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85", tags: ["Fresh", "Contains peanuts"], spice: "Spicy" },
  { id: 7, name: "Thai Milk Tea", category: "Drinks", price: "3,500 Ks", short: "Classic chilled Thai tea with creamy milk.", description: "Strong-brewed Thai tea served over ice with a smooth, creamy finish. A refreshing companion to any meal.", image: "https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=900&q=85", tags: ["Iced"], spice: "Not spicy" },
  { id: 8, name: "Coconut Shake", category: "Drinks", price: "4,000 Ks", short: "Fresh coconut blended into a cool, creamy drink.", description: "A cool and naturally sweet coconut drink blended until smooth. Simple, refreshing and perfect for a warm day.", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85", tags: ["Dairy-free option"], spice: "Not spicy" },
  { id: 9, name: "Pineapple Fried Rice", category: "Main Course", price: "8,500 Ks", short: "Jasmine rice with pineapple, vegetables and cashews.", description: "Fragrant jasmine rice wok-fried with juicy pineapple, vegetables, cashews and a gentle touch of curry seasoning.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85", tags: ["Vegetarian option", "Contains nuts"], spice: "Mild" },
  { id: 10, name: "Spring Rolls", category: "Starters", price: "5,500 Ks", short: "Crispy golden rolls with vegetables and dipping sauce.", description: "Golden, crisp rolls filled with seasoned vegetables, served hot with a sweet chilli dipping sauce.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85", tags: ["Vegetarian"], spice: "Not spicy" },
  { id: 11, name: "Drunken Noodles", category: "Noodles", price: "9,000 Ks", short: "Wide rice noodles stir-fried with chilli and Thai basil.", description: "Wide rice noodles tossed in a hot wok with vegetables, garlic, chilli and fragrant Thai basil. Choose your preferred protein.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85", tags: ["Customer favourite"], spice: "Spicy" },
  { id: 12, name: "Lemongrass Cooler", category: "Drinks", price: "3,000 Ks", short: "A refreshing house-made lemongrass and lime cooler.", description: "A light, refreshing drink infused with lemongrass and finished with fresh lime. Served chilled.", image: "https://images.unsplash.com/photo-1513558161293-cdab765a9e2d?auto=format&fit=crop&w=900&q=85", tags: ["Refreshing", "Dairy-free"], spice: "Not spicy" }
];

const categories = ["All", ...new Set(dishes.map(dish => dish.category))];
const categoryContainer = document.getElementById("categories");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const modal = document.getElementById("dishModal");
let activeCategory = "All";

function renderCategories() {
  categoryContainer.innerHTML = categories.map(category => `
    <button class="category-btn ${category === activeCategory ? "active" : ""}"
      type="button" data-category="${category}">${category}</button>
  `).join("");
}

function renderDishes() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = dishes.filter(dish => {
    const matchesCategory = activeCategory === "All" || dish.category === activeCategory;
    const matchesSearch = `${dish.name} ${dish.description} ${dish.category}`.toLowerCase().includes(term);
    return matchesCategory && matchesSearch;
  });

  resultCount.textContent = `${filtered.length} ${filtered.length === 1 ? "dish" : "dishes"}`;
  emptyState.hidden = filtered.length !== 0;

  menuGrid.innerHTML = filtered.map(dish => `
    <article class="dish-card" tabindex="0" role="button"
      aria-label="View details for ${dish.name}" data-dish-id="${dish.id}">
      <div class="dish-photo">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80';">
        <span class="dish-category">${dish.category}</span>
      </div>
      <div class="dish-info">
        <div class="dish-title-row"><h3 class="dish-title">${dish.name}</h3><span class="dish-price">${dish.price}</span></div>
        <p class="dish-description">${dish.short}</p>
        <div class="dish-footer"><span>${dish.spice}</span><span class="view-details">VIEW DETAILS ↗</span></div>
      </div>
    </article>
  `).join("");
}

function openDish(dishId) {
  const dish = dishes.find(item => item.id === Number(dishId));
  if (!dish) return;
  document.getElementById("modalImage").src = dish.image;
  document.getElementById("modalImage").alt = dish.name;
  document.getElementById("modalCategory").textContent = dish.category.toUpperCase();
  document.getElementById("modalTitle").textContent = dish.name;
  document.getElementById("modalDescription").textContent = dish.description;
  document.getElementById("modalPrice").textContent = dish.price;
  document.getElementById("modalTags").innerHTML =
    [...dish.tags, `Spice: ${dish.spice}`].map(tag => `<span>${tag}</span>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeDish() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

categoryContainer.addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategories();
  renderDishes();
});

searchInput.addEventListener("input", renderDishes);

menuGrid.addEventListener("click", event => {
  const card = event.target.closest("[data-dish-id]");
  if (card) openDish(card.dataset.dishId);
});
menuGrid.addEventListener("keydown", event => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-dish-id]")) {
    event.preventDefault();
    openDish(event.target.dataset.dishId);
  }
});

modal.addEventListener("click", event => {
  if (event.target.hasAttribute("data-close-modal")) closeDish();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeDish();
});

document.getElementById("year").textContent = new Date().getFullYear();
renderCategories();
renderDishes();
