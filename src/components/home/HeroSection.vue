<template>
  <section
    id="hero"
    class="hero hero-editorial"
    aria-roledescription="carousel"
    aria-label="Mistara Ella gallery"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
    <!-- Premium green panel -->
    <div class="hero-rail" aria-hidden="true">
      <div class="hero-rail-grain"></div>
    </div>

    <!-- Automatic image carousel -->
    <div class="hero-media">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.image"
        class="hero-slide"
        :class="{ active: index === activeSlide }"
        :style="{
          backgroundImage: `url(${slide.image})`,
          backgroundPosition: slide.position || 'center center',
        }"
        role="group"
        :aria-hidden="index !== activeSlide"
        :aria-label="`${index + 1} of ${heroSlides.length}: ${slide.label}`"
      ></div>

      <div class="hero-media-shade"></div>
    </div>

    <!-- Clean hero typography -->
    <div class="hero-identity">
      <div class="hero-stay" aria-hidden="true">
        <span>Stay</span>
      </div>

      <h1 class="hero-name" aria-label="Mistara Ella">
        <span class="hero-name-line">
          <span class="hero-name-text hero-name-text--mistara">
            Mistara
          </span>
        </span>

        <span class="hero-name-line">
          <span class="hero-name-text hero-name-text--ella">
            Ella
          </span>
        </span>
      </h1>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { heroSlides } from '../../data/site'

const activeSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % heroSlides.length
}

const startAutoplay = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (prefersReducedMotion) return

  window.clearInterval(intervalId)
  intervalId = window.setInterval(nextSlide, 6200)
}

const pauseAutoplay = () => {
  window.clearInterval(intervalId)
}

const resumeAutoplay = () => {
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onBeforeUnmount(() => {
  window.clearInterval(intervalId)
})
</script>
