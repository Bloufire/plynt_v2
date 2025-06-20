<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Mon App Logo" class="logo" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- Centered Navigation Links -->
        <div class="nav-links-container d-flex justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/trending' }" to="/trending">Trending</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/strategies' }" to="/strategies">Strategies</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :class="{ active: $route.path === '/docs' }" to="/docs">Docs</router-link>
            </li>
          </ul>
        </div>
        <!-- Connect Button -->
        <div class="ms-auto">
          <button class="btn btn-custom" @click="handleConnect">Connect</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  methods: {
    handleConnect() {
      // Placeholder pour la logique de connexion
      alert('Fonctionnalité de connexion à implémenter !');
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 2px 4px var(--shadow-color);
}
.nav-link {
  padding-left: 1rem;
  padding-right: 1rem;
}
.nav-links-container {
  flex-grow: 0;
  width: auto;
}
.btn-custom {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: var(--text-dark);
  padding: 0.375rem 0.75rem;
  border: none;
  border-radius: 0.5rem; /* Augmentation pour un arrondi plus prononcé */
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
.logo {
  height: 40px;
  width: auto;
}
</style>