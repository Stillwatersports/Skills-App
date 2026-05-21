// © 2026 Christian Richards / Stillwater Sports. All rights reserved.
// nav.js — single-source nav for all pages. Edit here, reflected everywhere.
(function () {
  var el = document.getElementById('nav-placeholder');
  if (!el) return;

  // ── Active state: which nav item highlights based on current URL ──
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  var aboutPages = ['/about', '/sports', '/equipment', '/policies'];
  var hiwPages   = ['/how-it-works', '/guidelines', '/faq'];

  var aboutActive   = aboutPages.indexOf(path) > -1;
  var hiwActive     = hiwPages.indexOf(path) > -1;
  var pricingActive = path === '/pricing';
  var bookingActive = path === '/booking';
  var contactActive = path === '/contact';
  var promosActive  = path === '/promos' || path === '/sunset-wake-date';

  function ac(cond) { return cond ? ' active' : ''; }
  function lc(cond) { return cond ? ' class="active"' : ''; }

  // ── Nav HTML ──────────────────────────────────────────────────────
  el.outerHTML = `
<nav>
  <a href="/" class="nav-brand">
    <img src="./assets/images/png/Sports_clear_bg.png" alt="Stillwater Sports"
         style="height:116px;width:auto;object-fit:contain;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.3))"/>
  </a>
  <div class="nav-links">
    <div class="nav-dropdown">
      <a href="javascript:void(0)" class="nav-link-top${ac(aboutActive)}"
         onclick="toggleDropdown(event,'about-menu')">About ▾</a>
      <div class="nav-dropdown-menu" id="about-menu">
        <a href="/about">Meet the Coach</a>
        <a href="/sports">Sports</a>
        <a href="/equipment">Equipment</a>
        <a href="/policies">Policies</a>
      </div>
    </div>
    <div class="nav-dropdown">
      <a href="javascript:void(0)" class="nav-link-top${ac(hiwActive)}"
         onclick="toggleDropdown(event,'hiw-menu')">How It Works ▾</a>
      <div class="nav-dropdown-menu" id="hiw-menu">
        <a href="/how-it-works">What to Expect</a>
        <a href="/guidelines">Guidelines</a>
        <a href="/faq">FAQ</a>
      </div>
    </div>
    <a href="/pricing"${lc(pricingActive)}>Pricing</a>
    <a href="/booking"${lc(bookingActive)}>Booking</a>
    <a href="/contact"${lc(contactActive)}>Contact</a>
  </div>
  <a href="tel:+16132995998" class="nav-phone"
     style="color:var(--yellow);font-size:13px;font-weight:600;text-decoration:none;margin-right:12px;white-space:nowrap"
     title="Call us"><span style="font-size:14px">📞</span> 613-299-5998</a>
  <a href="/promos" class="nav-promo${ac(promosActive)}"
     style="background:var(--cyan);color:var(--yellow);border:2px solid var(--pink);font-size:14px;font-weight:700;padding:8px 20px;border-radius:50px;text-decoration:none;margin-right:10px;display:inline-flex;align-items:center;gap:5px;letter-spacing:.04em;text-transform:uppercase">Promos</a>
  <a href="/booking" class="nav-book">Book Now</a>
  <button class="nav-hamburger" onclick="toggleMenu()">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/about" onclick="toggleMenu()">Meet the Coach</a>
  <a href="/sports" onclick="toggleMenu()">Sports</a>
  <a href="/equipment" onclick="toggleMenu()">Equipment</a>
  <a href="/how-it-works" onclick="toggleMenu()">What to Expect</a>
  <a href="/guidelines" onclick="toggleMenu()">Guidelines</a>
  <a href="/faq" onclick="toggleMenu()">FAQ</a>
  <a href="/pricing" onclick="toggleMenu()">Pricing</a>
  <a href="tel:+16132995998" onclick="toggleMenu()"
     style="color:var(--cyan);font-weight:800">📞 Call 613-299-5998</a>
  <a href="/promos" onclick="toggleMenu()"
     style="color:var(--pink);font-weight:800">✨ Promos</a>
  <a href="/booking" onclick="toggleMenu()">Booking</a>
  <a href="/contact" onclick="toggleMenu()">Contact</a>
  <a href="/policies" onclick="toggleMenu()">Policies</a>
</div>`;

  // ── Nav functions (live here so pages don't need them) ─────────────
  window.toggleDropdown = function (e, menuId) {
    e.preventDefault();
    e.stopPropagation();
    document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) {
      if (m.id !== menuId) m.classList.remove('open');
    });
    document.getElementById(menuId).classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) {
        m.classList.remove('open');
      });
    }
  });

  window.toggleMenu = function () {
    var m = document.getElementById('mobileMenu');
    m.classList.toggle('open');
    document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
  };

  // Close mobile menu when any link inside it is tapped
  // Runs after outerHTML injection so the menu is already in the DOM
  document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
      document.body.style.overflow = '';
    });
  });

})();
