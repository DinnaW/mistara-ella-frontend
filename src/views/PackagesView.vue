<template>
  <MainLayout>
    <div class="packages-page">
      <InnerPageHero
        eyebrow="Stay a little longer"
        title="Discover packages made for you"
        
        image="./Images/Home/amenities/lounge2.jpeg"
      />
      <section class="section">
        <div class="site-shell placeholder-panel">
          <p class="eyebrow">Frontend placeholder</p>
          <h2>Package cards will live here.</h2>
          <p>
            Keep the visual component independent from backend data. When the
            design is approved, map API fields into a dedicated package data
            service.
          </p>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
<script setup>
import MainLayout from "../components/layout/MainLayout.vue";
import InnerPageHero from "../components/layout/InnerPageHero.vue";
</script>

<style scoped>
.packages-page :deep(.inner-hero h1) {
  max-width: 72rem;
  margin: 0 auto;
  color: #ffffff;
  font-family: "Marcellus", Georgia, serif;
  font-size: clamp(2.5rem, 4.3vw, 4.8rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.packages-page :deep(.inner-hero) {
  background-position: center center;
}

.packages-page :deep(.inner-hero-content) {
  width: 100%;
  padding: clamp(2.5rem, 5vh, 4rem) 3vw;
  text-align: center;
  color: #ffffff;
}
.packages-page :deep(.inner-hero .eyebrow) {
  margin: 0 0 clamp(0.7rem, 1vh, 1rem);
  color: rgba(255, 255, 255, 0.9);
  font-family: "Marcellus", Georgia, serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: none !important;
  letter-spacing: 0em;
}
</style>
