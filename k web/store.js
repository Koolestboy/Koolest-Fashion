// Koolest Fashion — client-side state (cart, wishlist, account)
// Everything here is stored in the browser via localStorage. There is no
// backend yet — when one exists, swap these functions for real API calls
// and keep the same function names so the rest of the site keeps working.

const LS_CART = "koolest_cart";
const LS_WISHLIST = "koolest_wishlist";
const LS_USER = "koolest_user";

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---- Cart: { [productId]: quantity } ----
function getCart() {
  return readJSON(LS_CART, {});
}
function addToCart(id, qty = 1) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + qty;
  writeJSON(LS_CART, cart);
  updateBadges();
}
function setCartQty(id, qty) {
  const cart = getCart();
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  writeJSON(LS_CART, cart);
  updateBadges();
}
function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  writeJSON(LS_CART, cart);
  updateBadges();
}
function cartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((a, b) => a + b, 0);
}
function cartTotal() {
  const cart = getCart();
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = findProduct(id);
    return p ? sum + p.price * qty : sum;
  }, 0);
}

// ---- Wishlist: array of productIds ----
function getWishlist() {
  return readJSON(LS_WISHLIST, []);
}
function toggleWishlist(id) {
  let list = getWishlist();
  if (list.includes(id)) list = list.filter((x) => x !== id);
  else list.push(id);
  writeJSON(LS_WISHLIST, list);
  updateBadges();
  return list.includes(id);
}
function isWishlisted(id) {
  return getWishlist().includes(id);
}

// ---- Account (mock — no real auth) ----
function getUser() {
  return readJSON(LS_USER, null);
}
function signIn(name, email) {
  writeJSON(LS_USER, { name, email });
  updateBadges();
}
function signOut() {
  localStorage.removeItem(LS_USER);
  updateBadges();
}

function updateBadges() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
  document.querySelectorAll("[data-wishlist-count]").forEach((el) => {
    const n = getWishlist().length;
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
  document.querySelectorAll("[data-account-label]").forEach((el) => {
    const u = getUser();
    el.textContent = u ? u.name.split(" ")[0] : "Login";
  });
}
