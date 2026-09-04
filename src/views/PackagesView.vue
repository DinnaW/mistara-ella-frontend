<template>
  <MainLayout>
    <InnerPageHero eyebrow="Stay a little longer" title="Packages" text="This page is intentionally static for the design phase and can later receive live package data." image="./Images/Banner/featured-image.jpeg" />
    <section class="section">
      <div class="site-shell placeholder-panel">
        <p class="eyebrow">Frontend placeholder</p>
        <h2>Package cards will live here.</h2>
        <p>Keep the visual component independent from backend data. When the design is approved, map API fields into a dedicated package data service.</p>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import InnerPageHero from '../components/layout/InnerPageHero.vue'
</script>
