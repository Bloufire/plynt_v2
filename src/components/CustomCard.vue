<template>
  <div class="card custom-card">
    <!-- Card Header -->
    <div class="card-header d-flex align-items-center">
      <img :src="headerImage" :alt="headerText + ' icon'" class="header-image rounded-circle me-3" />
      <h5 class="card-title mb-0">{{ headerText }}</h5>
    </div>
    <!-- Main Image with Overlay Text -->
    <div class="image-container">
      <img :src="mainImage" alt="Main card image" class="card-img-top main-image" />
      <span v-if="yieldText" class="yield-text">{{ yieldText }}</span>
    </div>
    <!-- Card Footer -->
    <div class="card-footer text-center">
      <router-link :to="buttonLink" class="btn btn-custom">{{ buttonText }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCard',
  props: {
    headerImage: {
      type: String,
      required: true
    },
    headerText: {
      type: String,
      required: true
    },
    mainImage: {
      type: String,
      required: true
    },
    yieldText: {
      type: String,
      default: '' // Optionnel, affiche rien si non fourni
    },
    buttonText: {
      type: String,
      default: 'See more'
    },
    buttonLink: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
.custom-card {
  background: var(--background-light);
  border: none;
  box-shadow: 0 4px 8px var(--shadow-color);
  transition: transform 0.2s;
}
.custom-card:hover {
  transform: translateY(-5px);
}
.card-header {
  background: var(--background-light);
  border-bottom: var(--border-color);
}
.header-image {
  width: 40px;
  height: 40px;
  object-fit: cover;
}
.image-container {
  position: relative;
}
.main-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}
.yield-text {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1rem;
  font-weight: 500; /* Même épaisseur que .card-title */
  color: var(--text-light); /* Utilise une couleur claire pour le contraste */
  background: rgba(0, 0, 0, 0.6); /* Fond semi-transparent pour lisibilité */
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.card-footer {
  background: var(--background-light);
  border-top: var(--border-color);
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
</style>