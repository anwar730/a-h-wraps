import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
          observer.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
