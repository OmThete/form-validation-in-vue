<template>
    <div class="calenders">
        <h2>Date Select</h2>
      <Datepicker v-model="date" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  const date = ref();
  </script>

  <style scoped>
  .calenders{
    width: 224px;
  }
</style>
  