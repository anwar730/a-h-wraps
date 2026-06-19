<template>
  <!-- HERO -->
<section id="home" class="hero">

  <div class="hero-bg"></div>

  <div class="hero-text">

    <p class="hero-eyebrow">
      AMERICAN MADE • ATLANTA, GEORGIA
    </p>

    <h1 class="hero-title">
      Stretch Wrap
      <span>Manufactured</span>
      For Performance
    </h1>

    <p class="hero-desc">
      Premium stretch wrap film engineered for logistics,
      warehousing and industrial operations that demand
      reliability, consistency and superior load containment.
    </p>

    <div class="hero-highlight">
      <span>✓ Domestic Manufacturing</span>
      <span>✓ Fast Lead Times</span>
      <span>✓ Industry Proven</span>
    </div>

    <div class="hero-actions">
      <RouterLink to="/products" class="btn-primary">
        View Products
      </RouterLink>

      <RouterLink to="/contact" class="btn-outline">
        Request Quote
      </RouterLink>
    </div>

    <div class="hero-spec-row">
      <div class="hero-spec">
        <h3>500%</h3>
        <p>Stretch Capacity</p>
      </div>

      <div class="hero-spec">
        <h3>20+</h3>
        <p>Years Experience</p>
      </div>

      <div class="hero-spec">
        <h3>100%</h3>
        <p>USA Made</p>
      </div>
    </div>

  </div>

  <div class="hero-media">

    <img
      src="../assets/WhatsApp Image 2026-06-15 at 19.34.00.jpeg"
      alt="A&H Manufacturing"
    />

   

  </div>

</section>

  <!-- MARQUEE STRIP -->
  <div class="marquee-strip">
    <div class="marquee-inner">
      <span v-for="item in [...marqueeItems, ...marqueeItems]" :key="item + Math.random()" class="marquee-item">
        {{ item }}
      </span>
    </div>
  </div>

  <!-- TRUST BAR -->
  <div class="trust-bar">
    <div v-for="t in trustItems" :key="t.title" class="trust-cell">
      <span class="trust-icon">{{ t.icon }}</span>
      <div class="trust-head">{{ t.title }}</div>
      <div class="trust-sub">{{ t.sub }}</div>
    </div>
  </div>

  <!-- WHY STRETCH FILM / SCIENCE SECTION -->
  <section class="science-section">
    <div class="science-intro reveal">
      <p class="section-label">Why It Matters</p>
      <h2 class="section-title">The <em>Science</em> Behind<br>Stretch Wrap Film</h2>
      <p class="section-sub">
        Not all stretch film is equal. The resin blend, gauge consistency, and production method directly determine how a roll performs under real load conditions. A&H's domestically-made film is engineered for the demands of modern logistics.
      </p>
    </div>
    <div class="science-grid reveal">
      <div v-for="s in scienceItems" :key="s.num" class="science-card">
        <div class="science-num">{{ s.num }}</div>
        <div class="science-head">{{ s.title }}</div>
        <div class="science-desc">{{ s.desc }}</div>
      </div>
    </div>
  </section>

  <!-- WHO WE SERVE -->
  <section class="serve-section">
    <div class="reveal">
      <p class="section-label">Who We Serve</p>
      <h2 class="section-title">Built for <em>Industry</em></h2>
      <div class="divider"></div>
      <p class="section-sub">
        A&H stretch wrap film is trusted by businesses that move, store, and ship products at scale across the southeastern United States and beyond.
      </p>
    </div>
    <div class="serve-grid reveal">
      <div v-for="c in customers" :key="c.name" class="serve-card">
        <span class="serve-icon">{{ c.icon }}</span>
        <p>{{ c.name }}</p>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials-section">
    <div class="reveal">
      <p class="section-label" style="color:var(--accent)">What Clients Say</p>
      <h2 class="section-title" style="color:var(--white)">Trusted by <em>Industry</em></h2>
    </div>
    <div class="testimonials-grid">
      <div v-for="t in testimonials" :key="t.author" class="testimonial-card reveal">
        <div class="testimonial-stars">★★★★★</div>
        <p class="testimonial-text">"{{ t.quote }}"</p>
        <div class="testimonial-author">
          <strong>{{ t.author }}</strong>
          <span>{{ t.company }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA STRIP -->
  <section class="cta-section">
    <div class="cta-left reveal">
      <p class="section-label" style="color:rgba(184,134,11,0.7)">Get Started</p>
      <h2 class="section-title" style="color:var(--white)">Ready to <em>Order</em>?</h2>
      <p style="color:rgba(255,255,255,0.4); font-size:0.9rem; margin-bottom:2.5rem; max-width:420px; line-height:1.8; font-weight:300;">
        Contact us for pricing, bulk orders, or questions about specifications. We respond within one business day.
      </p>
      <RouterLink to="/contact" class="btn-gold">Contact Us Today</RouterLink>
    </div>
    <div class="cta-right reveal">
      <div v-for="item in ctaItems" :key="item.title" class="cta-item">
        <div class="cta-item-title">{{ item.title }}</div>
        <div class="cta-item-desc">{{ item.desc }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useReveal } from '@/composables/useReveal'
useReveal()

const marqueeItems = [
  'Cast Stretch Film', '·', 'Blown Stretch Film', '·',
  'Hand Wrap', '·', 'Machine Wrap', '·',
  'Pre-Stretch Film', '·', 'Domestic Manufacturing', '·',
  'Atlanta, Georgia', '·', 'Bulk Orders Welcome', '·',
]

const heroSpecs = [
  { num: '300%', label: 'Elongation' },
  { num: '20+', label: 'Years Running' },
  { num: '100%', label: 'Made in USA' },
]

const trustItems = [
  { icon: '🏭', title: 'Domestic Production', sub: 'Made in Metro Atlanta — not overseas' },
  { icon: '⚡', title: 'Shorter Lead Times', sub: 'No container delays or port backlogs' },
  { icon: '📐', title: 'Consistent Spec', sub: 'Gauged to spec, every roll, every run' },
  { icon: '📞', title: 'Direct Access', sub: 'Talk to the manufacturer, not a middleman' },
]

const scienceItems = [
  {
    num: '01', title: 'LLDPE Resin',
    desc: 'Linear low-density polyethylene provides the molecular structure needed for exceptional elongation and memory — it stretches up to 500% and snaps back to grip your load tightly.',
  },
  {
    num: '02', title: 'Cast vs Blown',
    desc: 'Cast film is extruded through a flat die and chilled on rollers, producing a clear, quiet, consistent product with two-sided cling. Blown film is air-cooled for added puncture resistance on irregular loads.',
  },
  {
    num: '03', title: 'Gauge Consistency',
    desc: 'Thin spots in cheap offshore film cause tears mid-wrap. Our production process maintains tight gauge tolerance across the full width of every roll, every time.',
  },
  {
    num: '04', title: 'Pre-Stretch Technology',
    desc: 'Pre-stretched film is extended at the factory before winding. This reduces force during application and can cut film usage per pallet by 30–50% vs standard roll.',
  },
  {
    num: '05', title: 'Load Containment Force',
    desc: 'Wrap force multiplied by number of layers determines how securely goods stay on the pallet. Consistent film properties are the foundation of predictable, safe containment.',
  },
  {
    num: '06', title: 'Machine Compatibility',
    desc: 'Our machine-grade film is wound to precise core dimensions and tolerances so it runs without slippage or jitter on turntable, rotary arm, and orbital stretch wrap equipment.',
  },
]

const customers = [
  { icon: '✈️', name: 'Airports' },
  { icon: '🛋️', name: 'Furniture Stores' },
  { icon: '🚛', name: 'Moving Companies' },
  { icon: '📦', name: 'Logistics Companies' },
  { icon: '🏭', name: 'Warehouses' },
  { icon: '🚢', name: 'Shipping Companies' },
]

const testimonials = [
  {
    quote: 'Switching to A&H was a no-brainer. The consistency of their film has eliminated the breakage issues we had with our overseas supplier.',
    author: 'Operations Manager',
    company: 'Regional Logistics Company',
  },
  {
    quote: 'Lead times are dramatically shorter and the quality is noticeably better. Our warehouse team appreciates how reliably the film performs on our machines.',
    author: 'Warehouse Director',
    company: 'Freight & Distribution, Southeast US',
  },
  {
    quote: "We've tried many stretch wrap suppliers over the years. A&H's domestic product simply holds loads better and arrives exactly when they say it will.",
    author: 'Procurement Lead',
    company: 'National Moving Company',
  },
]

const ctaItems = [
  {
    title: 'Bulk Pricing Available',
    desc: 'Volume discounts for recurring orders. We work with businesses of all sizes from regional warehouses to national chains.',
  },
  {
    title: 'Custom Specifications',
    desc: 'Need a specific gauge, width, or core size? Talk to us about custom production runs to match your exact requirements.',
  },
  {
    title: 'Fast Domestic Shipping',
    desc: 'Shipping from Metro Atlanta means shorter transit times to the Southeast and competitive lead times nationwide.',
  },
]
</script>

<style scoped>
/* ─── DESIGN TOKENS ─────────────────────────── */
:root {
  --accent:      #8A2E22;
  --accent-light:#A8392A;
  --accent-navy: #003087;
  --black:       #0a0a0a;
  --off-white:   #f7f5f0;
  --white:       #ffffff;
  --mid-gray:    #666666;
}

/* ─── HERO ──────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  overflow: hidden;
  background:
  radial-gradient(circle at top left,
  rgba(138,46,34,.15),
  transparent 35%),

  radial-gradient(circle at bottom right,
  rgba(0,48,135,.12),
  transparent 35%),

  linear-gradient(
  135deg,
  #faf8f4 0%,
  #f2ede6 100%
  );
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image:
  linear-gradient(
  rgba(0,0,0,.03) 1px,
  transparent 1px),

  linear-gradient(
  90deg,
  rgba(0,0,0,.03) 1px,
  transparent 1px);

  background-size: 80px 80px;
}

.hero-text {
  position: relative;
  z-index: 2;
  padding: 7rem;
}

.hero-eyebrow {
  color: var(--accent);
  letter-spacing: .3em;
  font-size: .75rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3.8rem, 6vw, 6rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.02em;
}
.hero-title span {
  font-weight: 400;
}

.hero-desc {
  max-width: 600px;
  line-height: 1.9;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.hero-highlight {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.hero-highlight span {
  font-weight: 600;
  color: #333;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

.btn-primary {
  background: var(--accent);
  color: white;
  padding: 1rem 2.4rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: .3s;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

.btn-outline {
  border: 1px solid #ccc;
  color: #111;
  padding: 1rem 2.4rem;
  border-radius: 12px;
  text-decoration: none;
  background: white;
}

.hero-spec-row {
  display: flex;
  gap: 1.5rem;
}

.hero-spec {
  background: rgba(255,255,255,.8);
  backdrop-filter: blur(12px);
  padding: 1rem 1.2rem;
  border-radius: 18px;
  min-width: 150px;
  box-shadow:
  0 20px 50px rgba(0,0,0,.08);
}

.hero-spec h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 400;
}
.hero-spec p {
  font-size: .8rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: .1em;
}

.hero-media {
  position: relative;
  height: 100%;
  min-height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-media img {
  width: 90%;
  height: auto;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 30px;
  box-shadow: 0 40px 100px rgba(0,0,0,.18);
}
.floating-card {
  position: absolute;
  top: 120px;
  left: 20px;
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow:
  0 25px 60px rgba(0,0,0,.15);
}

.floating-card h3 {
  font-size: 2rem;
  color: var(--accent);
}

.floating-card-bottom {
  position: absolute;
  bottom: 120px;
  right: 20px;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(20px);
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow:
  0 20px 50px rgba(0,0,0,.15);
}

.floating-card-bottom strong {
  display: block;
  margin-bottom: .5rem;
}

.floating-card-bottom span {
  color: #666;
  font-size: .85rem;
}

@keyframes floatImage {
  from {
    transform: translateY(0) scale(1);
  }

  to {
    transform: translateY(-20px) scale(1.03);
  }
}

@media(max-width:991px){

  .hero{
    grid-template-columns:1fr;
  }

  .hero-text{
    padding:3rem 2rem;
  }

  .hero-media{
    min-height:500px;
  }

  .hero-title{
    font-size:4rem;
  }

  .hero-spec-row{
    flex-wrap:wrap;
  }

}

/* ─── MARQUEE STRIP ──────────────────────────── */
.marquee-strip { background: var(--accent); padding: 0.65rem 0; overflow: hidden; white-space: nowrap; }
.marquee-inner { display: inline-flex; animation: marquee 24s linear infinite; }
.marquee-item {
  font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: rgba(255,255,255,0.9); margin: 0 1.8rem;
}
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ─── TRUST BAR ──────────────────────────────── */
.trust-bar {
  display: grid; grid-template-columns: repeat(4, 1fr);
  background: var(--white); border-bottom: 1px solid rgba(0,0,0,0.06);
}
.trust-cell { padding: 2rem 1.5rem; text-align: center; border-right: 1px solid rgba(0,0,0,0.06); }
.trust-cell:last-child { border-right: none; }
.trust-icon { font-size: 1.4rem; display: block; margin-bottom: 0.6rem; }
.trust-head { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--black); font-weight: 500; }
.trust-sub { font-size: 0.75rem; color: var(--mid-gray); margin-top: 0.3rem; line-height: 1.45; }

/* ─── SCIENCE SECTION ────────────────────────── */
.science-section { padding: 7% 8%; background: var(--white); }
.science-intro { max-width: 620px; margin-bottom: 4rem; }
.science-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; background: rgba(0,0,0,0.06); }
.science-card { background: var(--white); padding: 2.2rem 1.8rem; transition: background 0.2s; }
.science-card:hover { background: #faf9f6; }
.science-num {
  font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 300;
  color: var(--accent); line-height: 1; margin-bottom: 0.8rem;
}
.science-head { font-size: 0.78rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--black); margin-bottom: 0.7rem; }
.science-desc { font-size: 0.85rem; color: #666; line-height: 1.78; font-weight: 300; }

/* ─── WHO WE SERVE ───────────────────────────── */
.serve-section { padding: 7rem 8%; background: var(--off-white); }
.serve-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 2px; margin-top: 3rem; background: rgba(0,0,0,0.05);
}
.serve-card {
  background: var(--off-white); padding: 2.5rem 1rem;
  display: flex; flex-direction: column; align-items: center; gap: 0.8rem;
  font-size: 0.68rem; font-weight: 500; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--black); transition: background 0.2s;
}
.serve-card:hover { background: #e8e0e0; }
.serve-icon { font-size: 1.6rem; }

/* ─── TESTIMONIALS ───────────────────────────── */
.testimonials-section { padding: 7rem 8%; background: var(--black); }
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 4rem; }
.testimonial-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06);
  padding: 2.5rem; transition: background 0.3s;
}
.testimonial-card:hover { background: rgba(255,255,255,0.07); }
.testimonial-stars { color: var(--accent); margin-bottom: 1.2rem; font-size: 0.85rem; letter-spacing: 0.08em; }
.testimonial-text {
  font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 300;
  line-height: 1.65; color: rgba(255,255,255,0.82); margin-bottom: 2rem;
}
.testimonial-author { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; }
.testimonial-author strong { color: var(--white); display: block; margin-bottom: 0.3rem; }
.testimonial-author span { color: rgba(255,255,255,0.3); }

/* ─── CTA SECTION ────────────────────────────── */
.cta-section {
  padding: 7% 8%; background: linear-gradient(135deg, #1e2a3a 0%, #0a0a0a 100%);
  display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
}
.cta-right { display: flex; flex-direction: column; gap: 1.8rem; }
.cta-item { border-left: 2px solid rgba(138,46,34,0.4); padding-left: 1.2rem; }
.cta-item-title {
  font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 0.4rem;
}
.cta-item-desc { font-size: 0.85rem; color: rgba(255,255,255,0.38); line-height: 1.65; font-weight: 300; }

/* ─── SHARED ─────────────────────────────────── */
.section-label {
  font-size: 0.62rem; font-weight: 400; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 1.2rem;
}
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 3.2vw, 3.2rem); font-weight: 300; line-height: 1.12;
  color: var(--black); margin-bottom: 1.2rem;
}
.section-title em { font-style: italic; color: var(--accent); }
.section-sub { font-size: 0.92rem; color: var(--mid-gray); line-height: 1.85; font-weight: 300; max-width: 500px; }
.divider { width: 40px; height: 1px; background: var(--accent); margin: 1.2rem 0; opacity: 0.5; }

/* ─── BUTTONS ────────────────────────────────── */
.btn-gold {
  display: inline-block; background: var(--accent); color: var(--white);
  padding: 0.9rem 2.5rem; font-size: 0.72rem; letter-spacing: 0.15em;
  text-transform: uppercase; text-decoration: none; transition: background 0.2s;
}
.btn-gold:hover { background: var(--accent-light); }

/* ─── ANIMATIONS ─────────────────────────────── */
@keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* ─── RESPONSIVE ─────────────────────────────── */
@media (max-width: 1100px) { .serve-grid { grid-template-columns: repeat(3, 1fr); } .science-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 960px) {
  .testimonials-grid { grid-template-columns: 1fr; }
  .trust-bar { grid-template-columns: 1fr 1fr; }
  .cta-section { grid-template-columns: 1fr; gap: 3rem; }
  .hero { grid-template-columns: 1fr; min-height: auto; }
  .hero-media { min-height: 46vh; order: -1; }
  .hero-text { padding: 3.5rem 6vw; }
}
@media (max-width: 640px) {
  .hero-title { font-size: clamp(2.4rem, 9vw, 3.4rem); }
  .serve-grid { grid-template-columns: repeat(2, 1fr); }
  .science-grid { grid-template-columns: 1fr; }
  .trust-bar { grid-template-columns: 1fr; }
  .hero-spec-row { gap: 1.4rem; }
}
</style>