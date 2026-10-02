function initProductPage() {
  const params = new URLSearchParams(window.location.search);
  const product = findProduct(params.get("id"));
  const root = document.getElementById("pdRoot");

  if (!product) {
    root.innerHTML = `<div class="empty-state">We couldn't find that product. <a href="shop.html">Back to shop</a></div>`;
    return;
  }

  document.title = `${product.name} — Koolest Fashion`;
  let qty = 1;

  function wishActive() {
    return isWishlisted(product.id);
  }

  function draw() {
    root.innerHTML = `
    <div class="pd-layout">
      <div class="product-media pd-media">
        <div class="tone tone-${product.tone}"><span class="product-initial" style="font-size:5rem">${product.name.charAt(0)}</span></div>
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
      </div>
      <div class="pd-info">
        <p class="pd-cat">${product.category}</p>
        <h1 class="pd-title">${product.name}</h1>
        <p class="pd-price">${formatPrice(product.price)}</p>

        <div class="qty-row">
          <div class="qty-control">
            <button id="qtyMinus" aria-label="Decrease quantity">&minus;</button>
            <span id="qtyVal">${qty}</span>
            <button id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
        </div>

        <div class="pd-actions">
          <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
          <button class="btn btn-outline" id="wishBtn">${wishActive() ? "♥ Saved" : "♡ Save for later"}</button>
        </div>

        <div class="pd-meta">
          <p><strong>Fit:</strong> True to size, tailored silhouette.</p>
          <p><strong>Care:</strong> See garment label for full care instructions.</p>
          <p><strong>Shipping:</strong> Ships within 2–4 business days.</p>
        </div>
      </div>
    </div>`;

    document.getElementById("qtyMinus").onclick = () => { qty = Math.max(1, qty - 1); document.getElementById("qtyVal").textContent = qty; };
    document.getElementById("qtyPlus").onclick = () => { qty += 1; document.getElementById("qtyVal").textContent = qty; };
    document.getElementById("addToCartBtn").onclick = () => {
      addToCart(product.id, qty);
      const btn = document.getElementById("addToCartBtn");
      btn.textContent = "Added ✓";
      setTimeout(() => (btn.textContent = "Add to Cart"), 1400);
    };
    document.getElementById("wishBtn").onclick = () => {
      toggleWishlist(product.id);
      document.getElementById("wishBtn").textContent = wishActive() ? "♥ Saved" : "♡ Save for later";
    };
  }

  draw();
}

document.addEventListener("DOMContentLoaded", initProductPage);
