// © 2026 Christian Richards / Stillwater Sports. All rights reserved.
// footer.js — edit here, reflected on every page.
(function () {
  var el = document.getElementById('footer-placeholder');
  if (!el) return;

  el.outerHTML = `
<footer style="background:#0a2828;border-top:2px solid var(--pink);padding:28px 40px 20px">
  <div style="max-width:1200px;margin:0 auto">

    <!-- Top row: logo · links · contact -->
    <div style="display:flex;align-items:center;gap:32px;flex-wrap:wrap;justify-content:space-between;margin-bottom:20px">

      <a href="/" style="flex-shrink:0">
        <img src="./assets/images/png/Logo4.png" alt="Stillwater Sports"
             style="height:48px;width:auto;filter:brightness(1.1)"/>
      </a>

      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <a href="/about" class="footer-link">About</a><span class="footer-sep">·</span>
        <a href="/sports" class="footer-link">Sports</a><span class="footer-sep">·</span>
        <a href="/equipment" class="footer-link">Equipment</a><span class="footer-sep">·</span>
        <a href="/pricing" class="footer-link">Pricing</a><span class="footer-sep">·</span>
        <a href="/promos" class="footer-link" style="color:var(--pink)!important;font-weight:700">Promos</a><span class="footer-sep">·</span>
        <a href="/how-it-works" class="footer-link">How It Works</a><span class="footer-sep">·</span>
        <a href="/faq" class="footer-link">FAQ</a><span class="footer-sep">·</span>
        <a href="/booking" class="footer-link">Booking</a><span class="footer-sep">·</span>
        <a href="/contact" class="footer-link">Contact</a><span class="footer-sep">·</span>
        <a href="/policies" class="footer-link">Policies</a><span class="footer-sep">·</span>
        <a href="/stillwaterapp" class="footer-link">Skills App</a>
      </div>

      <div style="display:flex;align-items:center;gap:14px;flex-shrink:0">
        <a href="tel:+16132995998"
           style="color:var(--yellow);font-size:13px;font-weight:700;text-decoration:none;white-space:nowrap">
          📞 613-299-5998
        </a>
        <a href="mailto:christian@learnwatersports.ca"
           style="color:var(--cyan);font-size:13px;font-weight:600;text-decoration:none;white-space:nowrap">
          ✉ Email
        </a>
        <a href="https://instagram.com/stillwatersports" target="_blank" rel="noopener" title="Instagram"
           style="color:var(--yellow);display:flex;align-items:center;opacity:.8;transition:opacity .15s"
           onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.8">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
        <a href="https://facebook.com/stillwatersports" target="_blank" rel="noopener" title="Facebook"
           style="color:var(--yellow);display:flex;align-items:center;opacity:.8;transition:opacity .15s"
           onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.8">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
      </div>
    </div>

    <!-- Bottom row: copyright -->
    <div style="border-top:1px solid rgba(0,200,212,0.15);padding-top:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span style="font-size:11px;color:#3a6a6a">© 2026 Christian Richards · Stillwater Sports · All rights reserved</span>
      <span style="font-size:11px;color:#3a6a6a">Ontario Cottage Country · learnwatersports.ca</span>
    </div>

  </div>
</footer>`;

})();
