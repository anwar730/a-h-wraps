<template>
  <footer>
    <div class="footer-top">
      <div>
        <div class="footer-logo">A<span>&</span>H Manufacturing</div>
        <p class="footer-tagline">Premium stretch wrap film, manufactured domestically in Atlanta, Georgia. Quality you can rely on. Supply you can count on.</p>
        <div style="margin-top:1.5rem">
          <span class="launch-badge">Launching November 2026</span>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul class="footer-links">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/products">Products</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul class="footer-links">
          <li><a href="tel:8039918447">803-991-8447</a></li>
          <li><a href="mailto:hamanufacturing@gmail.com">hamanufacturing@gmail.com</a></li>
          <li><a href="/contact">4360 Commerce Circle, Suite C<br>Atlanta, GA 30336</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ year }} A&H Manufacturing, LLC. All rights reserved.</span>
      <span>Atlanta, Georgia · US Manufacturing</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background: #1e2a3a;
  color: rgba(255,255,255,0.7);
  padding: 4rem 8% 2rem;
}
.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.12);
}
.footer-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 600;
  color: var(--white); margin-bottom: 1rem;
}
.footer-logo span { color: var(--accent); }
.footer-tagline {
  font-size: 0.85rem; line-height: 1.75;
  max-width: 280px; color: rgba(255,255,255,0.65);
}
.footer-col h4 {
  font-size: 0.7rem; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--white);
  margin-bottom: 1.5rem; font-weight: 600;
}
.footer-links {
  list-style: none;
  display: flex; flex-direction: column; gap: 0.8rem;
}
.footer-links a {
  font-size: 0.85rem; color: rgba(255,255,255,0.6);
  text-decoration: none; transition: color 0.2s;
}
.footer-links a:hover { color: var(--accent); }
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 2rem; font-size: 0.75rem;
  color: rgba(255,255,255,0.45);
  flex-wrap: wrap; gap: 1rem;
}
.launch-badge {
  font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--accent); border: 1px solid rgba(204,0,0,0.4);
  padding: 0.35rem 0.8rem;
}
@media (max-width: 960px) {
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
}
</style>