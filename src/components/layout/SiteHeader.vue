<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'menu-open': menuOpen }">
    <div class="header-frame">
      <div class="header-left">
        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <Menu v-if="!menuOpen" :size="22" :stroke-width="1.4" />
          <X v-else :size="22" :stroke-width="1.4" />
        </button>

        <nav class="desktop-nav" aria-label="Primary navigation">
          <RouterLink to="/rooms">Stay</RouterLink>
          <RouterLink to="/facilities">Facilities</RouterLink>
          <RouterLink to="/gallery">Gallery</RouterLink>
        </nav>
      </div>

      <RouterLink to="/" class="brand" aria-label="Mistara Ella home" @click="menuOpen = false">
        <img :src="scrolled || menuOpen ? './Images/mistara_logo.png' : './Images/mistara_white.png'" alt="Mistara Ella" />
      </RouterLink>

      <div class="header-actions">
        <span class="language-label">EN <ChevronDown :size="12" :stroke-width="1.5" /></span>
        <RouterLink class="header-book" to="/contact">Book your stay</RouterLink>
        <RouterLink class="header-arrow" to="/contact" aria-label="Book your stay">
          <ArrowUpRight :size="20" :stroke-width="1.5" />
        </RouterLink>
      </div>
    </div>

    <div v-if="menuOpen" class="mobile-panel">
      <nav class="mobile-nav" aria-label="Mobile navigation">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="menuOpen = false">
          <span>{{ item.label }}</span>
          <ArrowUpRight :size="18" :stroke-width="1.5" />
        </RouterLink>
        <RouterLink to="/contact" class="mobile-book" @click="menuOpen = false">
          Book your stay
          <ArrowUpRight :size="18" :stroke-width="1.5" />
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-vue-next'
import { navItems } from '../../data/site'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 36
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>
