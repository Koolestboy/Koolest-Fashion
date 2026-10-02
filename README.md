Koolest Fashion
A modern, mobile-first website for Koolest Fashion — a brand selling men's and women's clothing, shoes, bags, and accessories.
Live site: add your GitHub Pages / custom domain link here once deployed
Features
Homepage with hero, featured products, new arrivals, categories, reviews, and newsletter signup
Shop page with live search, category filters, and sorting
Product detail pages with quantity selector, add-to-cart, and wishlist
Cart with quantity controls and order summary
Wishlist (saved items)
Login / signup (currently mock — see Roadmap)
WhatsApp contact button
Store location map
Fully responsive, from mobile to desktop
Tech Stack
Plain HTML, CSS, and JavaScript — no build step, no frameworks, no dependencies. Opens directly in a browser and deploys to any static host.
Project Structure
```
koolest/
├── index.html          Homepage
├── shop.html           Browse / search / filter products
├── product.html         Product detail (?id=product-id)
├── cart.html            Shopping cart
├── wishlist.html        Saved items
├── login.html           Login / signup
├── about.html            About page
├── contact.html          Contact, WhatsApp, store map
├── css/
│   └── style.css        All styling
└── js/
    ├── products.js       Product catalog + product card rendering
    ├── store.js          Cart / wishlist / account logic (localStorage)
    ├── chrome.js          Shared header & footer
    ├── shop.js, product.js, cart.js, wishlist.js, login.js, contact.js
```
Running Locally
No build tools needed. Either:
Open `index.html` directly in a browser, or
Serve the folder locally (recommended, avoids browser file-access quirks):
```
  python3 -m http.server 8000
  ```
then visit `http://localhost:8000`
Customizing
Products, prices, categories: edit `products.js`
WhatsApp number & store address: edit the constants at the top of `chrome.js`
Colors, fonts, spacing: edit the `:root` variables at the top of `style.css`
Store location map: update the address in the map embed URL in `contact.html`
Roadmap
This is the frontend-only first version. Not yet built:
[ ] Real backend for accounts, orders, and payments (cart/wishlist/login currently use the browser's local storage)
[ ] Real product photography (currently uses styled color blocks as placeholders)
[ ] Checkout / payment integration
[ ] Order tracking and email notifications
Deployment
This site is static and can be hosted for free on GitHub Pages:
Settings → Pages
Source: `main` branch, `/ (root)`
Save — site goes live at `https://<username>.github.io/<repo-name>/`
