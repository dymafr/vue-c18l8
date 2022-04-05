<template>
  <div
    class="
      card
      p-20
      d-flex
      flex-column
      justify-content-center
      align-items-center
    "
  >
    <h1>La page B</h1>
    <div class="p-10">
      <router-link to="/b/b1">Page B1</router-link>
      <router-link to="/b/b2">Page B2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 300px;
}
</style>
