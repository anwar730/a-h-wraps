
<template>
  <!-- PAGE HEADER -->
  <section class="page-header">
    <p class="hero-eyebrow">Get in Touch</p>
    <h1 class="page-title">Let's Talk <em>Business</em></h1>
    <p class="page-sub">Ready to place an order or have a question about our products? Reach out and we'll get back to you promptly.</p>
  </section>

  <!-- CONTACT GRID -->
  <section class="contact-section">
    <div class="contact-grid">
      <!-- LEFT: Info + Map -->
      <div class="reveal">
        <div v-for="item in contactInfo" :key="item.label" class="contact-info-item">
          <div class="contact-icon">{{ item.icon }}</div>
          <div>
            <p class="contact-info-label">{{ item.label }}</p>
            <p class="contact-info-val" v-html="item.value"></p>
          </div>
        </div>
        <div class="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.1!2d-84.4762!3d33.7088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4360+Commerce+Circle+SW%2C+Atlanta%2C+GA+30336!5e0!3m2!1sen!2sus!4v1"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <!-- RIGHT: Form -->
      <div class="reveal">
        <div v-if="submitted" class="form-success">
          ✓ Thank you! Your message has been sent. We'll be in touch shortly.
          <button @click="submitted = false; resetForm()" class="reset-btn">Send another message</button>
        </div>

        <div v-else class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input v-model="form.firstName" type="text" placeholder="Jane" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input v-model="form.lastName" type="text" placeholder="Smith" />
            </div>
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input v-model="form.company" type="text" placeholder="Your Company, LLC" />
          </div>
          <div class="form-group">
            <label>Email Address *</label>
            <input v-model="form.email" type="email" placeholder="jane@yourcompany.com" required />
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input v-model="form.phone" type="tel" placeholder="(000) 000-0000" />
          </div>
          <div class="form-group">
            <label>Industry</label>
            <select v-model="form.industry">
              <option value="">Select your industry…</option>
              <option>Warehouse / Distribution</option>
              <option>Logistics & Freight</option>
              <option>Moving Company</option>
              <option>Airport / Aviation</option>
              <option>Furniture Retail</option>
              <option>Shipping & Courier</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Product Interest</label>
            <select v-model="form.product">
              <option value="">Select a product…</option>
              <option>Machine Stretch Wrap Film</option>
              <option>Hand Stretch Wrap Film</option>
              <option>Both / Not Sure Yet</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message *</label>
            <textarea v-model="form.message" placeholder="Tell us about your needs, order volume, or any questions you have…"></textarea>
          </div>
          <p class="form-note">* We'll respond within one business day.</p>
          <button class="form-submit" @click="handleSubmit" :disabled="submitting">
            {{ submitting ? 'Sending…' : 'Send Message' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
import { useReveal } from '@/composables/useReveal'
useReveal()

const submitted  = ref(false)
const submitting = ref(false)

const form = reactive({ firstName: '', lastName: '', company: '', email: '', phone: '', industry: '', product: '', message: '' })
const resetForm = () => Object.assign(form, { firstName: '', lastName: '', company: '', email: '', phone: '', industry: '', product: '', message: '' })

async function handleSubmit() {
  if (!form.firstName || !form.email || !form.message) {
    alert('Please fill in required fields')
    return
  }

  try {
    submitting.value = true

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        firstName: form.firstName,
        lastName: form.lastName,
        company: form.company,
        email: form.email,
        phone: form.phone,
        industry: form.industry,
        product: form.product,
        message: form.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    submitted.value = true
    resetForm()

  } catch (error) {
    console.error(error)
    alert('Failed to send message')
  } finally {
    submitting.value = false
  }
}

const contactInfo = [
  { icon: '📍', label: 'Our Location', value: '4360 Commerce Circle, Suite C<br>Atlanta, GA 30336' },
  { icon: '📞', label: 'Phone',         value: '<a href="tel:8039918447" style="color:inherit;text-decoration:none">803-991-8447</a>' },
  { icon: '✉️', label: 'Email',         value: '<a href="mailto:hamanufacturing@gmail.com" style="color:inherit;text-decoration:none">hamanufacturing@gmail.com</a>' },
  { icon: '🕐', label: 'Business Hours', value: 'Mon – Fri: 10:00 AM – 5:00 PM<br>Saturday: 10:00 AM – 3:00 PM' },
]
</script>

<style scoped>
.page-header {
  min-height: 45vh; display: flex; flex-direction: column;
  justify-content: flex-end; padding: 6rem 8% 5rem;
  background: var(--off-white); padding-top: calc(72px + 4rem);
}
.hero-eyebrow { font-size: 0.72rem; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; }
.page-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 300; line-height: 1.05; }
.page-title em { font-style: italic; color: var(--accent); }
.page-sub { font-size: 0.95rem; color: var(--mid-gray); max-width: 540px; line-height: 1.8; margin-top: 1.5rem; }

.contact-section { padding: 7rem 8%; background: var(--white); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 6rem; align-items: start; }
.contact-info-item { display: flex; gap: 1.2rem; align-items: flex-start; padding: 1.5rem 0; border-bottom: 1px solid var(--border); }
.contact-icon { width: 40px; height: 40px; background: var(--white); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
.contact-info-label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-navy); margin-bottom: 0.3rem; }
.contact-info-val { font-size: 0.95rem; color: var(--black); font-weight: 500; }

.map-wrap { width: 100%; height: 280px; margin-top: 2rem; overflow: hidden; border: 1px solid var(--border); }
.map-wrap iframe { width: 100%; height: 100%; border: none; }

.contact-form { display: flex; flex-direction: column; gap: 1.2rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-group label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent-navy); font-weight: 500; }
.form-group input,
.form-group select,
.form-group textarea {
  font-family: 'DM Sans', sans-serif; font-size: 0.9rem; color: var(--black);
  background: var(--off-white); border: 1px solid transparent;
  padding: 0.85rem 1rem; outline: none; transition: border-color 0.2s, background 0.2s;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--accent); background: var(--white); }
.form-group textarea { resize: vertical; min-height: 120px; }
.form-note { font-size: 0.75rem; color: var(--mid-gray); margin-top: -0.3rem; }
.form-submit {
  background: var(--accent); color: var(--white);
  padding: 1rem 2.5rem; font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
  font-weight: 500; border: none; cursor: pointer;
  transition: background 0.25s, transform 0.2s; align-self: flex-start;
}
.form-submit:hover:not(:disabled) { background: var(--black); transform: translateY(-2px); }
.form-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.form-success {
  padding: 2rem; background: #f0f4ff;
  border-left: 3px solid var(--accent-navy);
  font-size: 0.9rem; color: var(--accent-navy);
  display: flex; flex-direction: column; gap: 1rem;
}
.reset-btn {
  background: none; border: none; color: var(--accent);
  font-size: 0.8rem; cursor: pointer; text-decoration: underline;
  padding: 0; align-self: flex-start;
}

@media (max-width: 960px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
