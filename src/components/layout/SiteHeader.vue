<template>
  <header
    class="site-header"
    :class="{
      'is-scrolled': scrolled,
      'menu-open': menuOpen,
    }"
  >
    <!-- =====================================================
         EXISTING HEADER
    ====================================================== -->
    <div class="header-frame">
      <div class="header-left">
        <button
          ref="menuButtonRef"
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="mistara-full-menu"
          :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
          @click="toggleMenu"
        >
          <Menu
            v-if="!menuOpen"
            :size="22"
            :stroke-width="1.4"
          />

          <X
            v-else
            :size="22"
            :stroke-width="1.4"
          />
        </button>

        <nav
          class="desktop-nav"
          aria-label="Primary navigation"
        >
          <RouterLink to="/rooms">
            Stay
          </RouterLink>

          <RouterLink to="/facilities">
            Facilities
          </RouterLink>

          <RouterLink to="/gallery">
            Gallery
          </RouterLink>
        </nav>
      </div>

      <RouterLink
        to="/"
        class="brand"
        aria-label="Mistara Ella home"
        @click="closeMenu(false)"
      >
        <img
          :src="headerLogo"
          alt="Mistara Ella"
        />
      </RouterLink>

      <div class="header-actions">
        <span class="language-label">
          EN

          <ChevronDown
            :size="12"
            :stroke-width="1.5"
          />
        </span>

        <RouterLink
          class="header-book"
          to="/contact"
        >
          Book your stay
        </RouterLink>

        <RouterLink
          class="header-arrow"
          to="/contact"
          aria-label="Book your stay"
        >
          <ArrowUpRight
            :size="20"
            :stroke-width="1.5"
          />
        </RouterLink>
      </div>
    </div>

    <!-- =====================================================
         PREMIUM FULL-SCREEN MENU
    ====================================================== -->
    <Transition name="mistara-menu">
      <div
        v-if="menuOpen"
        id="mistara-full-menu"
        class="mistara-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <!-- LEFT: CINEMATIC IMAGE PREVIEW -->
        <section
          class="mistara-menu__visual"
          aria-hidden="true"
        >
          <div class="mistara-menu__images">
            <div
              v-for="(item, index) in menuItems"
              :key="item.image"
              class="mistara-menu__image"
              :class="{
                'is-active': previewIndex === index,
              }"
            >
              <img
                :src="item.image"
                :alt="item.imageAlt"
                :loading="index === initialPreviewIndex ? 'eager' : 'lazy'"
                draggable="false"
              />
            </div>
          </div>

          <div class="mistara-menu__visual-shade"></div>

          <Transition
            name="mistara-preview"
            mode="out-in"
          >
            <div
              :key="activePreview.to"
              class="mistara-menu__visual-copy"
            >
              <span class="mistara-menu__visual-kicker">
                {{ activePreview.kicker }}
              </span>

              <h2>
                {{ activePreview.visualTitle }}
              </h2>

              <p>
                {{ activePreview.description }}
              </p>
            </div>
          </Transition>

          <div class="mistara-menu__visual-count">
            <span>
              {{ String(previewIndex + 1).padStart(2, '0') }}
            </span>

            <i></i>

            <span>
              {{ String(menuItems.length).padStart(2, '0') }}
            </span>
          </div>
        </section>

        <!-- RIGHT: NAVIGATION -->
        <section
          ref="menuPanelRef"
          class="mistara-menu__panel"
        >

          <nav
            class="mistara-menu__nav"
            aria-label="Full site navigation"
          >
            <RouterLink
              v-for="(item, index) in menuItems"
              :key="item.to"
              :to="item.to"
              class="mistara-menu__nav-link"
              @mouseenter="setPreview(index)"
              @focus="setPreview(index)"
              @click="closeMenu(false)"
            >
              <span class="mistara-menu__nav-title">
                {{ item.label }}
              </span>
            </RouterLink>
          </nav>

          <div class="mistara-menu__panel-bottom">
            <div class="mistara-menu__note">
              <span>Stay somewhere quieter.</span>

              <p>
                Mountain air, thoughtful spaces and the slower
                rhythm of Ella.
              </p>
            </div>

            <RouterLink
              class="mistara-menu__book"
              to="/contact"
              @click="closeMenu(false)"
            >
              <span>
                Book your stay
              </span>

              <span
                class="mistara-menu__book-icon"
                aria-hidden="true"
              >
                <ArrowUpRight
                  :size="20"
                  :stroke-width="1.35"
                />
              </span>
            </RouterLink>
          </div>
        </section>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'

import { useRoute } from 'vue-router'

import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from 'lucide-vue-next'

import { navItems } from '../../data/site'

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL

const scrolled = ref(false)
const menuOpen = ref(false)
const previewIndex = ref(0)

const menuButtonRef = ref(null)
const menuPanelRef = ref(null)

let previousHtmlOverflow = ''
let previousBodyOverflow = ''

const menuDetails = {
  '/': {
    image: `${baseUrl}Images/Home/hero3.jpeg`,
    imageAlt: 'Mistara Ella lounge opening to the greenery of Ella',
    kicker: 'Welcome to Mistara',
    visualTitle: 'A quieter way to experience Ella.',
    description:
      'Mountain air, warm hospitality and thoughtful spaces designed for slower stays.',
  },

  '/rooms': {
    image: `${baseUrl}Images/Home/bed2.jpeg`,
    imageAlt: 'Premium room at Mistara Ella',
    kicker: 'Stay',
    visualTitle: 'Wake gently above the hills.',
    description:
      'Restful rooms shaped by warm materials, privacy and the mountain landscape beyond.',
  },

  '/facilities': {
    image: `${baseUrl}Images/Facility/wellness3.jpeg`,
    imageAlt: 'Outdoor relaxation space at Mistara Ella',
    kicker: 'Slow down',
    visualTitle: 'Spaces made for unhurried moments.',
    description:
      'From relaxed mornings to quiet afternoons, every shared space is designed around ease.',
  },

  '/gallery': {
    image: `${baseUrl}Images/Gallery/hotelpool.png`,
    imageAlt: 'Mistara Ella gallery view',
    kicker: 'A glimpse of Mistara',
    visualTitle: 'See the moments between the moments.',
    description:
      'Light, texture, landscape and the little details that give Mistara Ella its character.',
  },

  '/packages': {
    image: `${baseUrl}Images/Home/outside2.jpeg`,
    imageAlt: 'Mistara Ella surrounded by the hill country',
    kicker: 'Plan your escape',
    visualTitle: 'A little more time in the hills.',
    description:
      'Discover stay experiences created for quiet escapes, longer weekends and memorable occasions.',
  },

  '/contact': {
    image: `${baseUrl}Images/Banner/reception.jpeg`,
    imageAlt: 'The welcoming reception lounge at Mistara Ella',
    kicker: 'We are here',
    visualTitle: 'Your stay can start with a conversation.',
    description:
      'Ask about availability, your visit to Ella or anything that would make your stay more comfortable.',
  },
}

const menuItems = computed(() =>
  navItems.map((item) => ({
    ...item,
    ...menuDetails[item.to],
  })),
)

const initialPreviewIndex = computed(() => {
  const index = menuItems.value.findIndex(
    (item) => item.to === route.path,
  )

  return index >= 0
    ? index
    : 0
})

const activePreview = computed(
  () =>
    menuItems.value[previewIndex.value] ??
    menuItems.value[0],
)

const headerLogo = computed(() => {
  if (menuOpen.value || !scrolled.value) {
    return `${baseUrl}Images/mistara_white.png`
  }

  return `${baseUrl}Images/mistara_logo.png`
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 36
}

const setPreview = (index) => {
  previewIndex.value = index
}

const openMenu = async () => {
  previewIndex.value = initialPreviewIndex.value
  menuOpen.value = true

  await nextTick()

  const currentLink =
    menuPanelRef.value?.querySelector(
      '.mistara-menu__nav-link.is-current',
    )

  const firstLink =
    menuPanelRef.value?.querySelector(
      '.mistara-menu__nav-link',
    )

  ;(currentLink || firstLink)?.focus()
}

const closeMenu = (restoreFocus = true) => {
  if (!menuOpen.value) return

  menuOpen.value = false

  if (restoreFocus) {
    nextTick(() => {
      menuButtonRef.value?.focus()
    })
  }
}

const toggleMenu = () => {
  if (menuOpen.value) {
    closeMenu(false)
    return
  }

  openMenu()
}

const handleKeydown = (event) => {
  if (!menuOpen.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeMenu(true)
  }
}

watch(menuOpen, (isOpen) => {
  if (isOpen) {
    previousHtmlOverflow =
      document.documentElement.style.overflow

    previousBodyOverflow =
      document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    return
  }

  document.documentElement.style.overflow =
    previousHtmlOverflow

  document.body.style.overflow =
    previousBodyOverflow
})

watch(
  () => route.fullPath,
  () => {
    if (menuOpen.value) {
      closeMenu(false)
    }
  },
)

onMounted(() => {
  handleScroll()

  window.addEventListener(
    'scroll',
    handleScroll,
    { passive: true },
  )

  window.addEventListener(
    'keydown',
    handleKeydown,
  )
})

onBeforeUnmount(() => {
  window.removeEventListener(
    'scroll',
    handleScroll,
  )

  window.removeEventListener(
    'keydown',
    handleKeydown,
  )

  document.documentElement.style.overflow =
    previousHtmlOverflow

  document.body.style.overflow =
    previousBodyOverflow
})
</script>

<style scoped>
/* =========================================================
   FULL-SCREEN MENU — MISTARA ELLA
   Only styles the opened menu.
   Existing global header styling stays untouched.
========================================================= */

.header-frame {
  position: relative;
  z-index: 4;
}


/* Keep the existing header, but let it float cleanly over
   the cinematic menu while the menu is open. */
.site-header.menu-open {
  background: transparent !important;
  box-shadow: none !important;
  color: #ffffff !important;

  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
}

.site-header.menu-open .desktop-nav,
.site-header.menu-open .header-actions {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.site-header.menu-open .menu-toggle {
  border-color: rgba(255, 255, 255, .38) !important;
  background: rgba(7, 29, 23, .18) !important;
  color: #ffffff !important;

  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}

.site-header.menu-open .menu-toggle:hover {
  border-color: rgba(255, 255, 255, .72) !important;
  background: rgba(255, 255, 255, .12) !important;
}


/* =========================================================
   OVERLAY SHELL
========================================================= */

.mistara-menu {
  position: fixed;
  z-index: 2;
  inset: 0;

  width: 100%;
  height: 100dvh;
  min-height: 620px;

  display: grid;
  grid-template-columns:
    minmax(0, 56fr)
    minmax(430px, 44fr);

  overflow: hidden;

  background: #102f27;
  color: #f6f1e8;

  isolation: isolate;
}


/* =========================================================
   LEFT — CINEMATIC PREVIEW
========================================================= */

.mistara-menu__visual {
  position: relative;

  min-width: 0;
  min-height: 0;

  overflow: hidden;

  background: #182f28;
}

.mistara-menu__images,
.mistara-menu__image {
  position: absolute;
  inset: 0;
}

.mistara-menu__image {
  opacity: 0;

  transform: scale(1.055);

  transition:
    opacity .72s ease,
    transform 1.35s cubic-bezier(.16, 1, .3, 1);
}

.mistara-menu__image.is-active {
  z-index: 1;

  opacity: 1;

  transform: scale(1);
}

.mistara-menu__image img {
  width: 100%;
  height: 100%;
  max-width: none;

  display: block;

  object-fit: cover;
  object-position: center;

  user-select: none;
}

.mistara-menu__visual-shade {
  position: absolute;
  z-index: 2;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(7, 24, 19, .18) 0%,
      rgba(7, 24, 19, .02) 54%,
      rgba(7, 24, 19, .28) 100%
    ),
    linear-gradient(
      0deg,
      rgba(5, 20, 16, .78) 0%,
      rgba(5, 20, 16, .22) 43%,
      rgba(5, 20, 16, .12) 100%
    );
}


.mistara-menu__visual-copy {
  position: absolute;
  z-index: 3;

  left: 5vw;
  bottom: clamp(62px, 8vh, 106px);

  width: min(560px, 72%);

  color: #ffffff;
}

.mistara-menu__visual-kicker {
  display: block;

  margin-bottom: clamp(16px, 1.6vw, 26px);

  color: rgba(255, 255, 255, .66);

  font-family: var(--sans);
  font-size: clamp(9px, .64vw, 11px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.mistara-menu__visual-copy h2 {
  max-width: 530px;

  margin: 0;

  color: #ffffff;

  font-family: var(--serif);
  font-size: clamp(38px, 3.3vw, 60px);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -.028em;
}

.mistara-menu__visual-copy p {
  max-width: 420px;

  margin: clamp(18px, 1.6vw, 26px) 0 0;

  color: rgba(255, 255, 255, .67);

  font-family: var(--sans);
  font-size: clamp(12px, .82vw, 14px);
  font-weight: 300;
  line-height: 1.7;
}

.mistara-menu__visual-count {
  position: absolute;
  z-index: 3;

  right: 4vw;
  bottom: clamp(66px, 8vh, 108px);

  display: flex;
  align-items: center;
  gap: 10px;

  color: rgba(255, 255, 255, .62);

  font-family: var(--sans);
  font-size: 9px;
  line-height: 1;
  letter-spacing: .1em;
}

.mistara-menu__visual-count i {
  width: clamp(34px, 3vw, 54px);
  height: 1px;

  background: rgba(255, 255, 255, .42);
}


/* =========================================================
   RIGHT — EDITORIAL NAVIGATION PANEL
========================================================= */

.mistara-menu__panel {
  position: relative;

  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-rows:
    1fr
    auto;

  padding:
    clamp(118px, 11vh, 150px)
    clamp(42px, 4.2vw, 78px)
    clamp(38px, 4vh, 58px);

  overflow-y: auto;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(155, 182, 159, .10),
      transparent 34%
    ),
    linear-gradient(
      145deg,
      #164438 0%,
      #123a31 52%,
      #0f332b 100%
    );

  color: #f5f0e6;
}

.mistara-menu__panel::before {
  content: '';

  position: absolute;
  inset: 0;

  pointer-events: none;

  opacity: .17;

  background-image:
    radial-gradient(
      rgba(255, 255, 255, .20) .45px,
      transparent .55px
    );

  background-size: 6px 6px;

  mix-blend-mode: soft-light;
}

.mistara-menu__nav,
.mistara-menu__panel-bottom {
  position: relative;
  z-index: 1;
}








/* Navigation — large editorial page names */
.mistara-menu__nav {
  position: relative;
  z-index: 1;

  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: clamp(8px, 1.2vh, 16px);

  width: 100%;
  margin: 0;
  padding: clamp(28px, 4.5vh, 58px) 0;
}

.mistara-menu__nav-link {
  position: relative;

  width: min(100%, 660px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding:
    clamp(16px, 1.8vh, 24px)
    clamp(10px, 1vw, 16px);

  border: 0;
  border-bottom: 1px solid rgba(245, 240, 230, .13);

  color: rgba(245, 240, 230, .94);

  text-align: center;

  transition:
    color .35s ease,
    transform .5s cubic-bezier(.16, 1, .3, 1),
    opacity .35s ease;
}

.mistara-menu__nav-link:first-child {
  border-top: 1px solid rgba(245, 240, 230, .13);
}

.mistara-menu__nav-title {
  display: block;

  font-family: var(--serif);
  font-size: clamp(46px, 4.2vw, 76px);
  font-weight: 400;
  line-height: .98;
  letter-spacing: -.035em;

  transition:
    color .35s ease,
    transform .5s cubic-bezier(.16, 1, .3, 1),
    letter-spacing .5s cubic-bezier(.16, 1, .3, 1);
}

.mistara-menu__nav-link:hover,
.mistara-menu__nav-link:focus-visible {
  color: #d8c59b;

  border-color: rgba(216, 197, 155, .34);

  outline: none;

  transform: translateX(5px);
}

/* Keep non-hovered links quiet while exploring the menu. */
@media (hover: hover) and (pointer: fine) {
  .mistara-menu__nav:hover
  .mistara-menu__nav-link:not(:hover) {
    opacity: .48;
  }
}


/* Bottom area */
.mistara-menu__panel-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;

  padding-top: clamp(24px, 2.8vh, 40px);

  border-top: 1px solid rgba(245, 240, 230, .16);
}

.mistara-menu__note {
  max-width: 230px;
}

.mistara-menu__note span {
  display: block;

  margin-bottom: 7px;

  color: rgba(245, 240, 230, .78);

  font-family: var(--serif);
  font-size: 15px;
  line-height: 1.2;
}

.mistara-menu__note p {
  margin: 0;

  color: rgba(245, 240, 230, .40);

  font-family: var(--sans);
  font-size: 10px;
  font-weight: 300;
  line-height: 1.55;
}

.mistara-menu__book {
  display: inline-flex;
  align-items: center;
  gap: 14px;

  color: #f5f0e6;

  font-family: var(--serif);
  font-size: clamp(16px, 1.1vw, 19px);
  line-height: 1;
}

.mistara-menu__book-icon {
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #c8b58c;
  color: #123a31;

  transition:
    transform .4s cubic-bezier(.16, 1, .3, 1),
    background .3s ease;
}

.mistara-menu__book:hover
.mistara-menu__book-icon {
  transform:
    translate(2px, -2px)
    rotate(6deg);

  background: #efe2c6;
}


/* =========================================================
   OPEN / CLOSE MOTION
========================================================= */

.mistara-menu-enter-active {
  transition: opacity .58s ease;
}

.mistara-menu-leave-active {
  transition: opacity .42s ease;
}

.mistara-menu-enter-active
.mistara-menu__visual,
.mistara-menu-leave-active
.mistara-menu__visual {
  transition:
    clip-path .92s cubic-bezier(.16, 1, .3, 1),
    transform .92s cubic-bezier(.16, 1, .3, 1);
}

.mistara-menu-enter-active
.mistara-menu__panel,
.mistara-menu-leave-active
.mistara-menu__panel {
  transition:
    transform .82s cubic-bezier(.16, 1, .3, 1);
}

.mistara-menu-enter-active
.mistara-menu__nav-link {
  transition:
    opacity .65s ease,
    transform .85s cubic-bezier(.16, 1, .3, 1),
    color .35s ease,
    border-color .35s ease;
}

.mistara-menu-enter-from {
  opacity: 0;
}

.mistara-menu-enter-from
.mistara-menu__visual {
  clip-path: inset(0 72% 0 0);

  transform: scale(1.035);
}

.mistara-menu-enter-from
.mistara-menu__panel {
  transform: translateX(100%);
}

.mistara-menu-enter-from
.mistara-menu__nav-link {
  opacity: 0;

  transform: translateY(28px);
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(1) {
  transition-delay: .14s;
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(2) {
  transition-delay: .19s;
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(3) {
  transition-delay: .24s;
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(4) {
  transition-delay: .29s;
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(5) {
  transition-delay: .34s;
}

.mistara-menu-enter-active
.mistara-menu__nav-link:nth-child(6) {
  transition-delay: .39s;
}

.mistara-menu-leave-to {
  opacity: 0;
}

.mistara-menu-leave-to
.mistara-menu__visual {
  clip-path: inset(0 0 0 18%);

  transform: scale(1.018);
}

.mistara-menu-leave-to
.mistara-menu__panel {
  transform: translateX(18%);
}


/* Preview text crossfade when hovering nav items */
.mistara-preview-enter-active,
.mistara-preview-leave-active {
  transition:
    opacity .28s ease,
    transform .48s cubic-bezier(.16, 1, .3, 1);
}

.mistara-preview-enter-from {
  opacity: 0;
  transform: translateY(16px);
}

.mistara-preview-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}


/* =========================================================
   LARGE DESKTOP
========================================================= */

@media (min-width: 1700px) {
  .mistara-menu {
    grid-template-columns:
      minmax(0, 58fr)
      minmax(620px, 42fr);
  }

  .mistara-menu__panel {
    padding-left: 72px;
    padding-right: 72px;
  }

  .mistara-menu__nav-title {
    font-size: clamp(58px, 4.1vw, 76px);
  }
}


/* =========================================================
   TABLET / SMALL LAPTOP
========================================================= */

@media (max-width: 1100px) {
  .mistara-menu {
    grid-template-columns:
      minmax(0, 48fr)
      minmax(480px, 52fr);
  }

  .mistara-menu__visual-copy {
    width: min(450px, 78%);
  }

  .mistara-menu__visual-count {
    right: 3vw;
  }

  .mistara-menu__panel {
    padding-left: 42px;
    padding-right: 42px;
  }

  .mistara-menu__nav-title {
    font-size: clamp(28px, 3.4vw, 38px);
  }
}


/* =========================================================
   MOBILE / TABLET PORTRAIT
========================================================= */

@media (max-width: 900px) {
  .site-header.menu-open,
  .site-header.menu-open.is-scrolled {
    height: 72px;
  }

  .site-header.menu-open .header-frame {
    width: calc(100% - 28px);
  }

  .mistara-menu {
    min-height: 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:
      minmax(210px, 31svh)
      minmax(0, 1fr);

    overflow-y: auto;
  }

  .mistara-menu__visual {
    min-height: 210px;
  }

  .mistara-menu__visual-copy {
    left: 20px;
    bottom: 24px;

    width: min(520px, calc(100% - 110px));
  }

  .mistara-menu__visual-kicker {
    margin-bottom: 8px;

    font-size: 8px;
  }

  .mistara-menu__visual-copy h2 {
    max-width: 480px;

    font-size: clamp(26px, 5vw, 38px);
  }

  .mistara-menu__visual-copy p {
    display: none;
  }

  .mistara-menu__visual-count {
    right: 20px;
    bottom: 26px;
  }

  .mistara-menu__panel {
    min-height: max-content;

    display: block;

    padding:
      26px
      24px
      30px;

    overflow: visible;
  }

  .mistara-menu__nav {
    margin: 14px 0 24px;
  }

  .mistara-menu__nav-link {
    grid-template-columns:
      28px
      minmax(0, 1fr)
      auto
      38px;

    gap: 10px;

    min-height: 58px;
  }

  .mistara-menu__nav-title {
    font-size: clamp(26px, 5.8vw, 36px);
  }

  .mistara-menu__panel-bottom {
    padding-top: 22px;
  }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 640px) {
  .mistara-menu {
    grid-template-rows:
      minmax(190px, 27svh)
      minmax(0, 1fr);
  }

  .mistara-menu__visual-copy {
    bottom: 20px;

    width: calc(100% - 88px);
  }

  .mistara-menu__visual-copy h2 {
    font-size: clamp(24px, 7.6vw, 32px);
  }

  .mistara-menu__visual-count {
    right: 16px;
    bottom: 21px;
  }

  .mistara-menu__visual-count i {
    width: 22px;
  }

  .mistara-menu__panel {
    padding:
      22px
      18px
      26px;
  }

  .mistara-menu__nav {
    margin: 10px 0 20px;
  }

  .mistara-menu__nav-link {
    grid-template-columns:
      24px
      minmax(0, 1fr)
      34px;

    min-height: 52px;
  }

  .mistara-menu__nav-title {
    font-size: clamp(24px, 7.2vw, 30px);
  }

  .mistara-menu__note {
    display: none;
  }

  .mistara-menu__panel-bottom {
    justify-content: flex-end;
  }

  .mistara-menu__book {
    width: 100%;

    justify-content: space-between;
  }
}


/* =========================================================
   SHORT DESKTOPS
========================================================= */

@media (min-width: 901px) and (max-height: 760px) {
  .mistara-menu__panel {
    padding-top: 96px;
    padding-bottom: 24px;
  }

  .mistara-menu__nav {
    margin: 12px 0;
  }

  .mistara-menu__nav {
    gap: 6px;
  }

  .mistara-menu__nav-link {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  .mistara-menu__nav-title {
    font-size: clamp(36px, 3.2vw, 50px);
  }

  .mistara-menu__panel-bottom {
    padding-top: 18px;
  }

  .mistara-menu__visual-copy {
    bottom: 52px;
  }

  .mistara-menu__visual-count {
    bottom: 56px;
  }
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {
  .mistara-menu,
  .mistara-menu__visual,
  .mistara-menu__panel,
  .mistara-menu__nav-link,
  .mistara-menu__image,
  .mistara-menu__visual-copy,
  .mistara-menu__nav-title,
  .mistara-menu__nav-number,
  .mistara-menu__nav-arrow,
  .mistara-menu__book-icon {
    transition: none !important;
    animation: none !important;
  }
}
</style>
