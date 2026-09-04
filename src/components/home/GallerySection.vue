<template>
  <section class="section gallery-section">
    <div class="site-shell">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">A glimpse of Mistara</p>
          <h2>See the stay before you arrive.</h2>
        </div>
        <div>
          <p>Rooms, food, water, greenery and the details in between.</p>
          <RouterLink to="/gallery" class="text-link">Open full gallery <ArrowUpRight :size="18" /></RouterLink>
        </div>
      </div>

      <div class="gallery-mosaic">
        <img v-for="(image, index) in gallery.slice(0, 5)" :key="image" :src="image" :alt="`Mistara gallery image ${index + 1}`" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRight } from 'lucide-vue-next'
import { gallery } from '../../data/site'
</script>
