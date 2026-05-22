// © 2026 Christian Richards / Stillwater Sports. All rights reserved.
// nav.js — edit here, reflected on every page.
(function () {
  var el = document.getElementById('nav-placeholder');
  if (!el) return;

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

  el.outerHTML = `
<nav>
  <a href="/" class="nav-brand">
    <img src="./assets/images/png/Sports_clear_bg.png" alt="Stillwater Sports"
         style="height:100px;width:auto;object-fit:contain;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.3))"/>
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

  <div class="nav-cta-group">
    <a href="/promos" class="nav-promo${ac(promosActive)}"
       style="background:var(--cyan);color:var(--yellow);border:2px solid var(--pink);font-size:13px;font-weight:700;padding:7px 18px;border-radius:50px;text-decoration:none;display:inline-flex;align-items:center;gap:4px;letter-spacing:.04em;text-transform:uppercase">Promos</a>
<a href="tel:+16132995998" class="nav-phone" title="Call us" style="background:var(--cyan);color:var(--yellow);border:2px solid var(--pink);font-size:13px;font-weight:700;padding:7px 18px;border-radius:50px;text-decoration:none;display:inline-flex;align-items:center;gap:4px;letter-spacing:.04em;text-transform:uppercase">📞 613-299-5998</a>    <a href="/booking" class="nav-book">Book Now</a>
    <button class="nav-hamburger" onclick="toggleMenu()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <a href="tel:+16132995998" onclick="toggleMenu()" style="color:var(--cyan);font-weight:800;font-size:17px">📞 613-299-5998</a>
  <a href="/about" onclick="toggleMenu()">Meet the Coach</a>
  <a href="/sports" onclick="toggleMenu()">Sports</a>
  <a href="/equipment" onclick="toggleMenu()">Equipment</a>
  <a href="/how-it-works" onclick="toggleMenu()">What to Expect</a>
  <a href="/guidelines" onclick="toggleMenu()">Guidelines</a>
  <a href="/faq" onclick="toggleMenu()">FAQ</a>
  <a href="/pricing" onclick="toggleMenu()">Pricing</a>
  <a href="/promos" onclick="toggleMenu()" style="color:var(--pink);font-weight:800">✨ Promos</a>
  <a href="/booking" onclick="toggleMenu()">Booking</a>
  <a href="/contact" onclick="toggleMenu()">Contact</a>
  <a href="/policies" onclick="toggleMenu()">Policies</a>
</div>`;

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

  document.querySelectorAll('.mobile-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.getElementById('mobileMenu').classList.remove('open');
      document.body.style.overflow = '';
    });
  });


  // ── Floating mobile CTA (every page) ──────────────────────────────
  if (!document.getElementById('mobile-float-cta')) {
    var floatBar = document.createElement('div');
    floatBar.id = 'mobile-float-cta';
    floatBar.className = 'mobile-float-cta';
    floatBar.innerHTML = '<a href="/booking">Book a Lesson — Summer 2026 →</a>';
    document.body.appendChild(floatBar);

    var _floatShown = false;
    window.addEventListener('scroll', function() {
      if (window.scrollY > 350 && !_floatShown) {
        _floatShown = true;
        floatBar.classList.add('visible');
      } else if (window.scrollY <= 350 && _floatShown) {
        _floatShown = false;
        floatBar.classList.remove('visible');
      }
    }, { passive: true });
  }

})();
