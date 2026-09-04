<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled, 'menu-open': menuOpen }">
    <div class="site-shell header-inner">
      <RouterLink to="/" class="brand" aria-label="Mistara Ella home" @click="menuOpen = false">
        <img :src="scrolled || menuOpen ? './Images/mistara_logo.png' : './Images/mistara_white.png'" alt="Mistara Ella" />
      </RouterLink>

      <nav class="desktop-nav" aria-label="Primary navigation">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</RouterLink>
      </nav>

      <div class="header-actions">
        <a class="button button-solid header-book" href="#booking">Book now</a>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
          <Menu v-if="!menuOpen" :size="25" />
          <X v-else :size="25" />
        </button>
      </div>
    </div>

    <div v-if="menuOpen" class="mobile-panel">
      <nav class="mobile-nav site-shell" aria-label="Mobile navigation">
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to" @click="menuOpen = false">
          {{ item.label }}
          <ArrowUpRight :size="17" />
        </RouterLink>
        <a href="#booking" class="button button-solid mobile-book" @click="menuOpen = false">Book your stay</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUpRight, Menu, X } from 'lucide-vue-next'
import { navItems } from '../../data/site'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))
</script>
