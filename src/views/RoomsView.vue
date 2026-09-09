<template>
  <MainLayout>
    <!-- HERO -->
    <section class="rooms-full-hero">
      <div class="rooms-full-hero__image" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="rooms-full-hero__overlay"></div>
        <div class="rooms-full-hero__content">
          <p class="rooms-full-hero__eyebrow">Discover Mistara Ella</p>
          <h1 class="rooms-full-hero__title">Enjoy Your Dream Stay</h1>
        </div>
      </div>
    </section>

    <!-- ROOMS SHOWCASE -->
    <section class="mistara-rooms-showcase">
      <div class="mistara-rooms-showcase__inner">
        <div class="mistara-rooms-showcase__heading">
          <div class="mistara-rooms-showcase__eyebrow">
            <span class="mistara-rooms-showcase__eyebrow-line"></span>
            <span>Find Your Perfect Room</span>
          </div>
          <h2>Our Rooms</h2>
        </div>

        <div class="mistara-room-carousel">
          <button
            type="button"
            class="mistara-room-arrow mistara-room-arrow--prev"
            :disabled="activeRoomIndex <= 0"
            aria-label="Previous rooms"
            @click.stop="scrollRoomCarousel(-1)"
          >
            <ChevronLeft :size="22" stroke-width="1.7" />
          </button>

          <div
            ref="roomTrack"
            class="mistara-room-grid"
            :class="{ 'is-dragging': isRoomDragging }"
            @scroll="handleRoomScroll"
            @pointerdown="startRoomDrag"
            @pointermove="moveRoomDrag"
            @pointerup="endRoomDrag"
            @pointercancel="endRoomDrag"
            @lostpointercapture="endRoomDrag"
          >
            <article v-for="room in rooms" :key="room.id" class="mistara-room-card">
              <div class="mistara-room-card__image">
                <img :src="room.image" :alt="room.title" />
                <span class="mistara-room-card__availability">
                  {{ room.availability }}
                </span>
                <div class="mistara-room-card__meta">
                  <span>{{ room.guests }}</span>
                  <span>{{ room.size }}</span>
                </div>
              </div>
              <div class="mistara-room-card__content">
                <p class="mistara-room-card__eyebrow">
                  {{ room.type }}
                </p>
                <h3>{{ room.title }}</h3>
                <p class="mistara-room-card__description">
                  {{ room.description }}
                </p>
                <button type="button" class="mistara-room-card__button" @click="openRoom(room)">
                  <span>View Room</span>
                  <ArrowRight :size="16" />
                </button>
              </div>
            </article>
          </div>

          <button
            type="button"
            class="mistara-room-arrow mistara-room-arrow--next"
            :disabled="activeRoomIndex >= roomDotCount - 1"
            aria-label="Next rooms"
            @click.stop="scrollRoomCarousel(1)"
          >
            <ChevronRight :size="22" stroke-width="1.7" />
          </button>
        </div>

        <!-- Desktop: dots only. Tablet/Mobile: ← [dots] → -->
        <div class="mistara-room-dots" aria-label="Room carousel navigation">
          <button
            type="button"
            class="mistara-room-dots__arrow mistara-room-dots__arrow--prev"
            :disabled="activeRoomIndex <= 0"
            aria-label="Previous rooms"
            @click.stop="scrollRoomCarousel(-1)"
          >
            <ChevronLeft :size="16" stroke-width="1.8" />
          </button>

          <div class="mistara-room-dots__list">
            <button
              v-for="dot in roomDotCount"
              :key="`room-dot-${dot}`"
              type="button"
              class="mistara-room-dot"
              :class="{ active: activeRoomIndex === dot - 1 }"
              :aria-label="`Show rooms starting from ${rooms[dot - 1]?.title || 'room'}`"
              :aria-current="activeRoomIndex === dot - 1 ? 'true' : undefined"
              @click.stop="scrollToRoom(dot - 1)"
            ></button>
          </div>

          <button
            type="button"
            class="mistara-room-dots__arrow mistara-room-dots__arrow--next"
            :disabled="activeRoomIndex >= roomDotCount - 1"
            aria-label="Next rooms"
            @click.stop="scrollRoomCarousel(1)"
          >
            <ChevronRight :size="16" stroke-width="1.8" />
          </button>
        </div>
      </div>
    </section>

    <!-- MOMENTS OF STILLNESS -->
    <section class="room-moments-section">
      <div class="room-moments-heading">
        <h2>Moments of Stillness</h2>
      </div>
      <div class="room-moments-track">
        <div v-for="(image, index) in momentImages" :key="image" class="room-moments-card">
          <img :src="image" :alt="`Mistara Ella moment ${index + 1}`" />
        </div>
      </div>
    </section>

    <!-- LUXURY EXPERIENCE -->
    <section class="mistara-room-experience">
      <div class="mistara-room-experience__inner">
        <div class="mistara-room-experience__images">
          <div class="mistara-room-experience__image mistara-room-experience__image--left">
            <img :src="experienceImageOne" alt="Warm Mistara Ella bedroom" />
          </div>
          <div class="mistara-room-experience__image mistara-room-experience__image--right">
            <img :src="experienceImageTwo" alt="Elegant bathroom interior" />
          </div>
        </div>
        <div class="mistara-room-experience__content">
          <div class="mistara-room-experience__eyebrow">
            <span class="mistara-room-experience__eyebrow-line"></span>
            <span>Your Mistara Stay</span>
          </div>
          <h2>
            The Stay You'll<br />
            <em>Remember</em>
          </h2>
          <p class="mistara-room-experience__text">
            Thoughtfully designed rooms, peaceful surroundings and the natural
            beauty of Ella come together to create a stay that feels calm,
            private and unforgettable.
          </p>
          <RouterLink to="/contact" class="mistara-room-experience__button">
            <span class="mistara-room-experience__button-icon" aria-hidden="true">
              <ArrowRight :size="12" stroke-width="1.5" />
            </span>
            <span>Book Now</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="room-modal">
        <div
          v-if="selectedRoom"
          class="room-modal"
          role="dialog"
          aria-modal="true"
          :aria-label="`${selectedRoom.title} details`"
          @click.self="closeRoom"
        >
          <div class="room-modal__panel">
            <!-- CLOSE -->
            <button class="room-modal__close" type="button" aria-label="Close room details" @click="closeRoom">
              <X :size="22" />
            </button>

            <!-- IMAGE GALLERY -->
            <div class="room-modal__gallery">
              <div class="room-modal__gallery-main">
                <img :src="selectedRoom.gallery[0]" :alt="selectedRoom.title" />
                <span class="room-modal__counter">
                  1 / {{ selectedRoom.gallery.length }}
                </span>
              </div>
              <div class="room-modal__gallery-small">
                <div
                  v-for="(image, index) in selectedRoom.gallery.slice(1, 5)"
                  :key="image"
                  class="room-modal__gallery-tile"
                >
                  <img :src="image" :alt="`${selectedRoom.title} gallery ${index + 2}`" />
                  <button v-if="index === 3" type="button" class="room-modal__photos">
                    <Images :size="17" />
                    <span>Show all photos</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- ROOM CONTENT -->
            <div class="room-modal__body">
              <div class="room-modal__main">
                <p class="room-modal__eyebrow">
                  {{ selectedRoom.offer }}
                </p>
                <h2>{{ selectedRoom.title }}</h2>

                <!-- OPTIONS -->
                <div class="room-modal__options">
                  <div>
                    <span class="room-modal__option-label">
                      BED PLAN
                    </span>
                    <div class="room-modal__option-buttons">
                      <button class="active">Single</button>
                      <button>Double</button>
                      <button>Triple</button>
                    </div>
                  </div>
                  <div>
                    <span class="room-modal__option-label">
                      MEAL PLAN
                    </span>
                    <div class="room-modal__option-buttons">
                      <button class="active">Bed & Breakfast</button>
                      <button>Half Board</button>
                    </div>
                  </div>
                </div>

                <!-- QUICK DETAILS -->
                <div class="room-modal__quick-grid">
                  <div>
                    <span>Guests</span>
                    <strong>{{ selectedRoom.guests }}</strong>
                  </div>
                  <div>
                    <span>Room size</span>
                    <strong>{{ selectedRoom.size }}</strong>
                  </div>
                </div>

                <!-- ABOUT -->
                <div class="room-modal__section">
                  <h3>About this room</h3>
                  <p>
                    {{ selectedRoom.longDescription }}
                  </p>
                </div>

                <!-- ROOM FACILITIES -->
                <div class="room-modal__section">
                  <h3>Room facilities</h3>
                  <div class="room-modal__facilities">
                    <div>
                      <span class="room-modal__facility-icon">
                        <Wifi :size="18" />
                      </span>
                      <span>Free WiFi</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Tv :size="18" />
                      </span>
                      <span>Smart TV</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <BedDouble :size="18" />
                      </span>
                      <span>King Bed</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Coffee :size="18" />
                      </span>
                      <span>Tea / Coffee</span>
                    </div>
                  </div>
                </div>

                <!-- BATHROOM -->
                <div class="room-modal__section">
                  <h3>Bathroom facilities</h3>
                  <div class="room-modal__facilities">
                    <div>
                      <span class="room-modal__facility-icon">
                        <ShowerHead :size="18" />
                      </span>
                      <span>Private bathroom</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Check :size="18" />
                      </span>
                      <span>Hot water</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <ShowerHead :size="18" />
                      </span>
                      <span>Walk-in shower</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Check :size="18" />
                      </span>
                      <span>Fresh towels</span>
                    </div>
                  </div>
                </div>

                <!-- INCLUDED -->
                <div class="room-modal__section">
                  <h3>Included with your stay</h3>
                  <div class="room-modal__facilities">
                    <div>
                      <span class="room-modal__facility-icon">
                        <Coffee :size="18" />
                      </span>
                      <span>Daily breakfast</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Wifi :size="18" />
                      </span>
                      <span>Free WiFi</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Car :size="18" />
                      </span>
                      <span>Free parking</span>
                    </div>
                    <div>
                      <span class="room-modal__facility-icon">
                        <Coffee :size="18" />
                      </span>
                      <span>Tea and coffee</span>
                    </div>
                  </div>
                </div>

                <!-- POLICIES -->
                <div class="room-modal__section">
                  <h3>Room policies</h3>
                  <div class="room-modal__policy-grid">
                    <div>
                      <span>Check-in</span>
                      <strong>From 2:00 PM</strong>
                    </div>
                    <div>
                      <span>Check-out</span>
                      <strong>Until 11:00 AM</strong>
                    </div>
                    <div>
                      <span>Smoking</span>
                      <strong>Non-smoking room</strong>
                    </div>
                  </div>
                </div>

                <div class="room-modal__section">
                  <h3>Cancellation policy</h3>
                  <div class="room-modal__notice">
                    Free cancellation conditions depend on your selected booking
                    dates and room package.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </MainLayout>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
  Wifi,
  Tv,
  BedDouble,
  Coffee,
  ShowerHead,
  Check,
  Car,
} from 'lucide-vue-next'
import MainLayout from '../components/layout/MainLayout.vue'

const baseUrl = import.meta.env.BASE_URL

const selectedRoom = ref(null)

const roomTrack = ref(null)
const activeRoomIndex = ref(0)
const isRoomDragging = ref(false)
const roomDragStartX = ref(0)
const roomDragStartScroll = ref(0)
const roomDragMoved = ref(false)
const roomDotCount = ref(1)

const updateRoomCarouselMetrics = () => {
  const track = roomTrack.value
  const firstCard = track?.children?.[0]
  if (!track || !firstCard) return

  const styles = window.getComputedStyle(track)
  const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0
  const cardWidth = firstCard.getBoundingClientRect().width
  if (!cardWidth) return

  const visibleCards = Math.max(
    1,
    Math.round((track.clientWidth + gap) / (cardWidth + gap))
  )

  roomDotCount.value = Math.max(1, track.children.length - visibleCards + 1)
  activeRoomIndex.value = Math.min(activeRoomIndex.value, roomDotCount.value - 1)
}

const scrollToRoom = (index) => {
  const track = roomTrack.value
  if (!track) return

  const maxDotIndex = Math.max(0, roomDotCount.value - 1)
  const safeIndex = Math.min(Math.max(index, 0), maxDotIndex)
  const card = track.children?.[safeIndex]
  if (!card) return

  const trackRect = track.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()
  const requestedLeft = track.scrollLeft + (cardRect.left - trackRect.left)
  const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth)
  const targetLeft = Math.min(Math.max(requestedLeft, 0), maxScrollLeft)

  activeRoomIndex.value = safeIndex
  track.scrollTo({
    left: targetLeft,
    behavior: 'smooth',
  })
}

const scrollRoomCarousel = (direction) => {
  scrollToRoom(activeRoomIndex.value + direction)
}

const startRoomDrag = (event) => {
  const track = roomTrack.value
  if (!track || event.pointerType === 'touch') return
  if (event.target.closest('button, a')) return

  isRoomDragging.value = true
  roomDragMoved.value = false
  roomDragStartX.value = event.clientX
  roomDragStartScroll.value = track.scrollLeft
  track.setPointerCapture?.(event.pointerId)
}

const moveRoomDrag = (event) => {
  const track = roomTrack.value
  if (!track || !isRoomDragging.value) return

  const distance = event.clientX - roomDragStartX.value
  if (Math.abs(distance) > 4) {
    roomDragMoved.value = true
    event.preventDefault()
  }
  track.scrollLeft = roomDragStartScroll.value - distance
}

const endRoomDrag = (event) => {
  const track = roomTrack.value
  if (!track || !isRoomDragging.value) return

  isRoomDragging.value = false
  if (
    event?.pointerId !== undefined &&
    track.hasPointerCapture?.(event.pointerId)
  ) {
    track.releasePointerCapture(event.pointerId)
  }
}

const handleRoomScroll = () => {
  const track = roomTrack.value
  if (!track) return

  const cards = Array.from(track.children)
  if (!cards.length) return

  const target = track.scrollLeft
  let closestIndex = 0
  let closestDistance = Infinity

  cards.forEach((card, index) => {
    const cardLeft = card.offsetLeft - track.offsetLeft
    const distance = Math.abs(cardLeft - target)
    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  activeRoomIndex.value = Math.min(
    closestIndex,
    Math.max(0, roomDotCount.value - 1)
  )
}

const openRoom = (room) => {
  selectedRoom.value = room
  document.body.style.overflow = 'hidden'
}

const closeRoom = () => {
  selectedRoom.value = null
  document.body.style.overflow = ''
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeRoom()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', updateRoomCarouselMetrics)
  requestAnimationFrame(updateRoomCarouselMetrics)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', updateRoomCarouselMetrics)
  document.body.style.overflow = ''
})

const heroImage = `${baseUrl}Images/Home/bed2.jpeg`
const experienceImageOne = `${baseUrl}Images/Home/outside1.jpeg`
const experienceImageTwo = `${baseUrl}Images/Home/outside2.jpeg`

const momentImages = [
  `${baseUrl}Images/Home/outside3.jpeg`,
  `${baseUrl}Images/Home/outside2.jpeg`,
  `${baseUrl}Images/Facility/food2.jpeg`,
  `${baseUrl}Images/Home/outside1.jpeg`,
  `${baseUrl}Images/Banner/reception.jpeg`,
  `${baseUrl}Images/Facility/food1.jpeg`,
  `${baseUrl}Images/Facility/room3.jpeg`,
  `${baseUrl}Images/Home/amenities/parking.png`,
]

const rooms = [
  {
    id: 1,
    type: 'COMFORT ROOM',
    title: 'Mountain View Room',
    guests: 'Up to 2 guests',
    size: '28 m²',
    availability: 'LIMITED AVAILABILITY',
    offer: 'LIMITED-TIME MOUNTAIN STAY',
    price: 78,
    oldPrice: 98,
    image: `${baseUrl}Images/Home/bed1.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed1.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'A peaceful room with warm interiors, thoughtful details and beautiful views across the Ella landscape.',
    longDescription:
      'A peaceful and comfortable room designed for relaxing stays in Ella, with a comfortable bed, private bathroom, thoughtful amenities and beautiful surroundings.',
  },
  {
    id: 2,
    type: 'PREMIUM ROOM',
    title: 'Deluxe Ella Room',
    guests: 'Up to 2 guests',
    size: '32 m²',
    availability: 'POPULAR CHOICE',
    offer: 'POPULAR DELUXE STAY',
    price: 92,
    oldPrice: 115,
    image: `${baseUrl}Images/Home/bed2.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed2.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'Designed for comfort and privacy with generous space, natural light and a relaxed contemporary atmosphere.',
    longDescription:
      'The Deluxe Ella Room combines generous space, soft natural light and contemporary comfort for guests looking for a peaceful stay surrounded by the beauty of Ella.',
  },
  {
    id: 3,
    type: 'SIGNATURE ROOM',
    title: 'Mistara View Suite',
    guests: 'Up to 2 guests',
    size: '38 m²',
    availability: 'ONLY A FEW LEFT',
    offer: 'SIGNATURE PANORAMIC STAY',
    price: 110,
    oldPrice: 135,
    image: `${baseUrl}Images/Home/bed3.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed3.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'Our most spacious stay, combining elevated comfort, elegant finishes and unforgettable mountain surroundings.',
    longDescription:
      'Our signature room offers more space, refined interiors and a relaxing atmosphere designed around the panoramic beauty and peaceful character of Ella.',
  },
  {
    id: 4,
    type: 'SIGNATURE ROOM',
    title: 'Mistara View Suite',
    guests: 'Up to 2 guests',
    size: '38 m²',
    availability: 'ONLY A FEW LEFT',
    offer: 'SIGNATURE PANORAMIC STAY',
    price: 110,
    oldPrice: 135,
    image: `${baseUrl}Images/Home/bed3.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed3.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'Our most spacious stay, combining elevated comfort, elegant finishes and unforgettable mountain surroundings.',
    longDescription:
      'Our signature room offers more space, refined interiors and a relaxing atmosphere designed around the panoramic beauty and peaceful character of Ella.',
  },
  {
    id: 5,
    type: 'SIGNATURE ROOM',
    title: 'Mistara View Suite',
    guests: 'Up to 2 guests',
    size: '38 m²',
    availability: 'ONLY A FEW LEFT',
    offer: 'SIGNATURE PANORAMIC STAY',
    price: 110,
    oldPrice: 135,
    image: `${baseUrl}Images/Home/bed3.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed3.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'Our most spacious stay, combining elevated comfort, elegant finishes and unforgettable mountain surroundings.',
    longDescription:
      'Our signature room offers more space, refined interiors and a relaxing atmosphere designed around the panoramic beauty and peaceful character of Ella.',
  },
  {
    id: 6,
    type: 'SIGNATURE ROOM',
    title: 'Mistara View Suite',
    guests: 'Up to 2 guests',
    size: '38 m²',
    availability: 'ONLY A FEW LEFT',
    offer: 'SIGNATURE PANORAMIC STAY',
    price: 110,
    oldPrice: 135,
    image: `${baseUrl}Images/Home/bed3.jpeg`,
    gallery: [
      `${baseUrl}Images/Home/bed3.jpeg`,
      `${baseUrl}Images/Banner/amenities.jpeg`,
      `${baseUrl}Images/Banner/roomOut.jpeg`,
      `${baseUrl}Images/Banner/food.jpg`,
      `${baseUrl}Images/Banner/pool.jpeg`,
    ],
    description:
      'Our most spacious stay, combining elevated comfort, elegant finishes and unforgettable mountain surroundings.',
    longDescription:
      'Our signature room offers more space, refined interiors and a relaxing atmosphere designed around the panoramic beauty and peaceful character of Ella.',
  },
]
</script>

<style>
.rooms-full-hero .rooms-full-hero__content .rooms-full-hero__eyebrow {
  margin: 0 0 clamp(0.7rem, 1vh, 1rem) !important;
  color: rgba(255, 255, 255, 0.9) !important;
  font-family: "Marcellus", Georgia, serif !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 1.2 !important;
  letter-spacing: 0 !important;
  text-transform: none !important;
}

/* ROOMS SHOWCASE */
.mistara-rooms-showcase { position: relative; width: 100%; padding: 5% 2%; overflow: hidden; background: #ffffff; font-family: 'HV Muse'; }
.mistara-rooms-showcase__inner { position: relative; z-index: 2; width: 100%; max-width: 1180px; margin: 0 auto; }
.mistara-rooms-showcase__heading { margin-bottom: clamp(2rem, 3vw, 3.2rem); text-align: center; }

.mistara-rooms-showcase__eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: clamp(26px, 2.8vw, 42px);
  color: #5b685f;
  font-family: var(--sans);
  font-size: clamp(10px, .72vw, 12px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.mistara-rooms-showcase__eyebrow-line { width: clamp(54px, 5vw, 82px); height: 1px; flex: 0 0 auto; background: rgba(23, 45, 36, .55); }
.mistara-rooms-showcase__heading p { margin: 0 0 .5rem; color: #e6c9a5; font-size: clamp(.65rem, .7vw, .75rem); letter-spacing: .16em; text-transform: uppercase; }
.mistara-rooms-showcase__heading h2 { margin: 0; color: #1b2d25; font-family: var(--serif); font-size: clamp(36px, 3.35vw, 54px); font-weight: 400; line-height: 1.05; letter-spacing: -.026em; }

.mistara-room-grid {
  --room-gap: clamp(1rem, 1.5vw, 1.5rem);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  gap: var(--room-gap);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 1.5rem 0 2rem;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  perspective: 1400px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-x pan-y;
  cursor: grab;
}

.mistara-room-grid:active,
.mistara-room-grid.is-dragging {
  cursor: grabbing;
}

.mistara-room-grid.is-dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
  user-select: none;
}

.mistara-room-grid::-webkit-scrollbar { display: none; }

.mistara-room-card {
  position: relative;
  /* Exactly 3 complete cards on desktop, including both gaps. */
  flex: 0 0 calc((100% - (2 * var(--room-gap))) / 3);
  min-width: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
  border: 1px solid rgba(24, 33, 28, .08);
  border-radius: 0;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(24, 33, 28, .08), 0 3px 8px rgba(24, 33, 28, .05);
  transform: translateY(0) rotateX(0) rotateY(0);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform .45s cubic-bezier(.2,.7,.2,1), box-shadow .45s ease, border-color .45s ease;
}

.mistara-room-card::before { content: ''; position: absolute; z-index: 5; inset: 0; pointer-events: none; border-radius: inherit; background: linear-gradient(135deg, rgba(255,255,255,.28), transparent 35%, transparent 70%, rgba(24,33,28,.04)); opacity: 0; transition: opacity .4s ease; }
.mistara-room-card:hover { transform: translateY(-10px) rotateX(2deg) rotateY(-2deg); border-color: rgba(183,139,90,.24); box-shadow: 0 32px 70px rgba(24,33,28,.18), 0 10px 25px rgba(24,33,28,.09); }
.mistara-room-card:hover::before { opacity: 1; }

@media (max-width: 900px) {
  .mistara-room-grid { --room-gap: clamp(.9rem, 2vw, 1.2rem); }
  .mistara-room-card {
    flex-basis: calc((100% - var(--room-gap)) / 2);
  }
}

@media (max-width: 620px) {
  .mistara-room-grid { --room-gap: 1rem; padding-inline: 0; }
  .mistara-room-card {
    flex-basis: 100%;
  }
}

.mistara-room-card__image { position: relative; height: clamp(15rem, 21vw, 20rem); overflow: hidden; transform: translateZ(22px); }
.mistara-room-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .65s ease; }
.mistara-room-card:hover .mistara-room-card__image img { transform: scale(1.06); }
.mistara-room-card__availability { position: absolute; top: 1rem; right: 1rem; padding: .4rem .65rem; background: #b78b5a; color: #fff; font-family: 'Marcellus', serif; font-size: .58rem; letter-spacing: .1em; text-transform: uppercase; }
.mistara-room-card__meta { position: absolute; left: 0; right: 0; bottom: 0; display: flex; gap: 1.4rem; padding: .9rem 1.2rem; background: linear-gradient(0deg, rgba(12,20,16,.78), rgba(12,20,16,0)); }
.mistara-room-card__meta span { color: rgba(255,255,255,.85); font-size: .72rem; }
.mistara-room-card__content { position: relative; z-index: 2; padding: clamp(1.3rem, 1.8vw, 1.8rem); background: #ffffff; transform: translateZ(14px); }

.mistara-room-card__eyebrow {
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

.mistara-room-card__content h3 { margin: 0 0 .9rem; color: #1b1a1a; font-family: 'Marcellus', serif; font-size: clamp(1.4rem, 1.7vw, 1.8rem); font-weight: 400; }
.mistara-room-card__description { min-height: 5rem; margin: 0 0 1.3rem; color: rgba(89, 88, 88, 0.7); font-size: clamp(.75rem, .8vw, .85rem); line-height: 1.65; font-family: var(--sans); }
.mistara-room-card__button { font-family: var(--sans); width: 100%; min-height: 44px; display: flex; align-items: center; justify-content: center; gap: .7rem; border: 1px solid rgba(255,255,255,.3); background: transparent; color: #050505; font-size: .72rem; letter-spacing: .1em; text-transform: uppercase; transition: .25s ease; border-color: #e4e4e3; }
.mistara-room-card__button:hover { border-color: #f3efe7; background: #f3efe7; }

/* ROOM CAROUSEL SIDE ARROWS (DESKTOP ONLY) */
.mistara-room-carousel { position: relative; width: 100%; }

.mistara-room-arrow {
  position: absolute;
  top: 50%;
  z-index: 30;
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 1px solid rgba(24, 33, 28, .10);
  border-radius: 50%;
  background: #ffffff;
  color: #1b2d25;
  box-shadow: 0 8px 24px rgba(24, 33, 28, .12);
  cursor: pointer;
  transform: translateY(-50%);
  transition: background .25s ease, color .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .25s ease;
}

.mistara-room-arrow--prev { left: -27px; }
.mistara-room-arrow--next { right: -27px; }

.mistara-room-arrow:hover:not(:disabled) {
  border-color: #17281f;
  background: #17281f;
  color: #ffffff;
  box-shadow: 0 12px 28px rgba(24, 33, 28, .18);
}

.mistara-room-arrow:disabled { opacity: .32; cursor: default; }

@media (max-width: 1220px) {
  .mistara-room-arrow { width: 48px; height: 48px; }
  .mistara-room-arrow--prev { left: 8px; }
  .mistara-room-arrow--next { right: 8px; }
}

@media (max-width: 900px) {
  .mistara-room-arrow { display: none; }
}

.mistara-room-dots {
  width: 100%;
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  margin-top: -1.2rem;
  padding: .35rem 0 .5rem;
  pointer-events: auto;
}

.mistara-room-dots__list { display: flex; align-items: center; gap: .5rem; }

.mistara-room-dots__arrow {
  display: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  flex: 0 0 auto;
  padding: 0;
  border: 1px solid rgba(24, 33, 28, .14);
  border-radius: 50%;
  background: #ffffff;
  color: #1b2d25;
  cursor: pointer;
  transition: background .25s ease, color .25s ease, border-color .25s ease, opacity .25s ease;
}

.mistara-room-dots__arrow:hover:not(:disabled) {
  border-color: #17281f;
  background: #17281f;
  color: #ffffff;
}

.mistara-room-dots__arrow:disabled { opacity: .32; cursor: default; }

.mistara-room-dot { width: 7px; height: 7px; position: relative; z-index: 21; flex: 0 0 auto; padding: 0; border: 0; border-radius: 50%; background: rgba(24,33,28,.22); cursor: pointer; pointer-events: auto; touch-action: manipulation; transition: width .3s ease, background .3s ease, transform .3s ease; }
.mistara-room-dot:hover { background: rgba(24,33,28,.45); }
.mistara-room-dot.active { width: 28px; height: 7px; border-radius: 100px; background: #0f4a38; }

/* Tablet + mobile: show inline arrows next to the dots */
@media (max-width: 900px) {
  .mistara-room-dots__arrow { display: flex; }
}

@media (max-width: 620px) {
  .mistara-room-dots { gap: .4rem; margin-top: -.8rem; padding-bottom: .3rem; }
  .mistara-room-dots__list { gap: .4rem; }
  .mistara-room-dots__arrow { width: 26px; height: 26px; }
  .mistara-room-dot { width: 6px; height: 6px; }
  .mistara-room-dot.active { width: 24px; height: 6px; }
}

/* MOMENTS OF STILLNESS */
.room-moments-section { width: 100%; padding: 6vh 0; overflow: hidden; background: #f4e8c9; font-family: 'Marcellus', serif; }
.room-moments-heading { padding: 0 3vw; margin-bottom: clamp(1.8rem, 3vw, 3rem); text-align: center; }
.room-moments-heading h2 { margin: 0; color: #1b2d25; font-family: var(--serif); font-size: clamp(36px, 3.35vw, 54px); font-weight: 400; line-height: 1.05; letter-spacing: -.026em; }
.room-moments-track { width: 100%; display: flex; gap: clamp(.7rem, 1vw, 1rem); overflow-x: auto; padding: 0 3vw 1rem; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
.room-moments-track::-webkit-scrollbar { display: none; }
.room-moments-card { position: relative; flex: 0 0 clamp(190px, 18vw, 290px); height: clamp(300px, 31vw, 470px); overflow: hidden; scroll-snap-align: start; background: #ece9e2; }
.room-moments-card:nth-child(2n) { flex-basis: clamp(210px, 20vw, 320px); }
.room-moments-card img { width: 100%; height: 100%; object-fit: cover; transition: transform .7s ease, filter .7s ease; }
.room-moments-card:hover img { transform: scale(1.045); filter: brightness(.92); }

@media (max-width: 760px) {
  .room-moments-section { padding: 5vh 0; }
  .room-moments-heading { padding: 0 3vw; }
  .room-moments-heading h2 { font-size: clamp(2rem, 9vw, 3rem); }
  .room-moments-track { padding-inline: 3vw; }
  .room-moments-card, .room-moments-card:nth-child(2n) { flex: 0 0 58vw; height: 68vw; min-height: 280px; }
}

/* EXPERIENCE SECTION */
.mistara-room-experience { width: 100%; padding: 5% 2%; background: #f7f7e9; color: #17281f; font-family: 'Inter', Arial, sans-serif; }
.mistara-room-experience__inner { width: 100%; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(3rem, 6vw, 7rem); align-items: center; }
.mistara-room-experience__images { position: relative; min-height: clamp(32rem, 46vw, 43rem); }
.mistara-room-experience__image { position: absolute; overflow: hidden; }
.mistara-room-experience__image img { width: 100%; height: 100%; object-fit: cover; }
.mistara-room-experience__image--left { left: 0; bottom: 0; width: 48%; height: 78%; }
.mistara-room-experience__image--right { right: 0; top: 0; width: 51%; height: 82%; }
.mistara-room-experience__content { width: 100%; max-width: 38rem; }

.mistara-room-experience__eyebrow {
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

.mistara-room-experience__eyebrow-line {
  width: clamp(44px, 4vw, 68px);
  height: 1px;
  background: rgba(27, 57, 46, .45);
}

.mistara-room-experience__content h2 {
  margin: 0;
  color: #1b2d25;
  font-family: var(--serif);
  font-size: clamp(36px, 3.35vw, 54px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.026em;
}

.mistara-room-experience__content h2 em {
  display: block;
  font-family: inherit;
  font-weight: inherit;
  font-style: italic;
}

.mistara-room-experience__text {
  width: min(100%, 590px);
  margin: clamp(30px, 2.6vw, 42px) 0 0;
  color: #546159;
  font-family: var(--sans);
  font-size: clamp(13px, .92vw, 15px);
  font-weight: 300;
  line-height: 1.72;
  letter-spacing: -.012em;
}

.mistara-room-experience__button {
  width: max-content;
  display: inline-flex;
  align-items: center;
  gap: 22px;
  margin-top: clamp(34px, 3vw, 50px);
  color: #17281f;
  font-family: var(--serif);
  font-size: clamp(17px, 1.4vw, 22px);
  font-weight: 400;
  line-height: 1;
}

.mistara-room-experience__button-icon {
  width: clamp(48px, 3.5vw, 58px);
  height: clamp(48px, 3.5vw, 58px);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border: 1px solid rgba(23, 40, 31, .45);
  border-radius: 50%;
  transition: background .3s ease, color .3s ease, border-color .3s ease, transform .3s ease;
}

.mistara-room-experience__button:hover .mistara-room-experience__button-icon {
  border-color: var(--forest-deep);
  background: var(--forest-deep);
  color: #ffffff;
  transform: translateX(3px);
}

/* ROOM DETAIL MODAL */
.room-modal { position: fixed; z-index: 9999; inset: 0; overflow-y: auto; padding: clamp(1rem, 3vw, 3rem); background: rgba(20,28,34,.76); backdrop-filter: blur(7px); -webkit-backdrop-filter: blur(7px); }
.room-modal__panel { position: relative; width: min(1180px, 100%); margin: 0 auto; overflow: hidden; border-radius: clamp(1rem, 1.5vw, 1.5rem); background: #fff; box-shadow: 0 30px 80px rgba(0,0,0,.25); }
.room-modal__close { position: absolute; z-index: 20; top: 1.2rem; right: 1.2rem; width: 44px; height: 44px; display: grid; place-items: center; padding: 0; border: 0; border-radius: 50%; background: #fff; color: #183b2f; box-shadow: 0 5px 16px rgba(0,0,0,.12); }
.room-modal__gallery { position: relative; display: grid; grid-template-columns: 1.35fr 1fr; grid-template-rows: repeat(2, clamp(190px, 19vw, 270px)); gap: 8px; padding: 12px; background: #edf0ed; }
.room-modal__gallery-main { position: relative; grid-column: 1 / 2; grid-row: 1 / 3; overflow: hidden; }
.room-modal__gallery-main img { width: 100%; height: 100%; object-fit: cover; }
.room-modal__gallery-small { grid-column: 2 / 3; grid-row: 1 / 3; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); gap: 8px; }
.room-modal__gallery-small img { width: 100%; height: 100%; min-width: 0; min-height: 0; object-fit: cover; }
.room-modal__counter { position: absolute; left: 1rem; bottom: 1rem; padding: .5rem .8rem; border-radius: 100px; background: rgba(24,33,28,.78); color: #fff; font-size: .72rem; }
.room-modal__photos { position: absolute; z-index: 5; right: 2rem; bottom: 2rem; display: flex; align-items: center; gap: .55rem; min-height: 42px; padding: 0 1rem; border: 0; border-radius: .45rem; background: rgba(24,33,28,.88); color: #fff; font-size: .72rem; }
.room-modal__body { display: grid; grid-template-columns: 1fr; gap: clamp(2rem, 4vw, 4rem); padding: clamp(2rem, 4vw, 3.5rem); }
.room-modal__main { min-width: 0; }

.room-modal__eyebrow {
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

.room-modal__main > h2 {
  margin: 0;
  color: #1b2d25;
  font-family: var(--serif);
  font-size: clamp(36px, 3.35vw, 54px);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.026em;
}

.room-modal__options { display: flex; flex-wrap: wrap; gap: 2rem; margin-bottom: 1.5rem; }
.room-modal__option-label { display: block; margin-bottom: .55rem; color: #7b847f; font-size: .65rem; letter-spacing: .08em; }
.room-modal__option-buttons { display: flex; flex-wrap: wrap; gap: .5rem; }
.room-modal__option-buttons button { min-height: 38px; padding: 0 1rem; border: 1px solid #d9dfdc; border-radius: .5rem; background: #fff; color: #4f5b55; font-size: .72rem; }
.room-modal__option-buttons button.active { border-color: #1d3028; background: #1d3028; color: #fff; }
.room-modal__quick-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .75rem; margin-bottom: 2rem; }
.room-modal__quick-grid > div { padding: 1rem; border-radius: .65rem; background: #f4f6f4; }
.room-modal__quick-grid span, .room-modal__policy-grid span { display: block; color: #8a928e; font-size: .66rem; }
.room-modal__quick-grid strong, .room-modal__policy-grid strong { display: block; margin-top: .2rem; color: #18211c; font-size: .8rem; }
.room-modal__section { padding: 1.7rem 0; border-top: 1px solid #e5e9e7; }
.room-modal__section h3 { margin: 0 0 1rem; color: #18211c; font-family: 'Marcellus', serif; font-size: 1.25rem; font-weight: 400; }
.room-modal__section p { margin: 0; color: #69736e; font-size: .84rem; line-height: 1.7; }
.room-modal__facilities { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
.room-modal__facilities > div { display: flex; align-items: center; gap: .65rem; color: #4f5b55; font-size: .76rem; }
.room-modal__facility-icon { width: 34px; height: 34px; flex: 0 0 34px; display: grid; place-items: center; border-radius: .5rem; background: #eef4ef; color: #1d3028; }
.room-modal__policy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }
.room-modal__policy-grid > div { padding: 1rem; border-radius: .65rem; background: #f4f6f4; }
.room-modal__notice { padding: 1rem 1.2rem; border: 1px solid rgba(232,103,45,.25); border-radius: .65rem; background: rgba(232,103,45,.07); color: #9a4b25; font-size: .78rem; }
.room-modal-enter-active, .room-modal-leave-active { transition: opacity .25s ease; }
.room-modal-enter-active .room-modal__panel, .room-modal-leave-active .room-modal__panel { transition: transform .3s ease, opacity .3s ease; }
.room-modal-enter-from, .room-modal-leave-to { opacity: 0; }
.room-modal-enter-from .room-modal__panel, .room-modal-leave-to .room-modal__panel { opacity: 0; transform: translateY(25px) scale(.98); }

@media (max-width: 900px) {
  .room-modal__body { grid-template-columns: 1fr; }
  .room-modal__facilities { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 650px) {
  .room-modal { padding: .5rem; }
  .room-modal__gallery { grid-template-columns: 1fr; grid-template-rows: 260px; }
  .room-modal__gallery-main { grid-row: auto; }
  .room-modal__gallery-small { display: none; }
  .room-modal__photos { right: 1.2rem; bottom: 1.2rem; }
  .room-modal__body { padding: 1.4rem; }
  .room-modal__options { flex-direction: column; gap: 1.2rem; }
  .room-modal__quick-grid { grid-template-columns: 1fr; }
  .room-modal__facilities { grid-template-columns: 1fr; }
  .room-modal__policy-grid { grid-template-columns: 1fr; }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .mistara-room-experience__inner { grid-template-columns: 1fr; gap: clamp(3rem, 7vw, 5rem); }
  .mistara-room-experience__images { min-height: 38rem; }
  .mistara-room-experience__content { max-width: 46rem; }
}

@media (max-width: 620px) {
  .mistara-rooms-showcase { padding: 5% 2%; }
  .mistara-room-card__image { height: 17rem; }
  .mistara-room-experience { padding: 10vw 5vw; }
  .mistara-room-experience__images { min-height: 29rem; }
  .mistara-room-experience__image--left { width: 54%; height: 75%; }
  .mistara-room-experience__image--right { width: 52%; height: 76%; }
  .mistara-room-experience__eyebrow { gap: 14px; margin-bottom: 8vw; font-size: 11px; }
  .mistara-room-experience__eyebrow-line { width: 46px; }
  .mistara-room-experience__content h2 { font-size: 36px; line-height: 1.1; }
  .mistara-room-experience__text { margin-top: 7vw; font-size: 13px; line-height: 1.72; }
  .mistara-room-experience__button { margin-top: 8vw; font-size: 18px; }
  .mistara-room-experience__button-icon { width: 48px; height: 48px; }
}

@media (max-width: 620px) {
  .mistara-rooms-showcase__eyebrow { gap: 14px; margin-bottom: 1.5rem; font-size: 11px; }
  .mistara-rooms-showcase__eyebrow-line { width: 46px; }
}

.rooms-full-hero { width: 100%; padding: 0; background: #ffffff; font-family: 'Marcellus', serif; }

.rooms-full-hero__image {
  position: relative;
  width: 100%;
  min-height: clamp(32rem, 72vh, 46rem);
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.rooms-full-hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(24,33,28,.03) 0%, rgba(24,33,28,.08) 45%, rgba(24,33,28,.65) 100%);
}

.rooms-full-hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: clamp(2.5rem, 5vh, 4rem) 3vw;
  text-align: center;
  color: #ffffff;
}

.rooms-full-hero__eyebrow {
  margin: 0 0 clamp(.7rem, 1vh, 1rem);
  color: rgba(255, 255, 255, .9);
  font-family: 'Marcellus', serif;
  font-size: clamp(11px, .82vw, 13px);
  font-weight: 400;
}

.rooms-full-hero__title {
  max-width: 72rem;
  margin: 0 auto;
  color: #ffffff;
  font-family: 'Marcellus', serif;
  font-size: clamp(2.5rem, 4.3vw, 4.8rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -.025em;
}

@media (max-width: 620px) {
  .rooms-full-hero__image { min-height: 68vh; }
  .rooms-full-hero__content { padding: 2.5rem 3vw; }
  .rooms-full-hero__title { font-size: clamp(2.4rem, 10vw, 3.5rem); }
}
</style>