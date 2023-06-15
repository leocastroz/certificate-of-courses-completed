<template>
    <div class="container">
        <div class="min-box">
            <RouterLink to="/about">Single Page Application 1</RouterLink> 
            <RouterLink to="/teste">Single Page Application 2</RouterLink>
            <RouterLink to="/alura-vuex">Autenticação e Vuex</RouterLink>
            <RouterLink to="/alura-jest">Testes Unitários Jest</RouterLink>
            <RouterLink to="/alura-api">Composition API</RouterLink>
            <RouterLink to="/alura-explore">Explorando Framework</RouterLink>
            <RouterLink to="/palestra-flisol">Palestrante 2023</RouterLink>
            <RouterLink to="/construindo-single-page-applications">conferir agora</RouterLink>
        </div>
        <div class="reative">
            <transition name="fade" mode="out-in">
                <RouterView />
            </transition>
        </div>
    </div>
</template>


<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

a {
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
}

a.router-link-exact-active {
    border-radius: 5px;
    padding: 15px 20px;
    background-color: #006AFE;
    box-shadow: 0 0 200px #00d4fe;
}

.container {
    background-image: url('../assets/background.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.min-box {
    padding: 20px;
    margin-bottom: 100px;
}


.container img {
    max-width: 900px;
    box-shadow: 0 0 250px #006afe63;
}

</style>