<template>
  <section>
    <h1>Random User Generator</h1>
    <div class="container">
      <app-controls></app-controls>
      <app-dashboard></app-dashboard>
    </div>
  </section>
</template>

<script>
import AppControls from './components/AppControls.vue';
import AppDashboard from './components/AppDashboard.vue';

export default {
  components: {
    AppControls,
    AppDashboard
  },
  created() {
    this.$store.dispatch('setRandomUser', 3);
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #f4f4f4;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  margin: 0;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  padding: 20px;
  margin: 0 auto;
  max-width: 100%;
  width: 800px;
}
</style>
