<script setup>
import IndexPage from './pages/IndexPage.vue';
import AnotherComponent from './pages/AnotherComponent.vue';
import { ref } from 'vue';

const showComponent = ref(true);

function handleChangeTemplate() {
  showComponent.value = !showComponent.value;
}

</script>


<template>
  <header>
    <transition name="fade">
      <IndexPage :is="currentComponent" key="componentKey" v-if="showComponent" @change-template="handleChangeTemplate" />
      <AnotherComponent :is="currentComponent" v-else />
    </transition>
  </header>
</template>

<style scoped>
</style>
