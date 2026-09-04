<template>
  <section class="section location-section">
    <div class="site-shell location-grid">
      <div class="location-copy">
        <p class="eyebrow">Find your way to Ella</p>
        <h2>Close to the places worth waking up early for.</h2>
        <p>From iconic rail bridges to mountain trails, Mistara puts you within easy reach of the experiences that make Ella unforgettable.</p>

        <div class="location-list">
          <div><MapPin :size="20" /><span><strong>Mistara Ella</strong>Ella, Sri Lanka</span></div>
          <div><Mountain :size="20" /><span><strong>Nearby</strong>Nine Arches Bridge · Little Adam’s Peak · Ella Rock</span></div>
          <div><Route :size="20" /><span><strong>Getting here</strong>Approx. 6 hrs from Colombo · 3 hrs from Kandy</span></div>
        </div>

        <a class="button button-dark" href="https://maps.app.goo.gl/o7RNPo53WvddZDjG6" target="_blank" rel="noreferrer">Get directions <ArrowUpRight :size="18" /></a>
      </div>

      <div class="location-image">
        <img src="./Images/Home/view.jpeg" alt="View from Mistara Ella" />
        <div class="location-badge"><span>Ella</span><strong>6.87° N · 81.05° E</strong></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight, MapPin, Mountain, Route } from 'lucide-vue-next'
</script>
