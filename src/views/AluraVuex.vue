<template>
  <div class="about">
    <img src="../assets/3.png" alt="">
  </div>
</template>
  
<style>
.about {
  display: flex;
  align-items: center;
  justify-content: center;
}

.about img {
  width: 100%;
  max-width: 700px;
}


@media (max-width: 1024px) {
  .about {
    margin: 0 auto;
    padding-top: 80px;
  }
}

@media (max-width: 500px) {
  .about img {
    padding: 10px;
  }
}
</style>