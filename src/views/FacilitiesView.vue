<template>
  <MainLayout>
    <InnerPageHero eyebrow="Designed for the stay" title="Facilities" text="A flexible static frontend page for the hotel facilities and amenities." image="./Images/Banner/facilities.png" />
    <section class="section">
      <div class="site-shell card-grid">
        <article v-for="item in facilities" :key="item.title" class="image-card"><img :src="item.image" :alt="item.title" /><div><h3>{{ item.title }}</h3><p>Replace this text with approved hotel content during the redesign.</p></div></article>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import InnerPageHero from '../components/layout/InnerPageHero.vue'
import { facilities } from '../data/site'
</script>
