<template>



<MainLayout>

   <!-- HERO -->

   <section class="gallery-full-hero">

     <div

       class="gallery-full-hero__image"

       :style="{ backgroundImage: `url(${galleryHeroImage})` }"

     >

       <div class="gallery-full-hero__overlay"></div>



       <div class="gallery-full-hero__content">

         <p class="gallery-full-hero__eyebrow">Discover Mistara Ella</p>

         <h1 class="gallery-full-hero__title">Your Escape Awaits</h1>

       </div>

     </div>

   </section>







  <!-- BOOKING CTA -->



  <section class="gallery-booking-section">



    <div class="gallery-booking-card">



      <div class="gallery-booking-eyebrow gallery-room-eyebrow">



        <span class="gallery-room-eyebrow-line"></span>



        <span>Your Mistara Stay</span>



      </div>



      <h2 class="gallery-booking-title">



        <span>Escape to the quiet beauty of Ella,</span>



        <span class="gallery-booking-title-soft">



          where peaceful stays, breathtaking views,



          and unforgettable moments await.



        </span>



      </h2>



      <RouterLink to="/contact" class="gallery-booking-button gallery-room-button">



        <span class="gallery-booking-button__icon gallery-room-button-icon" aria-hidden="true">



          <ArrowRight :size="12" stroke-width="1.5" />



        </span>



        <span class="gallery-booking-button__text">Book Now</span>



      </RouterLink>



    </div>



  </section>



  <!-- HIGHLIGHT -->



  <section class="gallery-highlight-section">



    <div class="site-shell gallery-highlight-shell">



      <div class="gallery-highlight">



        <div class="gallery-highlight__content">



          <div class="gallery-highlight__eyebrow gallery-room-eyebrow">



            <span class="gallery-room-eyebrow-line"></span>



            <span>Discover Mistara Ella</span>



          </div>



          <h2 class="gallery-highlight__title">



            Explore the Best<br />



            Moments for Your<br />



            Perfect Getaway



          </h2>



          <p class="gallery-highlight__text">



            Find beautiful spaces and peaceful views designed for unforgettable stays.



            Explore Mistara Ella before you arrive and experience the atmosphere that



            makes every stay memorable.



          </p>



          <a href="#mistara-gallery" class="gallery-highlight__link">



            <span>View All</span>



            <ArrowUpRight :size="16" />



          </a>



        </div>



        <div class="gallery-highlight__visual">



          <img



            :src="featureImage"



            alt="Mistara Ella Gallery Feature"



            class="gallery-highlight__image"



          />



          <div class="gallery-highlight__card">



            <div class="gallery-highlight__card-main">



              <h3 class="gallery-highlight__card-title">



                Explore the Scenic Beauty of Mistara Ella



              </h3>



              <p class="gallery-highlight__card-text">



                Discover the charm of Mistara Ella through peaceful rooms,



                beautiful mountain surroundings, and quiet spaces designed



                for a memorable stay.



              </p>



            </div>



            <div class="gallery-highlight__card-footer">



              <a href="#mistara-gallery" class="gallery-highlight__button gallery-room-button">



                <span class="gallery-highlight__button-icon gallery-room-button-icon" aria-hidden="true">



                  <ArrowRight :size="12" stroke-width="1.5" />



                </span>



                <span class="gallery-highlight__button-text">Start Exploring</span>



              </a>



            </div>



          </div>



        </div>



      </div>



    </div>



  </section>



  <!-- CENTERED TABBED GALLERY -->



  <section id="mistara-gallery" class="mistara-gallery-section">



    <div class="mistara-gallery-shell">



      <div class="mistara-gallery-heading">



        <div class="mistara-gallery-eyebrow gallery-room-eyebrow">



          <span class="gallery-room-eyebrow-line"></span>



          <span>Explore Mistara Ella</span>



        </div>



        <h2>



          Comfort, privacy, and



          <em>breathtaking views</em>



          <br>in the heart of Ella



        </h2>



        <p class="mistara-gallery-intro">



          Explore the rooms, scenery, dining and experiences that shape a stay at Mistara Ella.



        </p>



      </div>



      <div class="mistara-gallery-tabs" role="tablist" aria-label="Gallery categories">



        <button



          v-for="tab in tabs"



          :key="tab"



          class="mistara-gallery-tab"



          :class="{ active: activeTab === tab }"



          type="button"



          role="tab"



          :aria-selected="activeTab === tab"



          @click="activeTab = tab"



        >



          {{ tab }}



        </button>



      </div>



      <TransitionGroup name="gallery-fade" tag="div" class="mistara-gallery-grid">



        <article



          v-for="item in currentGallery"



          :key="item.id"



          class="mistara-gallery-item"



        >



          <img :src="item.image" :alt="item.alt" loading="lazy" />



          <div class="mistara-gallery-item__overlay">



            <span>{{ item.category }}</span>



            <h3>{{ item.title }}</h3>



          </div>



        </article>



      </TransitionGroup>



    </div>



  </section>



  <!-- TIMELESS MISTARA STORY -->



  <section class="mistara-timeless-section">



    <div class="mistara-timeless">



      <div class="mistara-timeless__intro">



        <div class="mistara-timeless__eyebrow gallery-room-eyebrow">



          <span class="gallery-room-eyebrow-line"></span>



          <span>Through the Lens</span>



        </div>



        <h2 class="mistara-timeless__title">



          A Visual Story of



Mistara  <em>Ella</em>



        </h2>



        <p class="mistara-timeless__intro-text">



          Step inside Mistara Ella through a collection of moments that capture our rooms, mountain views, quiet spaces and the details that shape every stay.



        </p>



      </div>



      <div class="mistara-timeless__grid">



        <article class="mistara-timeless__item mistara-timeless__item--left">



          <figure class="mistara-timeless__media">



            <img



              :src="timelessImageOne"



              alt="Peaceful outdoor setting inspired by Mistara Ella"



              loading="lazy"



            />



          </figure>



          <h3>Spaces to Remember</h3>



          <p>



            Discover thoughtfully designed rooms and interiors where natural textures, warm details and peaceful comfort come together.



          </p>



        </article>



        <article class="mistara-timeless__item mistara-timeless__item--center">



          <figure class="mistara-timeless__media">



            <img



              :src="timelessImageTwo"



              alt="Quiet travel moment surrounded by nature"



              loading="lazy"



            />



          </figure>



          <h3>Moments Worth Capturing</h3>



          <p>



            From slow mornings to quiet evenings, explore the small moments and details that make a stay at Mistara Ella memorable.



          </p>



        </article>



        <article class="mistara-timeless__item mistara-timeless__item--right">



          <figure class="mistara-timeless__media">



            <img



              :src="timelessImageThree"



              alt="Green hills and peaceful landscape around Ella"



              loading="lazy"



            />



          </figure>



          <h3>Views of Ella</h3>



          <p>



            Experience the misty hills, green landscapes and changing light that surround Mistara and define the beauty of Ella.



          </p>



        </article>



      </div>



    </div>



  </section>



</MainLayout>



</template>



<script setup>



import { computed, ref } from 'vue'



import { ArrowRight, ArrowUpRight } from 'lucide-vue-next'



import MainLayout from '../components/layout/MainLayout.vue'



const baseUrl = import.meta.env.BASE_URL



const galleryHeroImage =

 `${baseUrl}Images/Home/view.jpeg`











const featureImage =



`${baseUrl}Images/Home/outside1.jpeg`



const timelessImageOne =



`${baseUrl}Images/Home/amenities/lounge.jpeg`



const timelessImageTwo =



`${baseUrl}Images/Home/amenities/parking.png`



const timelessImageThree =



`${baseUrl}Images/Home/amenities/pool.jpg`



const tabs = ['All', 'Rooms', 'Views', 'Dining', 'Experiences']



const activeTab = ref('All')



const gallerySets = {



All: [



  { id: 'all-1', category: 'Rooms', title: 'A Private Escape', image: `${baseUrl}Images/Home/bed2.jpeg`, alt: 'Luxury hotel exterior and pool' },



  { id: 'all-2', category: 'Experiences', title: 'Roads Worth Following', image: `${baseUrl}Images/Home/hero1.jpg`, alt: 'Scenic road through mountain landscape' },



  { id: 'all-3', category: 'Dining', title: 'Fresh Flavours', image: `${baseUrl}Images/Home/amenities/breakfast.jpeg`, alt: 'Fresh colourful meal' },



  { id: 'all-4', category: 'Views', title: 'Layers of Ella', image: `${baseUrl}Images/Home/view.jpeg`, alt: 'Layered mountain view at sunrise' },



  { id: 'all-5', category: 'Rooms', title: 'Natural Textures', image: `${baseUrl}Images/Home/living.jpeg`, alt: 'Calm modern living room interior' },



  { id: 'all-6', category: 'Views', title: 'Mountain Silence', image: `${baseUrl}Images/Banner/counter.jpg`, alt: 'Turquoise mountain lake and peaks' },



  { id: 'all-7', category: 'Dining', title: 'Evenings at the Table', image: `${baseUrl}Images/Home/amenities/dining.jpeg`, alt: 'Restaurant dining experience' },



],



Rooms: [



  { id: 'rooms-1', category: 'Rooms', title: 'Poolside Calm', image: `${baseUrl}Images/Home/bed2.jpeg`, alt: 'Hotel room and pool area' },



  { id: 'rooms-2', category: 'Rooms', title: 'Quiet Interiors', image: `${baseUrl}Images/Home/bed1.jpeg`, alt: 'Modern peaceful interior' },



  { id: 'rooms-3', category: 'Rooms', title: 'Rest in Comfort', image: `${baseUrl}Images/Home/bed3.jpeg`, alt: 'Comfortable hotel bedroom' },



  { id: 'rooms-4', category: 'Rooms', title: 'Warm Details', image: `${baseUrl}Images/Banner/pool.jpeg`, alt: 'Warm room details' },



  { id: 'rooms-5', category: 'Rooms', title: 'Natural Light', image: `${baseUrl}Images/Banner/amenities.jpeg`, alt: 'Bright hotel room' },



  { id: 'rooms-7', category: 'Rooms', title: 'A Place to Unwind', image: `${baseUrl}Images/Banner/roomOut.jpeg`, alt: 'Elegant interior seating area' },



],



Views: [



  { id: 'views-1', category: 'Views', title: 'Ella at First Light', image: `${baseUrl}Images/Facility/wellness5.jpeg`, alt: 'Mountain landscape at sunrise' },



  { id: 'views-2', category: 'Views', title: 'Mountain Silence', image: `${baseUrl}Images/Facility/wellness1.jpg`, alt: 'Mountain lake and peaks' },



  { id: 'views-3', category: 'Views', title: 'Green Horizons', image: `${baseUrl}Images/Home/amenities/view.jpg`, alt: 'Green countryside view' },



  { id: 'views-6', category: 'Views', title: 'Wild Landscapes', image: `${baseUrl}Images/Home/outside1.jpeg`, alt: 'Wild natural landscape' },



  { id: 'views-7', category: 'Views', title: 'Endless Distance', image: `${baseUrl}Images/Home/outside2.jpeg`, alt: 'Road through mountain landscape' },



],



Dining: [



  { id: 'dining-2', category: 'Dining', title: 'Evenings at the Table', image: `${baseUrl}Images/Facility/buffet.png`, alt: 'Restaurant dining table' },



  { id: 'dining-4', category: 'Dining', title: 'A Table for Two', image: `${baseUrl}Images/Facility/food1.jpeg`, alt: 'Restaurant table interior' },



  { id: 'dining-5', category: 'Dining', title: 'Simple Ingredients', image: `${baseUrl}Images/Facility/food2.jpeg`, alt: 'Fresh ingredients on table' },



  { id: 'dining-6', category: 'Dining', title: 'Made to Share', image: `${baseUrl}Images/Facility/food3.jpeg`, alt: 'Shared food dishes' },



  { id: 'dining-7', category: 'Dining', title: 'Coffee and Quiet', image: `${baseUrl}Images/Home/amenities/breakfast.jpeg`, alt: 'Coffee served on table' },



],



Experiences: [



  { id: 'exp-1', category: 'Experiences', title: 'Roads Worth Following', image: `${baseUrl}Images/Facility/food1.jpeg`, alt: 'Scenic road through mountains' },



  { id: 'exp-2', category: 'Experiences', title: 'Walk Into the Green', image: `${baseUrl}Images/Facility/wellness1.jpg`, alt: 'Walking through natural landscape' },



  { id: 'exp-3', category: 'Experiences', title: 'A Day Outside', image: `${baseUrl}Images/Home/amenities/parking.png`, alt: 'Outdoor mountain experience' },



  { id: 'exp-4', category: 'Experiences', title: 'Find Your Path', image: `${baseUrl}Images/Home/amenities/coffee.jpeg`, alt: 'Scenic natural landscape' },



  { id: 'exp-5', category: 'Experiences', title: 'Into the Wild', image: `${baseUrl}Images/Home/amenities/family.jpeg`, alt: 'Mountain lake adventure' },



  { id: 'exp-6', category: 'Experiences', title: 'Slow Exploration', image: `${baseUrl}Images/Home/amenities/pool.jpg`, alt: 'Countryside outdoor experience' },



  { id: 'exp-7', category: 'Experiences', title: 'Beyond the Stay', image: `${baseUrl}Images/Facility/wellness5.jpeg`, alt: 'Mountain landscape experience' },



],



}



const currentGallery = computed(() => gallerySets[activeTab.value])



</script>



<style>



@import url('https://fonts.googleapis.com/css2?family=Marcellus&display=swap');



/* HERO */



/* MISTARA STORY */



.gallery-story-section {



width:100%;



padding:5% 2%;



background:#ffffff;



color:#17281f;



}



.gallery-story {



width:100%;



display:grid;



grid-template-columns:minmax(0,1.12fr) minmax(220px,.55fr) minmax(220px,.55fr);



align-items:center;



gap:clamp(28px,4vw,72px);



}



.gallery-story__content {



width:min(100%,620px);



}



.gallery-story__eyebrow {



justify-content:flex-start;



margin-bottom:clamp(26px,2.6vw,42px);



}



.gallery-story__title {



margin:0;



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(34px,3vw,52px);



font-weight:400;



line-height:1.08;



letter-spacing:-.025em;



}



.gallery-story__title em {



font-family:inherit;



font-weight:inherit;



font-style:italic;



}



.gallery-story__subtitle {



max-width:34rem;



margin:clamp(24px,2vw,32px) 0 0;



color:#26352e;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(20px,1.45vw,25px);



font-weight:400;



line-height:1.35;



}



.gallery-story__text {



max-width:36rem;



margin:clamp(18px,1.6vw,26px) 0 0;



color:#5a655f;



font-family:var(--sans,'Inter',Arial,sans-serif);



font-size:clamp(13px,.96vw,15px);



font-weight:300;



line-height:1.8;



letter-spacing:-.012em;



}



.gallery-story__signature {



display:flex;



align-items:center;



gap:14px;



margin-top:clamp(30px,2.8vw,44px);



}



.gallery-story__mark {



width:54px;



height:54px;



flex:0 0 54px;



display:grid;



place-items:center;



border:1px solid rgba(23,40,31,.18);



border-radius:50%;



background:#f3efe7;



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:22px;



}



.gallery-story__signature-copy {



display:flex;



flex-direction:column;



gap:4px;



}



.gallery-story__signature-copy strong {



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:18px;



font-weight:400;



}



.gallery-story__signature-copy small {



color:#8da79b;



font-family:var(--sans,'Inter',Arial,sans-serif);



font-size:11px;



letter-spacing:.05em;



}



.gallery-story__script {



margin-left:clamp(10px,2vw,28px);



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(24px,2vw,32px);



font-style:italic;



}



.gallery-story__media {



width:100%;



margin:0;



overflow:hidden;



background:#e6e1d8;



}



.gallery-story__media img {



width:100%;



height:100%;



display:block;



object-fit:cover;



transition:transform .8s cubic-bezier(.22,1,.36,1);



}



.gallery-story__media:hover img {



transform:scale(1.035);



}



.gallery-story__media--primary {



aspect-ratio:.72 / 1;



}



.gallery-story__media--secondary {



aspect-ratio:.72 / 1;



transform:translateY(clamp(24px,4vw,58px));



}



@media (max-width:1024px) {



.gallery-story {



  grid-template-columns:1fr .72fr .72fr;



  gap:3vw;



}



.gallery-story__title {



  font-size:clamp(32px,4vw,44px);



}



}



@media (max-width:760px) {



.gallery-story-section {



  padding:10vw 5vw;



}



.gallery-story {



  grid-template-columns:1fr 1fr;



  gap:14px;



}



.gallery-story__content {



  grid-column:1 / -1;



  width:100%;



  margin-bottom:8vw;



}



.gallery-story__eyebrow {



  gap:14px;



  margin-bottom:8vw;



  font-size:11px;



}



.gallery-story__title {



  max-width:520px;



  font-size:36px;



  line-height:1.1;



}



.gallery-story__subtitle {



  margin-top:6vw;



  font-size:20px;



}



.gallery-story__text {



  margin-top:5vw;



  font-size:13px;



  line-height:1.72;



}



.gallery-story__signature {



  margin-top:7vw;



}



.gallery-story__mark {



  width:48px;



  height:48px;



  flex-basis:48px;



}



.gallery-story__script {



  font-size:24px;



}



.gallery-story__media--secondary {



  transform:translateY(8vw);



}



}



@media (max-width:520px) {



.gallery-story {



  grid-template-columns:1fr;



}



.gallery-story__media--secondary {



  transform:none;



}



.gallery-story__signature {



  flex-wrap:wrap;



}



}



/* HIGHLIGHT */



.gallery-highlight-section { width: 100%; padding: 5vh 3vw; background: #f4e8c9; font-family: 'Marcellus', serif; }



.gallery-highlight-shell { width: 100%; max-width: none; margin: 0; padding: 0; }



.gallery-highlight { width: 100%; display: grid; grid-template-columns: .95fr 1.05fr; gap: clamp(3rem, 6vw, 7rem); align-items: center; }



.gallery-highlight__content { width: 100%; max-width: 38rem; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; }



.gallery-highlight__eyebrow { margin: 0 0 clamp(1rem, 1.4vw, 1.4rem); color: #b78b5a; font-family: 'Marcellus', serif; font-size: clamp(.68rem, .72vw, .78rem); font-weight: 400; line-height: 1; letter-spacing: .14em; text-transform: uppercase; }



.gallery-highlight__title { margin: 0; color: #18211c; font-family: 'Marcellus', serif; font-size: clamp(34px, 3vw, 52px); font-weight: 400; line-height: 1.08; letter-spacing: -.025em; }



.gallery-highlight__text { max-width: 34rem; margin: clamp(1.5rem, 2vw, 2rem) 0 0; color: #4f5b55; font-family: 'Marcellus', serif; font-size: clamp(.82rem, .9vw, .95rem); font-weight: 400; line-height: 1.7; }



.gallery-highlight__link { display: inline-flex; align-items: center; gap: .45rem; margin-top: clamp(3rem, 5vw, 5rem); padding-bottom: .3rem; border-bottom: 1px solid #18211c; color: #18211c; font-family: 'Marcellus', serif; font-size: clamp(.8rem, .85vw, .9rem); text-decoration: none; transition: gap .25s ease, color .25s ease, border-color .25s ease; }



.gallery-highlight__link:hover { gap: .7rem; color: #b78b5a; border-color: #b78b5a; }



.gallery-highlight__visual { position: relative; width: 100%; min-height: clamp(34rem, 52vw, 46rem); overflow: hidden; border-radius: 0; background: #e6e4df; }



.gallery-highlight__image { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: cover; object-position: center; }



.gallery-highlight__card { position: absolute; z-index: 3; left: 4%; right: 4%; bottom: 4%; padding: clamp(1.6rem, 2.2vw, 2.2rem); overflow: hidden; border: 1px solid rgba(255,255,255,.32); border-radius: 0; background: rgba(39,53,46,.30); box-shadow: 0 .8rem 2rem rgba(15,25,20,.10); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }



.gallery-highlight__card-title { max-width: 38rem; margin: 0; color: #fff; font-family: 'Marcellus', serif; font-size: clamp(30px, 2vw, 45px); font-weight: 400; line-height: 1.15; letter-spacing: -.02em; }



.gallery-highlight__card-text { max-width: 36rem; margin: clamp(.8rem, 1vw, 1rem) 0 0; padding-bottom: clamp(1.5rem, 2vw, 2rem); color: rgba(255,255,255,.82); font-family: 'Marcellus', serif; font-size: clamp(.75rem, .8vw, .88rem); line-height: 1.55; }



.gallery-highlight__card-footer { display: flex; align-items: center; justify-content: flex-end; padding-top: clamp(1rem, 1.4vw, 1.4rem); border-top: 1px solid rgba(255,255,255,.18); }



.gallery-highlight__button { min-height: clamp(3rem, 3.3vw, 3.5rem); display: inline-flex; align-items: center; justify-content: center; gap: .65rem; padding: 0 clamp(1.2rem, 1.8vw, 1.8rem); border-radius: 100px; background: #fbfaf7; color: #18211c; font-family: 'Marcellus', serif; font-size: clamp(.75rem, .8vw, .88rem); text-decoration: none; white-space: nowrap; transition: background .25s ease, color .25s ease, transform .25s ease; }



.gallery-highlight__button:hover { background: #b78b5a; color: #fff; transform: translateY(-2px); }



/* TABBED GALLERY */



.mistara-gallery-section { width: 100%; padding: 5vh 3vw; background: #ffffff; font-family: 'Marcellus', serif; }



.mistara-gallery-shell { width: 100%; max-width: none; margin: 0; }



.mistara-gallery-heading { max-width: 82rem; margin: 0 auto clamp(2rem, 3.5vw, 3.5rem); text-align: center; }



.mistara-gallery-eyebrow { margin: 0 0 clamp(.9rem, 1.2vw, 1.2rem); color: #b78b5a; font-family: 'Marcellus', serif; font-size: clamp(.68rem, .72vw, .78rem); font-weight: 400; letter-spacing: .16em; text-transform: uppercase; }



.mistara-gallery-heading h2 { max-width: 78rem; margin: 0 auto; color: #18211c; font-family: 'Marcellus', serif; font-size: clamp(34px, 3vw, 52px); font-weight: 400; line-height: 1.08; letter-spacing: -.03em; }



.mistara-gallery-heading h2 em { font-family: 'Marcellus', serif; font-weight: 400; font-style: italic; }



.mistara-gallery-intro { max-width: 40rem; margin: clamp(1rem, 1.5vw, 1.5rem) auto 0; color: #4f5b55; font-family: 'Marcellus', serif; font-size: clamp(.84rem, .92vw, .98rem); line-height: 1.7; }



.mistara-gallery-tabs { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: .65rem; margin: 0 auto clamp(2rem, 3vw, 3rem); }



.mistara-gallery-tab { min-width: clamp(7rem, 8vw, 9rem); min-height: 52px; padding: 0 1.35rem; border: 0; border-radius: 0; background: #ebe9d8; color: #4f5b55; font-family: 'Marcellus', serif; font-size: clamp(.78rem, .85vw, .92rem); font-weight: 400; letter-spacing: .04em; text-transform: uppercase; transition: background .25s ease, color .25s ease; }



.mistara-gallery-tab:hover { background: #dfe2cf; color: #1d3028; }



.mistara-gallery-tab.active { background: #496f52; color: #fff; }



/* Same full 7-image collage for ALL tabs */



.mistara-gallery-grid { width: 100%; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); grid-template-rows: repeat(5, clamp(95px, 8.2vw, 145px)); gap: clamp(.6rem, .75vw, .9rem); }



.mistara-gallery-item { position: relative; min-width: 0; min-height: 0; overflow: hidden; border-radius: 0; background: #e6e1d8; cursor: pointer; }.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 4 / 5; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(4) { grid-column: 5 / 6; grid-row: 1 / 6; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 6; }



.mistara-gallery-item:nth-child(6) { grid-column: 3 / 5; grid-row: 3 / 6; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 2; grid-row: 4 / 6; }



.mistara-gallery-item img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease, filter .6s ease; }



.mistara-gallery-item:hover img { transform: scale(1.035); filter: brightness(.84); }



.mistara-gallery-item__overlay { position: absolute; z-index: 2; left: 0; right: 0; bottom: 0; padding: clamp(1rem, 1.35vw, 1.4rem); background: linear-gradient(0deg, rgba(15,25,20,.78), rgba(15,25,20,0)); opacity: 0; transform: translateY(8px); transition: opacity .3s ease, transform .3s ease; }



.mistara-gallery-item:hover .mistara-gallery-item__overlay { opacity: 1; transform: translateY(0); }



.mistara-gallery-item__overlay span { display: block; margin-bottom: .35rem; color: #e6c9a5; font-family: 'Marcellus', serif; font-size: .65rem; letter-spacing: .12em; text-transform: uppercase; }



.mistara-gallery-item__overlay h3 { margin: 0; color: #fff; font-family: 'Marcellus', serif; font-size: clamp(1.05rem, 1.25vw, 1.4rem); font-weight: 400; line-height: 1.15; }



.gallery-fade-enter-active, .gallery-fade-leave-active { transition: opacity .25s ease, transform .25s ease; }



.gallery-fade-enter-from, .gallery-fade-leave-to { opacity: 0; transform: scale(.985); }



/* Gallery Booking CTA */



.gallery-booking-section {



position:relative;



left:50%;



width:100vw;



margin-left:-50vw;



padding:5% 0;



overflow:hidden;



background:#ffffff;



font-family:'Marcellus',serif;



}



.gallery-booking-card {



width:100%;



max-width:none;



min-height:clamp(22rem,42vh,32rem);



display:flex;



flex-direction:column;



align-items:center;



justify-content:center;



padding:0 2%;



border:0;



border-radius:0;



background:#ffffff;



text-align:center;



}



.gallery-booking-eyebrow { margin: 0 0 clamp(1.2rem, 1.7vw, 1.7rem); color: #b78b5a; font-family: 'Marcellus', serif; font-size: clamp(.65rem, .7vw, .76rem); font-weight: 400; letter-spacing: .16em; text-transform: uppercase; }



.gallery-booking-title { max-width: clamp(45rem, 72vw, 82rem); margin: 0 auto; color: #26352e; font-family: 'Marcellus', serif; font-size: clamp(34px, 3vw, 52px); font-weight: 400; line-height: 1.3; letter-spacing: -.025em; }



.gallery-booking-title span { display: inline; }



.gallery-booking-title-soft { color: #92978f; }



.gallery-booking-button { min-height: clamp(3.2rem, 3.6vw, 3.7rem); display: inline-flex; align-items: center; justify-content: center; gap: .7rem; margin-top: clamp(2rem, 3vw, 3rem); padding: 0 clamp(1.5rem, 2vw, 2rem); border: 1px solid #1d3028; border-radius: 100px; background: #1d3028; color: #fff; font-family: 'Marcellus', serif; font-size: clamp(.78rem, .85vw, .92rem); text-decoration: none; transition: background .3s ease, color .3s ease, transform .3s ease; }



.gallery-booking-button:hover { background: #b78b5a; border-color: #b78b5a; color: #fff; transform: translateY(-2px); }



.gallery-highlight__button { min-width: 180px; min-height: 48px; display: inline-flex; align-items: center; justify-content: space-between; gap: 12px; padding: 5px 5px 5px 18px; border: 0; border-radius: 100px; background: #ffffff; color: #183b2f; font-family: 'Marcellus', serif; text-decoration: none; white-space: nowrap; transition: .25s ease; }



.gallery-highlight__button-text { font-family: 'Marcellus', serif; font-size: 13px; font-weight: 400; line-height: 1; }



.gallery-highlight__button-icon { width: 38px; height: 38px; flex: 0 0 38px; display: grid; place-items: center; border-radius: 50%; background: #e8672d; color: #ffffff; transition: .25s ease; }



.gallery-highlight__button:hover { background: #ffffff; color: #183b2f; transform: translateY(-2px); }



.gallery-highlight__button:hover .gallery-highlight__button-icon { background: #d95c24; transform: translateX(2px); }



/* BOOK NOW */



.gallery-booking-card .gallery-booking-button { min-width: 155px; min-height: 48px; display: inline-flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: clamp(1.8rem, 2.5vw, 2.5rem); padding: 5px 5px 5px 18px; border: 0; border-radius: 100px; background: #0f4a38; color: #ffffff; font-family: 'Marcellus', serif; text-decoration: none; white-space: nowrap; visibility: visible; opacity: 1; transition: .25s ease; }



.gallery-booking-button__text { font-family: 'Marcellus', serif; font-size: 13px; font-weight: 400; line-height: 1; color: #0f4a38; }



.gallery-booking-button__icon { width: 38px; height: 38px; flex: 0 0 38px; display: grid; place-items: center; border-radius: 50%; background: #e8672d; color: #ffffff; transition: .25s ease; }



.gallery-booking-card .gallery-booking-button:hover { background: #163f34; color: #ffffff; transform: translateY(-2px); }



.gallery-booking-card .gallery-booking-button:hover .gallery-booking-button__icon { background: #0f4a38; transform: translateX(2px); }



/* MOBILE */



@media (max-width: 760px) {



.gallery-highlight__button { min-width: 165px; min-height: 44px; padding: 4px 4px 4px 15px; }



.gallery-highlight__button-icon { width: 34px; height: 34px; flex-basis: 34px; }



.gallery-highlight__button-text { font-size: 12px; }



.gallery-booking-card .gallery-booking-button { min-width: 145px; min-height: 44px; padding: 4px 4px 4px 15px; }



.gallery-booking-button__icon { width: 34px; height: 34px; flex-basis: 34px; }



.gallery-booking-button__text { font-size: 12px; color: #0f4a38;}



}



@media (max-width: 760px) {



.gallery-booking-section { padding:5% 0; }



.gallery-booking-card { min-height:26rem; padding:0 2%; }



.gallery-booking-title { max-width:32rem; font-size:clamp(2.1rem,9vw,3.2rem); }



.gallery-booking-button { margin-top:2rem; }



}



@media (max-width: 1024px) {



.mistara-gallery-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-template-rows: repeat(6, clamp(90px, 11vw, 125px)); }



.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 4 / 5; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(4) { grid-column: 4 / 5; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(6) { grid-column: 3 / 4; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 2; grid-row: 4 / 7; }



}



@media (max-width: 760px) {



.mistara-gallery-section { padding: 5vh 3vw; }



.mistara-gallery-heading { margin-bottom: 2rem; }



.mistara-gallery-heading h2 { font-size: clamp(2.35rem, 10vw, 3.5rem); }



.mistara-gallery-tabs { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: .35rem; scrollbar-width: none; }



.mistara-gallery-tabs::-webkit-scrollbar { display: none; }



.mistara-gallery-tab { flex: 0 0 auto; min-width: 7.5rem; min-height: 48px; }



.mistara-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(10, clamp(90px, 24vw, 130px)); gap: .55rem; }



.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 2 / 3; grid-row: 3 / 5; }



.mistara-gallery-item:nth-child(4) { grid-column: 1 / 2; grid-row: 4 / 8; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 5 / 8; }



.mistara-gallery-item:nth-child(6) { grid-column: 1 / 3; grid-row: 8 / 10; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 3; grid-row: 10 / 11; }



}



@media (max-width: 480px) {



.mistara-gallery-item__overlay { display: none; }



}



@media (max-width: 1024px) {



.mistara-gallery-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-template-rows: repeat(6, clamp(90px, 11vw, 125px)); }



.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 4 / 5; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(4) { grid-column: 4 / 5; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(6) { grid-column: 3 / 4; grid-row: 3 / 7; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 2; grid-row: 4 / 7; }



.mistara-gallery-grid--filtered { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; }



}



@media (max-width: 760px) {



.mistara-gallery-section { padding: 5vh 3vw; }



.mistara-gallery-heading { margin-bottom: 2rem; }



.mistara-gallery-heading h2 { font-size: clamp(2.35rem, 10vw, 3.5rem); }



.mistara-gallery-tabs { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; padding-bottom: .35rem; scrollbar-width: none; }



.mistara-gallery-tabs::-webkit-scrollbar { display: none; }



.mistara-gallery-tab { flex: 0 0 auto; min-width: 7.5rem; min-height: 48px; }



.mistara-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: repeat(10, clamp(90px, 24vw, 130px)); gap: .55rem; }



.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 2 / 3; grid-row: 3 / 5; }



.mistara-gallery-item:nth-child(4) { grid-column: 1 / 2; grid-row: 4 / 8; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 5 / 8; }



.mistara-gallery-item:nth-child(6) { grid-column: 1 / 3; grid-row: 8 / 10; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 3; grid-row: 10 / 11; }



.mistara-gallery-grid--filtered { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: none; }



}



@media (max-width: 480px) {



.mistara-gallery-tabs { justify-content: flex-start; }



.mistara-gallery-grid--filtered { grid-template-columns: 1fr; }



.mistara-gallery-item__overlay { display: none; }



}



@media (max-width: 1024px) {



.gallery-highlight { grid-template-columns: .9fr 1.1fr; gap: 4vw; }



.gallery-highlight__title { font-size: clamp(2.6rem, 5vw, 3.8rem); }



.gallery-highlight__visual { min-height: clamp(32rem, 62vw, 40rem); }



.mistara-gallery-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: clamp(95px, 12vw, 130px); }



}



@media (max-width: 760px) {



.gallery-highlight-section, .mistara-gallery-section { padding: 5vh 3vw; }



.gallery-highlight { grid-template-columns: 1fr; gap: 3rem; }



.gallery-highlight__content { max-width: 100%; }



.gallery-highlight__title br { display: none; }



.gallery-highlight__title { max-width: 32rem; font-size: clamp(2.5rem, 10vw, 3.6rem); }



.gallery-highlight__link { margin-top: 2rem; }



.gallery-highlight__visual { min-height: 34rem; }



.gallery-highlight__card { left: 3%; right: 3%; bottom: 3%; padding: 1.3rem; }



.gallery-highlight__card-text { padding-bottom: 1.2rem; }



.gallery-highlight__card-footer { padding-top: 1rem; }



.mistara-gallery-heading { grid-template-columns: 1fr; gap: 1.25rem; }



.mistara-gallery-intro { max-width: 30rem; }



.mistara-gallery-tabs { overflow-x: auto; flex-wrap: nowrap; scrollbar-width: none; padding-bottom: 1rem; }



.mistara-gallery-tabs::-webkit-scrollbar { display: none; }



.mistara-gallery-tab { flex: 0 0 auto; }



.mistara-gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: clamp(105px, 27vw, 145px); }



.mistara-gallery-item--wide, .mistara-gallery-item--large { grid-column: span 2; }



}



@media (max-width: 480px) {



.mistara-gallery-grid { grid-template-columns: 1fr 1fr; gap: .5rem; }



.mistara-gallery-item__overlay { display: none; }



}



/* =========================================================



 GALLERY — ROOM SECTION EYEBROWS + BUTTONS



 Exact visual treatment copied from the current RoomsView.



========================================================= */



.gallery-room-eyebrow {



display:flex;



align-items:center;



gap:20px;



margin:0 0 clamp(34px,3.2vw,52px);



color:#26352e;



font-family:var(--sans,'Inter',Arial,sans-serif);



font-size:clamp(11px,.82vw,13px);



font-weight:400;



line-height:1;



letter-spacing:.055em;



text-transform:none;



}



.gallery-room-eyebrow-line {



width:clamp(54px,5vw,82px);



height:1px;



flex:0 0 auto;



background:rgba(23,45,36,.55);



}



.gallery-booking-card .gallery-room-eyebrow,



.mistara-gallery-heading .gallery-room-eyebrow {



justify-content:center;



}



.gallery-highlight__content .gallery-room-eyebrow {



justify-content:flex-start;



}



.gallery-room-button {



width:max-content;



min-width:0;



min-height:0;



display:inline-flex;



align-items:center;



justify-content:flex-start;



gap:22px;



padding:0;



border:0 !important;



border-radius:0;



background:transparent !important;



box-shadow:none !important;



color:#17281f !important;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(17px,1.4vw,22px);



font-weight:400;



line-height:1;



text-decoration:none;



white-space:nowrap;



transform:none;



}



.gallery-room-button-icon {



width:clamp(48px,3.5vw,58px);



height:clamp(48px,3.5vw,58px);



flex:0 0 auto;



display:grid;



place-items:center;



border:1px solid rgba(23,40,31,.45);



border-radius:50%;



background:transparent;



color:#17281f;



transition:background .3s ease,color .3s ease,border-color .3s ease,transform .3s ease;



}



.gallery-room-button:hover,



.gallery-room-button:focus-visible {



background:transparent !important;



color:#17281f !important;



border-color:transparent !important;



box-shadow:none !important;



transform:none;



}



.gallery-room-button:hover .gallery-room-button-icon,



.gallery-room-button:focus-visible .gallery-room-button-icon {



border-color:#17281f;



background:#17281f;



color:#fff;



transform:translateX(3px);



}



.gallery-room-button:focus-visible {



outline:2px solid #17281f;



outline-offset:6px;



}



.gallery-booking-button,



.gallery-highlight__button {



margin-top:clamp(34px,3vw,50px);



}



.gallery-booking-button__text,



.gallery-highlight__button-text {



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:inherit;



font-weight:400;



line-height:1;



}



@media (max-width:620px) {



.gallery-room-eyebrow {



  gap:14px;



  margin-bottom:8vw;



  font-size:11px;



}



.gallery-room-eyebrow-line {



  width:46px;



}



.gallery-room-button {



  gap:16px;



  margin-top:8vw;



  font-size:18px;



}



.gallery-room-button-icon {



  width:48px;



  height:48px;



}



}



.gallery-booking-button {



background:transparent !important;



border:0 !important;



border-radius:0 !important;



box-shadow:none !important;



color:#17281f !important;



}



.gallery-booking-button:hover,



.gallery-booking-button:focus-visible {



background:transparent !important;



border-color:transparent !important;



color:#17281f !important;



box-shadow:none !important;



}



/* FINAL BOOKING CTA — full bleed section + room-style transparent button */



.gallery-booking-card .gallery-booking-button.gallery-room-button {



min-width:0 !important;



min-height:0 !important;



padding:0 !important;



border:0 !important;



border-radius:0 !important;



background:transparent !important;



box-shadow:none !important;



color:#17281f !important;



}



.gallery-booking-card .gallery-booking-button.gallery-room-button:hover,



.gallery-booking-card .gallery-booking-button.gallery-room-button:focus-visible {



background:transparent !important;



border-color:transparent !important;



color:#17281f !important;



box-shadow:none !important;



transform:none !important;



}



/* START EXPLORING ONLY */



.gallery-highlight__card .gallery-highlight__button.gallery-room-button {



color:#ffffff !important;



font-size:14px !important;



}



.gallery-highlight__card .gallery-highlight__button-text {



color:#ffffff !important;



font-size:14px !important;



}



.gallery-highlight__card .gallery-highlight__button-icon.gallery-room-button-icon {



width:42px !important;



height:42px !important;



flex:0 0 42px !important;



border-color:rgba(255,255,255,.8) !important;



background:transparent !important;



color:#ffffff !important;



}



.gallery-highlight__card .gallery-highlight__button.gallery-room-button:hover,



.gallery-highlight__card .gallery-highlight__button.gallery-room-button:focus-visible {



color:#ffffff !important;



background:transparent !important;



}



.gallery-highlight__card .gallery-highlight__button.gallery-room-button:hover .gallery-room-button-icon,



.gallery-highlight__card .gallery-highlight__button.gallery-room-button:focus-visible .gallery-room-button-icon {



border-color:#17281f !important;



background:#17281f !important;



color:#f7faf9 !important;



}



/* TIMELESS MISTARA STORY */



.mistara-timeless-section {



width:100%;



padding:5vh 3vw;



background:#efe8da;



color:#17281f;



}



.mistara-timeless {



width:100%;



max-width:none;



margin:0;



}



.mistara-timeless__intro {



max-width:58rem;



margin:0 auto clamp(3.5rem,5vw,5.5rem);



text-align:center;



}



.mistara-timeless__eyebrow {



justify-content:center;



margin-bottom:clamp(24px,2.4vw,38px);



}



.mistara-timeless__title {



margin:0;



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(34px,3vw,52px);



font-weight:400;



line-height:1.08;



letter-spacing:-.03em;



}



.mistara-timeless__title em {



font-family:inherit;



font-weight:inherit;



font-style:italic;



}



.mistara-timeless__intro-text {



max-width:44rem;



margin:clamp(22px,2vw,30px) auto 0;



color:#5a655f;



font-family:var(--sans,'Inter',Arial,sans-serif);



font-size:clamp(13px,.96vw,15px);



font-weight:300;



line-height:1.8;



letter-spacing:-.012em;



}



.mistara-timeless__grid {



display:grid;



grid-template-columns:repeat(3,minmax(0,1fr));



align-items:start;



gap:clamp(18px,2.4vw,40px);



}



.mistara-timeless__item {



min-width:0;



}



.mistara-timeless__item--center {



transform:translateY(clamp(-28px,-2vw,-18px));



}



.mistara-timeless__media {



width:100%;



margin:0;



overflow:hidden;



background:#e6e1d8;



}



.mistara-timeless__item--left .mistara-timeless__media,



.mistara-timeless__item--right .mistara-timeless__media {



aspect-ratio:.92 / 1;



}



.mistara-timeless__item--center .mistara-timeless__media {



aspect-ratio:.82 / 1;



}



.mistara-timeless__media img {



width:100%;



height:100%;



display:block;



object-fit:cover;



transition:transform .8s cubic-bezier(.22,1,.36,1);



}



.mistara-timeless__media:hover img {



transform:scale(1.035);



}



.mistara-timeless__item h3 {



margin:clamp(18px,1.6vw,24px) 0 0;



color:#17281f;



font-family:var(--serif,'Marcellus',Georgia,serif);



font-size:clamp(20px,1.55vw,26px);



font-weight:400;



line-height:1.2;



letter-spacing:-.02em;



}



.mistara-timeless__item p {



max-width:32rem;



margin:clamp(10px,1vw,14px) 0 0;



color:#5a655f;



font-family:var(--sans,'Inter',Arial,sans-serif);



font-size:clamp(13px,.9vw,14px);



font-weight:300;



line-height:1.75;



}



@media (max-width:1024px) {



.mistara-timeless__grid {



  gap:2vw;



}



.mistara-timeless__item--center {



  transform:translateY(-18px);



}



}



@media (max-width:760px) {



.mistara-timeless-section {



  padding:5vh 3vw;



}



.mistara-timeless__intro {



  margin-bottom:3rem;



}



.mistara-timeless__eyebrow {



  gap:14px;



  margin-bottom:8vw;



  font-size:11px;



}



.mistara-timeless__title {



  font-size:36px;



  line-height:1.1;



}



.mistara-timeless__intro-text {



  font-size:13px;



  line-height:1.72;



}



.mistara-timeless__grid {



  grid-template-columns:1fr;



  gap:2.5rem;



}



.mistara-timeless__item--center {



  transform:none;



}



.mistara-timeless__item--left .mistara-timeless__media,



.mistara-timeless__item--center .mistara-timeless__media,



.mistara-timeless__item--right .mistara-timeless__media {



  aspect-ratio:1.15 / 1;



}



.mistara-timeless__item h3 {



  font-size:22px;



}



.mistara-timeless__item p {



  font-size:13px;



}



}











/* =========================================================



  CONSISTENT RESPONSIVE SYSTEM



  Keeps the same visual hierarchy across desktop, tablet and mobile.



========================================================= */



.gallery-booking-section,



.gallery-highlight-section,



.mistara-gallery-section,



.mistara-timeless-section {



 padding-top: clamp(42px, 5vh, 72px);



 padding-bottom: clamp(42px, 5vh, 72px);



}



.gallery-booking-card {



 min-height: clamp(20rem, 38svh, 28rem);



 padding: 0 3vw;



}



.gallery-booking-title,



.gallery-highlight__title,



.mistara-gallery-heading h2,



.mistara-timeless__title {



 font-size: clamp(34px, 3vw, 52px);



}



.gallery-room-eyebrow {



 gap: clamp(14px, 1.5vw, 20px);



 margin-bottom: clamp(24px, 2.4vw, 38px);



 font-size: clamp(11px, .82vw, 13px);



}



.gallery-room-eyebrow-line {



 width: clamp(46px, 5vw, 82px);



}



.gallery-room-button {



 gap: clamp(16px, 1.6vw, 22px);



 margin-top: clamp(28px, 3vw, 46px);



 font-size: clamp(17px, 1.4vw, 22px);



}



.gallery-room-button-icon {



 width: clamp(46px, 3.5vw, 58px);



 height: clamp(46px, 3.5vw, 58px);



}



/* Highlight keeps the desktop composition for laptop/tablet widths. */



.gallery-highlight {



 grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);



 gap: clamp(28px, 5vw, 84px);



}



.gallery-highlight__visual {



 min-height: clamp(30rem, 52vw, 46rem);



}



.gallery-highlight__card {



 left: clamp(14px, 4%, 32px);



 right: clamp(14px, 4%, 32px);



 bottom: clamp(14px, 4%, 32px);



 padding: clamp(1.25rem, 2vw, 2rem);



}



.gallery-highlight__card-title {



 font-size: clamp(28px, 2vw, 42px);



}



.gallery-highlight__link {



 margin-top: clamp(2rem, 4vw, 4rem);



}



/* Gallery collage uses one consistent desktop/tablet pattern. */



.mistara-gallery-grid {



 grid-template-columns: repeat(5, minmax(0, 1fr));



 grid-template-rows: repeat(5, clamp(82px, 8.2vw, 145px));



 gap: clamp(7px, .75vw, 14px);



}



.mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



.mistara-gallery-item:nth-child(2) { grid-column: 2 / 4; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(3) { grid-column: 4 / 5; grid-row: 1 / 3; }



.mistara-gallery-item:nth-child(4) { grid-column: 5 / 6; grid-row: 1 / 6; }



.mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 3 / 6; }



.mistara-gallery-item:nth-child(6) { grid-column: 3 / 5; grid-row: 3 / 6; }



.mistara-gallery-item:nth-child(7) { grid-column: 1 / 2; grid-row: 4 / 6; }



.mistara-gallery-heading {



 margin-bottom: clamp(28px, 3.5vw, 52px);



}



.mistara-gallery-tabs {



 margin-bottom: clamp(28px, 3vw, 46px);



}



.mistara-gallery-tab {



 min-width: clamp(106px, 8vw, 140px);



 min-height: clamp(44px, 3.5vw, 52px);



}



/* Timeless section stays as three editorial columns on larger screens. */



.mistara-timeless__intro {



 margin-bottom: clamp(48px, 5vw, 84px);



}



.mistara-timeless__grid {



 grid-template-columns: repeat(3, minmax(0, 1fr));



 gap: clamp(16px, 2.4vw, 38px);



}



.mistara-timeless__item--center {



 transform: translateY(clamp(-26px, -1.8vw, -16px));



}



/* Tablet */



@media (max-width: 900px) {



.gallery-highlight {



   grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);



   gap: 3vw;



 }



 .gallery-highlight__visual {



   min-height: clamp(28rem, 60vw, 38rem);



 }



 .gallery-highlight__title {



   font-size: clamp(32px, 4.4vw, 46px);



 }



 .mistara-gallery-grid {



   grid-template-rows: repeat(5, clamp(72px, 9.5vw, 110px));



 }



 .mistara-timeless__grid {



   grid-template-columns: repeat(3, minmax(0, 1fr));



   gap: 2vw;



 }



}



/* Mobile: same typography, spacing and visual language, adapted to available width. */



@media (max-width: 700px) {



.gallery-page-hero__image {



   min-height: 72svh;



   border-radius: 14px;



 }



.gallery-booking-section,



 .gallery-highlight-section,



 .mistara-gallery-section,



 .mistara-timeless-section {



   padding: 42px 5vw;



 }



 .gallery-booking-card {



   min-height: 22rem;



   padding: 0;



 }



 .gallery-booking-title,



 .gallery-highlight__title,



 .mistara-gallery-heading h2,



 .mistara-timeless__title {



   font-size: clamp(34px, 9vw, 42px);



   line-height: 1.08;



 }



 .gallery-highlight {



   grid-template-columns: 1fr;



   gap: 32px;



 }



 .gallery-highlight__visual {



   min-height: clamp(30rem, 120vw, 38rem);



 }



 .gallery-highlight__card {



   left: 14px;



   right: 14px;



   bottom: 14px;



 }



 .gallery-highlight__card-title {



   font-size: clamp(27px, 7vw, 34px);



 }



 .mistara-gallery-tabs {



   justify-content: flex-start;



   flex-wrap: nowrap;



   overflow-x: auto;



   gap: 8px;



   padding-bottom: 4px;



   scrollbar-width: none;



 }



 .mistara-gallery-tabs::-webkit-scrollbar {



   display: none;



 }



 .mistara-gallery-tab {



   flex: 0 0 auto;



   min-width: 112px;



   min-height: 44px;



 }



 .mistara-gallery-grid {



   grid-template-columns: repeat(2, minmax(0, 1fr));



   grid-template-rows: repeat(10, clamp(88px, 24vw, 120px));



   gap: 7px;



 }



 .mistara-gallery-item:nth-child(1) { grid-column: 1 / 2; grid-row: 1 / 4; }



 .mistara-gallery-item:nth-child(2) { grid-column: 2 / 3; grid-row: 1 / 3; }



 .mistara-gallery-item:nth-child(3) { grid-column: 2 / 3; grid-row: 3 / 5; }



 .mistara-gallery-item:nth-child(4) { grid-column: 1 / 2; grid-row: 4 / 8; }



 .mistara-gallery-item:nth-child(5) { grid-column: 2 / 3; grid-row: 5 / 8; }



 .mistara-gallery-item:nth-child(6) { grid-column: 1 / 3; grid-row: 8 / 10; }



 .mistara-gallery-item:nth-child(7) { grid-column: 1 / 3; grid-row: 10 / 11; }



 .mistara-gallery-item__overlay {



   display: block;



 }



 .mistara-timeless__intro {



   margin-bottom: 38px;



 }



 .mistara-timeless__grid {



   grid-template-columns: 1fr;



   gap: 32px;



 }



 .mistara-timeless__item--center {



   transform: none;



 }



 .mistara-timeless__item--left .mistara-timeless__media,



 .mistara-timeless__item--center .mistara-timeless__media,



 .mistara-timeless__item--right .mistara-timeless__media {



   aspect-ratio: 1.08 / 1;



 }



 .gallery-room-eyebrow {



   margin-bottom: 24px;



 }



 .gallery-room-button {



   margin-top: 28px;



 }



}



/* Small phones */



@media (max-width: 420px) {



.gallery-highlight__visual {



   min-height: 30rem;



 }



 .gallery-highlight__card {



   padding: 18px;



 }



 .gallery-highlight__card-text {



   padding-bottom: 16px;



 }



 .mistara-gallery-item__overlay {



   padding: 12px;



 }



 .mistara-gallery-item__overlay h3 {



   font-size: 16px;



 }



}











/* =========================================================



  GLOBAL SECTION SPACING



  Same on every screen:



  5% top/bottom + 3% left/right



========================================================= */



.gallery-booking-section,



.gallery-highlight-section,



.mistara-gallery-section,



.mistara-timeless-section,



.gallery-story-section {



 width: 100%;



 box-sizing: border-box;



 padding: 5% 3% !important;



}



/* Booking section: keep full width without viewport offset tricks */



.gallery-booking-section {



 left: auto !important;



 margin-left: 0 !important;



}



/* Inner section containers remain full width */



.gallery-booking-card,



.gallery-highlight-shell,



.mistara-gallery-shell,



.mistara-timeless,



.gallery-story {



 width: 100%;



 max-width: none;



 box-sizing: border-box;



}



/* Hero image fills the available section width */



/* Prevent breakpoint rules from changing section padding */



@media (max-width: 1024px) {



 .gallery-page-hero,



 .gallery-booking-section,



 .gallery-highlight-section,



 .mistara-gallery-section,



 .mistara-timeless-section,



 .gallery-story-section {



   padding: 5% 3% !important;



 }



}



@media (max-width: 760px) {



 .gallery-page-hero,



 .gallery-booking-section,



 .gallery-highlight-section,



 .mistara-gallery-section,



 .mistara-timeless-section,



 .gallery-story-section {



   padding: 5% 3% !important;



 }



}



@media (max-width: 480px) {



 .gallery-page-hero,



 .gallery-booking-section,



 .gallery-highlight-section,



 .mistara-gallery-section,



 .mistara-timeless-section,



 .gallery-story-section {



   padding: 5% 3% !important;



 }



}







/* =========================================================

  GALLERY HERO — SAME AS ROOMS

========================================================= */



.gallery-full-hero {

 width: 100%;

 padding: 0;

 background: #ffffff;

 font-family: 'Marcellus', serif;

}



.gallery-full-hero__image {

 position: relative;

 width: 100%;

 min-height: clamp(32rem, 72vh, 46rem);

 overflow: hidden;

 background-size: cover;

 background-position: center;

 background-repeat: no-repeat;

 display: flex;

 align-items: flex-end;

 justify-content: center;

}



.gallery-full-hero__overlay {

 position: absolute;

 inset: 0;

 z-index: 1;

 background: linear-gradient(

   180deg,

   rgba(24,33,28,.03) 0%,

   rgba(24,33,28,.08) 45%,

   rgba(24,33,28,.65) 100%

 );

}



.gallery-full-hero__content {

 position: relative;

 z-index: 2;

 width: 100%;

 padding: clamp(2.5rem, 5vh, 4rem) 3vw;

 text-align: center;

 color: #ffffff;

}



.gallery-full-hero__eyebrow {

 margin: 0 0 clamp(.7rem, 1vh, 1rem);

 color: rgba(255,255,255,.9);

 font-family: 'Marcellus', serif;

 font-size: clamp(11px, .82vw, 13px);

 font-weight: 400;

}



.gallery-full-hero__title {

 max-width: 72rem;

 margin: 0 auto;

 color: #ffffff;

 font-family: 'Marcellus', serif;

 font-size: clamp(2.5rem, 4.3vw, 4.8rem);

 font-weight: 400;

 line-height: 1.05;

 letter-spacing: -.025em;

}



@media (max-width: 620px) {

 .gallery-full-hero__image {

   min-height: 68vh;

 }



 .gallery-full-hero__content {

   padding: 2.5rem 3vw;

 }



 .gallery-full-hero__title {

   font-size: clamp(2.4rem, 10vw, 3.5rem);

 }

}



</style>