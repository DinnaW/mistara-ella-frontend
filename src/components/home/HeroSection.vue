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

    <!-- Google Reviews badge -->
    <a
      class="hero-reviews"
      href="https://maps.app.goo.gl/o7RNPo53WvddZDjG6"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read Mistara Ella reviews on Google"
    >
      <span class="hero-reviews__google" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path
            fill="#4285F4"
            d="M21.35 11.1H12v3.8h5.35c-.23 1.22-.92 2.25-1.96 2.94v2.45h3.17c1.86-1.71 2.94-4.23 2.94-7.19 0-.69-.06-1.35-.15-2z"
          />
          <path
            fill="#34A853"
            d="M12 22c2.7 0 4.96-.89 6.61-2.41l-3.17-2.45c-.88.59-2 .94-3.44.94-2.61 0-4.82-1.76-5.61-4.13H3.12v2.54A10 10 0 0 0 12 22z"
          />
          <path
            fill="#FBBC05"
            d="M6.39 13.95A5.99 5.99 0 0 1 6.08 12c0-.68.12-1.34.31-1.95V7.51H3.12A10 10 0 0 0 2 12c0 1.61.39 3.14 1.12 4.49l3.27-2.54z"
          />
          <path
            fill="#EA4335"
            d="M12 5.92c1.47 0 2.79.51 3.83 1.5l2.87-2.87C16.96 2.93 14.7 2 12 2a10 10 0 0 0-8.88 5.51l3.27 2.54c.79-2.37 3-4.13 5.61-4.13z"
          />
        </svg>
      </span>

      <span class="hero-reviews__content">
        <span class="hero-reviews__topline">
          <span class="hero-reviews__title">Google Reviews</span>
          <span class="hero-reviews__score">4.9 out of 5</span>
        </span>

        <span
          class="hero-reviews__stars"
          aria-label="4.5 out of 5 stars"
        >
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>

          <span
            class="hero-reviews__star-half"
            aria-hidden="true"
          >
            ★
          </span>
        </span>
      </span>

      <svg
        class="hero-reviews__arrow"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path d="M5 15L15 5" />
        <path d="M8 5H15V12" />
      </svg>
    </a>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { heroSlides } from '../../data/site'

const activeSlide = ref(0)

let intervalId = null

const nextSlide = () => {
  activeSlide.value =
    (activeSlide.value + 1) % heroSlides.length
}

const startAutoplay = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  if (prefersReducedMotion) return

  window.clearInterval(intervalId)

  intervalId = window.setInterval(
    nextSlide,
    6200,
  )
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
