<template>
  <section
    class="facilities-showcase"
    aria-labelledby="facilities-showcase-title"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @focusin="pauseAutoplay"
    @focusout="resumeAutoplay"
  >
    <div class="facilities-showcase__inner">
      <!-- LEFT EDITORIAL CONTENT -->
      <div class="facilities-showcase__content">
        <header class="facilities-showcase__heading">
          <h2 id="facilities-showcase-title">
            Our facilities
          </h2>

          <p>
            Thoughtful spaces for slow mornings, quiet afternoons
            and easy moments in the hills of Ella.
          </p>
        </header>

        <!-- FACILITY SELECTOR -->
        <div
          class="facilities-showcase__list"
          role="tablist"
          aria-label="Mistara Ella facilities"
        >
          <button
            v-for="(facility, index) in facilities"
            :id="`facility-tab-${index}`"
            :key="facility.title"
            class="facilities-showcase__item"
            :class="{ 'is-active': activeIndex === index }"
            type="button"
            role="tab"
            :aria-selected="activeIndex === index"
            :aria-controls="`facility-panel-${index}`"
            @mouseenter="setActive(index)"
            @focus="setActive(index)"
            @click="setActive(index)"
          >
            <span class="facilities-showcase__item-index">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="facilities-showcase__item-title">
              {{ facility.title }}
            </span>

            <span
              class="facilities-showcase__item-line"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <RouterLink
          class="facilities-showcase__discover"
          to="/facilities"
        >
          <span>Discover our facilities</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M7 17L17 7" />
            <path d="M9 7H17V15" />
          </svg>
        </RouterLink>
      </div>

      <!-- RIGHT IMAGE STAGE -->
      <div
        class="facilities-showcase__visual"
        role="region"
        aria-roledescription="carousel"
        aria-label="Mistara Ella facilities gallery"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointercancel="resetPointer"
      >
        <div
          v-for="(facility, index) in facilities"
          :id="`facility-panel-${index}`"
          :key="facility.image"
          class="facilities-showcase__panel"
          :class="{ 'is-active': activeIndex === index }"
          role="tabpanel"
          :aria-labelledby="`facility-tab-${index}`"
          :aria-hidden="activeIndex !== index"
        >
          <img
            :src="facility.image"
            :alt="facility.alt"
            :loading="index === 0 ? 'eager' : 'lazy'"
            draggable="false"
          />

          <div
            class="facilities-showcase__shade"
            aria-hidden="true"
          ></div>

          <p class="facilities-showcase__caption">
            {{ facility.caption }}
          </p>
        </div>
<div
          class="facilities-showcase__counter"
          aria-hidden="true"
        >
          <span>
            {{ String(activeIndex + 1).padStart(2, '0') }}
          </span>

          <i></i>

          <span>
            {{ String(facilities.length).padStart(2, '0') }}
          </span>
        </div>
      </div>
    </div>

    <p
      class="facilities-showcase__sr-status"
      aria-live="polite"
    >
      {{ facilities[activeIndex].title }}
    </p>
  </section>
</template>

<script setup>
import {
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'

const baseUrl = import.meta.env.BASE_URL

const facilities = [
  {
    title: 'Pool & Outdoor Spaces',
    image: `${baseUrl}Images/Facility/wellness3.jpeg`,
    alt: 'Outdoor pool and relaxing spaces at Mistara Ella',
    caption: 'A quiet place to cool off and settle into the mountain air.',
  },
  {
    title: 'Dining & Breakfast',
    image: `${baseUrl}Images/Facility/food1.jpeg`,
    alt: 'Dining experience and food at Mistara Ella',
    caption: 'Fresh mornings, comforting plates and relaxed dining in Ella.',
  },
  {
    title: 'Wellness & Relaxation',
    image: `${baseUrl}Images/Facility/wellness1.jpg`,
    alt: 'Wellness and relaxation setting at Mistara Ella',
    caption: 'Slow down, reset and give yourself a little more time.',
  },
  {
    title: 'Common Lounge',
    image: `${baseUrl}Images/Facility/hall.png`,
    alt: 'Comfortable common lounge at Mistara Ella',
    caption: 'Comfortable corners made for conversation and unhurried afternoons.',
  },
  {
    title: 'Garden & Swing',
    image: `${baseUrl}Images/Facility/swing.png`,
    alt: 'Garden swing and outdoor greenery at Mistara Ella',
    caption: 'Simple outdoor moments surrounded by the green character of Ella.',
  },
  {
    title: 'Mountain View Spaces',
    image: `${baseUrl}Images/Facility/roomview.png`,
    alt: 'Mountain view from Mistara Ella',
    caption: 'The landscape stays close, from the first light to the last.',
  },
]

const activeIndex = ref(0)

let autoplayId = null
let reducedMotionQuery = null
let pointerStartX = null

const wrapIndex = (index) =>
  (index + facilities.length) % facilities.length

const setActive = (index) => {
  activeIndex.value = wrapIndex(index)
}

const previousFacility = () => {
  activeIndex.value = wrapIndex(activeIndex.value - 1)
}

const nextFacility = () => {
  activeIndex.value = wrapIndex(activeIndex.value + 1)
}

const startAutoplay = () => {
  window.clearInterval(autoplayId)

  if (reducedMotionQuery?.matches) return

  autoplayId = window.setInterval(() => {
    activeIndex.value = wrapIndex(activeIndex.value + 1)
  }, 5200)
}

const pauseAutoplay = () => {
  window.clearInterval(autoplayId)
}

const resumeAutoplay = () => {
  startAutoplay()
}

const onPointerDown = (event) => {
  pointerStartX = event.clientX
}

const onPointerUp = (event) => {
  if (pointerStartX === null) return

  const distance =
    event.clientX - pointerStartX

  pointerStartX = null

  if (Math.abs(distance) < 45) return

  if (distance < 0) {
    nextFacility()
  } else {
    previousFacility()
  }
}

const resetPointer = () => {
  pointerStartX = null
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  )

  startAutoplay()

  reducedMotionQuery.addEventListener?.(
    'change',
    startAutoplay,
  )
})

onBeforeUnmount(() => {
  window.clearInterval(autoplayId)

  reducedMotionQuery?.removeEventListener?.(
    'change',
    startAutoplay,
  )
})
</script>
