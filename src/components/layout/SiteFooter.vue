<template>
  <footer class="site-footer">
    <div class="footer-inner">

      <!-- NEWSLETTER -->
      <div class="footer-newsletter">
        <p class="footer-newsletter__eyebrow">Stay Connected</p>

        <h2 class="footer-newsletter__title">
          Join our newsletter
        </h2>

        <p class="footer-newsletter__text">
          Receive exclusive offers, seasonal updates and quiet escapes from Mistara Ella.
        </p>

        <form class="footer-newsletter__form" @submit.prevent>
          <div class="footer-newsletter__input-wrap">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
          </div>

          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <!-- FOOTER COLUMNS -->
      <div class="footer-grid">
        <div class="footer-column">
          <p class="footer-label">Explore</p>

          <nav class="footer-links" aria-label="Footer navigation">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/rooms">Rooms</RouterLink>
            <RouterLink to="/facilities">Facilities</RouterLink>
            <RouterLink to="/gallery">Gallery</RouterLink>
            <RouterLink to="/packages">Packages</RouterLink>
          </nav>
        </div>

        <div class="footer-column">
          <p class="footer-label">Stay</p>

          <div class="footer-links">
            <RouterLink to="/rooms">Our Rooms</RouterLink>
            <RouterLink to="/facilities">Facilities</RouterLink>
            <RouterLink to="/gallery">Mountain Views</RouterLink>
            <RouterLink to="/packages">Special Offers</RouterLink>

            <a
              href="https://mistaraella.com/reservation"
              target="_blank"
              rel="noreferrer"
            >
              Book Your Stay
            </a>
          </div>
        </div>

        <div class="footer-column">
          <p class="footer-label">Discover</p>

          <div class="footer-links">
            <RouterLink to="/gallery">Gallery</RouterLink>
            <RouterLink to="/facilities">Experiences</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>

            <a
              href="https://maps.app.goo.gl/o7RNPo53WvddZDjG6"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>
        </div>

        <div class="footer-column">
          <p class="footer-label">Contact</p>

          <div class="footer-contact">
            <a href="mailto:hello@mistaraella.com">
              hello@mistaraella.com
            </a>

            <RouterLink to="/contact">
              Contact Mistara
            </RouterLink>

            <a
              href="https://mistaraella.com/reservation"
              target="_blank"
              rel="noreferrer"
            >
              Reservations
            </a>
          </div>
        </div>

        <div class="footer-column footer-address">
          <p class="footer-label">Address</p>

          <address>
            Mistara Ella<br />
            Idemegama,<br />
            73 Rathnagiri Estate Rd,<br />
            Ella 90090, Sri Lanka
          </address>
        </div>
      </div>

      <!-- BOTTOM -->
      <div class="footer-bottom">
        <span>
          © {{ year }} Mistara Ella. All rights reserved.
        </span>

        <div class="footer-bottom__right">
          <div class="footer-powered">
            <span>Powered by</span>

            <a
              href="https://saasbeds.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Saasbeds"
            >
              <img
                src="/Images/saasbedslogoblue.png"
                alt="Saasbeds"
                class="footer-saasbeds-logo"
              />
            </a>
          </div>

          <div class="footer-socials" aria-label="Social links">
            <a href="#" aria-label="LinkedIn">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
/*
  No @media breakpoints anywhere below.
  Every size that used to change per-breakpoint (padding, gaps,
  font sizes, heights, grid tracks) is instead expressed with
  vw/vh/clamp() so the footer scales continuously and keeps the
  same proportions and layout structure at any screen width.
*/

.site-footer {
  width: 100%;
  background: #070707;
  color: #ffffff;
}

.footer-inner {
  width: 100%;
  padding: clamp(20px, 3vh, 40px) clamp(16px, 3vw, 48px) 0;
  box-sizing: border-box;
}

/* =========================
   NEWSLETTER
========================= */

.footer-newsletter {
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.footer-newsletter__eyebrow {
  margin: 0 0 clamp(4px, .6vh, 8px);
  color: #8da79b;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(9px, .9vw, 10px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: .1em;
  text-transform: uppercase;
}

.footer-newsletter__title {
  margin: 0;
  color: #17281f;
  font-family: 'Marcellus', Georgia, serif;
  font-size: clamp(20px, 3.2vw, 28px);
  font-weight: 400;
  line-height: 1.08;
  letter-spacing: -.02em;
}

.footer-newsletter__text {
  max-width: 500px;
  margin: clamp(4px, .8vh, 6px) auto 0;
  color: #5a655f;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(11px, 1.3vw, 12px);
  font-weight: 300;
  line-height: 1.45;
}

.footer-newsletter__form {
  width: min(100%, 460px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(6px, 1vw, 8px);
  margin: clamp(16px, 3vh, 24px) auto clamp(18px, 3.5vh, 28px);
}

.footer-newsletter__input-wrap {
  width: 100%;
  height: clamp(34px, 5vh, 38px);
  display: flex;
  align-items: center;
  gap: clamp(6px, 1vw, 8px);
  padding: 0 clamp(10px, 1.5vw, 12px);
  border: 1px solid rgba(23, 40, 31, .12);
  border-radius: 100px;
  background: #ffffff;
  box-shadow: 0 4px 14px rgba(18, 60, 50, .04);
}

.footer-newsletter__input-wrap i {
  color: #8da79b;
  font-size: clamp(12px, 1.3vw, 13px);
}

.footer-newsletter__input-wrap input {
  width: 100%;
  min-width: 0;
  height: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: #17281f;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(11px, 1.3vw, 12px);
}

.footer-newsletter__input-wrap input::placeholder {
  color: #8b938f;
}

.footer-newsletter__form button {
  height: clamp(34px, 5vh, 38px);
  min-width: clamp(84px, 10vw, 100px);
  padding: 0 clamp(14px, 2vw, 18px);
  border: 0;
  border-radius: 100px;
  background: #b79a69;
  color: #ffffff;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(10px, 1.2vw, 11px);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(18, 60, 50, .08);
  transition: background .25s ease, transform .25s ease;
  white-space: nowrap;
}

.footer-newsletter__form button:hover {
  background: #a88957;
  transform: translateY(-2px);
}

/* =========================
   COLUMNS
========================= */

.footer-grid {
  width: 100%;
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, .75fr))
    minmax(0, 1fr)
    minmax(0, 1.15fr);
  gap: clamp(12px, 2.2vw, 30px);
  padding-bottom: 0;
}

.footer-column {
  min-width: 0;
}

.footer-label {
  margin: 0 0 clamp(6px, 1.2vh, 10px);
  color: #8da79b;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(10px, 1.1vw, 11px);
  font-weight: 400;
  line-height: 1;
}

.footer-links,
.footer-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(6px, 1.2vh, 8px);
}

.footer-links a,
.footer-contact a,
.footer-address address {
  color: #26352e;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(11px, 1.2vw, 12px);
  font-weight: 300;
  line-height: 1.4;
  text-decoration: none;
}

.footer-links a,
.footer-contact a {
  transition:
    color .25s ease,
    transform .25s ease;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: #123c32;
  transform: translateX(3px);
}

.footer-address address {
  margin: 0;
  font-style: normal;
}

/* =========================
   BOTTOM
========================= */

.footer-bottom {
  width: 100%;
  min-height: clamp(32px, 5vh, 36px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(10px, 1.6vw, 14px);
  padding: clamp(4px, .8vh, 6px) 0;
  border-top: 1px solid rgba(23, 40, 31, .12);
  flex-wrap: nowrap;
}

.footer-bottom > span,
.footer-powered > span {
  color: #6f7974;
  font-family: 'Inter', Arial, sans-serif;
  font-size: clamp(9px, 1vw, 10px);
  font-weight: 300;
  white-space: nowrap;
}

.footer-bottom__right {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 42px);
}

.footer-powered {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1vw, 10px);
}

.footer-powered a {
  display: inline-flex;
  align-items: center;
}

.footer-saasbeds-logo {
  width: clamp(64px, 6vw, 100px);
  height: auto;
  display: block;
  object-fit: contain;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: clamp(10px, 1.6vw, 14px);
}

.footer-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #17281f;
  font-size: clamp(15px, 1.8vw, 18px);
  text-decoration: none;
  transition:
    color .25s ease,
    transform .25s ease;
}

.footer-socials a:hover {
  color: #123c32;
  transform: translateY(-2px);
}

/* DARK FOOTER THEME */
.footer-newsletter__title,
.footer-links a,
.footer-contact a,
.footer-address address,
.footer-socials a {
  color: #ffffff;
}

.footer-newsletter__text {
  color: rgba(255, 255, 255, .68);
}

.footer-newsletter__eyebrow,
.footer-label {
  color: #8da79b;
}

.footer-bottom {
  border-top-color: rgba(255, 255, 255, .14);
}

.footer-bottom > span,
.footer-powered > span {
  color: rgba(255, 255, 255, .5);
}

.footer-links a:hover,
.footer-contact a:hover,
.footer-socials a:hover {
  color: #ffffff;
}

</style>