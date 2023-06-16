<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Confira alguns dos meus certificados como <span>programador web</span>.
    </h3>
  </div>
</template>

<style scoped>
span {
  color: #006AFE;
  font-weight: 700;
}

.green {
  font-weight: 900;
}

.greetings h1 {
  font-size: 20px;
}

.greetings h3 {
  padding: 10px 0;
  font-size: 15px;
}


h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1 {
    text-align: left;
    font-size: 30px;
  }
  .greetings h3 {
    font-size: 18px;
    text-align: left;

  }
}
</style>
