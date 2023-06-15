<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  methods: {
    handleClick() {
      this.$emit('change-template')
    },
  },
}

</script>
<template>
    <div class="section">
        <div class="container">
            <div>
                <p><span>certificados</span></p>
                <p>concluídos</p>
                <p>por <span>leonardo</span> ⭐</p>
            </div>
            <div class="pos-container">
                <img src="../assets/arrow.png" alt="arrow">
                <RouterLink to="/about" @click="handleClick">conferir agora</RouterLink>
            </div>
        </div>
        <div class="footer">
            <div class="footer-box">
                <p>Todos os direitos reservados © - 2023</p>

            </div>
        </div>
        <!-- <transition name="fade" mode="out-in">
            <RouterView />
        </transition> -->
    </div>
</template>


<style scoped>


.transition-fade-enter-active,
.transition-fade-leave-active {
  transition: opacity 0.5s;
}

.transition-fade-enter,
.transition-fade-leave-to {
  opacity: 0;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.1;
}

/* Estilo para o componente carregado ocupar 100% da tela */
.router-view {
  height: 100%;
  width: 100%;
}


.section {
    background-image: url('../assets/background.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content-box;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
}

.section .container {
    margin: 0 auto;
    min-width: 1600px;
    background-color: transparent;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.container p {
    padding: 20px 0;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 40px;
}

.container span {
    color: #006AFE;
}

.pos-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pos-container a {
    border-radius: 5px;
    text-decoration: none;
    padding: 15px 30px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
    box-shadow: 0 0 200px #ffffffa8;
    background-color: #006AFE;
    transition: box-shadow 0.5s ease;
    transition: background-color 0.5s ease;
}

.pos-container a:hover {
    background-color: #0094fe;
    box-shadow: 0 0 200px #00d4fe   ;
} 

.pos-container img {
    width: 30px;
    margin-left: 10px;
    animation: float 2s ease-in-out infinite;
}


@keyframes float{
	0%,100%{
		transform:translatex(0)
	}
	50%{
		transform:translateX(-10px)
	}
}

.footer {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
}

.footer .footer-box {
    margin: 0 auto;
    min-width: 1600px;
}

.footer-box p {
    color: #ffffff51;
}

</style>