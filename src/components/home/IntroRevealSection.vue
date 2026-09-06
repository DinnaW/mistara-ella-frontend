<template>
  <section
    ref="sectionRef"
    class="scroll-intro"
    aria-labelledby="mistara-intro-title"
  >
    <div class="scroll-intro__canvas">
      <div class="scroll-intro__copy" ref="copyRef">
        <h2 id="mistara-intro-title" class="scroll-intro__title">
          A PLACE TO<br />
          BREATHE AGAIN
        </h2>

        <div class="scroll-intro__body">
          <p>
            Mistara Ella is a quiet hillside retreat shaped by mountain air,
            warm hospitality and the unhurried rhythm of Sri Lanka's hill
            country. Designed for guests who value calm, comfort and a closer
            connection to nature, every stay invites you to slow down and feel
            at home in Ella.
          </p>

          <RouterLink class="scroll-intro__booking" to="/contact">
            <span>Book Your Stay</span>
            <span class="scroll-intro__booking-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7" />
                <path d="M9 7H17V15" />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <figure
        :ref="setMediaRef"
        class="scroll-intro__media scroll-intro__media--top-right"
      >
        <img
          src="/Images/Home/hero3.jpeg"
          alt="Mistara Ella lounge surrounded by greenery"
        />
      </figure>

      <figure
        :ref="setMediaRef"
        class="scroll-intro__media scroll-intro__media--left"
      >
        <img
          src="/Images/Banner/reception.jpeg"
          alt="A calm indoor lounge at Mistara Ella"
        />
      </figure>

      <figure
        :ref="setMediaRef"
        class="scroll-intro__media scroll-intro__media--lower-right"
      >
        <img
          src="/Images/Home/view.jpeg"
          alt="Mountain views from Mistara Ella"
        />
      </figure>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUpdate, onBeforeUnmount, onMounted, ref } from 'vue'

const sectionRef = ref(null)
const copyRef = ref(null)
const mediaRefs = ref([])

let frameId = null
let reducedMotionQuery = null

const clamp = (value, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value))

const setMediaRef = (element) => {
  if (element) mediaRefs.value.push(element)
}

onBeforeUpdate(() => {
  mediaRefs.value = []
})

const setRevealVariables = (element, progress) => {
  const p = clamp(progress)
  const clip = (1 - p) * 72
  const shift = (1 - p) * 22
  const scale = 1.04 - p * 0.04

  element.style.setProperty('--media-clip', `${clip.toFixed(2)}%`)
  element.style.setProperty('--media-shift', `${shift.toFixed(2)}px`)
  element.style.setProperty('--media-scale', scale.toFixed(4))
  element.style.setProperty(
    '--media-opacity',
    `${(0.35 + p * 0.65).toFixed(3)}`,
  )
}

const updateScrollEffects = () => {
  frameId = null

  const reducedMotion = reducedMotionQuery?.matches
  const viewportHeight = window.innerHeight

  if (copyRef.value) {
    if (reducedMotion) {
      copyRef.value.style.setProperty('--copy-y', '0px')
      copyRef.value.style.setProperty('--copy-opacity', '1')
    } else {
      const rect = copyRef.value.getBoundingClientRect()
      const start = viewportHeight * 0.94
      const end = viewportHeight * 0.5
      const progress = clamp((start - rect.top) / (start - end))

      copyRef.value.style.setProperty(
        '--copy-y',
        `${((1 - progress) * 24).toFixed(2)}px`,
      )
      copyRef.value.style.setProperty('--copy-opacity', progress.toFixed(3))
    }
  }

  mediaRefs.value.forEach((element) => {
    if (reducedMotion) {
      setRevealVariables(element, 1)
      return
    }

    const rect = element.getBoundingClientRect()
    const start = viewportHeight * 0.94
    const end = viewportHeight * 0.48
    const progress = clamp((start - rect.top) / (start - end))

    setRevealVariables(element, progress)
  })
}

const requestScrollUpdate = () => {
  if (frameId !== null) return
  frameId = window.requestAnimationFrame(updateScrollEffects)
}

onMounted(() => {
  reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  updateScrollEffects()

  window.addEventListener('scroll', requestScrollUpdate, { passive: true })
  window.addEventListener('resize', requestScrollUpdate)
  reducedMotionQuery.addEventListener?.('change', requestScrollUpdate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestScrollUpdate)
  window.removeEventListener('resize', requestScrollUpdate)
  reducedMotionQuery?.removeEventListener?.('change', requestScrollUpdate)

  if (frameId !== null) {
    window.cancelAnimationFrame(frameId)
  }
})
</script>
