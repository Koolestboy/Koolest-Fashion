function initShop() {
  const grid = document.getElementById("shopGrid");
  const countLabel = document.getElementById("resultCount");
  const sortSelect = document.getElementById("sortSelect");
  const checkboxes = document.querySelectorAll(".cat-filter");
  const searchInput = document.getElementById("shopSearchInput");
  const params = new URLSearchParams(window.location.search);

  const initialQuery = params.get("q") || "";
  const initialCat = params.get("cat");
  if (searchInput) searchInput.value = initialQuery;
  if (initialCat) {
    checkboxes.forEach((cb) => (cb.checked = cb.value === initialCat));
  }

  function getActiveCats() {
    const checked = [...checkboxes].filter((cb) => cb.checked).map((cb) => cb.value);
    return checked.length ? checked : CATEGORIES.map((c) => c.id);
  }

  function render() {
    const cats = getActiveCats();
    const q = (searchInput ? searchInput.value : "").trim().toLowerCase();
    let results = PRODUCTS.filter((p) => cats.includes(p.category));
    if (q) results = results.filter((p) => p.name.toLowerCase().includes(q) || p.category.includes(q));

    const sort = sortSelect ? sortSelect.value : "featured";
    if (sort === "price-asc") results = [...results].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") results = [...results].sort((a, b) => b.price - a.price);
    if (sort === "name") results = [...results].sort((a, b) => a.name.localeCompare(b.name));

    countLabel.textContent = `${results.length} product${results.length === 1 ? "" : "s"}`;
    grid.innerHTML = results.length
      ? results.map(productCardHTML).join("")
      : `<div class="empty-state">No products match your search. Try a different term or clear filters.</div>`;
  }

  checkboxes.forEach((cb) => cb.addEventListener("change", render));
  if (sortSelect) sortSelect.addEventListener("change", render);
  if (searchInput) searchInput.addEventListener("input", render);

  render();
}

document.addEventListener("DOMContentLoaded", initShop);
