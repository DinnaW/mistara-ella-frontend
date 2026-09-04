<template>
  <MainLayout>
    <HeroSection />
    <AboutSection />
    <RoomsSection />
    <AmenitiesSection />
    <GallerySection />
    <LocationSection />
    <FinalCta />
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import RoomsSection from '../components/home/RoomsSection.vue'
import AmenitiesSection from '../components/home/AmenitiesSection.vue'
import GallerySection from '../components/home/GallerySection.vue'
import LocationSection from '../components/home/LocationSection.vue'
import FinalCta from '../components/home/FinalCta.vue'
</script>
