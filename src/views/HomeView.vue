<script setup>
</script>

<template>
  <main>
    <h1>BEM-VINDO</h1>
    <p>Confira alguns dos meus certificados que concluí.</p>
    <p>Voltados a área de programação</p>
    <br>
    <div class="pos-container">
      <img src="../assets/arrow.png" alt="arrow">
      <RouterLink to="/single-page-application-1">CONFERIR AGORA</RouterLink>  
  </div>

  </main>
</template>

<style scoped>

main {
  text-align: center;
  padding: 120px 0;
}

main h1 {
  font-weight: 800;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #006AFE,
    0 0 21px #006AFE,
    0 0 42px #006AFE,
    0 0 82px #006AFE,
    0 0 92px #006AFE,
    0 0 102px #006AFE,
    0 0 151px #006AFE;
}

main a {
  border-radius: 4px;
  padding: 5px 20px;
  background-color: #006AFE;
  color: #00419c;
  font-weight: 700;
  border: 8px solid #003785;
}

.pos-container {
  justify-content: center;
  display: flex;
  align-items: center;

}

.pos-container img {
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

</style>