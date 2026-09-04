<template>
  <footer class="site-footer">
    <div class="site-shell footer-grid">
      <div class="footer-brand">
        <img src="./Images/mistara_white.png" alt="Mistara Ella" />
        <p>A peaceful boutique stay framed by the misty mountains and green landscapes of Ella, Sri Lanka.</p>
      </div>

      <div>
        <p class="footer-label">Explore</p>
        <div class="footer-links">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
        </div>
      </div>

      <div>
        <p class="footer-label">Find us</p>
        <div class="footer-contact">
          <span>Mistara Ella, Ella, Sri Lanka</span>
          <a href="mailto:hello@mistaraella.com">hello@mistaraella.com</a>
          <a href="https://maps.app.goo.gl/o7RNPo53WvddZDjG6" target="_blank" rel="noreferrer">Open in Google Maps</a>
        </div>
      </div>

      <div class="footer-cta">
        <p class="footer-label">Your Ella escape</p>
        <h3>Come for the view. Stay for the feeling.</h3>
        <a class="button button-light" href="#booking">Plan your stay</a>
      </div>
    </div>

    <div class="site-shell footer-bottom">
      <span>© {{ year }} Mistara Ella. Frontend redesign project.</span>
      <span>Built with Vue 3 + Vite</span>
    </div>
  </footer>
</template>

<script setup>
import { navItems } from '../../data/site'
const year = new Date().getFullYear()
</script>
