<template>
  <section
    class="mistara-faq"
    aria-labelledby="mistara-faq-title"
  >
    <div class="mistara-faq__inner">
      <!-- LEFT EDITORIAL COLUMN -->
      <div class="mistara-faq__intro">
        <div class="mistara-faq__intro-sticky">
          <p class="mistara-faq__kicker">
            Before your stay
          </p>

          <h2 id="mistara-faq-title">
            A few things
            <em>you may wonder</em>
          </h2>

          <p class="mistara-faq__description">
            We want every part of your stay to feel easy.
            Here are a few of the questions guests often ask
            before arriving at Mistara Ella.
          </p>

          <RouterLink
            class="mistara-faq__contact"
            to="/contact"
          >
            <span>Still have a question?</span>

            <span
              class="mistara-faq__contact-icon"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7H17V15" />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>

      <!-- RIGHT FAQ ACCORDION -->
      <div class="mistara-faq__list">
        <article
          v-for="(item, index) in faqItems"
          :key="item.question"
          class="mistara-faq__item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button
            class="mistara-faq__question"
            type="button"
            :aria-expanded="openIndex === index"
            :aria-controls="`mistara-faq-answer-${index}`"
            @click="toggleFaq(index)"
          >
            <span class="mistara-faq__number">
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <span class="mistara-faq__question-text">
              {{ item.question }}
            </span>

            <span
              class="mistara-faq__toggle"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
            </span>
          </button>

          <div
            :id="`mistara-faq-answer-${index}`"
            class="mistara-faq__answer-wrap"
          >
            <div class="mistara-faq__answer">
              <p>
                {{ item.answer }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0)

const faqItems = [
  {
    question: 'How can I make a reservation at Mistara Ella?',
    answer:
      'You can send us a booking enquiry through the website and our team will help you with availability, room options and the details needed to confirm your stay.',
  },
  {
    question: 'What kind of rooms are available?',
    answer:
      'Mistara Ella offers a selection of comfortable rooms designed around calm interiors, privacy and the surrounding hill-country views. You can explore the room collection on our Rooms page.',
  },
  {
    question: 'Is breakfast available during the stay?',
    answer:
      'Yes. Guests can enjoy relaxed dining and breakfast at the property. If you have dietary preferences or special requirements, let us know before arrival so our team can assist where possible.',
  },
  {
    question: 'How far is Mistara Ella from the main attractions in Ella?',
    answer:
      'Mistara Ella is positioned for guests who want a peaceful stay while still being able to explore Ella and its surrounding viewpoints, walks and attractions. Contact us if you would like help planning your route.',
  },
  {
    question: 'Can you help arrange transport or local experiences?',
    answer:
      'Our team can help point you in the right direction for local travel and experiences around Ella. Send us your plans before your stay and we will assist with the options available at the time.',
  },
  {
    question: 'Can I make a special request before arriving?',
    answer:
      'Absolutely. If you are celebrating something, travelling with a particular requirement or simply need a little extra help preparing for your stay, contact us in advance and we will do our best to assist.',
  },
]

const toggleFaq = (index) => {
  openIndex.value =
    openIndex.value === index
      ? -1
      : index
}
</script>

<style scoped>
.mistara-faq {
  position: relative;
  z-index: 5;

  width: 100%;
  overflow: hidden;

  padding: 7vw 5vw;

  background: #102f27;
  color: #f5f0e6;
}

.mistara-faq::before {
  content: '';

  position: absolute;
  top: 0;
  left: 5vw;
  right: 5vw;

  height: 1px;

  background: rgba(255, 255, 255, .14);
}

.mistara-faq__inner {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns:
    minmax(300px, .82fr)
    minmax(0, 1.18fr);

  gap: clamp(70px, 9vw, 160px);

  max-width: 1760px;
  margin: 0 auto;
}

.mistara-faq__intro {
  min-width: 0;
}

.mistara-faq__intro-sticky {
  position: sticky;
  top: 120px;

  max-width: 560px;
}

.mistara-faq__kicker {
  margin: 0 0 clamp(24px, 2.6vw, 42px);

  color: rgba(245, 240, 230, .56);

  font-family: var(--sans);
  font-size: clamp(10px, .68vw, 12px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.mistara-faq h2 {
  margin: 0;

  color: #f5f0e6;

  font-family: var(--serif);
  font-size: clamp(38px, 3.5vw, 58px);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -.028em;
}

.mistara-faq h2 em {
  display: block;

  font-family: inherit;
  font-weight: inherit;
  font-style: italic;

  color: #c8b58c;
}

.mistara-faq__description {
  max-width: 430px;

  margin:
    clamp(32px, 3.2vw, 50px)
    0
    0
    clamp(24px, 4vw, 68px);

  color: rgba(245, 240, 230, .66);

  font-family: var(--sans);
  font-size: clamp(13px, .9vw, 15px);
  font-weight: 300;
  line-height: 1.75;
  letter-spacing: -.01em;
}

.mistara-faq__contact {
  width: max-content;

  display: inline-flex;
  align-items: center;
  gap: 16px;

  margin:
    clamp(34px, 3.5vw, 56px)
    0
    0
    clamp(24px, 4vw, 68px);

  color: #f5f0e6;

  font-family: var(--serif);
  font-size: clamp(16px, 1.1vw, 19px);
}

.mistara-faq__contact-icon {
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(245, 240, 230, .28);
  border-radius: 50%;

  transition:
    background .3s ease,
    color .3s ease,
    border-color .3s ease,
    transform .3s ease;
}

.mistara-faq__contact-icon svg {
  width: 17px;
  height: 17px;
}

.mistara-faq__contact-icon path {
  stroke: currentColor;
  stroke-width: 1.25;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mistara-faq__contact:hover
.mistara-faq__contact-icon {
  border-color: #c8b58c;
  background: #c8b58c;
  color: #102f27;

  transform: translate(2px, -2px);
}


/* =========================================================
   FAQ ACCORDION
========================================================= */

.mistara-faq__list {
  min-width: 0;

  border-top: 1px solid rgba(245, 240, 230, .18);
}

.mistara-faq__item {
  border-bottom: 1px solid rgba(245, 240, 230, .18);
}

.mistara-faq__question {
  width: 100%;

  display: grid;
  grid-template-columns:
    44px
    minmax(0, 1fr)
    48px;

  align-items: center;
  gap: clamp(16px, 1.8vw, 30px);

  padding:
    clamp(24px, 2.3vw, 38px)
    0;

  border: 0;

  background: transparent;
  color: #f5f0e6;

  text-align: left;

  cursor: pointer;
}

.mistara-faq__number {
  align-self: start;

  padding-top: 4px;

  color: rgba(245, 240, 230, .38);

  font-family: var(--sans);
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: .08em;

  transition: color .35s ease;
}

.mistara-faq__question-text {
  max-width: 760px;

  font-family: var(--serif);
  font-size: clamp(20px, 1.55vw, 27px);
  font-weight: 400;
  line-height: 1.22;
  letter-spacing: -.018em;

  transition:
    color .35s ease,
    transform .35s ease;
}

.mistara-faq__toggle {
  position: relative;

  width: 46px;
  height: 46px;

  display: block;

  justify-self: end;

  border: 1px solid rgba(245, 240, 230, .22);
  border-radius: 50%;

  transition:
    border-color .35s ease,
    background .35s ease,
    transform .35s ease;
}

.mistara-faq__toggle span {
  position: absolute;
  top: 50%;
  left: 50%;

  width: 13px;
  height: 1px;

  background: currentColor;

  transform: translate(-50%, -50%);

  transition:
    transform .35s cubic-bezier(.22, 1, .36, 1),
    opacity .3s ease;
}

.mistara-faq__toggle span:last-child {
  transform:
    translate(-50%, -50%)
    rotate(90deg);
}

.mistara-faq__item.is-open
.mistara-faq__number {
  color: #c8b58c;
}

.mistara-faq__item.is-open
.mistara-faq__question-text {
  color: #d6c49d;
}

.mistara-faq__item.is-open
.mistara-faq__toggle {
  border-color: #c8b58c;

  background: #c8b58c;
  color: #102f27;

  transform: rotate(180deg);
}

.mistara-faq__item.is-open
.mistara-faq__toggle span:last-child {
  opacity: 0;

  transform:
    translate(-50%, -50%)
    rotate(0deg);
}


/* Smooth answer animation */
.mistara-faq__answer-wrap {
  display: grid;
  grid-template-rows: 0fr;

  transition:
    grid-template-rows .5s cubic-bezier(.22, 1, .36, 1);
}

.mistara-faq__item.is-open
.mistara-faq__answer-wrap {
  grid-template-rows: 1fr;
}

.mistara-faq__answer {
  min-height: 0;
  overflow: hidden;
}

.mistara-faq__answer p {
  max-width: 680px;

  margin:
    0
    62px
    clamp(28px, 2.8vw, 44px)
    calc(44px + clamp(16px, 1.8vw, 30px));

  color: rgba(245, 240, 230, .62);

  font-family: var(--sans);
  font-size: clamp(13px, .88vw, 15px);
  font-weight: 300;
  line-height: 1.72;
  letter-spacing: -.01em;

  opacity: 0;
  transform: translateY(-8px);

  transition:
    opacity .35s ease .05s,
    transform .45s cubic-bezier(.22, 1, .36, 1) .05s;
}

.mistara-faq__item.is-open
.mistara-faq__answer p {
  opacity: 1;
  transform: translateY(0);
}

@media (hover: hover) and (pointer: fine) {
  .mistara-faq__question:hover
  .mistara-faq__question-text {
    color: #d6c49d;
    transform: translateX(4px);
  }

  .mistara-faq__question:hover
  .mistara-faq__toggle {
    border-color: rgba(214, 196, 157, .72);
  }
}


/* =========================================================
   LARGE DESKTOP
========================================================= */

@media (min-width: 1500px) {
  .mistara-faq {
    padding-top: 110px;
    padding-bottom: 110px;
  }

  .mistara-faq__inner {
    grid-template-columns:
      minmax(360px, .8fr)
      minmax(0, 1.2fr);
  }

  .mistara-faq__question {
    min-height: 104px;
  }

  .mistara-faq__question-text {
    font-size: 27px;
  }

  .mistara-faq__answer p {
    font-size: 15px;
  }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1024px) {
  .mistara-faq {
    padding: 10vw 6vw;
  }

  .mistara-faq__inner {
    grid-template-columns:
      minmax(260px, .78fr)
      minmax(0, 1.22fr);

    gap: 7vw;
  }

  .mistara-faq__description,
  .mistara-faq__contact {
    margin-left: 0;
  }

  .mistara-faq__question {
    grid-template-columns:
      34px
      minmax(0, 1fr)
      42px;
  }

  .mistara-faq__toggle {
    width: 42px;
    height: 42px;
  }

  .mistara-faq__answer p {
    margin-left:
      calc(34px + clamp(16px, 1.8vw, 30px));
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 760px) {
  .mistara-faq {
    padding: 15vw 5vw;
  }

  .mistara-faq::before {
    left: 5vw;
    right: 5vw;
  }

  .mistara-faq__inner {
    grid-template-columns: 1fr;
    gap: 14vw;
  }

  .mistara-faq__intro-sticky {
    position: static;
    max-width: 520px;
  }

  .mistara-faq h2 {
    max-width: 430px;

    font-size: 38px;
    line-height: 1.05;
  }

  .mistara-faq__description {
    max-width: 450px;

    margin-top: 28px;
  }

  .mistara-faq__contact {
    margin-top: 32px;
  }

  .mistara-faq__question {
    grid-template-columns:
      28px
      minmax(0, 1fr)
      38px;

    gap: 12px;

    padding: 24px 0;
  }

  .mistara-faq__question-text {
    font-size: 19px;
    line-height: 1.2;
  }

  .mistara-faq__toggle {
    width: 38px;
    height: 38px;
  }

  .mistara-faq__answer p {
    margin:
      0
      46px
      28px
      40px;

    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mistara-faq__contact-icon,
  .mistara-faq__number,
  .mistara-faq__question-text,
  .mistara-faq__toggle,
  .mistara-faq__toggle span,
  .mistara-faq__answer-wrap,
  .mistara-faq__answer p {
    transition: none;
  }
}
</style>
