<template>
  <section
    class="rooms-showcase"
    aria-labelledby="rooms-showcase-title"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
  >
    <header class="rooms-showcase__heading">
      <h2 id="rooms-showcase-title">
        Cozy rooms with <em>mountain views</em>
        <span>made for quiet moments</span>
      </h2>
    </header>

    <div
      class="rooms-showcase__stage"
      role="region"
      aria-roledescription="carousel"
      aria-label="Mistara Ella room gallery"
      tabindex="0"
      @keydown.left.prevent="previousSlide"
      @keydown.right.prevent="nextSlide"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointercancel="resetPointer"
    >
      <button
        class="rooms-showcase__arrow rooms-showcase__arrow--previous"
        type="button"
        aria-label="Previous room"
        @click="previousSlide"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 6L9 12L15 18" />
        </svg>
      </button>

      <div class="rooms-showcase__track">
        <button
          v-for="(room, index) in showcaseRooms"
          :key="room.image"
          type="button"
          class="rooms-showcase__card"
          :class="positionClass(index)"
          :aria-label="`${room.name}${index === activeIndex ? ', currently selected' : ''}`"
          :aria-current="index === activeIndex ? 'true' : undefined"
          :tabindex="isInteractive(index) ? 0 : -1"
          @click="selectRoom(index)"
        >
          <img
            :src="room.image"
            :alt="room.alt"
            :loading="index === activeIndex ? 'eager' : 'lazy'"
            draggable="false"
          />
        </button>
      </div>

      <button
        class="rooms-showcase__arrow rooms-showcase__arrow--next"
        type="button"
        aria-label="Next room"
        @click="nextSlide"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M9 6L15 12L9 18" />
        </svg>
      </button>
    </div>

    <p class="rooms-showcase__sr-status" aria-live="polite">
      {{ showcaseRooms[activeIndex].name }}
    </p>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

/*
 * public/ assets need the Vite base URL so they work both locally and when
 * GitHub Pages serves the site from /mistara-ella-frontend/.
 */
const baseUrl = import.meta.env.BASE_URL

const showcaseRooms = [
  {
    name: 'Premium Mountain Room',
    image: `${baseUrl}Images/Home/bed2.jpeg`,
    alt: 'Premium Mistara Ella room with a timber bed, soft curtains and warm lighting',
  },
  {
    name: 'Family Mountain Room',
    image: `${baseUrl}Images/Home/bed3.jpeg`,
    alt: 'Spacious twin room at Mistara Ella with warm timber details',
  },
  {
    name: 'Deluxe Mountain Room',
    image: `${baseUrl}Images/Home/bed1.jpeg`,
    alt: 'Deluxe room at Mistara Ella with a king bed and handcrafted green artwork',
  },
  {
    name: 'Balcony Night Room',
    image: `${baseUrl}Images/Facility/room2.jpeg`,
    alt: 'Mistara Ella room opening toward a private balcony and the evening hills',
  },
  {
    name: 'Quiet Garden Room',
    image: `${baseUrl}Images/Facility/room1.jpeg`,
    alt: 'Quiet Mistara Ella room with a timber bed and floor-to-ceiling curtains',
  },
]

const activeIndex = ref(0)

let autoplayId = null
let reducedMotionQuery = null
let pointerStartX = null

const wrapIndex = (index) =>
  (index + showcaseRooms.length) % showcaseRooms.length

const relativeOffset = (index) => {
  const total = showcaseRooms.length
  let offset = index - activeIndex.value

  if (offset > total / 2) offset -= total
  if (offset < -total / 2) offset += total

  return offset
}

const positionClass = (index) => {
  const offset = relativeOffset(index)

  if (offset === 0) return 'is-active'
  if (offset === -1) return 'is-previous'
  if (offset === 1) return 'is-next'
  if (offset < -1) return 'is-hidden-left'

  return 'is-hidden-right'
}

const isInteractive = (index) => Math.abs(relativeOffset(index)) <= 1

const selectRoom = (index) => {
  if (index === activeIndex.value) return

  activeIndex.value = wrapIndex(index)
  restartAutoplay()
}

const nextSlide = () => {
  activeIndex.value = wrapIndex(activeIndex.value + 1)
  restartAutoplay()
}

const previousSlide = () => {
  activeIndex.value = wrapIndex(activeIndex.value - 1)
  restartAutoplay()
}

const startAutoplay = () => {
  window.clearInterval(autoplayId)

  if (reducedMotionQuery?.matches) return

  autoplayId = window.setInterval(() => {
    activeIndex.value = wrapIndex(activeIndex.value + 1)
  }, 4200)
}

const pauseAutoplay = () => {
  window.clearInterval(autoplayId)
}

const resumeAutoplay = () => {
  startAutoplay()
}

const restartAutoplay = () => {
  pauseAutoplay()
  startAutoplay()
}

const onPointerDown = (event) => {
  pointerStartX = event.clientX
}

const onPointerUp = (event) => {
  if (pointerStartX === null) return

  const distance = event.clientX - pointerStartX
  pointerStartX = null

  if (Math.abs(distance) < 45) return

  if (distance < 0) nextSlide()
  else previousSlide()
}

const resetPointer = () => {
  pointerStartX = null
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  startAutoplay()
  reducedMotionQuery.addEventListener?.('change', startAutoplay)
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayId)
  reducedMotionQuery?.removeEventListener?.('change', startAutoplay)
})
</script>
