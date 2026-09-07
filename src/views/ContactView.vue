<template>
  <MainLayout>
    <main class="contact-page">
      <InnerPageHero
        eyebrow="Talk to us"
        title="Contact"
        text="We would love to help you plan a memorable stay in Ella."
        image="/Images/Banner/contact.png"
      />

      <section class="contact-details-section">
        <div class="contact-shell contact-hero-inner">
          <div class="contact-information">
            <p class="contact-eyebrow">Mistara Ella</p>
            <h1>Contact us</h1>
            <p class="contact-intro">
              Have a question about your stay, the best room for your visit, or
              exploring Ella? We would love to hear from you.
            </p>

            <div class="contact-details">
              <div class="contact-detail">
                <span class="detail-label">Office</span>
                <p>Mistara Ella<br />Ella, Sri Lanka</p>
              </div>

              <div class="contact-detail">
                <span class="detail-label">Phone</span>
                <a href="tel:+94572234567">+94 57 223 4567</a>
              </div>

              <div class="contact-detail">
                <span class="detail-label">Email</span>
                <a href="mailto:hello@mistaraella.com">hello@mistaraella.com</a>
              </div>
            </div>

            <div class="contact-socials">
              <span class="detail-label">Follow us</span>
              <div>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="Pinterest">PI</a>
              </div>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="submitted = true">
            <p class="form-eyebrow">Start a conversation</p>
            <h2>Send a message</h2>

            <div class="name-fields">
              <label>
                First name
                <input v-model="form.firstName" type="text" required />
              </label>
              <label>
                Last name
                <input v-model="form.lastName" type="text" />
              </label>
            </div>

            <label>
              Email
              <input v-model="form.email" type="email" required />
            </label>

            <label>
              Subject
              <input v-model="form.subject" type="text" />
            </label>

            <label>
              Message
              <textarea v-model="form.message" rows="5" required></textarea>
            </label>

            <button class="contact-submit" type="submit">
              Send message <span>-></span>
            </button>
            <p v-if="submitted" class="form-success">
              Thank you. We will be in touch soon.
            </p>
          </form>
        </div>
      </section>

      <section class="contact-quote">
        <div class="quote-mark">&ldquo;</div>
        <blockquote>
          Come for the mountains,<br />
          stay for the <em>feeling.</em>
        </blockquote>
        <p class="quote-author">Mistara Ella</p>
      </section>

      <section class="contact-gallery" aria-label="Moments at Mistara Ella">
        <div class="contact-gallery-track">
          <figure class="gallery-frame gallery-frame--short">
            <img
              src="/Images/Gallery/sidepool.png"
              alt="Poolside at Mistara Ella"
            />
            <figcaption>Poolside</figcaption>
          </figure>
          <figure class="gallery-frame gallery-frame--low">
            <img
              src="/Images/Gallery/bench.png"
              alt="Breakfast beside the pool"
            />
            <figcaption>Morning table</figcaption>
          </figure>
          <figure class="gallery-frame">
            <img
              src="/Images/Gallery/hotelpool.png"
              alt="Mistara Ella pool at night"
            />
            <figcaption>After dusk</figcaption>
          </figure>
          <figure class="gallery-frame gallery-frame--low">
            <img src="/Images/Gallery/food.png" alt="Freshly prepared dining" />
            <figcaption>Local flavours</figcaption>
          </figure>
          <figure class="gallery-frame gallery-frame--short">
            <img src="/Images/Gallery/table.png" alt="Dinner by the sea" />
            <figcaption>Evening table</figcaption>
          </figure>
        </div>
      </section>

      <section class="contact-newsletter">
        <p class="contact-eyebrow">Stay connected</p>
        <h2>Get the latest from Ella.</h2>
        <p>
          Occasional notes on slow travel, local places and stays at Mistara.
        </p>
        <form
          class="newsletter-form"
          @submit.prevent="newsletterSubmitted = true"
        >
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <span v-if="newsletterSubmitted" class="newsletter-success">
          You are on the list.
        </span>
      </section>
    </main>
  </MainLayout>
</template>

<script setup>
import { reactive, ref } from "vue";
import MainLayout from "../components/layout/MainLayout.vue";
import InnerPageHero from "../components/layout/InnerPageHero.vue";

const submitted = ref(false);
const newsletterSubmitted = ref(false);
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
});
</script>

<style scoped>
.contact-page {
  --contact-ink: #25281f;
  --contact-soft: #5b6259;
  --contact-gold: #a98b62;
  --contact-cream: #f4f1ea;
  --contact-line: rgba(37, 40, 31, 0.15);
  background: #ffffff;
  color: var(--contact-ink);
}

.contact-shell {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.contact-details-section {
  position: relative;
  min-height: 596px;
  padding: 55px 0 75px;
  overflow: hidden;
  background: var(--contact-cream);
}

.contact-hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 0.92fr 0.78fr;
  gap: 80px;
  align-items: center;
  min-height: 596px;
}

.contact-information {
  max-width: 480px;
  padding: 50px 0 45px;
}

.contact-eyebrow,
.form-eyebrow,
.detail-label {
  color: var(--contact-gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.contact-eyebrow,
.form-eyebrow {
  margin-bottom: 18px;
}

.contact-information h1 {
  margin: 0 0 20px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(58px, 7vw, 90px);
  font-weight: 500;
  line-height: 0.88;
}

.contact-intro {
  max-width: 420px;
  margin: 0 0 38px;
  color: var(--contact-soft);
  font-size: 14px;
  line-height: 1.8;
}

.contact-details {
  display: grid;
  gap: 0;
  max-width: 390px;
}

.contact-detail {
  display: grid;
  gap: 6px;
  padding: 17px 0;
  border-bottom: 1px solid var(--contact-line);
}

.contact-detail p,
.contact-detail a {
  margin: 0;
  color: var(--contact-soft);
  font-size: 14px;
  line-height: 1.55;
}

.contact-detail a:hover,
.contact-socials a:hover {
  color: var(--contact-gold);
}

.contact-socials {
  display: grid;
  gap: 14px;
  margin-top: 30px;
}

.contact-socials > div {
  display: flex;
  gap: 18px;
}

.contact-socials a {
  color: var(--contact-soft);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.contact-form {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 18px;
  margin: 55px 0 0;
  padding: 38px 38px 34px;
  background: #ffffff;
  box-shadow: 0 20px 55px rgba(24, 33, 28, 0.13);
}

.contact-form h2 {
  margin: 0 0 5px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: 37px;
  font-weight: 500;
  line-height: 1;
}

.name-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.contact-form label {
  display: grid;
  gap: 7px;
  color: var(--contact-ink);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid rgba(37, 40, 31, 0.1);
  border-radius: 0;
  padding: 12px 13px;
  outline: none;
  background: #fbfbfa;
  color: var(--contact-ink);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  text-transform: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--contact-gold);
}

.contact-form textarea {
  min-height: 105px;
  resize: vertical;
}

.contact-submit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 4px;
  padding: 14px 0 10px;
  border: 0;
  border-bottom: 1px solid var(--contact-ink);
  background: transparent;
  color: var(--contact-ink);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: left;
  text-transform: uppercase;
}

.contact-submit:hover {
  color: var(--contact-gold);
  border-color: var(--contact-gold);
}

.contact-submit span {
  font-size: 18px;
  letter-spacing: 0;
}

.form-success,
.newsletter-success {
  margin: 0;
  color: #6e865f;
  font-size: 12px;
}

.contact-quote {
  padding: 90px 24px 104px;
  text-align: center;
}

.quote-mark {
  height: 38px;
  color: var(--contact-gold);
  font-family: Georgia, serif;
  font-size: 58px;
  line-height: 0.8;
}

.contact-quote blockquote {
  max-width: 720px;
  margin: 22px auto 18px;
  color: var(--contact-gold);
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(30px, 4vw, 49px);
  font-weight: 600;
  line-height: 1.02;
}

.contact-quote blockquote em {
  font-style: italic;
}

.quote-author {
  margin: 0;
  color: var(--contact-soft);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact-gallery {
  overflow: hidden;
  padding: 24px 24px 96px;
}

.contact-gallery-track {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: clamp(14px, 2vw, 30px);
  width: min(1320px, 100%);
  margin: 0 auto;
}

.gallery-frame {
  flex: 0 1 230px;
  min-width: 0;
  margin: 0;
}

.gallery-frame--short {
  margin-top: 28px;
}

.gallery-frame--low {
  margin-top: 62px;
}

.gallery-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 0.63;
  object-fit: cover;
}

.gallery-frame figcaption {
  margin-top: 9px;
  color: var(--contact-soft);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-newsletter {
  padding: 72px 24px 86px;
  background: #fbfaf7;
  text-align: center;
}

.contact-newsletter h2 {
  margin: 0 0 10px;
  font-family: "Cormorant Garamond", Georgia, serif;
  font-size: clamp(35px, 4vw, 50px);
  font-weight: 500;
}

.contact-newsletter > p:not(.contact-eyebrow) {
  margin: 0 auto 25px;
  color: var(--contact-soft);
  font-size: 13px;
}

.newsletter-form {
  display: flex;
  max-width: 400px;
  margin: 0 auto;
  border-bottom: 1px solid var(--contact-ink);
}

.newsletter-form input {
  flex: 1;
  min-width: 0;
  border: 0;
  padding: 12px 0;
  outline: 0;
  background: transparent;
  color: var(--contact-ink);
  font-size: 12px;
}

.newsletter-form button {
  border: 0;
  padding: 12px 0 12px 15px;
  background: transparent;
  color: var(--contact-ink);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.newsletter-form button:hover {
  color: var(--contact-gold);
}

.newsletter-success {
  display: block;
  margin-top: 14px;
}

@media (max-width: 900px) {
  .contact-hero-inner {
    grid-template-columns: 1fr;
    gap: 10px;
    min-height: auto;
    padding-top: 52px;
    padding-bottom: 70px;
  }

  .contact-information {
    max-width: 620px;
    padding: 30px 0 15px;
  }

  .contact-form {
    max-width: 620px;
    margin: 0;
  }

  .contact-gallery-track {
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .contact-shell {
    width: min(100% - 32px, 480px);
  }

  .contact-details-section {
    padding-top: 35px;
  }

  .contact-information h1 {
    font-size: 62px;
  }

  .contact-form {
    padding: 28px 22px 25px;
  }

  .name-fields {
    grid-template-columns: 1fr;
  }

  .contact-quote {
    padding: 70px 18px 80px;
  }

  .contact-gallery {
    padding: 42px 0 48px 16px;
  }

  .contact-gallery-track {
    justify-content: flex-start;
    width: max-content;
    gap: 12px;
    padding-right: 16px;
  }

  .gallery-frame {
    flex-basis: 145px;
  }

  .gallery-frame--short {
    margin-top: 18px;
  }

  .gallery-frame--low {
    margin-top: 38px;
  }
}
</style>
