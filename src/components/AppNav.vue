<template>
  <nav :class="['nav', { scrolled }]" id="navbar">
    <RouterLink to="/" class="nav-logo">A<span>&</span>H</RouterLink>
    <ul class="nav-links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/products">Products</RouterLink></li>
      <li><RouterLink to="/contact" class="nav-cta">Contact Us</RouterLink></li>
    </ul>
    <div class="hamburger" @click="$emit('open-mobile')">
      <span></span><span></span><span></span>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
defineEmits(['open-mobile'])
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 30 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 5%; height: 72px;
  background: rgba(250,250,250,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.3s;
}
.nav.scrolled { box-shadow: 0 2px 20px rgba(0,0,0,0.06); }

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 600; letter-spacing: 0.04em;
  color: var(--black); text-decoration: none;
}
.nav-logo span { color: var(--accent); }

.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-size: 0.8rem; font-weight: 500; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--mid-gray);
  text-decoration: none; transition: color 0.2s;
}
.nav-links a:hover,
.nav-links a.router-link-active { color: var(--black); }

.nav-cta {
  background: var(--black); color: var(--white) !important;
  padding: 0.55rem 1.4rem; letter-spacing: 0.08em !important;
  transition: background 0.2s !important;
}
.nav-cta:hover { background: var(--accent) !important; }
.nav-cta.router-link-active { background: var(--accent) !important; color: var(--white) !important; }

.hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; }
.hamburger span { width: 24px; height: 1.5px; background: var(--black); }

@media (max-width: 960px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
</style>
