<template>
  <section class="section rooms-section">
    <div class="site-shell">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Stay your way</p>
          <h2>Rooms made for slower mornings.</h2>
        </div>
        <div>
          <p>Warm interiors, generous views and a calm place to return to after a day exploring Ella.</p>
          <RouterLink to="/rooms" class="text-link">View all rooms <ArrowUpRight :size="18" /></RouterLink>
        </div>
      </div>

      <div class="rooms-grid">
        <article v-for="(room, index) in rooms" :key="room.name" class="room-card" :class="{ featured: index === 0 }">
          <div class="room-image-wrap">
            <img :src="room.image" :alt="room.name" />
            <span class="room-number">0{{ index + 1 }}</span>
          </div>
          <div class="room-body">
            <p class="room-meta">{{ room.meta }}</p>
            <h3>{{ room.name }}</h3>
            <p>{{ room.description }}</p>
            <RouterLink to="/rooms" class="text-link">Explore room <ArrowRight :size="17" /></RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { rooms } from '../../data/site'
</script>
