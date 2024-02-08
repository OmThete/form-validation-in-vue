<template>
    <div class="button-container">
      <div class="toggle-container">
        <div class="checkbox">{{ heading }}</div>
        <button class="button-cl" @click="toggleOn" :disabled="isOn"> On</button>
        <button @click="toggleOff" :disabled="!isOn">Off</button>
      </div>
  
      <div class="checkbox-container">
        <div class="checkbox">Checkbox</div>
        <input type="checkbox" v-model="checkbox1" :checked="checkbox1"> 
        <input type="checkbox" v-model="checkbox2" :style="{ border: checkbox2 ? '1px solid black' : 'none' }">
        <input type="checkbox" v-model="checkbox3">
      </div>
  
      <div class="radio-button-container">
        <div class="checkbox">Radio Button</div>
        <input type="radio" id="radio1" value="radio1" v-model="radio" checked>
        <input type="radio" id="radio2" value="radio2" v-model="radio" :style="{ border: radio === 'radio2' ? '1px solid black' : 'none' }"> 
        <input type="radio" id="radio3" value="radio3" v-model="radio">
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        heading: 'Toggle',
        activeButton: 'button1',
        checkbox1: true,
        checkbox2: false,
        checkbox3: false,
        radio: 'radio1'
      };
    },
    methods: {
      toggleButton(button) {
        this.activeButton = button;
      }
    }
  };
  </script>
  
  <style>
  .active {
    background-color: lightblue;
  }
  .toggle-container, .checkbox-container, .radio-button-container {
    margin-right: 15px;
  }
  .checkbox{
    font-size: 16px;
    font-weight: 400;
  }
  .button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
  .button-cl{
    margin-right: 7px;
  }
  </style>
  