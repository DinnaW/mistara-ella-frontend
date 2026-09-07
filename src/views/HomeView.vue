<template>
  <MainLayout>
    <div class="home-hero-stack">
      <HeroSection />
      <IntroRevealSection />
    </div>

    <RoomsEditorialSection />
    <RoomsShowcaseSection />
    <FacilitiesShowcaseSection />
    <GalleryShowcaseSection />
     <FaqShowcaseSection />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import HeroSection from '../components/home/HeroSection.vue'
import IntroRevealSection from '../components/home/IntroRevealSection.vue'
import RoomsEditorialSection from '../components/home/RoomsEditorialSection.vue'
import RoomsShowcaseSection from '../components/home/RoomsShowcaseSection.vue'
import FacilitiesShowcaseSection from '../components/home/FacilitiesShowcaseSection.vue'
import GalleryShowcaseSection from '../components/home/GalleryShowcaseSection.vue'
import FaqShowcaseSection from '../components/home/FaqShowcaseSection.vue'
</script>
