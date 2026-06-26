<template>
  <!-- PAGE HEADER -->
  <section class="page-header">
    <p class="hero-eyebrow">What We Make</p>
    <h1 class="page-title">Stretch Wrap Film<br>for Every <em>Application</em></h1>
  </section>

  <!-- PRODUCTS GRID -->
  <section class="products-section">
    <div class="products-header reveal">
      <div>
        <p class="section-label">Our Products</p>
        <h2 class="section-title">Two Purpose-Built<br><em>Product Lines</em></h2>
      </div>
      <p class="section-sub" style="max-width:320px">
        One for industrial machinery, one for manual hand wrapping. Both manufactured to the same high domestic standard.
      </p>
    </div>
    <div class="products-grid">
      <!-- Featured: Machine Use -->
      <div class="product-card featured reveal">
        <div>
          <div class="product-tag">Machine Use</div>
          <h3 class="product-name">Machine Stretch<br>Wrap Film</h3>
          <p class="product-desc">
            Engineered for use with stretch wrapping machines in high-volume warehouse and logistics operations. Delivers consistent tension, superior clarity, and excellent load retention for pallet-ready shipping.
          </p>
          <ul class="product-features">
            <li><span>→</span> High-volume output compatible</li>
            <li><span>→</span> Consistent gauge & elongation</li>
            <li><span>→</span> Optimal cling performance</li>
          </ul>
          <RouterLink to="/contact" class="btn-primary" style="font-size:0.75rem">Request Info</RouterLink>
        </div>
        <div class="product-img-ph">
          <img src="https://silagewrap.com/Uploads/67f956fd5fe96.jpg" alt="Machine Stretch Wrap Film Photo" style="width:100%; height:100%; object-fit:cover; object-position:center">
        </div>
      </div>
      <!-- Hand Wrap -->
      <div class="product-card reveal">
        <div class="product-img-ph-light">
          <img src="../assets/images/handwrap.webp" alt="Hand Stretch Wrap Film Photo" style="width:100%; height:100%; object-fit:cover; object-position:center">
        </div>
        <div class="product-tag">Hand Wrap Use</div>
        <h3 class="product-name">Hand Stretch<br>Wrap Film</h3>
        <p class="product-desc">
          Designed for manual wrapping applications. Lightweight, easy to handle, and engineered for optimal stretch and cling — ideal for moving companies, retail, and smaller operations.
        </p>
        <RouterLink to="/contact" class="btn-outline" style="font-size:0.75rem">Request Info</RouterLink>
      </div>
      <!-- Finished -->
      <div class="product-card reveal">
        <div class="product-img-ph-light">
          <img src="../assets/images/readypacks.webp" alt="Finished Rolls Photo" style="width:100%; height:100%; object-fit:cover; object-position:center">
        </div>
        <div class="product-tag">Packaging</div>
        <h3 class="product-name">Pallet-Ready<br>Packaged Rolls</h3>
        <p class="product-desc">
          Finished rolls arrive labeled, boxed, and ready for immediate use or resale — minimizing your receiving and storage handling time.
        </p>
      </div>
    </div>
  </section>

  <!-- MORE PRODUCTS CAROUSEL -->
  <section class="more-section">
    <div class="more-header reveal">
      <div>
        <p class="section-label">More Products</p>
        <h2 class="section-title">Every Roll, <em>Every Application</em></h2>
      </div>
      <p class="section-sub" style="max-width:300px">
        A closer look at the range — from machine-grade film to retail-ready packaged rolls.
      </p>
    </div>
    <div class="carousel-wrap reveal">
      <button class="carr-arrow" @click="carPrev" aria-label="Previous" :disabled="carCurrent === 0">&#8592;</button>
      <div class="carr-outer" ref="carOuter">
        <div class="carr-track" :style="{ transform: `translateX(-${carCurrent * carSlideW}px)` }">
          <div class="carr-slide" v-for="(item, i) in carItems" :key="i">
            <div class="carr-img">
              <img :src="item.src" :alt="item.title" />
            </div>
            <div class="carr-meta">
              <div class="product-tag">{{ item.tag }}</div>
              <h3 class="carr-title">{{ item.title }}</h3>
              <p class="carr-desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carr-arrow" @click="carNext" aria-label="Next" :disabled="carCurrent >= maxStep">&#8594;</button>
    </div>
    <div class="carr-dots">
      <span
        v-for="i in maxStep + 1"
        :key="i"
        class="carr-dot"
        :class="{ active: carCurrent === i - 1 }"
        @click="carCurrent = i - 1"
      />
    </div>
  </section>

  <!-- COMPARISON -->
  <section class="comparison-section">
    <div class="reveal">
      <p class="section-label">Product Comparison</p>
      <h2 class="section-title">Find the Right <em>Fit</em></h2>
      <p class="section-sub">Not sure which product suits your operation? Compare both options side by side.</p>
    </div>
    <div class="reveal" style="overflow-x:auto; margin-top:3rem">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th class="col-accent">Machine Wrap</th>
            <th>Hand Wrap</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.feature">
            <td class="feature-name">{{ row.feature }}</td>
            <td>
              <span v-if="row.machine === true"  class="check">✓</span>
              <span v-else-if="row.machine === false" class="cross">—</span>
              <span v-else>{{ row.machine }}</span>
            </td>
            <td>
              <span v-if="row.hand === true"  class="check">✓</span>
              <span v-else-if="row.hand === false" class="cross">—</span>
              <span v-else>{{ row.hand }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- NO PRICING NOTE + CTA -->
  <section class="cta-strip">
    <div class="reveal">
      <p class="section-label" style="color:rgba(184,134,11,0.7)">Pricing on Request</p>
      <h2 class="section-title" style="color:var(--white)">Interested in Our <em>Products</em>?</h2>
      <p style="color:rgba(255,255,255,0.5); font-size:0.95rem; margin-bottom:2.5rem; max-width:460px">
        Contact us for pricing, bulk orders, or questions about product specifications.
      </p>
      <RouterLink to="/contact" class="btn-primary">Get in Touch</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useReveal } from '@/composables/useReveal'
import facility      from '../assets/images/facility.jpeg'
import wrapInPlate   from '../assets/images/wrap_in_plate.jpeg'
import wrapInBox     from '../assets/images/wrap_in_box.jpeg'
import packagedWraps from '../assets/images/packaged_wraps.jpeg'
import readypacks    from '../assets/images/readypacks.webp'
useReveal()

const rows = [
  { feature: 'Domestic US Manufacturing',    machine: true,  hand: true },
  { feature: 'High-Volume Operations',       machine: true,  hand: false },
  { feature: 'Compatible with Wrap Machines',machine: true,  hand: false },
  { feature: 'Manual / Hand Application',    machine: false, hand: true },
  { feature: 'Lightweight & Easy to Handle', machine: false, hand: true },
  { feature: 'Superior Load Retention',      machine: true,  hand: true },
  { feature: 'Ideal for Palletizing',        machine: true,  hand: true },
  { feature: 'Moving & Retail Use',          machine: false, hand: true },
  { feature: 'Boxed & Labeled Packaging',    machine: true,  hand: true },
]

/* ── Carousel ── */
const carCurrent = ref(0)
const carOuter   = ref(null)
const carSlideW  = ref(0)
const perView    = ref(3)

const carItems = [
  { src: facility, tag: 'Machine use', title: 'Pallet machine wrap',     desc: 'Consistent gauge and elongation for automated pallet lines.' },
  { src: wrapInPlate, tag: 'Machine use', title: 'Pre-stretch film',         desc: 'Engineered for high pre-stretch ratios — less film, same hold.' },
  { src: readypacks, tag: 'Hand wrap',   title: 'Hand roll — standard',    desc: 'Lightweight and easy to dispense for everyday manual wrapping.' },
  { src: wrapInBox, tag: 'Hand wrap',   title: 'Hand roll — mini core',   desc: 'Compact core for moving companies and tight storage spaces.' },
  { src: packagedWraps, tag: 'Packaging',   title: 'Retail boxed rolls',      desc: 'Individually boxed and labeled, shelf-ready for resale.' },
  { src: wrapInPlate, tag: 'Packaging',   title: 'Pallet-ready bulk packs', desc: 'Palletized bulk packs to minimize warehouse handling time.' },
]

const maxStep = computed(() => Math.max(0, carItems.length - perView.value))

function carNext() { if (carCurrent.value < maxStep.value) carCurrent.value++ }
function carPrev() { if (carCurrent.value > 0) carCurrent.value-- }

function measure() {
  perView.value = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3
  if (carOuter.value) carSlideW.value = carOuter.value.offsetWidth / perView.value
}

onMounted(() => { measure(); window.addEventListener('resize', measure) })
onUnmounted(() => window.removeEventListener('resize', measure))
</script>

<style scoped>
.page-header {
  min-height: 50vh; display: flex; flex-direction: column;
  justify-content: flex-end; padding: 6rem 8% 5rem;
  background: var(--off-white); padding-top: calc(72px + 4rem);
}
.hero-eyebrow { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; }
.page-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 300; line-height: 1.05; }
.page-title em { font-style: italic; color: var(--accent); }

.products-section { padding: 7rem 8%; background: var(--white); }
.products-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem; }
.products-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; }

.product-card { background: var(--off-white); padding: 3rem; transition: background 0.3s; cursor: default; }
.product-card:hover { background: #e8e0e0; }
.product-card.featured {
  grid-column: 1 / -1; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;
  background: #1e2a3a; color: var(--white);
}
.product-card.featured:hover { background: #1e2a3a; }
.product-tag {
  display: inline-block; font-size: 0.65rem; letter-spacing: 0.15em;
  text-transform: uppercase; border: 1px solid var(--warm-gray);
  color: var(--mid-gray); padding: 0.3rem 0.8rem; margin-bottom: 1.5rem;
}
.product-card.featured .product-tag { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.5); }
.product-name { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; line-height: 1.2; margin-bottom: 1rem; }
.product-card.featured .product-name { color: var(--white); }
.product-desc { font-size: 0.88rem; color: var(--mid-gray); line-height: 1.8; margin-bottom: 2rem; }
.product-card.featured .product-desc { color: rgba(255,255,255,0.55); }
.product-features { list-style: none; display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem; }
.product-features li { font-size: 0.82rem; color: rgba(255,255,255,0.5); display: flex; gap: 0.8rem; }
.product-features li span { color: var(--accent); }
.product-img-ph {
  aspect-ratio: 4/3; background: rgba(255,255,255,0.05);
  border: 1px dashed rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center;
}
.product-img-ph-light {
  aspect-ratio: 4/3; background: rgba(0,0,0,0.06);
  border: 1px dashed rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;
}

/* ── carousel ── */
.more-section { padding: 7rem 8%; background: var(--off-white); }
.more-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 4rem; flex-wrap: wrap; gap: 2rem;
}
.section-label { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem; }
.section-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 300; line-height: 1.05; }
.section-title em { font-style: italic; color: var(--accent); }
.section-sub { font-size: 0.88rem; color: var(--mid-gray); line-height: 1.8; }

.carousel-wrap { display: flex; align-items: center; gap: 1.5rem; }

.carr-arrow {
  flex-shrink: 0; width: 42px; height: 42px;
  background: transparent; border: 1px solid var(--warm-gray);
  color: var(--black); font-size: 1rem; cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, border-color 0.2s;
}
.carr-arrow:hover:not(:disabled) { background: var(--black); color: var(--white); border-color: var(--black); }
.carr-arrow:disabled { opacity: 0.25; cursor: default; }

.carr-outer { flex: 1; overflow: hidden; }
.carr-track { display: flex; transition: transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94); }

.carr-slide { flex: 0 0 calc(100% / 3); padding-right: 2px; }

.carr-img { aspect-ratio: 4/3; overflow: hidden; background: var(--white); margin-bottom: 1.2rem; }
.carr-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
.carr-slide:hover .carr-img img { transform: scale(1.03); }

.carr-meta { padding: 0 0.5rem; }
.carr-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 300; line-height: 1.2;
  color: var(--black); margin-bottom: 0.5rem;
}
.carr-desc { font-size: 0.82rem; color: var(--mid-gray); line-height: 1.75; }

.carr-dots { display: flex; gap: 6px; justify-content: center; margin-top: 2.5rem; }
.carr-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--warm-gray); cursor: pointer; transition: all 0.2s; display: inline-block; }
.carr-dot.active { width: 18px; border-radius: 3px; background: var(--accent); }

/* ── comparison ── */
.comparison-section { padding: 7rem 8%; background: var(--off-white); }
.comparison-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
.comparison-table th {
  font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase;
  font-weight: 500; padding: 1.2rem 1.5rem; border-bottom: 2px solid var(--black); text-align: left;
}
.comparison-table th:not(:first-child) { text-align: center; }
.comparison-table td { padding: 1.1rem 1.5rem; border-bottom: 1px solid var(--border); color: var(--mid-gray); }
.comparison-table td:not(:first-child) { text-align: center; }
.comparison-table tr:hover td { background: rgba(0,0,0,0.02); }
.col-accent { color: var(--accent); }
.check { color: var(--accent); font-size: 1.1rem; }
.cross { color: var(--warm-gray); }
.feature-name { color: var(--black); font-weight: 500; }

.cta-strip { padding: 7rem 8%; background: linear-gradient(135deg, #1e2a3a 0%, #0a0a0a 100%); }

/* ── responsive ── */
@media (max-width: 1024px) {
  .carr-slide { flex: 0 0 50%; }
}
@media (max-width: 960px) {
  .products-grid { grid-template-columns: 1fr; }
  .product-card.featured { grid-column: 1; grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .carr-slide { flex: 0 0 100%; }
  .more-header { flex-direction: column; align-items: flex-start; }
}
</style>