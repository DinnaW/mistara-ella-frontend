<template>
  <section class="mistara-gallery" aria-labelledby="mistara-gallery-title">
    <div class="mistara-gallery__header">
      <div class="mistara-gallery__heading">
        <h2 id="mistara-gallery-title">
          Moments worth
          <em>remembering</em>
        </h2>
      </div>

      <div class="mistara-gallery__intro">
        <p>
          From misty mornings and mountain views to quiet corners,
          warm interiors and slow evenings — discover the character
          of Mistara Ella through a collection of moments.
        </p>

        <RouterLink class="mistara-gallery__all" to="/gallery">
          <span>View full gallery</span>

          <span class="mistara-gallery__all-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7" />
              <path d="M9 7H17V15" />
            </svg>
          </span>
        </RouterLink>
      </div>
    </div>

    <div class="mistara-gallery__grid">
      <button
        v-for="(item, index) in galleryItems"
        :key="item.image"
        type="button"
        class="mistara-gallery__item"
        :class="`mistara-gallery__item--${index + 1}`"
        :aria-label="`Open gallery image: ${item.title}`"
        @click="openLightbox(index)"
      >
        <img :src="item.image" :alt="item.alt" loading="lazy" draggable="false" />
        <span class="mistara-gallery__shade" aria-hidden="true"></span>

        <span class="mistara-gallery__meta">
          <span class="mistara-gallery__number">
            {{ String(index + 1).padStart(2, '0') }}
          </span>

          <span class="mistara-gallery__label">
            {{ item.title }}
          </span>

          <svg class="mistara-gallery__expand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 4H4V8" />
            <path d="M16 4H20V8" />
            <path d="M8 20H4V16" />
            <path d="M16 20H20V16" />
          </svg>
        </span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="mistara-gallery-lightbox">
        <div
          v-if="lightboxOpen"
          class="mistara-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="galleryItems[activeIndex].title"
          @click.self="closeLightbox"
        >
          <button
            ref="closeButtonRef"
            type="button"
            class="mistara-gallery-lightbox__close"
            aria-label="Close gallery"
            @click="closeLightbox"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            class="mistara-gallery-lightbox__arrow mistara-gallery-lightbox__arrow--previous"
            aria-label="Previous image"
            @click="previousImage"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6L9 12L15 18" />
            </svg>
          </button>

          <figure class="mistara-gallery-lightbox__figure">
            <img :src="galleryItems[activeIndex].image" :alt="galleryItems[activeIndex].alt" />

            <figcaption class="mistara-gallery-lightbox__caption">
              <span>
                {{ String(activeIndex + 1).padStart(2, '0') }}
                /
                {{ String(galleryItems.length).padStart(2, '0') }}
              </span>

              <strong>{{ galleryItems[activeIndex].title }}</strong>
            </figcaption>
          </figure>

          <button
            type="button"
            class="mistara-gallery-lightbox__arrow mistara-gallery-lightbox__arrow--next"
            aria-label="Next image"
            @click="nextImage"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6L15 12L9 18" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'

const baseUrl = import.meta.env.BASE_URL

const galleryItems = [
  {
    title: 'Mountain Mornings',
    image: `${baseUrl}Images/Home/view.jpeg`,
    alt: 'Mountain views surrounding Mistara Ella',
  },
  {
    title: 'Quiet Interiors',
    image: `${baseUrl}Images/Banner/reception.jpeg`,
    alt: 'Warm and calm interior spaces at Mistara Ella',
  },
  {
    title: 'Restful Rooms',
    image: `${baseUrl}Images/Home/bed2.jpeg`,
    alt: 'Premium guest room at Mistara Ella',
  },
  {
    title: 'Slow Afternoons',
    image: `${baseUrl}Images/Facility/wellness3.jpeg`,
    alt: 'Relaxing outdoor spaces at Mistara Ella',
  },
  {
    title: 'A Taste of Ella',
    image: `${baseUrl}Images/Facility/food1.jpeg`,
    alt: 'Dining experience at Mistara Ella',
  },
  {
    title: 'Garden Moments',
    image: `${baseUrl}Images/Facility/swing.png`,
    alt: 'Garden swing surrounded by greenery at Mistara Ella',
  },
]

const lightboxOpen = ref(false)
const activeIndex = ref(0)
const closeButtonRef = ref(null)

const wrapIndex = (index) =>
  (index + galleryItems.length) % galleryItems.length

const openLightbox = async (index) => {
  activeIndex.value = wrapIndex(index)
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  closeButtonRef.value?.focus()
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  activeIndex.value = wrapIndex(activeIndex.value + 1)
}

const previousImage = () => {
  activeIndex.value = wrapIndex(activeIndex.value - 1)
}

const onKeydown = (event) => {
  if (!lightboxOpen.value) return

  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') previousImage()
}

window.addEventListener('keydown', onKeydown)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.mistara-gallery {
  position: relative;
  z-index: 5;
  width: 100%;
  overflow: hidden;
  padding: 5vw;
  background: #f4f0e7;
  color: var(--forest-deep);
}

.mistara-gallery__header {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, .85fr);
  align-items: start;
  gap: clamp(48px, 8vw, 140px);
  margin-bottom: clamp(48px, 5vw, 82px);
}

.mistara-gallery__heading {
  max-width: 760px;
}

.mistara-gallery__eyebrow {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: clamp(26px, 2.8vw, 42px);
  color: #5b685f;
  font-family: var(--sans);
  font-size: clamp(10px, .72vw, 12px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.mistara-gallery__eyebrow-line {
  width: clamp(44px, 4vw, 68px);
  height: 1px;
  background: rgba(27, 57, 46, .45);
}

.mistara-gallery__heading h2 {
  margin: 0;
  color: #1b2d25;
  font-family: var(--serif);
  font-size: clamp(36px, 3.35vw, 54px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.026em;
}

.mistara-gallery__heading h2 em {
  display: block;
  font-family: inherit;
  font-weight: inherit;
  font-style: italic;
}

.mistara-gallery__intro {
  max-width: 470px;
  justify-self: end;
}

.mistara-gallery__intro p {
  margin: 0;
  color: #546159;
  font-family: var(--sans);
  font-size: clamp(13px, .92vw, 15px);
  font-weight: 300;
  line-height: 1.72;
  letter-spacing: -.012em;
}

.mistara-gallery__all {
  width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-top: clamp(28px, 2.8vw, 42px);
  color: #1e342b;
  font-family: var(--serif);
  font-size: clamp(16px, 1.15vw, 19px);
}

.mistara-gallery__all-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(30, 52, 43, .28);
  border-radius: 50%;
  transition: background .3s ease, color .3s ease, border-color .3s ease, transform .3s ease;
}

.mistara-gallery__all-icon svg {
  width: 17px;
  height: 17px;
}

.mistara-gallery__all-icon path,
.mistara-gallery__expand path {
  stroke: currentColor;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mistara-gallery__all:hover .mistara-gallery__all-icon {
  border-color: var(--forest-deep);
  background: var(--forest-deep);
  color: #ffffff;
  transform: translate(2px, -2px);
}

.mistara-gallery__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: clamp(230px, 21vw, 350px) clamp(190px, 17vw, 290px);
  gap: clamp(10px, 1.05vw, 18px);
}

.mistara-gallery__item {
  position: relative;
  min-width: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
  background: #d8ddd8;
  color: #ffffff;
  cursor: pointer;
}

.mistara-gallery__item--1 { grid-column: 1 / 7; grid-row: 1 / 3; }
.mistara-gallery__item--2 { grid-column: 7 / 10; grid-row: 1; }
.mistara-gallery__item--3 { grid-column: 10 / 13; grid-row: 1; }
.mistara-gallery__item--4 { grid-column: 7 / 9; grid-row: 2; }
.mistara-gallery__item--5 { grid-column: 9 / 11; grid-row: 2; }
.mistara-gallery__item--6 { grid-column: 11 / 13; grid-row: 2; }

.mistara-gallery__item img {
  width: 100%;
  height: 100%;
  max-width: none;
  display: block;
  object-fit: cover;
  object-position: center;
  transform: scale(1.015);
  transition: transform 1s cubic-bezier(.22, 1, .36, 1), filter .6s ease;
}

.mistara-gallery__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(6, 24, 18, .62) 0%, rgba(6, 24, 18, .12) 42%, transparent 68%);
  opacity: .58;
  transition: opacity .45s ease;
}

.mistara-gallery__meta {
  position: absolute;
  z-index: 2;
  left: clamp(14px, 1.5vw, 24px);
  right: clamp(14px, 1.5vw, 24px);
  bottom: clamp(14px, 1.5vw, 24px);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: end;
  gap: 12px;
  color: #ffffff;
  text-align: left;
  transform: translateY(4px);
  transition: transform .5s cubic-bezier(.22, 1, .36, 1);
}

.mistara-gallery__number {
  color: rgba(255, 255, 255, .64);
  font-family: var(--sans);
  font-size: 9px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .08em;
}

.mistara-gallery__label {
  font-family: var(--serif);
  font-size: clamp(15px, 1.2vw, 21px);
  font-weight: 400;
  line-height: 1.08;
}

.mistara-gallery__expand {
  width: 18px;
  height: 18px;
  opacity: .78;
  transition: opacity .3s ease, transform .3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .mistara-gallery__item:hover img {
    transform: scale(1.065);
    filter: saturate(.96);
  }

  .mistara-gallery__item:hover .mistara-gallery__shade {
    opacity: .82;
  }

  .mistara-gallery__item:hover .mistara-gallery__meta {
    transform: translateY(0);
  }

  .mistara-gallery__item:hover .mistara-gallery__expand {
    opacity: 1;
    transform: scale(1.08);
  }
}

.mistara-gallery__item:focus-visible {
  outline: 2px solid var(--forest-deep);
  outline-offset: 4px;
}

@media (max-width: 1024px) {
  .mistara-gallery { padding: 6vw; }

  .mistara-gallery__header {
    grid-template-columns: 1fr .78fr;
    gap: 6vw;
  }

  .mistara-gallery__grid {
    grid-template-rows: clamp(220px, 29vw, 300px) clamp(180px, 24vw, 250px);
  }

  .mistara-gallery__label {
    font-size: clamp(14px, 1.7vw, 18px);
  }
}

@media (max-width: 700px) {
  .mistara-gallery { padding: 12vw 5vw; }

  .mistara-gallery__header {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 10vw;
  }

  .mistara-gallery__heading h2 {
    max-width: 450px;
    font-size: 36px;
    line-height: 1.08;
  }

  .mistara-gallery__intro {
    max-width: 500px;
    justify-self: start;
  }

  .mistara-gallery__grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 72vw 52vw 52vw 52vw;
    gap: 10px;
  }

  .mistara-gallery__item--1 { grid-column: 1 / 3; grid-row: 1; }
  .mistara-gallery__item--2 { grid-column: 1; grid-row: 2; }
  .mistara-gallery__item--3 { grid-column: 2; grid-row: 2; }
  .mistara-gallery__item--4 { grid-column: 1 / 3; grid-row: 3; }
  .mistara-gallery__item--5 { grid-column: 1; grid-row: 4; }
  .mistara-gallery__item--6 { grid-column: 2; grid-row: 4; }

  .mistara-gallery__meta {
    left: 14px;
    right: 14px;
    bottom: 14px;
  }

  .mistara-gallery__label { font-size: 15px; }
}

.mistara-gallery-lightbox {
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: grid;
  place-items: center;
  padding: clamp(24px, 4vw, 70px);
  background: rgba(8, 20, 16, .94);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.mistara-gallery-lightbox__figure {
  width: min(78vw, 1180px);
  height: min(78vh, 820px);
  margin: 0;
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  overflow: hidden;
}

.mistara-gallery-lightbox__figure img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: contain;
}

.mistara-gallery-lightbox__caption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 16px;
  color: #ffffff;
}

.mistara-gallery-lightbox__caption span {
  color: rgba(255, 255, 255, .54);
  font-family: var(--sans);
  font-size: 10px;
  letter-spacing: .12em;
}

.mistara-gallery-lightbox__caption strong {
  font-family: var(--serif);
  font-size: clamp(18px, 1.5vw, 24px);
  font-weight: 400;
}

.mistara-gallery-lightbox__close,
.mistara-gallery-lightbox__arrow {
  position: absolute;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, .28);
  border-radius: 50%;
  background: rgba(255, 255, 255, .06);
  color: #ffffff;
  cursor: pointer;
  transition: background .3s ease, border-color .3s ease;
}

.mistara-gallery-lightbox__close {
  top: 28px;
  right: 28px;
}

.mistara-gallery-lightbox__arrow {
  top: 50%;
  transform: translateY(-50%);
}

.mistara-gallery-lightbox__arrow--previous { left: 28px; }
.mistara-gallery-lightbox__arrow--next { right: 28px; }

.mistara-gallery-lightbox__close svg,
.mistara-gallery-lightbox__arrow svg {
  width: 18px;
  height: 18px;
}

.mistara-gallery-lightbox__close path,
.mistara-gallery-lightbox__arrow path {
  stroke: currentColor;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mistara-gallery-lightbox__close:hover,
.mistara-gallery-lightbox__close:focus-visible,
.mistara-gallery-lightbox__arrow:hover,
.mistara-gallery-lightbox__arrow:focus-visible {
  border-color: rgba(255, 255, 255, .65);
  background: rgba(255, 255, 255, .14);
  outline: none;
}

.mistara-gallery-lightbox-enter-active,
.mistara-gallery-lightbox-leave-active {
  transition: opacity .35s ease;
}

.mistara-gallery-lightbox-enter-from,
.mistara-gallery-lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 700px) {
  .mistara-gallery-lightbox {
    padding: 70px 18px 24px;
  }

  .mistara-gallery-lightbox__figure {
    width: 100%;
    height: min(72vh, 680px);
  }

  .mistara-gallery-lightbox__close {
    top: 16px;
    right: 16px;
  }

  .mistara-gallery-lightbox__arrow {
    top: auto;
    bottom: 20px;
    transform: none;
  }

  .mistara-gallery-lightbox__arrow--previous { left: 18px; }
  .mistara-gallery-lightbox__arrow--next { right: 18px; }

  .mistara-gallery-lightbox__caption {
    padding-bottom: 58px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mistara-gallery__item img,
  .mistara-gallery__shade,
  .mistara-gallery__meta,
  .mistara-gallery__expand,
  .mistara-gallery__all-icon,
  .mistara-gallery-lightbox-enter-active,
  .mistara-gallery-lightbox-leave-active {
    transition: none;
  }
}
</style>
