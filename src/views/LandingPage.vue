<template>
  <div class="content">
    <!-- Hero Section -->
    <div class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left: Text and Button -->
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
            <h1>Maximize your DeFi earnings</h1>
            <p class="lead">Optimized, 100% self-custody, zero complexity</p>
            <router-link to="/trending" class="btn btn-custom btn-lg mt-3">Start now</router-link>
          </div>
          <!-- Right: Custom Card -->
          <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <CustomCard
              v-for="strategy in strategies"
              :key="strategy.id"
              :header-image="strategy.headerImage"
              :header-text="strategy.headerText"
              :main-image="strategy.mainImage"
              :yield-text="strategy.yieldText"
              :button-link="strategy.buttonLink"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCard from '../components/CustomCard.vue'
import strategies from '../assets/data/homeStrategy.json'

export default {
  name: 'LandingPage',
  components: {
    CustomCard
  },
  data() {
    return {
      strategies,
    };
  },
}
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.hero-section {
  flex: 1;
  display: flex;
  align-items: center;
  background: var(--background-dark);
  color: var(--text-dark);
}
.btn-custom {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: var(--text-dark);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: opacity 0.2s;
}
.btn-custom:hover {
  opacity: 0.9;
}
.btn-custom:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(168, 255, 0, 0.25);
}
@media (max-width: 767.98px) {
  .hero-section .row {
    flex-direction: column;
  }
}
</style>