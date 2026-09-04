<template>
  <section class="section about-section">
    <div class="site-shell about-grid">
      <div class="about-copy reveal-copy">
        <p class="eyebrow">Discover Mistara Ella</p>
        <h2>Where contemporary comfort meets the quiet beauty of Ella.</h2>
        <p class="lead-copy">Mistara is designed around the feeling people come to Ella for: cool air, green views, slower mornings and a sense of being away from everything.</p>
        <p>Thoughtful rooms, warm hospitality and easy access to the town’s best-known landscapes make it a relaxed base for exploring the hill country.</p>

        <div class="feature-list">
          <div><MapPin :size="19" /><span>Close to Ella’s key attractions</span></div>
          <div><Waves :size="19" /><span>Rooftop pool and outdoor spaces</span></div>
          <div><Coffee :size="19" /><span>Breakfast and personal service</span></div>
        </div>
      </div>

      <div class="about-collage" aria-label="Mistara Ella photographs">
        <img class="collage-main" src="./Images/Home/outside2.jpeg" alt="Mistara Ella exterior" />
        <img class="collage-top" src="./Images/Home/outside1.jpeg" alt="Mistara Ella view" />
        <img class="collage-bottom" src="./Images/Home/outside3.jpeg" alt="Mistara Ella pool" />
        <div class="collage-note"><span>Ella, Sri Lanka</span><strong>Stay above the ordinary</strong></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Coffee, MapPin, Waves } from 'lucide-vue-next'
</script>
