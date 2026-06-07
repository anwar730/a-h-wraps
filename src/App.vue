<template>
  <AppNav @open-mobile="mobileOpen = true" />
  <MobileNav :open="mobileOpen" @close="mobileOpen = false" />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<script setup>
import { ref } from 'vue'
import AppNav    from '@/components/AppNav.vue'
import MobileNav from '@/components/MobileNav.vue'
import AppFooter from '@/components/AppFooter.vue'

const mobileOpen = ref(false)
</script>
