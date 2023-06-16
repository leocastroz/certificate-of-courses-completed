<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/certificate.png" width="250" />
    <div class="wrapper">
      <HelloWorld msg="Certificados!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/single-page-application-1">Single Page Application 1</RouterLink>
        <RouterLink to="/single-page-application-2">Single Page Application 2</RouterLink>
        <RouterLink to="/alura-jest">Testes Unitários Jest</RouterLink>
        <RouterLink to="/alura-vuex">Autenticação e Vuex</RouterLink>
        <RouterLink to="/alura-api">Composition API</RouterLink>
        <RouterLink to="/alura-explore">Explorando Framework</RouterLink>
        <RouterLink to="/palestra-flisol">Palestra FLISOL</RouterLink>
        <RouterLink to="/origamid-ui">Origamid UI</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView class="imper" />
</template>

<style scoped>

.imper {
  margin-top: 300px;
}
header {
  padding: 60px 0;
  width: 100vw;
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000038;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0rem;
}

nav a.router-link-exact-active {
  color: #006AFE;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
