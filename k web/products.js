// Koolest Fashion — product catalog
// Swap `img` values for real product photography when available.
// Each product uses a duotone colour block in place of a photo for now.

const PRODUCTS = [
  { id: "m-01", name: "Tailored Wool Overcoat", category: "men", price: 289, tone: "ink", tag: "New" },
  { id: "m-02", name: "Merino Crewneck Sweater", category: "men", price: 96, tone: "clay" },
  { id: "m-03", name: "Slim Selvedge Denim", category: "men", price: 118, tone: "sand" },
  { id: "m-04", name: "Oxford Cotton Shirt", category: "men", price: 74, tone: "wine" },
  { id: "m-05", name: "Linen Blazer", category: "men", price: 210, tone: "ink", tag: "New" },
  { id: "m-06", name: "Cargo Utility Trouser", category: "men", price: 108, tone: "sand" },

  { id: "w-01", name: "Silk Wrap Midi Dress", category: "women", price: 165, tone: "wine", tag: "New" },
  { id: "w-02", name: "Structured Blazer Dress", category: "women", price: 198, tone: "ink" },
  { id: "w-03", name: "Pleated Satin Skirt", category: "women", price: 92, tone: "clay" },
  { id: "w-04", name: "Cashmere Wrap Cardigan", category: "women", price: 175, tone: "sand" },
  { id: "w-05", name: "Tailored Wide-Leg Trouser", category: "women", price: 132, tone: "wine" },
  { id: "w-06", name: "Ruched Bodycon Dress", category: "women", price: 118, tone: "ink", tag: "New" },

  { id: "s-01", name: "Leather Chelsea Boot", category: "shoes", price: 210, tone: "ink" },
  { id: "s-02", name: "Minimal Court Sneaker", category: "shoes", price: 128, tone: "sand", tag: "New" },
  { id: "s-03", name: "Pointed Block Heel", category: "shoes", price: 145, tone: "wine" },
  { id: "s-04", name: "Suede Loafer", category: "shoes", price: 168, tone: "clay" },

  { id: "b-01", name: "Structured Top-Handle Bag", category: "bags", price: 245, tone: "wine", tag: "New" },
  { id: "b-02", name: "Soft Leather Tote", category: "bags", price: 189, tone: "ink" },
  { id: "b-03", name: "Woven Crossbody", category: "bags", price: 112, tone: "sand" },
  { id: "b-04", name: "Structured Briefcase", category: "bags", price: 220, tone: "clay" },

  { id: "a-01", name: "Gold-Plated Hoop Earrings", category: "accessories", price: 58, tone: "clay" },
  { id: "a-02", name: "Leather Woven Belt", category: "accessories", price: 64, tone: "ink" },
  { id: "a-03", name: "Silk Twill Scarf", category: "accessories", price: 72, tone: "wine", tag: "New" },
  { id: "a-04", name: "Aviator Sunglasses", category: "accessories", price: 88, tone: "sand" },
];

const CATEGORIES = [
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "shoes", label: "Shoes" },
  { id: "bags", label: "Bags" },
  { id: "accessories", label: "Accessories" },
];

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatPrice(n) {
  return "$" + n.toFixed(2);
}

function productCardHTML(p) {
  const wished = isWishlisted(p.id);
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="product-media">
      <a href="product.html?id=${p.id}">
        <div class="tone tone-${p.tone}">
          <span class="product-initial">${p.name.charAt(0)}</span>
        </div>
      </a>
      ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
      <button class="wish-btn ${wished ? "active" : ""}" aria-label="Save to wishlist" onclick="handleWishClick(event, '${p.id}')">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 17s-6.5-4.1-8.4-8C.4 6.1 2 3 5.1 3c1.8 0 3.2 1 4.9 3 1.7-2 3.1-3 4.9-3 3.1 0 4.7 3.1 3.5 6-1.9 3.9-8.4 8-8.4 8z" stroke="currentColor" stroke-width="1.4"/></svg>
      </button>
    </div>
    <p class="product-cat">${p.category}</p>
    <p class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></p>
    <p class="product-price">${formatPrice(p.price)}</p>
  </div>`;
}

function handleWishClick(e, id) {
  e.preventDefault();
  const active = toggleWishlist(id);
  e.currentTarget.classList.toggle("active", active);
}
