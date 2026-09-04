<template>
  <MainLayout>
    <InnerPageHero eyebrow="Talk to us" title="Contact" text="Static contact UI for the frontend redesign phase." image="./Images/Banner/contact.png" />
    <section class="section">
      <div class="site-shell contact-grid">
        <div><p class="eyebrow">Mistara Ella</p><h2>Start planning your Ella stay.</h2><p>The form does not send anywhere yet; it is frontend-only by design.</p></div>
        <form class="contact-form" @submit.prevent>
          <label>Name<input type="text" placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea rows="5" placeholder="Tell us about your stay"></textarea></label>
          <button class="button button-dark" type="submit">Send enquiry</button>
        </form>
      </div>
    </section>
  </MainLayout>
</template>
<script setup>
import MainLayout from '../components/layout/MainLayout.vue'
import InnerPageHero from '../components/layout/InnerPageHero.vue'
</script>
