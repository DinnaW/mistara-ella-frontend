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





   <!-- UTILITY BAR - DOWNLOAD SECTION REMOVED -->

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

/* =========================================================
   TOP FOOTER
========================================================= */
.footer-main {
  width: 100%;
  padding: clamp(48px, 4.5vw, 72px) 4vw clamp(42px, 4vw, 64px);
  box-sizing: border-box;
}

.footer-grid {
  display: grid;
  grid-template-columns:
    minmax(250px, 1.25fr)
    minmax(150px, .65fr)
    minmax(150px, .65fr)
    minmax(300px, 1.35fr);
  column-gap: clamp(50px, 5vw, 90px);
  width: 100%;
  align-items: start;
}

/* BRAND */
.footer-brand {
  min-width: 0;
}

.footer-brand__logo {
  display: block;
  width: clamp(105px, 8vw, 140px);
  height: auto;
  object-fit: contain;
}

.footer-brand__text {
  max-width: 38ch;
  margin: clamp(22px, 2vw, 30px) 0 0;
  color: rgba(255, 255, 255, .58);
  font-family: var(--sans);
  font-size: clamp(13px, 1vw, 16px);
  font-weight: 400;
  line-height: 1.7;
}

.footer-brand__follow {
  margin: clamp(28px, 2.5vw, 38px) 0 clamp(12px, 1vw, 16px);
  color: rgba(255, 255, 255, .65);
  font-family: var(--sans);
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 500;
}

.footer-brand__socials {
  display: flex;
  align-items: center;
  gap: clamp(15px, 1.2vw, 22px);
}

.footer-brand__socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .58);
  text-decoration: none;
  font-size: clamp(17px, 1.2vw, 21px);
  transition: color .2s ease, transform .2s ease;
}

.footer-brand__socials a:hover {
  color: #b79a69;
  transform: translateY(-2px);
}

/* STAY / EXPLORE */
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
  margin: 0 0 clamp(22px, 1.8vw, 28px);
  color: #ffffff;
  font-family: var(--serif);
  font-size: clamp(19px, 1.4vw, 23px);
  font-weight: 400;
  line-height: 1.2;
}

.footer-column a {
  display: block;
  width: fit-content;
  margin: 0 0 clamp(13px, 1vw, 17px);
  color: rgba(255, 255, 255, .58);
  text-decoration: none;
  font-family: var(--sans);
  font-size: clamp(13px, 1vw, 15px);
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
  gap: 8px;
}

.footer-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(239, 68, 68, .14);
  color: #ef4444;
  font-family: var(--sans);
  font-size: clamp(8px, .7vw, 10px);
  font-weight: 600;
}

/* NEWSLETTER */
.footer-newsletter__text {
  max-width: 48ch;
  margin: 0 0 clamp(22px, 1.8vw, 28px);
  color: rgba(255, 255, 255, .58);
  font-family: var(--sans);
  font-size: clamp(13px, 1vw, 15px);
  font-weight: 400;
  line-height: 1.65;
}

.footer-newsletter__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.footer-newsletter__form input,
.footer-newsletter__form button {
  width: 100%;
  height: clamp(48px, 3.5vw, 56px);
  box-sizing: border-box;
}

.footer-newsletter__form input {
  padding: 0 clamp(15px, 1.2vw, 20px);
  border: 1px solid rgba(255, 255, 255, .16);
  border-radius: 7px;
  background: rgba(255, 255, 255, .05);
  color: #ffffff;
  font-family: var(--sans);
  font-size: clamp(12px, .9vw, 14px);
  outline: none;
  transition: border-color .2s ease, background .2s ease;
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
  font-size: clamp(12px, .9vw, 14px);
  font-weight: 600;
  cursor: pointer;
  transition: border-color .2s ease, color .2s ease, background .2s ease;
}

.footer-newsletter__form button:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, .06);
}

/* =========================================================
   UTILITY BAR
   Location + booking + payment methods stay grouped on left
========================================================= */
.footer-utility {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: clamp(42px, 4vw, 78px);

  width: 100%;
  min-height: clamp(118px, 8vw, 148px);
  padding: clamp(26px, 2.2vw, 36px) 4vw;

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

.footer-support__icon {
  width: clamp(38px, 2.8vw, 46px);
  height: clamp(38px, 2.8vw, 46px);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 8px;
  background: rgba(255, 255, 255, .08);
  color: #b79a69;
  font-size: clamp(14px, 1.1vw, 17px);
}

.footer-support__text {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.footer-support__hours {
  color: rgba(255, 255, 255, .72);
  font-family: var(--serif);
  font-size: clamp(17px, 1.25vw, 21px);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
}

.footer-support__phone {
  color: #ffffff;
  text-decoration: none;
  font-family: var(--sans);
  font-size: clamp(14px, 1vw, 16px);
  font-weight: 600;
  white-space: nowrap;
}

.footer-support-brands {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: clamp(18px, 1.6vw, 28px);
  flex: 0 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.footer-support-brands__label {
  margin: 0;
  color: rgba(255, 255, 255, .72);
  font-family: var(--serif);
  font-size: clamp(17px, 1.25vw, 21px);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
}

.footer-support-brands__icons {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: clamp(20px, 2vw, 32px);
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
  width: clamp(38px, 2.7vw, 48px);
}

.payment-logo--visa {
  width: clamp(42px, 3vw, 54px);
}

.payment-logo--paypal {
  width: clamp(34px, 2.5vw, 46px);
}

.payment-logo--amex {
  width: clamp(44px, 3vw, 54px);
  max-height: clamp(17px, 1.3vw, 21px);
}

/* WESTERN UNION */
.western-union-logo {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 0 0 auto;
}

.western-union-logo__mark {
  display: block;
  width: clamp(32px, 2.4vw, 42px);
  height: auto;
}

.western-union-logo__text {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-family: var(--sans);
  font-size: clamp(9px, .8vw, 12px);
  font-weight: 600;
  line-height: .9;
  letter-spacing: -.02em;
}

/* =========================================================
   BOTTOM BAR
========================================================= */
.footer-bottom {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: clamp(18px, 1.5vw, 24px) 4vw;
  column-gap: 30px;
  border-top: 1px solid rgba(255, 255, 255, .08);
  background: #000000;
  box-sizing: border-box;
}

.footer-bottom__copyright {
  justify-self: start;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, .5);
  font-family: var(--sans);
  font-size: clamp(11px, .82vw, 13px);
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
}

.footer-bottom__links {
  justify-self: center;
  display: flex;
  align-items: center;
  gap: clamp(14px, 1.2vw, 20px);
}

.footer-bottom__links a {
  color: rgba(255, 255, 255, .5);
  text-decoration: none;
  font-family: var(--sans);
  font-size: clamp(11px, .82vw, 13px);
  font-weight: 400;
  white-space: nowrap;
  transition: color .2s ease;
}

.footer-bottom__links a:hover {
  color: #b79a69;
}

.footer-bottom__divider {
  width: 1px;
  height: clamp(15px, 1.3vw, 20px);
  background: rgba(255, 255, 255, .12);
  flex: 0 0 auto;
}

.footer-bottom__powered {
  justify-self: end;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin: 0;
  padding: 0;
  color: rgba(255, 255, 255, .5);
  font-family: var(--sans);
  font-size: clamp(11px, .82vw, 13px);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
}

.footer-bottom__saasbed-logo {
  display: block;
  width: auto;
  height: clamp(18px, 1.4vw, 24px);
  object-fit: contain;
}

/* =========================================================
   RESPONSIVE
========================================================= */

/*
  Browser zoom around 80% creates a wider CSS viewport.
  This wide-screen rule intentionally scales the footer up
  so it still feels substantial instead of tiny.
*/
@media (min-width: 1500px) {
  .footer-main {
    padding: clamp(64px, 4.6vw, 92px) 4vw clamp(56px, 4vw, 80px);
  }

  .footer-grid {
    grid-template-columns:
      minmax(300px, 1.3fr)
      minmax(180px, .68fr)
      minmax(180px, .68fr)
      minmax(360px, 1.4fr);
    column-gap: clamp(64px, 5vw, 110px);
  }

  .footer-brand__logo {
    width: clamp(140px, 8vw, 180px);
  }

  .footer-brand__text {
    max-width: 40ch;
    font-size: clamp(15px, .9vw, 18px);
    line-height: 1.75;
  }

  .footer-brand__follow {
    font-size: clamp(15px, .85vw, 17px);
  }

  .footer-brand__socials a {
    font-size: clamp(20px, 1.1vw, 24px);
  }

  .footer-column__title {
    font-size: clamp(22px, 1.3vw, 27px);
    margin-bottom: clamp(24px, 1.6vw, 32px);
  }

  .footer-column a,
  .footer-newsletter__text {
    font-size: clamp(15px, .85vw, 17px);
  }

  .footer-column a {
    margin-bottom: clamp(14px, .9vw, 19px);
  }

  .footer-newsletter__form input,
  .footer-newsletter__form button {
    height: clamp(54px, 3vw, 62px);
    font-size: clamp(14px, .8vw, 16px);
  }

  .footer-utility {
    min-height: clamp(130px, 7vw, 160px);
    gap: clamp(52px, 4vw, 88px);
    padding: clamp(30px, 2vw, 42px) 4vw;
  }

  .footer-support__hours {
    font-size: clamp(20px, 1.1vw, 24px);
  }

  .footer-support__phone {
    font-size: clamp(16px, .9vw, 19px);
  }

  .footer-support-brands__label {
    font-size: clamp(20px, 1.1vw, 24px);
    margin: 0;
  }

  .footer-support-brands__icons {
    gap: clamp(22px, 1.7vw, 36px);
  }

  .payment-logo--mastercard {
    width: clamp(46px, 2.5vw, 58px);
  }

  .payment-logo--visa {
    width: clamp(50px, 2.7vw, 64px);
  }

  .payment-logo--paypal {
    width: clamp(42px, 2.3vw, 54px);
  }

  .western-union-logo__mark {
    width: clamp(38px, 2.2vw, 50px);
  }

  .western-union-logo__text {
    font-size: clamp(10px, .7vw, 13px);
  }

  .footer-bottom {
    padding: clamp(20px, 1.4vw, 28px) 4vw;
  }

  .footer-bottom__copyright,
  .footer-bottom__links a,
  .footer-bottom__powered {
    font-size: clamp(12px, .72vw, 14px);
  }

  .footer-bottom__saasbed-logo {
    height: clamp(20px, 1.25vw, 27px);
  }
}

@media (max-width: 1180px) {
  .footer-main {
    padding-left: 4vw;
    padding-right: 4vw;
  }

  .footer-grid {
    grid-template-columns: 1.15fr .75fr .75fr;
    column-gap: clamp(32px, 4vw, 56px);
    row-gap: 42px;
  }

  .footer-newsletter {
    grid-column: 1 / -1;
    max-width: 720px;
  }
}

@media (max-width: 820px) {
  .footer-main {
    padding: 44px 5vw 40px;
  }

  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 34px;
    row-gap: 38px;
  }

  .footer-brand,
  .footer-newsletter {
    grid-column: 1 / -1;
  }

  .footer-brand__text,
  .footer-newsletter__text {
    max-width: 56ch;
  }

  .footer-utility {
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
    padding: 28px 5vw;
  }

  .footer-support {
    padding: 0;
    border: 0;
  }

  .footer-support-brands {
    padding: 0;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-support-brands__icons {
    flex-wrap: nowrap;
  }

  .footer-bottom {
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 12px;
    padding: 20px 5vw;
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
    padding-top: 38px;
    padding-bottom: 34px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    row-gap: 34px;
  }

  .footer-brand,
  .footer-newsletter {
    grid-column: auto;
  }

  .footer-brand__logo {
    width: clamp(96px, 30vw, 124px);
  }

  .footer-column__title {
    margin-bottom: 18px;
  }

  .footer-support-brands__icons {
    gap: 18px;
  }

  .footer-bottom__divider {
    display: none;
  }

  .footer-bottom__links {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
}
</style>
