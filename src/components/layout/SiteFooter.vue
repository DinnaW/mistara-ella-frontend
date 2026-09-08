<template>
 <footer class="site-footer">
   <div class="footer-main">
     <div class="footer-grid">
       <!-- BRAND -->
       <div class="footer-brand">
         <img
           src="/Images/mistara_white.png"
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
     <span>© {{ year }} Mistara Ella. All rights reserved.</span>


     <div class="footer-bottom__links">
       <a href="#/contact">Booking Policy</a>
       <span class="footer-bottom__divider" aria-hidden="true"></span>


       <a href="#/contact">Terms &amp; Conditions</a>
       <span class="footer-bottom__divider" aria-hidden="true"></span>


       <a href="#/contact">Contact</a>
     </div>
   </div>
 </footer>
</template>


<script setup>
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
 padding: clamp(18px, 1.2vw, 28px) 3vw clamp(12px, 1vw, 24px);
 box-sizing: border-box;
}


.footer-grid {
 display: grid;
 grid-template-columns: 1.25fr .7fr .7fr 1.25fr;
 gap: clamp(24px, 3vw, 52px);
 width: 100%;
}


/* BRAND */


.footer-brand {
 min-width: 0;
}


.footer-brand__logo {
 display: block;
 width: auto;
 height: clamp(74px, 6.4vw, 88px);
 object-fit: contain;
}


.footer-brand__text {
 max-width: 34ch;


 margin: clamp(14px, 1.5vw, 20px) 0 0;


 color: rgba(255, 255, 255, .58);


 font-family: var(--sans);
 font-size: clamp(11px, .88vw, 13px);
 font-weight: 400;
 line-height: 1.65;
}


.footer-brand__follow {
 margin: clamp(22px, 2.4vw, 34px) 0 clamp(9px, .9vw, 13px);


 color: rgba(255, 255, 255, .65);


 font-family: var(--sans);
 font-size: clamp(11px, .88vw, 13px);
 font-weight: 500;
}


.footer-brand__socials {
 display: flex;
 align-items: center;
 gap: clamp(12px, 1.1vw, 18px);
}


.footer-brand__socials a {
 display: inline-flex;
 align-items: center;
 justify-content: center;


 color: rgba(255, 255, 255, .52);
 text-decoration: none;


 font-size: clamp(15px, 1.15vw, 18px);


 transition:
   color .2s ease,
   transform .2s ease;
}


.footer-brand__socials a:hover {
 color: #b79a69;
 transform: translateY(-2px);
}


/* COLUMNS */


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
 margin: 0 0 clamp(16px, 1.6vw, 24px);


 color: #ffffff;


 font-family: var(--serif);
 font-size: clamp(15px, 1.18vw, 18px);
 font-weight: 400;
 line-height: 1.2;
}


.footer-column a {
 margin-bottom: clamp(10px, 1vw, 14px);


 color: rgba(255, 255, 255, .58);
 text-decoration: none;


 font-family: var(--sans);
 font-size: clamp(11px, .88vw, 13px);
 font-weight: 400;
 line-height: 1.4;


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
 margin: 0 0 clamp(14px, 1.5vw, 20px);


 color: rgba(255, 255, 255, .58);


 font-family: var(--sans);
 font-size: clamp(11px, .88vw, 13px);
 font-weight: 400;
 line-height: 1.55;
}


.footer-newsletter__form {
 display: flex;
 flex-direction: column;
 gap: clamp(8px, .8vw, 11px);
}


.footer-newsletter__form input {
 width: 100%;
 height: clamp(40px, 3.2vw, 48px);


 padding: 0 clamp(12px, 1.1vw, 16px);


 border: 1px solid rgba(255, 255, 255, .16);
 border-radius: 7px;


 background: rgba(255, 255, 255, .05);
 color: #ffffff;


 font-family: var(--sans);
 font-size: clamp(10px, .85vw, 12px);


 outline: none;
 box-sizing: border-box;


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
 width: 100%;
 height: clamp(40px, 3.2vw, 48px);


 border: 1px solid rgba(255, 255, 255, .58);
 border-radius: 8px;


 background: transparent;
 color: #ffffff;


 font-family: var(--sans);
 font-size: clamp(10px, .9vw, 13px);
 font-weight: 600;


 cursor: pointer;


 transition:
   border-color .2s ease,
   color .2s ease,
   background .2s ease;
}


.footer-newsletter__form button:hover {
 border-color: #ffffff;
 color: #ffffff;
 background: rgba(255, 255, 255, .06);
}


/* =========================================================
  COMPACT UTILITY BAR
  Download area removed
========================================================= */


.footer-utility {
 display: grid;
 grid-template-columns: minmax(250px, .55fr) minmax(500px, 1.45fr);
 align-items: stretch;


 width: 100%;
 min-height: clamp(86px, 7vw, 108px);


 background: #000000;


 border-top: 1px solid rgba(255, 255, 255, .12);
 border-bottom: 1px solid rgba(255, 255, 255, .12);
}


/* SUPPORT */


.footer-support {
 display: flex;
 align-items: center;


 gap: clamp(10px, 1vw, 14px);


 padding: clamp(16px, 1.7vw, 24px) 3vw;


 border-right: 1px solid rgba(255, 255, 255, .12);
 box-sizing: border-box;
}


.footer-support__icon {
 width: clamp(34px, 2.8vw, 42px);
 height: clamp(34px, 2.8vw, 42px);


 display: grid;
 place-items: center;


 flex: 0 0 auto;


 border-radius: 8px;


 background: rgba(255, 255, 255, .08);
 color: #b79a69;


 font-size: clamp(13px, 1.1vw, 16px);
}


.footer-support__text {
 display: flex;
 flex-direction: column;
 gap: 3px;
}


.footer-support__hours {
 color: rgba(255, 255, 255, .7);


 font-family: var(--sans);
 font-size: clamp(10px, .9vw, 13px);
 font-weight: 500;


 white-space: nowrap;
}


.footer-support__phone {
 color: #ffffff;
 text-decoration: none;


 font-family: var(--sans);
 font-size: clamp(10px, .9vw, 13px);
 font-weight: 600;


 white-space: nowrap;
}


/* PAYMENT */


.footer-support-brands {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;


 padding: clamp(14px, 1.5vw, 20px) clamp(24px, 3vw, 48px);


 box-sizing: border-box;
}


.footer-support-brands__label {
 margin-bottom: clamp(10px, 1vw, 14px);


 color: rgba(255, 255, 255, .68);


 font-family: var(--serif);
 font-size: clamp(14px, 1.05vw, 17px);
 font-weight: 400;
 line-height: 1;
}


.footer-support-brands__icons {
 display: flex;
 align-items: center;
 gap: clamp(12px, 1.2vw, 18px);


 width: 100%;
}


.payment-logo {
 display: block;
 width: auto;
 height: auto;


 object-fit: contain;
 flex: 0 0 auto;
}


.payment-logo--mastercard {
 width: clamp(26px, 2.1vw, 34px);
}


.payment-logo--visa {
 width: clamp(30px, 2.4vw, 38px);
}


.payment-logo--paypal {
 width: clamp(24px, 1.8vw, 34px);
}


.payment-logo--amex {
 width: clamp(38px, 3vw, 48px);
 max-height: clamp(15px, 1.2vw, 19px);
}


/* WESTERN UNION */


.western-union-logo {
 display: flex;
 align-items: center;


 gap: 4px;


 flex: 0 0 auto;
}


.western-union-logo__mark {
 display: block;


 width: clamp(22px, 1.8vw, 29px);
 height: auto;
}


.western-union-logo__text {
 display: flex;
 flex-direction: column;


 color: #ffffff;


 font-family: var(--sans);
 font-size: clamp(8px, .7vw, 10px);
 font-weight: 600;
 line-height: .9;
 letter-spacing: -.02em;
}


/* =========================================================
  BOTTOM BAR
========================================================= */


.footer-bottom {
 display: flex;
 align-items: center;
 justify-content: space-between;


 gap: clamp(16px, 2vw, 28px);


 width: 100%;


 padding: clamp(14px, 1.5vw, 20px) 3vw;


 background: #000000;


 box-sizing: border-box;
}


.footer-bottom > span {
 color: rgba(255, 255, 255, .5);


 font-family: var(--sans);
 font-size: clamp(9px, .82vw, 12px);
 font-weight: 400;


 white-space: nowrap;
}


.footer-bottom__links {
 display: flex;
 align-items: center;


 gap: clamp(12px, 1.3vw, 20px);
}


.footer-bottom__links a {
 color: rgba(255, 255, 255, .5);
 text-decoration: none;


 font-family: var(--sans);
 font-size: clamp(9px, .82vw, 12px);
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


/* =========================================================
  RESPONSIVE
========================================================= */


@media (max-width: 1050px) {
 .footer-grid {
   grid-template-columns: 1.2fr .8fr .8fr;
 }


 .footer-newsletter {
   grid-column: 1 / -1;
   max-width: 620px;
 }


 .footer-utility {
   grid-template-columns: minmax(220px, .55fr) minmax(400px, 1.45fr);
 }


 .footer-support-brands__icons {
   flex-wrap: wrap;
   row-gap: 12px;
 }
}


@media (max-width: 760px) {
 .footer-main {
   padding-left: 5vw;
   padding-right: 5vw;
 }


 .footer-grid {
   grid-template-columns: repeat(2, minmax(0, 1fr));
 }


 .footer-brand,
 .footer-newsletter {
   grid-column: 1 / -1;
 }


 .footer-utility {
   grid-template-columns: 1fr;
 }


 .footer-support {
   padding-left: 5vw;
   padding-right: 5vw;


   border-right: 0;
   border-bottom: 1px solid rgba(255, 255, 255, .12);
 }


 .footer-support-brands {
   padding-left: 5vw;
   padding-right: 5vw;
 }


 .footer-bottom {
   padding-left: 5vw;
   padding-right: 5vw;


   flex-direction: column;
   align-items: flex-start;
 }


 .footer-bottom__links {
   flex-wrap: wrap;
 }
}


@media (max-width: 520px) {
 .footer-grid {
   grid-template-columns: 1fr;
 }


 .footer-brand,
 .footer-newsletter {
   grid-column: auto;
 }


 .footer-support-brands__icons {
   gap: 14px;
 }


 .footer-bottom__divider {
   display: none;
 }


 .footer-bottom__links {
   align-items: flex-start;
   flex-direction: column;
   gap: 8px;
 }
}
</style>
