function initCartPage() {
  const root = document.getElementById("cartItems");
  const summary = document.getElementById("cartSummary");

  function draw() {
    const cart = getCart();
    const ids = Object.keys(cart);

    if (!ids.length) {
      root.innerHTML = `<div class="empty-state">Your cart is empty. <a href="shop.html">Continue shopping →</a></div>`;
      summary.innerHTML = "";
      return;
    }

    root.innerHTML = ids.map((id) => {
      const p = findProduct(id);
      if (!p) return "";
      const qty = cart[id];
      return `
      <div class="cart-row">
        <div class="product-media cart-thumb"><div class="tone tone-${p.tone}"></div></div>
        <div class="cart-info">
          <h4>${p.name}</h4>
          <p class="product-price">${formatPrice(p.price)}</p>
          <div class="qty-control">
            <button onclick="changeQty('${id}', ${qty - 1})" aria-label="Decrease">&minus;</button>
            <span>${qty}</span>
            <button onclick="changeQty('${id}', ${qty + 1})" aria-label="Increase">+</button>
          </div>
          <a class="cart-remove" onclick="removeFromCart('${id}'); initCartPage();">Remove</a>
        </div>
        <div class="product-price">${formatPrice(p.price * qty)}</div>
      </div>`;
    }).join("");

    const subtotal = cartTotal();
    const shipping = subtotal > 150 ? 0 : 12;
    summary.innerHTML = `
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatPrice(subtotal + shipping)}</span></div>
      <button class="btn btn-primary btn-full" style="margin-top:18px" onclick="handleCheckout()">Checkout</button>
      <p class="form-note" style="text-align:center;margin-top:10px">Checkout isn't connected to payments yet — this button is a placeholder for launch.</p>
    `;
  }

  window.changeQty = (id, qty) => { setCartQty(id, qty); draw(); };
  window.initCartPage = draw;
  draw();
}

function handleCheckout() {
  alert("Checkout is coming soon! For now, reach out on WhatsApp to complete your order.");
}

document.addEventListener("DOMContentLoaded", initCartPage);
