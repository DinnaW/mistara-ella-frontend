<template>
  <MainLayout>
    <InnerPageHero eyebrow="Look around" title="Gallery" text="Existing project photography collected into a simple frontend-only gallery." image="./Images/Banner/gallery.png" />
    <section class="section">
      <div class="site-shell full-gallery"><img v-for="(image, index) in gallery" :key="image" :src="image" :alt="`Mistara gallery ${index + 1}`" /></div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import InnerPageHero from '../components/layout/InnerPageHero.vue'
import { gallery } from '../data/site'
</script>
