<template>
  <div class="card p-20 d-flex justify-content-center align-items-center">
    <h1>La page B</h1>
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router';

onBeforeRouteUpdate((to, from) => {
  console.log({
    hook: 'Before Update',
    to: to.path,
    from: from.path,
  });
});

onBeforeRouteLeave((to, from) => {
  console.log({
    hook: 'Before Leave',
    to: to.path,
    from: from.path,
  });
  const response = confirm('Êtes-vous sûr de quitter la page ?');
  if (!response) {
    return false;
  }
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>
