<template>
  <!-- PAGE HEADER -->
  <section class="page-header">
    <p class="hero-eyebrow">Our Story</p>
    <h1 class="page-title">Built on <em>Experience</em><br>Made in America</h1>
  </section>

  <!-- ABOUT -->
  <section class="about-section">
    <div class="about-visual reveal">
      <div class="about-img-placeholder">
        <img src="../assets/images/facility.jpeg" alt="Factory Photo" style="width:100%; height:100%; object-fit:cover; object-position:center">
      </div>
      <div class="about-accent-box">
        <div class="num">20+</div>
        <p>Years in Plastics</p>
      </div>
    </div>
    <div class="reveal">
      <p class="section-label">Our Story</p>
      <h2 class="section-title">From Importer to<br><em>Domestic Manufacturer</em></h2>
      <div class="divider"></div>
      <p class="section-sub">
        A&H Manufacturing was founded by Ali Abdullah, a plastics industry veteran with over two decades of expertise. After years of importing stretch film from overseas and experiencing the quality inconsistencies and long lead times that came with it, Ali made the decision to manufacture domestically.
      </p>
      <ul class="about-list">
        <li>Domestic production means tighter quality control at every stage</li>
        <li>Faster turnaround and more reliable supply chains for our customers</li>
        <li>Proudly based in Metro Atlanta, Georgia</li>
        <li>Serving warehouses, logistics firms, movers, airports, and more</li>
      </ul>
    </div>
  </section>

  <!-- FOUNDER -->
  <section class="founder-section">
    <div class="reveal" style="text-align:center; margin-bottom:4rem">
      <p class="section-label">Leadership</p>
      <h2 class="section-title">Meet the <em>Founder</em></h2>
    </div>
    <div class="founder-card reveal">
      <div class="founder-info">
        <h3 class="founder-name">Ali Abdullah</h3>
        <p class="founder-role">Founder & CEO</p>
        <div class="divider"></div>
        <p class="section-sub">
          With 20+ years in the plastics industry, Ali has deep expertise in stretch wrap materials, manufacturing processes, and supply chain dynamics. His decision to build a domestic manufacturing facility was rooted in a commitment to delivering real quality and reliability — something he found impossible to guarantee with overseas sourcing alone.
        </p>
        <ul class="about-list" style="margin-top:1.5rem">
          <li>20+ years of plastics industry expertise</li>
          <li>Deep knowledge of stretch wrap materials and performance</li>
          <li>Hands-on operational oversight of Atlanta manufacturing facility</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- WHY DOMESTIC -->
  <section class="why-section">
    <div class="reveal">
      <p class="section-label">Our Philosophy</p>
      <h2 class="section-title">Why We Manufacture<br><em>in the US</em></h2>
      <p class="section-sub">Every decision comes back to one thing: giving our customers a product they can depend on.</p>
    </div>
    <div class="why-grid">
      <div v-for="r in reasons" :key="r.title" class="why-card reveal">
        <span class="why-icon">{{ r.icon }}</span>
        <h4>{{ r.title }}</h4>
        <p>{{ r.desc }}</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-strip">
    <div class="reveal">
      <p class="section-label" style="color:rgba(184,134,11,0.7)">Work With Us</p>
      <h2 class="section-title" style="color:var(--white)">Ready to <em>Get Started</em>?</h2>
      <p style="color:rgba(255,255,255,0.5); font-size:0.95rem; margin-bottom:2.5rem">
        Get in touch and let's talk about your stretch wrap needs.
      </p>
      <RouterLink to="/contact" class="btn-primary">Contact Us</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
useReveal()

const reasons = [
  { icon: '🔍', title: 'Quality Control',    desc: 'We oversee every step of production — no surprises, no inconsistencies.' },
  { icon: '⏱️', title: 'Faster Lead Times',  desc: 'No ocean freight. Orders fulfilled quickly from our Atlanta facility.' },
  { icon: '🇺🇸', title: 'Supporting US Jobs', desc: 'Manufacturing locally creates economic value right here at home.' },
  { icon: '📞', title: 'Real Accountability', desc: 'When something matters, you talk to us directly — not a foreign factory.' },
]
</script>

<style scoped>
.page-header {
  min-height: 50vh; display: flex; flex-direction: column;
  justify-content: flex-end; padding: 6rem 8% 5rem;
  background: var(--off-white); padding-top: calc(72px + 4rem);
}
.hero-eyebrow {
  font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem;
}
.page-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 300; line-height: 1.05;
}
.page-title em { font-style: italic; color: var(--accent); }

.about-section {
  padding: 7rem 8%; background: var(--white);
  display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
}
.about-visual { position: relative; }
.about-img-placeholder {
  width: 100%; aspect-ratio: 4/5;
  background: linear-gradient(145deg, #d4c9bb 0%, #b0a498 100%);
  display: flex; align-items: center; justify-content: center;
}
.about-img-placeholder span { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(0,0,0,0.35); }
.about-accent-box {
  position: absolute; bottom: -2rem; right: -2rem;
  width: 160px; padding: 1.5rem; background: var(--accent); color: var(--white);
}
.about-accent-box .num {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.5rem; font-weight: 300; color: var(--white);
}
.about-accent-box p {
  font-size: 0.7rem; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 0.3rem;
}
.about-list { list-style: none; margin-top: 2rem; }
.about-list li {
  display: flex; gap: 1rem; align-items: flex-start;
  padding: 1rem 0; border-bottom: 1px solid var(--border);
  font-size: 0.9rem; color: var(--mid-gray);
}
.about-list li::before { content: '→'; color: var(--accent); flex-shrink: 0; margin-top: 0.1rem; }

.founder-section { padding: 7rem 8%; background: var(--off-white); }
.founder-card {
  max-width: 700px; margin: 0 auto;
}
.founder-name { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 300; color: var(--black); }
.founder-role {
  font-size: 0.75rem; letter-spacing: 0.15em;
  text-transform: uppercase; color: var(--accent); margin-top: 0.3rem;
}

.why-section { padding: 7rem 8%; background: var(--white); }
.why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-top: 4rem; }
.why-card { background: var(--off-white); padding: 2.5rem 2rem; transition: background 0.2s; }
.why-card:hover { background: #e8e0e0; }
.why-icon { font-size: 1.8rem; display: block; margin-bottom: 1rem; }
.why-card h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; margin-bottom: 0.8rem; color: var(--black); }
.why-card p { font-size: 0.88rem; color: var(--mid-gray); line-height: 1.7; }

.cta-strip {
  padding: 7rem 8%;
  background: linear-gradient(135deg, #1e2a3a 0%, #0a0a0a 100%);
}

@media (max-width: 960px) {
  .about-section { grid-template-columns: 1fr; gap: 4rem; }
  .about-accent-box { right: 0; }
  .why-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) { .why-grid { grid-template-columns: 1fr; } }
</style>