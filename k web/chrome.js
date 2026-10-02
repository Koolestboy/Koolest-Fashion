// Koolest Fashion — shared header + footer, injected into every page.
// Edit nav links, WhatsApp number and store address here once; every
// page picks up the change automatically.

const WHATSAPP_NUMBER = "+2348052508996"; // digits only, country code first
const STORE_ADDRESS = "Ikota School, Lekki-Epe-Expressway, Eti-Osa, Lagos";

function renderChrome() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = headerHTML();
  if (footer) footer.innerHTML = footerHTML();
  wireChrome();
  updateBadges();
}

function headerHTML() {
  return `
  <div class="header-inner">
    <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <a href="index.html" class="logo">KOOL<em>est</em></a>

    <nav class="main-nav" id="mainNav">
      <a href="index.html">Home</a>
      <a href="shop.html">Shop</a>
      <a href="shop.html#categories">Categories</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" id="searchToggle" aria-label="Search">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8.5" cy="8.5" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M17 17L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <a class="icon-btn" href="wishlist.html" aria-label="Wishlist">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 17s-6.5-4.1-8.4-8C.4 6.1 2 3 5.1 3c1.8 0 3.2 1 4.9 3 1.7-2 3.1-3 4.9-3 3.1 0 4.7 3.1 3.5 6-1.9 3.9-8.4 8-8.4 8z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
        <span class="badge" data-wishlist-count style="display:none">0</span>
      </a>
      <a class="icon-btn" href="cart.html" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 5h2l1.6 9.6a1.5 1.5 0 001.5 1.4h6.8a1.5 1.5 0 001.5-1.3L17 7H5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="18" r="1" fill="currentColor"/></svg>
        <span class="badge" data-cart-count style="display:none">0</span>
      </a>
      <a class="login-btn" href="login.html" data-account-label>Login</a>
    </div>
  </div>

  <div class="search-bar" id="searchBar">
    <form action="shop.html" method="get" class="search-form">
      <input type="text" name="q" placeholder="Search for products, categories…" autocomplete="off" />
      <button type="submit">Search</button>
    </form>
  </div>`;
}

function footerHTML() {
  return `
  <div class="footer-inner">
    <div class="footer-col footer-brand">
      <a href="index.html" class="logo">KOOL<em>est</em></a>
      <p>Modern, considered clothing and accessories for men and women.</p>
      <a class="whatsapp-link" href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2 .1.2.1.3 0 .5-.1.2-.1.3-.3.5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.4.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.7.8 2 1 .3.1.5.2.6.3.1.2.1.9-.2 1.6z"/></svg>
        Chat on WhatsApp
      </a>
    </div>
    <div class="footer-col">
      <h4>Shop</h4>
      <a href="shop.html?cat=men">Men</a>
      <a href="shop.html?cat=women">Women</a>
      <a href="shop.html?cat=shoes">Shoes</a>
      <a href="shop.html?cat=bags">Bags</a>
      <a href="shop.html?cat=accessories">Accessories</a>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html#location">Store Location</a>
    </div>
    <div class="footer-col">
      <h4>Newsletter</h4>
      <p>Be first to know about new arrivals and offers.</p>
      <form class="newsletter-form" onsubmit="handleNewsletter(event)">
        <input type="email" required placeholder="Your email address" />
        <button type="submit">Join</button>
      </form>
      <p class="newsletter-note" id="newsletterNote"></p>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} Koolest Fashion. All rights reserved.</span>
    <span>${STORE_ADDRESS}</span>
  </div>`;
}

function wireChrome() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", open);
    });
  }
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  if (searchToggle) {
    searchToggle.addEventListener("click", () => {
      searchBar.classList.toggle("open");
      if (searchBar.classList.contains("open")) {
        searchBar.querySelector("input").focus();
      }
    });
  }
}

function handleNewsletter(e) {
  e.preventDefault();
  const note = document.getElementById("newsletterNote");
  note.textContent = "Thanks — you're on the list.";
  e.target.reset();
}

document.addEventListener("DOMContentLoaded", renderChrome);
