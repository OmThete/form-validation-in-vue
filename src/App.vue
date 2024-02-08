<template>
  <div id="app">
    <FormComponent />
    <TaostFication />
    <ToggleCheckbox />
  </div>
</template>

<script>
import FormComponent from './components/FromComponent.vue'
import TaostFication from './components/TaostFication.vue';
import ToggleCheckbox from './components/ToggleCheckbox.vue';
export default {
  name: 'App',
  components: {
    FormComponent,
    TaostFication,
    ToggleCheckbox
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
