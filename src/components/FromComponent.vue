<template>
    <div class="form-container">
     <div class="form-element">
      <h2>Form Elements</h2>
      <div class="input-field-heading">
        <label class="input-label">Input Field</label >
        <input class="input-focuse" type="text" v-model="textInput" placeholder="Input Placeholder" @input="validateInput">
        <p v-if="!isValid" class="error-message">Please enter only text.</p>
      </div>
      <div class="input-field-heading">
        <label class="input-label">Input Field Focus</label >
        <input class="input-focus" type="text" placeholder="" @input="handleInput" v-model="textFocus">
        <p v-if="!isValidate" class="error-message">Please enter only text.</p>
      </div>
      <div class="input-field-heading">
        <label class="input-label">Input Field Disabled</label >
        <input class="input-focus" placeholder="Input Placeholder" disabled>
      </div>
      <div class="input-field-heading">
        <label class="input-label">Input Field Error</label >
        <input class="input-focus error" type="text" placeholder="Input Placeholder" >
      </div><br>
  
     <div class="amount-container">
      <div class="custom-input-field">
        <input type="text" class="currency" v-model="currency">
        <input class="input-amount" type="text" value="123,45.00" readonly>
      </div>
      <div class="custom-input-field">
        <input type="text" class="currency-amount" value="99,5" readonly>
        <input class="input-amount-percent" type="text" value="%" readonly>
      </div>
     </div><br>
  
     <div class="input-field-heading">
      <input class="input-focus-increment" type="number" v-model="value" @input="handleChange" required :class="{ error: value < 0 }" />
     </div>
     
     <div class="input-field-heading">
      <label class="input-label">Textarea</label >
       <textarea placeholder="Text area"></textarea>
     </div>
     </div>
     <div>
    <DropdownComponent />
     </div>
    </div>
  </template>
  
  <script>
import DropdownComponent from './DropdownComponent.vue'
  export default {
    data() {
      return {
        isFocused: false,
        currency: '$',
        value: 0,
        textInput: '',
        isValid: true,
        textFocus:'',
        isValidate:true
      };
    },
    components: {
      DropdownComponent
    },
    methods: {
      handleInput() {
        this.isFocused = true;
        const regex = /^[A-Za-z\s]+$/;
        this.isValidate = regex.test(this.textFocus);
      },
      validateInput() {
      // Regex to allow only alphabets and spaces
      const regex = /^[A-Za-z\s]+$/;
      this.isValid = regex.test(this.textInput);
    },
      handleChange(event) {
        this.value = event.target.value;
      }
    }
  }
  </script>
  
  <style>
  .form-element {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  .input-field-heading {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }
  .input-label{
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 500;
  }
  .input-focus, .input-focuse{
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
  }
  .input-focus:focus {
    border-color: blue;
    border-radius: 4px;
  }
  .input-focus:disabled {
    background-color: #f2f2f2; 
    color: #666;
  }
  .error {
    border: 1px solid red;
    background-color: #ffe6e6;
    color: #333;  
  }
  .error-message {
  color: red;
}
  .amount-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .currency {
    width: 30px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
    text-align: center;
  }
  .input-amount{
    width: 90px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
  }

  .currency-amount {
    width: 45px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
  }
  .input-amount-percent{
    width: 25px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
    text-align: center;
  }
  
  .input-focus-increment{
    width: 130px;
    border: 1px solid;
    padding: 5px;
    font-size: 16px;
    outline: none;
    border-radius: 2px;
  }
  .form-container {
    margin-bottom: 15px;
  }
  </style>