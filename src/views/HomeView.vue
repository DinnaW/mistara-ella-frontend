<template>
  <MainLayout>
    <div class="home-hero-stack">
      <HeroSection />
      <IntroRevealSection />
    </div>

    <RoomsEditorialSection />
    <RoomsShowcaseSection />
    <RoomsCollectionSection />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import HeroSection from '../components/home/HeroSection.vue'
import IntroRevealSection from '../components/home/IntroRevealSection.vue'
import RoomsEditorialSection from '../components/home/RoomsEditorialSection.vue'
import RoomsShowcaseSection from '../components/home/RoomsShowcaseSection.vue'
import RoomsCollectionSection from '../components/home/RoomsCollectionSection.vue'
</script>
