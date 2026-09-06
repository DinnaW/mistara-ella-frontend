<template>
  <section class="rooms-collection" aria-labelledby="rooms-collection-title">
    <div class="rooms-collection__intro">
      <figure class="rooms-collection__feature-media">
        <img
          src="/Images/Facility/room2.jpeg"
          alt="Mistara Ella room opening toward a private balcony and the surrounding hills"
          loading="lazy"
        />
      </figure>

      <div class="rooms-collection__copy">
        <div class="rooms-collection__eyebrow" aria-hidden="true">
          <span class="rooms-collection__eyebrow-line"></span>
          <span>Find Your Perfect Room</span>
        </div>

        <h2 id="rooms-collection-title" class="rooms-collection__title">
          Refined comfort and<br />
          unmatched <em>calm</em>
        </h2>

        <p class="rooms-collection__description">
          Each room at Mistara Ella is thoughtfully composed for slow mornings,
          restful nights and uninterrupted views. Natural textures, warm timber
          details and quiet mountain light make every stay feel personal.
        </p>

        <RouterLink class="rooms-collection__cta" to="/rooms">
          <span class="rooms-collection__cta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 12H17" />
              <path d="M13 8L17 12L13 16" />
            </svg>
          </span>
          <span>Take a Tour of Our Rooms</span>
        </RouterLink>
      </div>
    </div>

    <div class="rooms-collection__gallery" aria-label="Mistara Ella room highlights">
      <RouterLink
        v-for="room in roomGallery"
        :key="room.image"
        class="rooms-collection__gallery-item"
        to="/rooms"
        :aria-label="`Explore ${room.name}`"
      >
        <img :src="room.image" :alt="room.alt" loading="lazy" />
        <span class="rooms-collection__gallery-shade" aria-hidden="true"></span>
        <span class="rooms-collection__gallery-label">
          <span>{{ room.name }}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 12H17" />
            <path d="M13 8L17 12L13 16" />
          </svg>
        </span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
const roomGallery = [
  {
    name: 'Deluxe Mountain Room',
    image: '/Images/Home/bed1.jpeg',
    alt: 'Deluxe Mistara Ella room with a timber bed and handcrafted green artwork',
  },
  {
    name: 'Private Bath',
    image: '/Images/Facility/washroom.png',
    alt: 'Private bathroom at Mistara Ella with warm timber details and a soaking tub',
  },
  {
    name: 'Family Mountain Room',
    image: '/Images/Home/bed3.jpeg',
    alt: 'Family room at Mistara Ella with twin beds and warm wooden details',
  },
]
</script>
