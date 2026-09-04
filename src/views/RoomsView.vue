<template>
  <MainLayout>
    <InnerPageHero eyebrow="Rest well" title="Rooms & stays" text="A frontend-only room listing ready to connect to the booking API later." image="./Images/Banner/roomOut.jpeg" />
    <section class="section">
      <div class="site-shell rooms-grid inner-grid">
        <article v-for="room in rooms" :key="room.name" class="room-card">
          <div class="room-image-wrap"><img :src="room.image" :alt="room.name" /></div>
          <div class="room-body"><p class="room-meta">{{ room.meta }}</p><h3>{{ room.name }}</h3><p>{{ room.description }}</p><button class="text-link static-link">Room details <ArrowRight :size="17" /></button></div>
        </article>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import { ArrowRight } from 'lucide-vue-next'
import MainLayout from '../components/layout/MainLayout.vue'
import InnerPageHero from '../components/layout/InnerPageHero.vue'
import { rooms } from '../data/site'
</script>
