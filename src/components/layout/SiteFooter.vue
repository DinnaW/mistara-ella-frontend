<template>

 <footer class="site-footer">

   <div class="footer-main">

     <div class="footer-grid">

       <!-- BRAND -->

       <div class="footer-brand">

         <img

           :src="`${baseUrl}Images/mistara_white.png`"

           alt="Mistara"

           class="footer-brand__logo"

         />

         <p class="footer-brand__text">

           A quiet hillside retreat in Ella, shaped by mountain air, warm hospitality and the unhurried rhythm of Sri Lanka’s hill country.

         </p>

         <p class="footer-brand__follow">Follow us on</p>

         <div class="footer-brand__socials" aria-label="Social links">

           <a href="#" aria-label="Facebook">

             <i class="fa-brands fa-facebook-f"></i>

           </a>

           <a href="#" aria-label="X">

             <i class="fa-brands fa-x-twitter"></i>

           </a>

           <a href="#" aria-label="Instagram">

             <i class="fa-brands fa-instagram"></i>

           </a>

           <a href="#" aria-label="LinkedIn">

             <i class="fa-brands fa-linkedin-in"></i>

           </a>

         </div>

       </div>

       <!-- STAY -->

       <nav class="footer-column" aria-label="Stay">

         <h3 class="footer-column__title">Stay</h3>

         <a href="#/">Home</a>

         <a href="#/rooms">Rooms</a>

         <a href="#/packages">Packages</a>

         <a href="#/contact">Book Your Stay</a>

       </nav>

       <!-- EXPLORE -->

       <nav class="footer-column" aria-label="Explore">

         <h3 class="footer-column__title">Explore</h3>

         <a href="#/facilities">Facilities</a>

         <a href="#/gallery">Gallery</a>

         <a href="#/contact">Contact</a>

         <a

           href="https://maps.app.goo.gl/o7RNPo53WvddZDjG6"

           target="_blank"

           rel="noopener noreferrer"

         >

           Google Reviews

         </a>

       </nav>

       <!-- NEWSLETTER -->

       <div class="footer-newsletter">

         <h3 class="footer-column__title">Mistara Ella</h3>

         <p class="footer-newsletter__text">

           Stay close to the hills. Receive quiet updates, seasonal offers and stay inspiration from Mistara Ella.

         </p>

         <form class="footer-newsletter__form" @submit.prevent>

           <input

             type="email"

             placeholder="Enter your email address"

             aria-label="Email address"

           />

           <button type="submit">Stay Updated</button>

         </form>

       </div>

     </div>

   </div>

   <div class="footer-utility">

     <div class="footer-support">

       <div class="footer-support__text">

         <span class="footer-support__hours">Ella, Sri Lanka</span>

         <a href="#/contact" class="footer-support__phone">

           Book Your Stay

         </a>

       </div>

     </div>

     <div class="footer-support-brands">

       <span class="footer-support-brands__label">We Support</span>

       <div

         class="footer-support-brands__icons"

         aria-label="Supported payment methods"

       >

         <img

           src="https://api.iconify.design/logos:mastercard.svg"

           alt="Mastercard"

           class="payment-logo payment-logo--mastercard"

         />

         <img

           src="https://api.iconify.design/logos:visa.svg"

           alt="Visa"

           class="payment-logo payment-logo--visa"

         />

         <img

           src="https://api.iconify.design/logos:paypal.svg"

           alt="PayPal"

           class="payment-logo payment-logo--paypal"

         />

         <div class="western-union-logo" aria-label="Western Union">

           <svg

             class="western-union-logo__mark"

             viewBox="0 0 56 30"

             xmlns="http://www.w3.org/2000/svg"

             aria-hidden="true"

           >

             <polygon points="0,4 10,4 22,26 12,26" fill="#FFD400" />

             <polygon points="14,4 24,4 36,26 26,26" fill="#FFD400" />

             <polygon points="28,4 38,4 50,26 40,26" fill="#FFD400" />

           </svg>

           <span class="western-union-logo__text">

             <strong>Western</strong>

             <strong>Union</strong>

           </span>

         </div>

       </div>

     </div>

   </div>

   <!-- BOTTOM BAR -->

   <div class="footer-bottom">

     <span class="footer-bottom__copyright">

       © {{ year }} Mistara Ella. All rights reserved.

     </span>

     <div class="footer-bottom__links">

       <a href="#/contact">Booking Policy</a>

       <span class="footer-bottom__divider" aria-hidden="true"></span>

       <a href="#/contact">Terms &amp; Conditions</a>

       <span class="footer-bottom__divider" aria-hidden="true"></span>

       <a href="#/contact">Contact</a>

     </div>

     <div class="footer-bottom__powered">

       <span>Powered by</span>

       <img
         :src="`${baseUrl}Images/saasbedslogoblue.png`"

         alt="SaaSbed"

         class="footer-bottom__saasbed-logo"

       />
     </div>
   </div>

 </footer>

</template>

<script setup>

const baseUrl = import.meta.env.BASE_URL

const year = new Date().getFullYear()

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Marcellus&display=swap');

.site-footer {
  --serif: 'Marcellus', Georgia, serif;
  --sans: 'Inter', Arial, sans-serif;

  width: 100%;
  overflow: hidden;

  background: #000000;
  color: #ffffff;

  font-family: var(--sans);
}

.footer-main {
  width: 100%;
  padding: 2.5vw 4vw 2.3vw;
  box-sizing: border-box;
}

.footer-grid {
  display: grid;

  grid-template-columns:
    minmax(13vw, 1.25fr)
    minmax(7.8vw, .65fr)
    minmax(7.8vw, .65fr)
    minmax(15.6vw, 1.35fr);

  column-gap: 3.5vw;

  width: 100%;
  align-items: start;
}

.footer-brand {
  min-width: 0;
}

.footer-brand__logo {
  display: block;
  width: 6.5vw;
  height: auto;
  object-fit: contain;
}

.footer-brand__text {
  max-width: 38ch;

  margin: 1.15vw 0 0;

  color: rgba(255, 255, 255, .58);

  font-family: var(--sans);
  font-size: .86vw;
  font-weight: 400;
  line-height: 1.7;
}

.footer-brand__follow {
  margin: 1.45vw 0 .63vw;

  color: rgba(255, 255, 255, .65);

  font-family: var(--sans);
  font-size: .86vw;
  font-weight: 500;
}

.footer-brand__socials {
  display: flex;
  align-items: center;
  gap: .9vw;
}

.footer-brand__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, .58);
  text-decoration: none;

  font-size: 1.10vw;

  transition:
    color .2s ease,
    transform .2s ease;
}

.footer-brand__socials a:hover {
  color: #b79a69;
  transform: translateY(-2px);
}

.footer-column,
.footer-newsletter {
  min-width: 0;
}

.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-column__title {
  margin: 0 0 1.15vw;

  color: #ffffff;

  font-family: var(--serif);
  font-size: 1.25vw;
  font-weight: 400;
  line-height: 1.2;
}

.footer-column a {
  display: block;
  width: fit-content;

  margin: 0 0 .73vw;

  color: rgba(255, 255, 255, .58);
  text-decoration: none;

  font-family: var(--sans);
  font-size: .86vw;
  font-weight: 400;
  line-height: 1.45;

  transition: color .2s ease;
}

.footer-column a:hover {
  color: #b79a69;
}

.footer-sale-link {
  display: inline-flex;
  align-items: center;
  gap: .42vw;
}

.footer-badge {
  display: inline-flex;
  align-items: center;

  padding: .1vw .42vw;

  border-radius: 999px;

  background: rgba(239, 68, 68, .14);
  color: #ef4444;

  font-family: var(--sans);
  font-size: .52vw;
  font-weight: 600;
}

.footer-newsletter__text {
  max-width: 48ch;

  margin: 0 0 1.15vw;

  color: rgba(255, 255, 255, .58);

  font-family: var(--sans);
  font-size: .86vw;
  font-weight: 400;
  line-height: 1.65;
}

.footer-newsletter__form {
  display: flex;
  flex-direction: column;

  gap: .52vw;
  width: 100%;
}

.footer-newsletter__form input,
.footer-newsletter__form button {
  width: 100%;
  height: 2.6vw;

  box-sizing: border-box;
}

.footer-newsletter__form input {
  padding: 0 .83vw;

  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 7px;

  background: rgba(255, 255, 255, .05);
  color: #ffffff;

  font-family: var(--sans);
  font-size: .80vw;

  outline: none;

  transition:
    border-color .2s ease,
    background .2s ease;
}

.footer-newsletter__form input::placeholder {
  color: rgba(255, 255, 255, .36);
}

.footer-newsletter__form input:focus {
  border-color: #b79a69;
  background: rgba(255, 255, 255, .07);
}

.footer-newsletter__form button {
  border: 1px solid rgba(255, 255, 255, .32);
  border-radius: 7px;

  background: transparent;
  color: #ffffff;

  font-family: var(--sans);
  font-size: .80vw;
  font-weight: 600;

  cursor: pointer;

  transition:
    border-color .2s ease,
    color .2s ease,
    background .2s ease;
}

.footer-newsletter__form button:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, .06);
}

.footer-utility {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 2.4vw;

  width: 100%;
  min-height: 6vw;

  padding: 1.35vw 4vw;

  border-top: 1px solid rgba(255, 255, 255, .12);

  background: #000000;

  box-sizing: border-box;
}

.footer-support {
  display: flex;
  align-items: center;

  flex: 0 0 auto;

  padding: 0;
  border: 0;

  box-sizing: border-box;
}

.footer-support__text {
  display: flex;
  flex-direction: column;

  gap: .36vw;
}

.footer-support__hours {
  color: rgba(255, 255, 255, .72);

  font-family: var(--serif);
  font-size: 1.10vw;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;
}

.footer-support__phone {
  color: #ffffff;
  text-decoration: none;

  font-family: var(--sans);
  font-size: .86vw;
  font-weight: 600;

  white-space: nowrap;
}

.footer-support-brands {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  gap: 1.05vw;

  flex: 0 0 auto;

  padding: 0;
  border: 0;

  box-sizing: border-box;
}

.footer-support-brands__label {
  margin: 0;

  color: rgba(255, 255, 255, .72);

  font-family: var(--serif);
  font-size: 1.10vw;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;
}

.footer-support-brands__icons {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  gap: .8vw;

  width: auto;
}

.payment-logo {
  display: block;

  width: auto;
  height: auto;

  object-fit: contain;

  flex: 0 0 auto;
}

.payment-logo--mastercard {
  width: 1.55vw;
}

.payment-logo--visa {
  width: 1.7vw;
}

.payment-logo--paypal {
  width: 1.45vw;
}

.payment-logo--amex {
  width: 1.7vw;
  max-height: .7vw;
}

/* WESTERN UNION */

.western-union-logo {
  display: flex;
  align-items: center;

  gap: .22vw;

  flex: 0 0 auto;
}

.western-union-logo__mark {
  display: block;

  width: 1.4vw;
  height: auto;
}

.western-union-logo__text {
  display: flex;
  flex-direction: column;

  color: #ffffff;

  font-family: var(--sans);
  font-size: .42vw;
  font-weight: 600;
  line-height: .9;
  letter-spacing: -.02em;
}

.footer-bottom {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;

  width: 100%;
  margin: 0;

  padding: .95vw 4vw;

  column-gap: 1.45vw;

  border-top: 1px solid rgba(255, 255, 255, .08);

  background: #ffffff;

  box-sizing: border-box;
}

.footer-bottom__copyright {
  justify-self: start;

  margin: 0;
  padding: 0;

  color: rgba(5, 5, 5, 0.5);

  font-family: var(--sans);
  font-size: .70vw;
  font-weight: 400;
  line-height: 1.2;

  white-space: nowrap;
}

.footer-bottom__links {
  justify-self: center;

  display: flex;
  align-items: center;

  gap: .83vw;
}

.footer-bottom__links a {
  color:rgba(5, 5, 5, 0.5);
  text-decoration: none;

  font-family: var(--sans);
  font-size: .70vw;
  font-weight: 400;

  white-space: nowrap;

  transition: color .2s ease;
}

.footer-bottom__links a:hover {
  color: #b79a69;
}

.footer-bottom__divider {
  width: 1px;
  height: .9vw;

  background: rgba(255, 255, 255, .12);

  flex: 0 0 auto;
}

.footer-bottom__powered {
  justify-self: end;

  display: inline-flex;
  align-items: center;
  justify-content: flex-end;

  gap: .36vw;

  margin: 0;
  padding: 0;

  color: rgba(5, 5, 5, 0.5);

  font-family: var(--sans);
  font-size: .70vw;
  font-weight: 400;
  line-height: 1;

  white-space: nowrap;
}

.footer-bottom__saasbed-logo {
  display: block;

  width: auto;
  height: 1.04vw;

  object-fit: contain;
}

.site-footer {
  margin: 0 !important;
  padding: 0 !important;
  height: auto !important;
  min-height: 0 !important;
}

.footer-bottom {
  margin: 0 !important;
  margin-bottom: 0 !important;
}

:global(html),
:global(body),
:global(#app) {
  margin: 0 !important;
  padding: 0 !important;
}

:global(body) {
  background: #ffffff;
}
/* TABLET */

@media (max-width: 1100px) {
  .footer-main {
    padding: 42px 5vw 38px;
  }

  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 34px;
    row-gap: 36px;
  }

  .footer-brand,
  .footer-newsletter {
    grid-column: 1 / -1;
  }

  .footer-brand__logo {
    width: 120px;
  }

  .footer-brand__text,
  .footer-brand__follow,
  .footer-column a,
  .footer-newsletter__text {
    font-size: 14px;
  }

  .footer-brand__text {
    margin-top: 20px;
  }

  .footer-brand__follow {
    margin: 26px 0 12px;
  }

  .footer-brand__socials {
    gap: 16px;
  }

  .footer-brand__socials a {
    font-size: 18px;
  }

  .footer-column__title {
    margin-bottom: 20px;
    font-size: 22px;
  }

  .footer-column a {
    margin-bottom: 13px;
  }

  .footer-newsletter__text {
    margin-bottom: 20px;
  }

  .footer-newsletter__form {
    gap: 10px;
  }

  .footer-newsletter__form input,
  .footer-newsletter__form button {
    height: 48px;
  }

  .footer-newsletter__form input {
    padding: 0 15px;
    font-size: 14px;
  }

  .footer-newsletter__form button {
    font-size: 14px;
  }

  .footer-utility {
    flex-wrap: wrap;
    gap: 24px 34px;
    min-height: auto;
    padding: 24px 5vw;
  }

  .footer-support__text {
    gap: 6px;
  }

  .footer-support__hours,
  .footer-support-brands__label {
    font-size: 20px;
  }

  .footer-support__phone {
    font-size: 14px;
  }

  .footer-support-brands {
    gap: 18px;
  }

  .footer-support-brands__icons {
    gap: 14px;
  }

  .payment-logo--mastercard {
    width: 28px;
  }

  .payment-logo--visa {
    width: 31px;
  }

  .payment-logo--paypal {
    width: 26px;
  }

  .western-union-logo__mark {
    width: 25px;
  }

  .western-union-logo__text {
    font-size: 8px;
  }

  .footer-bottom {
    grid-template-columns: max-content 1fr max-content;
    align-items: center;

    padding: 18px 4vw;
    column-gap: 20px;

    width: 100%;
  }

  .footer-bottom__copyright {
    justify-self: start;
    font-size: 11px;
    white-space: nowrap;
  }

  .footer-bottom__links {
    justify-self: center;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;
    min-width: 0;
  }

  .footer-bottom__links a {
    font-size: 11px;
    white-space: nowrap;
  }

  .footer-bottom__divider {
    height: 14px;
  }

  .footer-bottom__powered {
    justify-self: end;

    display: inline-flex;
    align-items: center;

    gap: 6px;

    font-size: 11px;
    white-space: nowrap;
    min-width: max-content;
  }

  .footer-bottom__saasbed-logo {
    height: 17px;
    width: auto;
    flex-shrink: 0;
  }
}

@media (max-width: 760px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-brand,
  .footer-newsletter {
    grid-column: 1 / -1;
  }

  .footer-utility {
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
  }

  .footer-support-brands {
    flex-wrap: wrap;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 10px;
  }

  .footer-bottom__copyright,
  .footer-bottom__powered,
  .footer-bottom__links {
    justify-self: center;
  }

  .footer-bottom__copyright {
    white-space: normal;
    text-align: center;
  }

  .footer-bottom__links {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 520px) {
  .footer-main {
    padding: 36px 5vw 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }

  .footer-brand,
  .footer-newsletter {
    grid-column: auto;
  }

  .footer-support-brands {
    align-items: flex-start;
    flex-direction: column;
    gap: 14px;
  }

  .footer-support-brands__icons {
    flex-wrap: wrap;
    gap: 14px;
  }

  .footer-bottom__divider {
    display: none;
  }

  .footer-bottom__links {
    flex-direction: column;
    gap: 8px;
  }
}
</style>