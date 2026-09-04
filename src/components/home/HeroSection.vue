<template>
  <section class="hero">
    <div
      v-for="(slide, index) in heroSlides"
      :key="slide.title"
      class="hero-slide"
      :class="{ active: index === activeSlide }"
      :style="{ backgroundImage: `url(${slide.image})` }"
    ></div>
    <div class="hero-overlay"></div>

    <div class="site-shell hero-content">
      <div class="hero-copy">
        <p class="eyebrow eyebrow-light">{{ heroSlides[activeSlide].eyebrow }}</p>
        <h1>{{ heroSlides[activeSlide].title }}</h1>
        <p class="hero-text">{{ heroSlides[activeSlide].text }}</p>
        <div class="hero-actions">
          <a href="#booking" class="button button-gold">Book your stay</a>
          <RouterLink to="/gallery" class="text-link text-link-light">Explore the gallery <ArrowUpRight :size="18" /></RouterLink>
        </div>
      </div>

      <div class="hero-pagination" aria-label="Hero slides">
        <button
          v-for="(_, index) in heroSlides"
          :key="index"
          :class="{ active: activeSlide === index }"
          :aria-label="`Go to slide ${index + 1}`"
          @click="activeSlide = index"
        ></button>
      </div>
    </div>

    <div id="booking" class="site-shell booking-wrap">
      <form class="booking-bar" @submit.prevent>
        <div class="booking-field">
          <span>Check in</span>
          <input v-model="checkIn" type="date" aria-label="Check in" />
        </div>
        <div class="booking-field">
          <span>Check out</span>
          <input v-model="checkOut" type="date" aria-label="Check out" />
        </div>
        <div class="booking-field">
          <span>Guests</span>
          <select aria-label="Guests">
            <option>2 Adults</option>
            <option>1 Adult</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
          </select>
        </div>
        <button class="booking-search" type="submit">Check availability <ArrowRight :size="18" /></button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'
import { heroSlides } from '../../data/site'

const activeSlide = ref(0)
const toISODate = (date) => date.toISOString().slice(0, 10)
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)
const checkIn = ref(toISODate(today))
const checkOut = ref(toISODate(tomorrow))
let intervalId

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % heroSlides.length
  }, 6500)
})

onBeforeUnmount(() => window.clearInterval(intervalId))
</script>
