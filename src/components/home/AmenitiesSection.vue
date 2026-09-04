<template>
  <section class="section amenities-section">
    <div class="site-shell">
      <div class="section-heading centered-heading">
        <p class="eyebrow eyebrow-light">The Mistara experience</p>
        <h2>Everything you need. Nothing you don’t.</h2>
        <p>Spaces and details designed to keep the stay easy, comfortable and connected to the landscape.</p>
      </div>

      <div class="amenities-grid">
        <article v-for="amenity in amenities" :key="amenity.title" class="amenity-card">
          <img :src="amenity.image" :alt="amenity.title" />
          <div class="amenity-overlay"></div>
          <div class="amenity-copy">
            <h3>{{ amenity.title }}</h3>
            <p>{{ amenity.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { amenities } from '../../data/site'
</script>
