<template>
  <div class="content">
    <!-- Page Subtitle -->
    <div class="subtitle-section py-3">
      <div class="container">
        <p class="lead text-center">Discover trending strategies for maximum returns</p>
      </div>
    </div>
    <!-- Trending Section -->
    <div class="trending-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Safe Mode Card -->
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h3 class="card-title">Safe Mode</h3>
            <CustomCard
              v-for="strategy in strategies.filter(s => s.type === 'safe')"
              :key="strategy.id"
              :header-image="strategy.headerImage"
              :header-text="strategy.headerText"
              :main-image="strategy.mainImage"
              :yield-text="strategy.yieldText"
              :button-link="strategy.buttonLink"
            />
          </div>
          <!-- Degen Mode Card -->
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h3 class="card-title">Degen Mode</h3>
            <CustomCard
              v-for="strategy in strategies.filter(s => s.type === 'degen')"
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
import CustomCard from '../components/CustomCard.vue';
import strategies from '../assets/data/trendingStrategies.json';

export default {
  name: 'TrendingPage',
  components: {
    CustomCard,
  },
  data() {
    return {
      strategies,
    };
  },
};
</script>

<style scoped>
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.subtitle-section {
  background: var(--background-dark);
  color: var(--text-dark);
}
.trending-section {
  flex: 1;
  display: flex;
  align-items: center;
  background: var(--background-light);
  color: var(--text-dark);
}
.custom-card {
  width: 60%; /* Chaque carte occupe 60% de sa colonne */
}
.card-title {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  text-align: center;
}
.lead {
  color: var(--text-dark);
  margin-bottom: 0; /* Réduit l'espacement pour coller au header */
}
@media (max-width: 767.98px) {
  .trending-section .row {
    flex-direction: column;
  }
  .custom-card {
    width: 100%; /* Pleine largeur pour mobile */
    margin-top: 0.5rem;
  }
  .card-title {
    margin-top: 1.5rem;
  }
}
</style>