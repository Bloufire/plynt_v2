<template>
  <div id="app">
    <HeaderNav />
    <main class="main-content">
      <router-view></router-view>
    </main>
    <FooterNav />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main-content {
  flex: 1; /* Prend tout l'espace disponible entre header et footer */
  display: flex;
  flex-direction: column;
}
</style>