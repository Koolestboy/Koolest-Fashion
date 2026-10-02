function initWishlistPage() {
  const grid = document.getElementById("wishGrid");

  function draw() {
    const ids = getWishlist();
    if (!ids.length) {
      grid.innerHTML = `<div class="empty-state">Nothing saved yet. <a href="shop.html">Browse products →</a></div>`;
      return;
    }
    const items = ids.map(findProduct).filter(Boolean);
    grid.innerHTML = items.map(productCardHTML).join("");
  }

  const originalHandler = window.handleWishClick;
  window.handleWishClick = function (e, id) {
    originalHandler(e, id);
    draw();
  };

  draw();
}

document.addEventListener("DOMContentLoaded", initWishlistPage);
