<template>
  <Transition name="fade">
    <div v-if="open" class="mobile-nav">
      <button class="mobile-close" @click="$emit('close')">✕</button>
      <RouterLink to="/"         @click="$emit('close')">Home</RouterLink>
      <RouterLink to="/about"    @click="$emit('close')">About</RouterLink>
      <RouterLink to="/products" @click="$emit('close')">Products</RouterLink>
      <RouterLink to="/contact"  @click="$emit('close')">Contact</RouterLink>
    </div>
  </Transition>
</template>

<script setup>
defineProps(['open'])
defineEmits(['close'])
</script>

<style scoped>
.mobile-nav {
  position: fixed; inset: 0; z-index: 99;
  background: var(--white);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 2.5rem;
}
.mobile-nav a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 300; color: var(--black);
  text-decoration: none; letter-spacing: 0.04em;
}
.mobile-nav a:hover,
.mobile-nav a.router-link-active { color: var(--accent); }
.mobile-close {
  position: absolute; top: 1.5rem; right: 6%;
  font-size: 2rem; cursor: pointer; color: var(--black);
  background: none; border: none;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
