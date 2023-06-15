<template>
    <div class="container">
        <img src="../assets/1.png" alt="">
        <RouterLink to="/about">conferir agora</RouterLink>
        <RouterLink to="/construindo-single-page-applications">conferir agora</RouterLink>
        <RouterView />
    </div>
</template>


<style scoped>


.container {
    background-image: url('../assets/background.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-clip: content-box;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container img {
    max-width: 900px;
    box-shadow: 0 0 250px #006afe63;
}

</style>