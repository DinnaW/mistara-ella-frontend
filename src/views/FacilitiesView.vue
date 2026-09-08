<template>
  <MainLayout>
    <div class="facilities-page">
      <!-- =====================================================
           HERO
      ====================================================== -->

      <InnerPageHero
        eyebrow="Designed for comfort"
        title="Explore Our Facilities"
        image="./Images/Image_Gallery/happy-family.jpg"
      />

      <!-- =====================================================
           FACILITIES
      ====================================================== -->

      <section id="facilities" class="facilities-section">
        <div class="container">
          <div class="section-heading reveal">
            <div>
              <h2>
                Discover the comforts of your stay.
                <br />
                Everything

                <em>within reach.</em>
              </h2>
            </div>

            <div class="heading-right">
              <p>
                From everyday conveniences to moments of relaxation, explore the
                facilities available throughout your stay at Mistara Ella.
              </p>

              <div class="arrows">
                <button
                  type="button"
                  aria-label="Previous facilities"
                  @click="scrollFacilities(-1)"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next facilities"
                  @click="scrollFacilities(1)"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          <div ref="facilityTrack" class="facility-grid">
            <article
              v-for="(facility, index) in facilities"
              :key="facility.title"
              class="facility-card reveal"
            >
              <div class="facility-top">
                <span>
                  {{ String(index + 1).padStart(2, "0") }}
                </span>
              </div>

              <h3>
                {{ facility.title }}
              </h3>

              <ul>
                <li v-for="item in facility.items" :key="item">
                  <span>•</span>
                  {{ item }}
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- =====================================================
           PREMIUM AMENITIES
           EDITORIAL STYLE
      ====================================================== -->

      <section id="amenities" class="amenities-section">
        <div class="container">
          <!-- CENTERED INTRO -->

          <div class="amenities-intro reveal">
            <h2>
              Premium amenities Spaces designed
              <br />
              <em>for a better stay.</em>
            </h2>

            <p>
              Thoughtfully curated spaces and experiences designed to make every
              moment of your stay more comfortable, relaxing and memorable.
            </p>
          </div>

          <!-- THREE LARGE EDITORIAL PANELS -->

          <div class="amenities-gallery">
            <article
              v-for="(amenity, index) in amenities"
              :key="amenity.title"
              class="amenity-card reveal"
            >
              <img :src="amenity.image" :alt="amenity.title" />

              <div class="amenity-shade"></div>

              <div class="amenity-content">
                <span class="amenity-number"> 0{{ index + 1 }} </span>

                <div class="amenity-title">
                  <small>
                    {{ amenity.category }}
                  </small>

                  <h3>
                    {{ amenity.title }}
                  </h3>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- =====================================================
           THINGS TO DO
      ====================================================== -->

      <section class="things-section">
        <div class="container">
          <div class="section-heading reveal">
            <div>
              <h2>
                Things to do
                <br />
                Let's go on

                <em>a journey.</em>
              </h2>
            </div>

            <div class="heading-right">
              <p>
                Hiking, waterfalls, tea plantations, local culture and more.
                Discover hand-picked experiences to make the most of your stay.
              </p>

              <a href="#" class="view-link">
                VIEW ALL EXPERIENCES
                <span>→</span>
              </a>
            </div>
          </div>

          <div class="things-grid">
            <article
              v-for="experience in thingsToDo"
              :key="experience.title"
              class="thing-card reveal"
            >
              <div class="thing-image">
                <img :src="experience.image" :alt="experience.title" />
              </div>

              <div class="thing-content">
                <h3>
                  {{ experience.title }}
                </h3>

                <p>
                  {{ experience.description }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- =====================================================
           TRAVEL STORIES
      ====================================================== -->

      <section class="stories-section">
        <div class="container">
          <div class="stories-top reveal">
            <div class="stories-title">
              <h2>
                Travel stories
                <br />
                Stories

                <em>from Ella.</em>
              </h2>
            </div>

            <div class="stories-intro">
              <p>
                Travel slowly, discover deeply. Explore stories, places and
                experiences from around Ella.
              </p>
            </div>
          </div>

          <div class="stories-slider reveal">
            <div class="stories-side-label">
              <span>TRAVEL</span>
              <span>STORIES</span>
            </div>

            <div class="stories-track">
              <article
                v-for="(story, index) in stories"
                :key="story.title"
                class="story-slide"
                :class="{ active: activeStory === index }"
                @mouseenter="activeStory = index"
              >
                <div class="story-slide-image">
                  <img :src="story.image" :alt="story.title" />

                  <div class="story-image-overlay"></div>
                  <span class="story-number">{{
                    String(index + 1).padStart(2, "0")
                  }}</span>
                </div>

                <div class="story-slide-content">
                  <span class="story-category">{{ story.category }}</span>

                  <h3>{{ story.title }}</h3>

                  <p>{{ story.description }}</p>

                  <div class="story-meta">
                    <span>{{ story.date }}</span>

                    <a href="#">
                      READ STORY
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>

            <div class="stories-controls">
              <div class="stories-progress">
                <span>{{ String(activeStory + 1).padStart(2, "0") }}</span>

                <div class="progress-line">
                  <span
                    :style="{
                      height: `${((activeStory + 1) / stories.length) * 100}%`,
                    }"
                  ></span>
                </div>

                <span>{{ String(stories.length).padStart(2, "0") }}</span>
              </div>

              <div class="stories-arrows">
                <button
                  type="button"
                  aria-label="Previous story"
                  @click="previousStory"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next story"
                  @click="nextStory"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================
           FINAL CTA
      ====================================================== -->

      <section class="booking-section">
        <img :src="ellaMountainImage" alt="Ella mountains" />

        <div class="booking-overlay"></div>

        <div class="booking-content container reveal">
          <h2>
            Your next getaway
            <br />
            Your stay starts <em>here.</em>
          </h2>

          <div class="booking-divider"></div>

          <div class="booking-bottom">
            <p>
              Come for the mountains.
              <br />
              Stay for everything else.
            </p>

            <a href="#">
              BOOK YOUR STAY
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";

import MainLayout from "../components/layout/MainLayout.vue";
import InnerPageHero from "../components/layout/InnerPageHero.vue";
import ellaMountainImage from "../Images/Banner/ella-mountain-view.jpg";

/* =====================================================
   POPULAR FACILITIES
===================================================== */

const popularFacilities = [
  {
    title: "Indoor swimming pool",
    icon: "≈",
  },

  {
    title: "Free WiFi",
    icon: "⌁",
  },

  {
    title: "Family rooms",
    icon: "♧",
  },

  {
    title: "Free parking",
    icon: "□",
  },

  {
    title: "Restaurant",
    icon: "≋",
  },

  {
    title: "Bar",
    icon: "○",
  },

  {
    title: "Pet friendly",
    icon: "◇",
  },

  {
    title: "Room service",
    icon: "⌂",
  },
];

/* =====================================================
   FACILITIES
===================================================== */

const facilities = [
  {
    icon: "⌂",
    title: "General",
    items: [
      "Shuttle service",
      "Air conditioning",
      "Family rooms",
      "Airport shuttle",
      "Room service",
      "Non-smoking rooms",
    ],
  },

  {
    icon: "≋",
    title: "Food & Drink",
    items: [
      "Restaurant",
      "Bar",
      "Breakfast in the room",
      "Special diet meals",
      "Minibar",
      "Tea / Coffee maker",
    ],
  },

  {
    icon: "◈",
    title: "Outdoors",
    items: [
      "Sun deck",
      "Terrace",
      "Garden",
      "BBQ facilities",
      "Outdoor dining area",
      "Balcony",
    ],
  },

  {
    icon: "♧",
    title: "Activities",
    items: ["Bicycle rental", "Cooking class", "Bike tours", "Walking tours"],
  },

  {
    icon: "□",
    title: "Media & Technology",
    items: ["Flat-screen TV", "Cable channels", "Telephone", "TV"],
  },

  {
    icon: "⌂",
    title: "Living Area & Kitchen",
    items: [
      "Dining area",
      "Seating area",
      "Desk",
      "Electric kettle",
      "Dryer",
      "Cleaning products",
    ],
  },

  {
    icon: "≈",
    title: "Indoor Swimming Pool",
    items: [
      "Open all year",
      "Rooftop pool",
      "All ages welcome",
      "Pool towels",
      "Beach chairs / loungers",
    ],
  },

  {
    icon: "◇",
    title: "Safety & Security",
    items: [
      "Fire extinguishers",
      "CCTV in common areas",
      "CCTV outside property",
      "Key card access",
      "Safe",
    ],
  },
];

const facilityTrack = ref(null);

const scrollFacilities = (direction) => {
  facilityTrack.value?.scrollBy({
    left: direction * facilityTrack.value.clientWidth,
    behavior: "smooth",
  });
};

/* =====================================================
   PREMIUM AMENITIES
===================================================== */

const amenities = [
  {
    title: "Dining",
    category: "GOOD FOOD, GREAT MOMENTS",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90",
  },

  {
    title: "Room Comfort",
    category: "THOUGHTFUL AMENITIES",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90",
  },

  {
    title: "Wellness & Views",
    category: "RELAXATION REDEFINED",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=90",
  },
];

/* =====================================================
   THINGS TO DO
===================================================== */

const thingsToDo = [
  {
    title: "Hiking",
    description: "Mountains & viewpoints",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Waterfalls",
    description: "Nature's hidden gems",
    image:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Tea Plantations",
    description: "Scenic tea country",
    image:
      "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1000&q=85",
  },

  {
    title: "Local Culture",
    description: "Authentic experiences",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=85",
  },
];

/* =====================================================
   STORIES
===================================================== */

const stories = [
  {
    category: "TRAVEL GUIDE",
    title: "10 Must-Visit Places in Ella",
    description:
      "Discover the most beautiful viewpoints, waterfalls and hidden gems around Ella.",
    date: "Oct 14, 2024",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",
  },

  {
    category: "FOOD & CULTURE",
    title: "A Taste of Local Flavours",
    description:
      "Explore the authentic tastes of Sri Lanka and discover the culinary side of Ella.",
    date: "Oct 10, 2024",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
  },

  {
    category: "EXPERIENCES",
    title: "Riding the Iconic Train",
    description:
      "Everything you need to know about one of Sri Lanka’s most memorable journeys.",
    date: "Oct 06, 2024",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",
  },
];

/* =====================================================
   STORIES SLIDESHOW
===================================================== */

const activeStory = ref(0);

const nextStory = () => {
  activeStory.value = (activeStory.value + 1) % stories.length;
};

const previousStory = () => {
  activeStory.value = (activeStory.value - 1 + stories.length) % stories.length;
};

/* =====================================================
   SCROLL REVEAL
===================================================== */

onMounted(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
    },
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
</script>

<style scoped>
/* =====================================================
   FONTS
===================================================== */

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Marcellus&display=swap");

/* =====================================================
   VARIABLES
===================================================== */

.facilities-page {
  --white: #ffffff;
  --off-white: #faf9f7;
  --cream: #eee9e0;
  --brown: #705848;
  --brown-dark: #4a3b31;
  --green: #102d28;
  --black: #151515;
  --gray: #6d6963;
  --line: #e1ddd6;

  background: var(--white);

  color: var(--black);

  font-family: "Inter", sans-serif;
}

.facilities-page :deep(.inner-hero h1) {
  max-width: 72rem;
  margin: 0 auto;
  color: #ffffff;
  font-family: "Marcellus", Georgia, serif;
  font-size: clamp(2.5rem, 4.3vw, 4.8rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.025em;
}

.facilities-page :deep(.inner-hero-content) {
  width: 100%;
  padding: clamp(2.5rem, 5vh, 4rem) 3vw;
  text-align: center;
  color: #ffffff;
}

.facilities-page :deep(.inner-hero .eyebrow) {
  margin: 0 0 clamp(0.7rem, 1vh, 1rem);
  color: rgba(255, 255, 255, 0.9);
  font-family: "Marcellus", Georgia, serif;
  font-size: clamp(11px, 0.82vw, 13px);
  font-weight: 400;
}

.facilities-page :deep(.inner-hero p:not(.eyebrow)) {
  max-width: 620px;
  margin: 1rem auto 0;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Marcellus", Georgia, serif;
  font-size: clamp(0.84rem, 0.92vw, 0.98rem);
  font-weight: 400;
  line-height: 1.7;
}

/* =====================================================
   RESET
===================================================== */

.facilities-page *,
.facilities-page *::before,
.facilities-page *::after {
  box-sizing: border-box;
}

.facilities-page img {
  display: block;

  width: 100%;
}

.facilities-page a {
  color: inherit;

  text-decoration: none;
}

button {
  font-family: inherit;
}

/* =====================================================
   CONTAINER
===================================================== */

.container {
  width: min(1380px, calc(100% - 10vw));

  margin: 0 auto;
}

/* =====================================================
   TYPOGRAPHY
===================================================== */

h1,
h2,
h3 {
  font-family: "Marcellus", Georgia, serif;

  font-weight: 400;
}

.eyebrow {
  display: block;

  margin-bottom: 17px;

  font-size: 8px;

  font-weight: 500;

  letter-spacing: 0.22em;

  text-transform: uppercase;

  color: #77716a;
}

h2 em,
h3 em {
  font-style: italic;
}

/* =====================================================
   REVEAL
===================================================== */

.reveal {
  opacity: 0;

  transform: translateY(25px);

  transition:
    opacity 0.8s ease,
    transform 0.8s ease;
}

.reveal.visible {
  opacity: 1;

  transform: translateY(0);
}

/* =====================================================
   INTRO
===================================================== */

.intro-section {
  padding: 110px 0 95px;
}

.intro-grid {
  position: relative;

  display: grid;

  grid-template-columns: 1fr 0.65fr;

  grid-template-rows: auto auto;

  column-gap: 80px;
}

.intro-heading {
  padding-top: 15px;
}

.intro-heading h2 {
  margin: 0;

  font-size: clamp(54px, 6.5vw, 92px);

  line-height: 0.95;

  letter-spacing: -0.035em;
}

.intro-copy {
  max-width: 410px;

  padding-top: 25px;
}

.intro-copy p {
  margin: 0 0 20px;

  font-size: 11px;

  line-height: 1.9;

  color: var(--gray);
}

.signature {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-top: 28px;
}

.signature span {
  width: 42px;

  height: 1px;

  background: var(--brown);
}

.signature small {
  font-size: 7px;

  letter-spacing: 0.2em;
}

.intro-image {
  width: 95px;

  height: 150px;

  margin-top: 55px;

  margin-left: auto;

  overflow: hidden;
}

.intro-image img {
  height: 100%;

  object-fit: cover;
}

.intro-note {
  width: 105px;

  height: 105px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-top: 70px;

  margin-left: -40px;

  background: var(--cream);
}

.intro-note span {
  font-size: 7px;

  line-height: 1.8;

  letter-spacing: 0.2em;

  color: #746c63;
}

/* =====================================================
   POPULAR
===================================================== */

.popular-section {
  padding: 0 0 100px;
}

.popular-box {
  display: grid;

  grid-template-columns: 270px 1fr;

  align-items: center;

  gap: 40px;

  padding: 32px 35px;

  background: var(--off-white);

  border: 1px solid #e7e2da;
}

.popular-title h3 {
  margin: 0;

  font-size: 29px;

  line-height: 1.05;
}

.small-line {
  width: 35px;

  height: 1px;

  margin-top: 20px;

  background: #b8afa4;
}

.popular-list {
  display: grid;

  grid-template-columns: repeat(8, 1fr);

  gap: 10px;
}

.popular-item {
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 10px;

  min-height: 85px;

  text-align: center;

  transition: transform 0.3s ease;
}

.popular-item:hover {
  transform: translateY(-4px);
}

.popular-icon {
  width: 32px;

  height: 32px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-family: "Marcellus", serif;

  font-size: 16px;

  color: var(--brown);
}

.popular-item span {
  font-size: 10px;

  line-height: 1.5;

  color: #45413d;
}

/* =====================================================
   FACILITIES
===================================================== */

.facilities-section {
  padding: 35px 0 120px;
}

.section-heading {
  display: flex;

  justify-content: space-between;

  align-items: flex-end;

  margin-bottom: 50px;
}

.section-heading h2 {
  margin: 0;

  color: #25281f;

  font-family: "Marcellus", Georgia, serif;

  font-size: clamp(42px, 5vw, 51px);

  font-weight: 400;

  line-height: 1.1;
}

.heading-right {
  max-width: 350px;
}

.heading-right p {
  margin: 0;

  font-size: 13px;

  line-height: 1.85;

  color: var(--gray);
}

.arrows {
  display: flex;

  gap: 8px;

  margin-top: 20px;
}

.arrows button {
  width: 44px;

  height: 44px;

  border: 1px solid #d9d3ca;

  border-radius: 50%;

  background: white;

  cursor: pointer;

  color: #625c55;
}

.arrows button:hover {
  border-color: #123c32;

  background: #123c32;

  color: white;
}

.facility-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 12px;
}

.facility-card {
  min-height: 315px;

  padding: 25px;

  border: 1px solid var(--line);

  background: white;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.facility-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.05);
}

.facility-card:nth-child(2),
.facility-card:nth-child(4),
.facility-card:nth-child(5),
.facility-card:nth-child(7) {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.facility-card:nth-child(2) {
  background-image:
    linear-gradient(
      180deg,
      rgba(8, 28, 22, 0.16) 0%,
      rgba(8, 28, 22, 0.82) 100%
    ),
    url("/Images/Facility/food1.jpeg");
}

.facility-card:nth-child(4) {
  background-image:
    linear-gradient(
      180deg,
      rgba(8, 28, 22, 0.16) 0%,
      rgba(8, 28, 22, 0.82) 100%
    ),
    url("/Images/Facility/land.png");
}

.facility-card:nth-child(5) {
  background-image:
    linear-gradient(
      180deg,
      rgba(8, 28, 22, 0.16) 0%,
      rgba(8, 28, 22, 0.82) 100%
    ),
    url("/Images/Facility/room1.jpeg");
}

.facility-card:nth-child(7) {
  background-image:
    linear-gradient(
      180deg,
      rgba(8, 28, 22, 0.16) 0%,
      rgba(8, 28, 22, 0.82) 100%
    ),
    url("/Images/Facility/wellness1.jpg");
}

.facility-card:nth-child(2),
.facility-card:nth-child(4),
.facility-card:nth-child(5),
.facility-card:nth-child(7) {
  color: #ffffff;
}

.facility-card:nth-child(2) .facility-top > span,
.facility-card:nth-child(4) .facility-top > span,
.facility-card:nth-child(5) .facility-top > span,
.facility-card:nth-child(7) .facility-top > span,
.facility-card:nth-child(2) h3,
.facility-card:nth-child(4) h3,
.facility-card:nth-child(5) h3,
.facility-card:nth-child(7) h3,
.facility-card:nth-child(2) li,
.facility-card:nth-child(4) li,
.facility-card:nth-child(5) li,
.facility-card:nth-child(7) li {
  color: #ffffff;
}

.facility-card:nth-child(2) .facility-top > span,
.facility-card:nth-child(4) .facility-top > span,
.facility-card:nth-child(5) .facility-top > span,
.facility-card:nth-child(7) .facility-top > span {
  color: rgba(255, 255, 255, 0.78);
}

.facility-top {
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.facility-icon {
  width: 38px;

  height: 38px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: var(--cream);

  color: var(--brown);

  font-family: "Marcellus", serif;
}

.facility-top > span {
  font-size: 8px;

  color: #aaa49b;
}

.facility-card h3 {
  margin: 25px 0 18px;

  font-size: 28px;

  line-height: 1.1;
}

.facility-card ul {
  padding: 0;

  margin: 0;

  list-style: none;
}

.facility-card li {
  display: flex;

  gap: 7px;

  margin-bottom: 8px;

  font-size: 13px;

  line-height: 1.6;

  color: #68645f;
}

.facility-card li span {
  color: var(--brown);
}

/* =====================================================
   EXPERIENCE MOSAIC
===================================================== */

.experience-mosaic {
  padding: 0 4vw 125px;
}

.mosaic-grid {
  display: grid;

  grid-template-columns: 1.3fr 0.7fr 0.7fr;

  grid-template-rows: 340px 340px;

  gap: 8px;
}

.mosaic-large-image {
  position: relative;

  grid-row: span 2;

  overflow: hidden;
}

.mosaic-large-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 1s ease;
}

.mosaic-large-image:hover img {
  transform: scale(1.05);
}

.mosaic-large-content {
  position: absolute;

  inset: auto 35px 30px;

  color: white;
}

.mosaic-large-content > span {
  font-size: 8px;

  letter-spacing: 0.18em;
}

.mosaic-large-content h2 {
  margin: 15px 0 0;

  font-size: clamp(42px, 4vw, 65px);

  line-height: 0.9;

  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.25);
}

.mosaic-large-content h2 em {
  color: white;
}

.mosaic-arrows {
  position: absolute;

  right: 0;

  bottom: 0;

  display: flex;

  gap: 7px;
}

.mosaic-arrows button {
  width: 44px;

  height: 44px;

  border: 1px solid rgba(255, 255, 255, 0.6);

  border-radius: 50%;

  background: rgba(0, 0, 0, 0.15);

  color: white;
}

.mosaic-panel {
  padding: 35px;

  display: flex;

  flex-direction: column;

  justify-content: center;
}

.mosaic-panel.brown {
  background: #f4e8c9;

  color: var(--black);
}

.mosaic-panel.light {
  background: var(--cream);
}

.panel-number {
  font-size: 8px;

  letter-spacing: 0.14em;

  opacity: 0.55;
}

.mosaic-panel h3 {
  margin: 18px 0;

  font-size: 42px;

  line-height: 0.9;
}

.mosaic-panel h3 em {
  font-style: italic;
}

.mosaic-panel p {
  max-width: 230px;

  margin: 0;

  font-size: 13px;

  line-height: 1.7;

  opacity: 0.7;
}

.mosaic-panel.brown p {
  color: var(--gray);
}

.mosaic-panel.brown .panel-number {
  color: var(--brown);
}

.mosaic-panel.brown a {
  color: var(--black);
}

.mosaic-panel a {
  display: flex;

  gap: 10px;

  width: fit-content;

  margin-top: 23px;

  padding-bottom: 7px;

  border-bottom: 1px solid currentColor;

  font-size: 7px;

  letter-spacing: 0.14em;
}

.mosaic-panel a:hover,
.mosaic-panel a:focus-visible {
  color: #123c32;
}

.mosaic-image {
  overflow: hidden;
}

.mosaic-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 1s ease;
}

.mosaic-image:hover img {
  transform: scale(1.05);
}

/* =====================================================
   EXPERIENCE MOSAIC SLIDESHOW
===================================================== */

.mosaic-large-image {
  background: #302a26;
}

.mosaic-slide {
  position: absolute;

  inset: 0;

  z-index: 0;

  opacity: 0;

  transform: scale(1.03);

  transition:
    opacity 0.8s ease,
    transform 1.2s ease;
}

.mosaic-slide.active {
  opacity: 1;

  transform: scale(1);
}

.mosaic-slide img {
  width: 100%;

  height: 100%;

  object-fit: cover;
}

.mosaic-large-gradient {
  position: absolute;

  inset: 0;

  z-index: 1;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.02) 0%,
    rgba(0, 0, 0, 0.02) 35%,
    rgba(0, 0, 0, 0.18) 52%,
    rgba(0, 0, 0, 0.52) 72%,
    rgba(0, 0, 0, 0.88) 100%
  );

  pointer-events: none;
}

.mosaic-large-gradient::after {
  content: "";

  position: absolute;

  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.28) 0%,
    rgba(0, 0, 0, 0.08) 45%,
    transparent 75%
  );
}

.mosaic-large-content {
  z-index: 3;
}

.mosaic-large-content h2 {
  text-shadow:
    0 2px 10px rgba(0, 0, 0, 0.3),
    0 5px 25px rgba(0, 0, 0, 0.2);
}

.mosaic-large-content > span {
  color: rgba(255, 255, 255, 0.9);
}

.mosaic-arrows button {
  display: flex;

  align-items: center;

  justify-content: center;

  border-color: rgba(255, 255, 255, 0.65);

  background: rgba(0, 0, 0, 0.12);

  color: white;

  cursor: pointer;

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.mosaic-arrows button:hover {
  border-color: #123c32;

  background: #123c32;

  transform: translateY(-2px);
}

.mosaic-slide-counter {
  position: absolute;
  top: 25px;

  right: 28px;

  z-index: 3;

  font-size: 8px;

  letter-spacing: 0.15em;

  color: rgba(255, 255, 255, 0.8);
}

.mosaic-panel.light {
  background: linear-gradient(135deg, #82705f 0%, #6d5b4d 100%);

  color: white;
}

.mosaic-panel p {
  color: white;

  opacity: 0.82;
}

.mosaic-panel.light h3,
.mosaic-panel.light .panel-number {
  color: white;
}

.mosaic-panel a {
  color: white;
}

/* =====================================================
   PREMIUM AMENITIES
   NEW EDITORIAL DESIGN
===================================================== */

.amenities-section {
  padding: 125px 0 135px;

  background: #f4e8c9;

  color: var(--black);
}

/* -----------------------------------------------------
   CENTERED INTRO
----------------------------------------------------- */

.amenities-intro {
  max-width: 760px;

  margin: 0 auto 70px;

  text-align: center;
}

.amenities-intro .eyebrow {
  margin-bottom: 22px;
}

.amenities-intro h2 {
  margin: 0;

  font-family: "Marcellus", Georgia, serif;

  font-size: clamp(50px, 6vw, 82px);

  font-weight: 400;

  line-height: 0.94;

  letter-spacing: -0.035em;

  color: #171717;
}

.amenities-intro h2 em {
  color: inherit;

  font-style: italic;
}

.amenities-intro p {
  max-width: 480px;

  margin: 30px auto 0;

  font-family: "Inter", sans-serif;

  font-size: 13px;

  font-weight: 400;

  line-height: 1.9;

  color: var(--gray);
}

/* -----------------------------------------------------
   GALLERY
----------------------------------------------------- */

.amenities-gallery {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 5px;

  width: 100%;
}

/* -----------------------------------------------------
   IMAGE CARD
----------------------------------------------------- */

.amenity-card {
  position: relative;

  height: 590px;

  overflow: hidden;

  background: #292929;

  cursor: pointer;
}

/* -----------------------------------------------------
   IMAGE
----------------------------------------------------- */

.amenity-card img {
  position: absolute;

  inset: 0;

  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 1.3s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.amenity-card:hover img {
  transform: scale(1.07);
}

/* -----------------------------------------------------
   OVERLAY
----------------------------------------------------- */

.amenity-shade {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.02) 35%,
    rgba(0, 0, 0, 0.1) 52%,
    rgba(0, 0, 0, 0.78) 100%
  );

  transition: background 0.5s ease;
}

.amenity-card:hover .amenity-shade {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.18) 0%,
    rgba(0, 0, 0, 0.04) 35%,
    rgba(0, 0, 0, 0.18) 52%,
    rgba(0, 0, 0, 0.84) 100%
  );
}

/* -----------------------------------------------------
   CONTENT
----------------------------------------------------- */

.amenity-content {
  position: absolute;

  inset: 0;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 35px;

  color: white;

  text-align: center;
}

/* -----------------------------------------------------
   NUMBER
----------------------------------------------------- */

.amenity-number {
  position: absolute;

  top: 32px;

  left: 50%;

  transform: translateX(-50%);

  font-family: "Inter", sans-serif;

  font-size: 8px;

  font-weight: 400;

  letter-spacing: 0.2em;

  color: rgba(255, 255, 255, 0.82);
}

/* -----------------------------------------------------
   TITLE
----------------------------------------------------- */

.amenity-title {
  max-width: 290px;
}

.amenity-title small {
  display: block;

  margin-bottom: 17px;

  font-family: "Inter", sans-serif;

  font-size: 7px;

  font-weight: 400;

  letter-spacing: 0.22em;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.75);
}

.amenity-title h3 {
  margin: 0;

  font-family: "Marcellus", Georgia, serif;

  font-size: clamp(32px, 3.3vw, 50px);

  font-weight: 400;

  line-height: 0.98;

  color: #ffffff;
}

/* -----------------------------------------------------
   DECORATIVE LINE
----------------------------------------------------- */

.amenity-title::after {
  content: "";

  display: block;

  width: 38px;

  height: 1px;

  margin: 22px auto 0;

  background: rgba(255, 255, 255, 0.7);

  transition: width 0.4s ease;
}

.amenity-card:hover .amenity-title::after {
  width: 65px;
}

/* =====================================================
   ELLA
===================================================== */

.ella-section {
  padding: 120px 0;

  background: #f4e8c9;

  color: var(--black);
}

.ella-header {
  display: grid;

  grid-template-columns: 1fr 0.7fr;

  gap: 80px;

  align-items: end;

  margin-bottom: 55px;
}

.ella-header .eyebrow {
  color: var(--brown);
}

.ella-header h2 {
  margin: 0;

  font-size: clamp(60px, 7vw, 100px);

  line-height: 0.85;
}

.ella-header h2 em {
  color: var(--brown);
}

.ella-copy {
  max-width: 350px;
}

.ella-copy p {
  margin: 0;

  font-size: 13px;

  line-height: 1.9;

  color: var(--gray);
}

.ella-copy a {
  display: flex;

  gap: 10px;

  width: fit-content;

  margin-top: 25px;

  padding-bottom: 7px;

  border-bottom: 1px solid rgba(23, 33, 27, 0.35);

  font-size: 7px;

  letter-spacing: 0.15em;
}

/* GALLERY */

.ella-gallery {
  display: grid;

  grid-template-columns: 0.75fr 0.75fr 1fr;

  grid-template-rows: 280px 280px;

  gap: 9px;
}

.ella-image {
  position: relative;

  overflow: hidden;
}

.ella-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 1s ease;
}

.ella-image:hover img {
  transform: scale(1.05);
}

.ella-image span {
  position: absolute;

  right: 12px;

  bottom: 12px;

  padding: 5px 8px;

  background: rgba(0, 0, 0, 0.4);

  font-size: 7px;
}

.ella-one {
  grid-row: span 2;
}

.ella-two {
  grid-column: 2;
}

.ella-three {
  grid-column: 3;
}

.ella-four {
  grid-column: 2 / span 2;
}

/* =====================================================
   THINGS TO DO
===================================================== */

.things-section {
  padding: 120px 0;
}

.things-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 12px;
}

.thing-card {
  border: 1px solid var(--line);

  background: white;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.thing-card:hover {
  transform: translateY(-5px);

  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.05);
}

.thing-image {
  height: 180px;

  overflow: hidden;
}

.thing-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 0.8s ease;
}

.thing-card:hover img {
  transform: scale(1.05);
}

.thing-content {
  padding: 18px;
}

.thing-content h3 {
  margin: 0 0 5px;

  font-size: 24px;
}

.thing-content p {
  margin: 0;

  font-size: 13px;

  line-height: 1.5;

  color: var(--gray);
}

/* =====================================================
   STORIES
===================================================== */

/* =====================================================
   TRAVEL STORIES
   EDITORIAL SLIDESHOW
===================================================== */

.stories-section {
  padding: 125px 0 140px;

  background: var(--off-white);
}

.stories-top {
  display: grid;

  grid-template-columns: 1fr 0.65fr;

  gap: 80px;

  align-items: end;

  margin-bottom: 65px;
}

.stories-label {
  display: block;

  margin-bottom: 18px;

  font-size: 8px;

  font-weight: 500;

  letter-spacing: 0.22em;

  text-transform: uppercase;

  color: #77716a;
}

.stories-title h2 {
  margin: 0;

  font-family: "Marcellus", Georgia, serif;

  font-size: clamp(42px, 5vw, 51px);

  font-weight: 400;

  line-height: 1.1;

  color: #25281f;
}

.stories-title h2 em {
  color: inherit;

  font-style: italic;
}

.stories-intro {
  max-width: 320px;

  padding-bottom: 5px;
}

.stories-intro p {
  margin: 0;

  font-size: 13px;

  line-height: 1.9;

  color: var(--gray);
}

.stories-slider {
  position: relative;

  display: grid;

  grid-template-columns: 35px 1fr 80px;

  gap: 25px;

  min-height: 540px;
}

.stories-side-label {
  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 35px;
}

.stories-side-label span {
  writing-mode: vertical-rl;

  transform: rotate(180deg);

  font-size: 7px;

  letter-spacing: 0.2em;

  color: #8d877f;
}

.stories-track {
  display: flex;

  align-items: stretch;

  gap: 7px;

  min-width: 0;

  overflow: hidden;
}

.story-slide {
  position: relative;

  display: grid;

  flex: 0 0 22%;

  min-width: 0;

  height: 540px;

  overflow: hidden;

  cursor: pointer;

  background: #ddd7cf;

  transition:
    flex 0.75s cubic-bezier(0.2, 0.7, 0.2, 1),
    transform 0.5s ease;
}

.story-slide.active {
  flex-basis: 54%;
}

.story-slide-image {
  position: absolute;

  inset: 0;

  overflow: hidden;
}

.story-slide-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: transform 1s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.story-slide:hover .story-slide-image img,
.story-slide.active .story-slide-image img {
  transform: scale(1.04);
}

.story-image-overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.03) 0%,
    rgba(0, 0, 0, 0.03) 45%,
    rgba(0, 0, 0, 0.72) 100%
  );
}

.story-number {
  position: absolute;

  top: 22px;

  left: 22px;

  z-index: 2;

  font-size: 8px;

  letter-spacing: 0.18em;

  color: white;
}

.story-slide-content {
  position: absolute;

  right: 28px;

  bottom: 28px;

  left: 28px;

  z-index: 3;

  color: white;

  opacity: 0;

  transform: translateY(20px);

  transition:
    opacity 0.45s ease,
    transform 0.55s ease;
}

.story-slide.active .story-slide-content {
  opacity: 1;

  transform: translateY(0);
}

.story-category {
  display: block;

  margin-bottom: 13px;

  font-size: 7px;

  letter-spacing: 0.2em;

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.75);
}

.story-slide-content h3 {
  max-width: 420px;

  margin: 0 0 14px;

  font-family: "Marcellus", Georgia, serif;

  font-size: clamp(30px, 3vw, 48px);

  font-weight: 400;

  line-height: 0.98;

  color: white;
}

.story-slide-content p {
  max-width: 360px;

  margin: 0;

  font-size: 12px;

  line-height: 1.8;

  color: rgba(255, 255, 255, 0.78);
}

.story-meta {
  display: flex;

  align-items: center;

  justify-content: space-between;

  max-width: 360px;

  margin-top: 22px;

  padding-top: 13px;

  border-top: 1px solid rgba(255, 255, 255, 0.3);
}

.story-meta > span,
.story-meta a {
  font-size: 7px;

  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.75);
}

.story-meta a {
  display: flex;

  align-items: center;

  gap: 9px;

  color: white;
}

.story-meta a:hover,
.story-meta a:focus-visible {
  color: white;
}

.story-meta a span {
  font-size: 13px;

  letter-spacing: 0;
}

.stories-controls {
  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: space-between;

  padding: 20px 0;
}

.stories-progress {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 10px;
}

.stories-progress > span {
  font-size: 7px;

  letter-spacing: 0.12em;

  color: #77716a;
}

.progress-line {
  position: relative;

  width: 1px;

  height: 80px;

  overflow: hidden;

  background: #d6d0c8;
}

.progress-line span {
  position: absolute;

  top: 0;

  left: 0;

  width: 100%;

  background: var(--brown);

  transition: height 0.45s ease;
}

.stories-arrows {
  display: flex;

  flex-direction: column;

  gap: 7px;
}

.stories-arrows button {
  width: 44px;

  height: 44px;

  border: 1px solid #d4cec5;

  border-radius: 50%;

  background: transparent;

  color: #5d5750;

  font-family: inherit;

  font-size: 13px;

  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;
}

.stories-arrows button:hover {
  border-color: #123c32;

  background: #123c32;

  color: white;
}

.view-link {
  display: inline-flex;

  align-items: center;

  gap: 12px;

  margin-top: 24px;

  color: #123c32;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: 0.12em;

  transition: color 0.3s ease;
}

.mosaic-panel a > span,
.view-link > span,
.story-meta a > span {
  display: inline-flex;

  width: 36px;

  height: 36px;

  align-items: center;

  justify-content: center;

  border: 1px solid currentColor;

  border-radius: 50%;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.view-link:hover,
.view-link:focus-visible {
  color: #123c32;
}

.view-link:hover > span,
.view-link:focus-visible > span {
  border-color: #123c32;

  background: #123c32;

  color: white;

  transform: translateX(5px);
}

.story-meta a > span {
  border-color: rgba(255, 255, 255, 0.72);
}

.mosaic-panel a:hover > span,
.mosaic-panel a:focus-visible > span,
.story-meta a:hover > span,
.story-meta a:focus-visible > span {
  border-color: #123c32;

  background: #123c32;

  color: white;

  transform: translateX(5px);
}

/* =====================================================
   BOOKING
===================================================== */

.booking-section {
  position: relative;

  min-height: 500px;

  overflow: hidden;

  color: white;
}

.booking-section > img {
  position: absolute;

  inset: 0;

  width: 100%;

  height: 100%;

  object-fit: cover;
}

.booking-overlay {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(20, 20, 20, 0.72),
    rgba(20, 20, 20, 0.15)
  );
}

.booking-content {
  position: relative;

  z-index: 2;

  min-height: 500px;

  display: flex;

  flex-direction: column;

  justify-content: center;
}

.booking-content .eyebrow {
  color: rgba(255, 255, 255, 0.65);
}

.booking-content h2 {
  margin: 0;

  font-size: clamp(58px, 7vw, 95px);

  line-height: 0.88;
}

.booking-content h2 em {
  color: #dfd3c5;
}

.booking-divider {
  width: 100%;

  max-width: 550px;

  height: 1px;

  margin: 35px 0 25px;

  background: rgba(255, 255, 255, 0.45);
}

.booking-bottom {
  display: flex;

  align-items: center;

  gap: 50px;
}

.booking-bottom p {
  margin: 0;

  font-size: 13px;

  line-height: 1.8;

  color: rgba(255, 255, 255, 0.7);
}

.booking-bottom a {
  display: flex;

  align-items: center;

  gap: 18px;

  padding: 15px 20px;

  background: var(--brown-dark);

  color: white;

  font-size: 7px;

  letter-spacing: 0.15em;

  transition: 0.3s ease;
}

.booking-bottom a:hover {
  background: white;

  color: var(--brown-dark);
}

.booking-bottom a > span {
  display: inline-flex;

  width: 30px;

  height: 30px;

  align-items: center;

  justify-content: center;

  border: 1px solid currentColor;

  border-radius: 50%;

  font-size: 14px;

  transition: transform 0.3s ease;
}

.booking-bottom a:hover > span,
.booking-bottom a:focus-visible > span {
  transform: translateX(5px);
}

/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1050px) {
  .popular-list {
    grid-template-columns: repeat(4, 1fr);
  }

  .facility-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .mosaic-grid {
    grid-template-columns: 1fr 1fr;

    grid-template-rows: 400px 300px 300px;
  }

  .mosaic-large-image {
    grid-column: span 2;

    grid-row: auto;
  }

  .amenities-gallery {
    grid-template-columns: repeat(3, 1fr);
  }

  .amenity-card {
    height: 500px;
  }

  .ella-gallery {
    grid-template-columns: 1fr 1fr;
  }

  .ella-one {
    grid-row: span 1;
  }

  .ella-four {
    grid-column: auto;
  }

  .things-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 900px) {
  .experience-mosaic {
    padding: 0 20px 90px;
  }

  .mosaic-grid {
    grid-template-columns: 1fr 1fr;

    grid-template-rows: 500px 260px 260px;
  }

  .mosaic-large-image {
    grid-column: 1 / -1;

    grid-row: 1;
  }

  .mosaic-panel.brown {
    grid-column: 1;

    grid-row: 2;
  }

  .mosaic-grid > .mosaic-image:nth-of-type(3) {
    grid-column: 2;

    grid-row: 2;
  }

  .mosaic-grid > .mosaic-image:nth-of-type(4) {
    grid-column: 1;

    grid-row: 3;
  }

  .mosaic-panel.light {
    grid-column: 2;

    grid-row: 3;
  }
}

@media (max-width: 900px) {
  .stories-top {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  .stories-intro {
    max-width: 420px;
  }

  .stories-slider {
    grid-template-columns: 25px 1fr 60px;

    gap: 15px;

    min-height: 480px;
  }

  .story-slide {
    height: 480px;

    flex-basis: 18%;
  }

  .story-slide.active {
    flex-basis: 58%;
  }

  .story-slide-content {
    right: 22px;

    bottom: 22px;

    left: 22px;
  }
}

/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 650px) {
  .container {
    width: calc(100% - 10vw);
  }

  .intro-section {
    padding: 75px 0;
  }

  .intro-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .intro-heading h2 {
    font-size: 53px;
  }

  .intro-copy {
    padding-top: 0;
  }

  .intro-image {
    width: 120px;

    height: 170px;

    margin: 10px 0 0 auto;
  }

  .intro-note {
    margin: -65px 0 0;
  }

  .popular-section {
    padding-bottom: 70px;
  }

  .popular-box {
    grid-template-columns: 1fr;

    padding: 25px;
  }

  .popular-list {
    grid-template-columns: repeat(2, 1fr);
  }

  .facilities-section {
    padding: 20px 0 80px;
  }

  .section-heading {
    display: block;
  }

  .section-heading h2 {
    font-size: clamp(38px, 13vw, 51px);
  }

  .heading-right {
    margin-top: 25px;
  }

  .facility-grid {
    grid-template-columns: 1fr;
  }

  .facility-card {
    min-height: auto;
  }

  .facility-card h3 {
    font-size: 25px;
  }

  .facility-card li {
    font-size: 12px;
  }

  .experience-mosaic {
    padding: 0 5vw 80px;
  }

  .mosaic-grid {
    display: flex;

    flex-direction: column;

    gap: 6px;
  }

  .mosaic-large-image {
    height: 540px;
  }

  .mosaic-large-content {
    inset: auto 25px 25px;
  }

  .mosaic-large-content h2 {
    font-size: clamp(38px, 8vw, 55px);
  }

  .mosaic-slide-counter {
    top: 20px;

    right: 20px;
  }

  .mosaic-image {
    height: 300px;
  }

  .mosaic-panel {
    min-height: 300px;
  }

  .mosaic-panel h3 {
    font-size: 36px;
  }

  .thing-content h3 {
    font-size: 22px;
  }

  .thing-content p {
    font-size: 12px;
  }

  /* ===================================================
     PREMIUM AMENITIES MOBILE
  =================================================== */

  .amenities-section {
    padding: 85px 0;
  }

  .amenities-intro {
    margin-bottom: 45px;
  }

  .amenities-intro h2 {
    font-size: 48px;
  }

  .amenities-intro p {
    max-width: 330px;

    margin-top: 24px;

    font-size: 11px;
  }

  .amenities-gallery {
    grid-template-columns: 1fr;

    gap: 5px;
  }

  .amenity-card {
    height: 440px;
  }

  .amenity-title h3 {
    font-size: 38px;
  }

  .amenity-number {
    top: 23px;
  }

  .ella-section {
    padding: 80px 0;
  }

  .ella-header {
    grid-template-columns: 1fr;

    gap: 30px;
  }

  .ella-header h2 {
    font-size: 60px;
  }

  .ella-gallery {
    display: flex;

    flex-direction: column;
  }

  .ella-image {
    height: 300px;
  }

  .things-section {
    padding: 80px 0;
  }

  .things-grid {
    grid-template-columns: 1fr;
  }

  .thing-image {
    height: 220px;
  }

  .stories-section {
    padding: 90px 0 100px;
  }

  .stories-top {
    margin-bottom: 40px;
  }

  .stories-title h2 {
    font-size: clamp(38px, 13vw, 51px);
  }

  .stories-slider {
    display: block;

    min-height: auto;
  }

  .stories-side-label {
    display: none;
  }

  .stories-track {
    display: flex;

    gap: 8px;

    overflow-x: auto;

    scrollbar-width: none;

    scroll-snap-type: x mandatory;
  }

  .stories-track::-webkit-scrollbar {
    display: none;
  }

  .story-slide,
  .story-slide.active {
    flex: 0 0 84%;

    height: 500px;

    scroll-snap-align: start;
  }

  .story-slide-content {
    opacity: 1;

    transform: none;
  }

  .story-slide-content h3 {
    font-size: 34px;
  }

  .stories-controls {
    flex-direction: row;

    margin-top: 18px;

    padding: 0;
  }

  .stories-progress {
    flex-direction: row;
  }

  .progress-line {
    width: 70px;

    height: 1px;
  }

  .progress-line span {
    width: 100%;

    height: 100%;
  }

  .stories-arrows {
    flex-direction: row;
  }

  .booking-content {
    min-height: 500px;
  }

  .booking-content h2 {
    font-size: 58px;
  }

  .booking-bottom {
    flex-direction: column;

    align-items: flex-start;

    gap: 25px;
  }
}

/* =====================================================
   FACILITIES TYPOGRAPHY
   Matches the main site's reference sizing and colors
===================================================== */

.facilities-page h1,
.facilities-page h2,
.facilities-page h3,
.facilities-page h4,
.facilities-page h5,
.facilities-page h6 {
  font-family: "Marcellus", Georgia, serif;
  font-size: 51px !important;
  line-height: 56px !important;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #25281f;
}

.facilities-page p {
  font-family: "Inter", Arial, sans-serif;
  font-size: 15px !important;
  line-height: 27px !important;
  font-weight: 300;
  color: #31423a;
}

.facilities-page .facility-card h3 {
  font-size: 28px !important;
  line-height: 1.1 !important;
}

.facilities-page .thing-content h3 {
  font-size: 24px !important;
  line-height: 1.1 !important;
}

.facilities-page h1 em,
.facilities-page h2 em,
.facilities-page h3 em {
  font-family: "Marcellus", Georgia, serif;
  font-style: italic;
}

.facilities-page .mosaic-large-content h2,
.facilities-page .mosaic-large-content h2 em,
.facilities-page .story-slide-content h3,
.facilities-page .amenity-title h3,
.facilities-page .booking-content h2,
.facilities-page .booking-content h2 em {
  color: #ffffff;
}

.facilities-page .mosaic-panel.brown p,
.facilities-page .mosaic-panel.light p,
.facilities-page .story-slide-content p,
.facilities-page .booking-bottom p {
  color: rgba(255, 255, 255, 0.82);
}

.facilities-page .mosaic-panel.brown,
.facilities-page .mosaic-panel.light {
  background: #f4e8c9;
  color: #000000;
}

.facilities-page .mosaic-panel.brown h3,
.facilities-page .mosaic-panel.brown h3 em,
.facilities-page .mosaic-panel.brown p,
.facilities-page .mosaic-panel.brown .panel-number,
.facilities-page .mosaic-panel.brown a,
.facilities-page .mosaic-panel.light h3,
.facilities-page .mosaic-panel.light h3 em,
.facilities-page .mosaic-panel.light p,
.facilities-page .mosaic-panel.light .panel-number,
.facilities-page .mosaic-panel.light a {
  color: #000000;
}
/* =====================================================
   FACILITIES EDITORIAL GRID
   Alternating image and soft-color panels inspired by the reference
===================================================== */

.facilities-page .facility-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(300px, 1fr));
  gap: 14px;
}

.facilities-page .facility-card {
  position: relative;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 28px;
  overflow: hidden;
  border: 0;
  border-radius: 18px;
  background: #f4e8c9;
  color: #25281f;
}

.facilities-page .facility-card:nth-child(4n + 2),
.facilities-page .facility-card:nth-child(4n + 4) {
  background: #efe8da;
}

.facilities-page .facility-card:nth-child(odd) {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  isolation: isolate;
}

.facilities-page .facility-card:nth-child(odd)::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(8, 28, 22, 0.04) 20%,
    rgba(8, 28, 22, 0.82) 100%
  );
}

.facilities-page .facility-card:nth-child(1) {
  background-image: url("/Images/Facility/roomview.png");
}
.facilities-page .facility-card:nth-child(3) {
  background-image: url("/Images/Facility/land.png");
}
.facilities-page .facility-card:nth-child(6) {
  background-image: url("/Images/Facility/washroom.png");
}
.facilities-page .facility-card:nth-child(8) {
  background-image: url("/Images/Facility/family.png");
}

.facilities-page .facility-card:nth-child(5) {
  background: #efe8da;
}

.facilities-page .facility-card:nth-child(4) {
  background: #f4e8c9;
}

.facilities-page .facility-card:nth-child(4)::before,
.facilities-page .facility-card:nth-child(5)::before,
.facilities-page .facility-card:nth-child(7)::before {
  display: none;
}

.facilities-page .facility-card:nth-child(4),
.facilities-page .facility-card:nth-child(5),
.facilities-page .facility-card:nth-child(7) {
  color: #25281f;
}

.facilities-page .facility-card:nth-child(6),
.facilities-page .facility-card:nth-child(8) {
  color: #ffffff;
  isolation: isolate;
}

.facilities-page .facility-card:nth-child(6)::before,
.facilities-page .facility-card:nth-child(8)::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(8, 28, 22, 0.04) 20%,
    rgba(8, 28, 22, 0.82) 100%
  );
}

.facilities-page .facility-card .facility-top,
.facilities-page .facility-card > h3,
.facilities-page .facility-card > ul {
  position: relative;
  z-index: 1;
}

.facilities-page .facility-card .facility-top {
  position: absolute;
  top: 24px;
  right: 26px;
  left: 26px;
  justify-content: flex-end;
}

.facilities-page .facility-card .facility-top > span {
  color: #5a655f;
  font-size: 10px !important;
  letter-spacing: 0.12em;
}

.facilities-page .facility-card:nth-child(odd) .facility-top > span {
  color: rgba(255, 255, 255, 0.82);
}

.facilities-page .facility-card:nth-child(6) .facility-top > span,
.facilities-page .facility-card:nth-child(8) .facility-top > span {
  color: rgba(255, 255, 255, 0.82);
}

.facilities-page .facility-card:nth-child(4) .facility-top > span,
.facilities-page .facility-card:nth-child(5) .facility-top > span {
  color: #5a655f;
}

.facilities-page .facility-card > h3 {
  max-width: 13ch;
  margin: 0 0 16px;
  color: #25281f !important;
  font-size: 30px !important;
  line-height: 1.08 !important;
}

.facilities-page .facility-card:nth-child(odd) > h3 {
  color: #ffffff !important;
}

.facilities-page .facility-card:nth-child(6) > h3,
.facilities-page .facility-card:nth-child(8) > h3 {
  color: #ffffff !important;
}

.facilities-page .facility-card:nth-child(4) > h3,
.facilities-page .facility-card:nth-child(5) > h3,
.facilities-page .facility-card:nth-child(7) > h3 {
  color: #25281f !important;
}

.facilities-page .facility-card > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.facilities-page .facility-card > ul li,
.facilities-page .facility-card > ul li span {
  margin-bottom: 7px;
  color: #31423a !important;
  font-size: 13px !important;
  line-height: 1.55 !important;
}

.facilities-page .facility-card:nth-child(odd) > ul li,
.facilities-page .facility-card:nth-child(odd) > ul li span {
  color: rgba(255, 255, 255, 0.84) !important;
}

.facilities-page .facility-card:nth-child(6) > ul li,
.facilities-page .facility-card:nth-child(6) > ul li span,
.facilities-page .facility-card:nth-child(8) > ul li,
.facilities-page .facility-card:nth-child(8) > ul li span {
  color: rgba(255, 255, 255, 0.84) !important;
}

.facilities-page .facility-card:nth-child(4) > ul li,
.facilities-page .facility-card:nth-child(4) > ul li span,
.facilities-page .facility-card:nth-child(5) > ul li,
.facilities-page .facility-card:nth-child(5) > ul li span,
.facilities-page .facility-card:nth-child(7) > ul li,
.facilities-page .facility-card:nth-child(7) > ul li span {
  color: #31423a !important;
}

@media (max-width: 1050px) {
  .facilities-page .facility-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .facilities-page .facility-grid {
    grid-template-columns: 1fr;
    grid-template-rows: none;
  }

  .facilities-page .facility-card {
    min-height: 360px;
    border-radius: 16px;
  }
}

.facilities-page .facilities-section .facility-card {
  border-radius: 0 !important;
}

.facilities-page .facilities-section .facility-grid {
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 0 14px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.facilities-page .facilities-section .facility-grid::-webkit-scrollbar {
  display: none;
}

.facilities-page .facilities-section .facility-card {
  flex: 0 0 calc((100% - 36px) / 4);
  min-height: 430px;
}

@media (max-width: 1050px) {
  .facilities-page .facilities-section .facility-card {
    flex-basis: calc((100% - 12px) / 2);
  }
}

@media (max-width: 650px) {
  .facilities-page .facilities-section .facility-card {
    flex-basis: 82vw;
    min-height: 400px;
  }
}

.facilities-section,
.experience-mosaic,
.amenities-section,
.things-section,
.stories-section,
.booking-section {
  padding: 5% 2% 5% 2%;
}
</style>
