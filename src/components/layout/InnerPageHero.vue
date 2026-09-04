<template>
  <section class="inner-hero" :style="{ backgroundImage: `url(${image})` }">
    <div class="inner-hero-overlay"></div>
    <div class="site-shell inner-hero-content">
      <p class="eyebrow eyebrow-light">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p v-if="text">{{ text }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: 'Mistara Ella' },
  title: { type: String, required: true },
  text: { type: String, default: '' },
  image: { type: String, required: true },
})
</script>
