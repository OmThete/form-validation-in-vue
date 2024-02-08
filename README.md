# vue-project

This project discribe the UI from "https://functionize-test.blogspot.com/2024/01/ui-test.html".

Table of Contents
- Getting Started
- Project Structure
- How to Use
- Additional Information

# Getting Started
- git clone "https://github.com/OmThete/form-validation-in-vue.git"
- Install Dependencies
    cd vue-project
    npm install
- Run the development server:
    Copy code
    npm run dev


# Project Structure/ Components description & How to Use
- Form Component: This component include all the input field present in the UI and some of these input field only with '$' or amount' are with static values and below the forms dropdown is present.
- Dropdown Component shows the dropdown and the value and also the search is included in it,on click of dropdown value it is added to the chips. Now the Chips and dropdown are present in one component and on click 'x' it will close the chip.
- CalenderComponent: showing the calender on click of input field and select the date and it is imported in dropdown component. I used the Datepicker component. And the chips data/item will be there from dropdown will appear here.This is how I built the chips working.
- Now the Toast is only thing in UI I created the component and also tried so many packages for toast but  I could not achieved the feature but You can check the ToastComponent once.
- And Finalyy the Toggle present in the end but just a slght difference in toggle only and remaining checkbox and radio button are exact as per UI.
- Now in APP.VUE First FormCompont is rendered and then dropdown,calender, chips with reference to dropdown values will be displayed. Then the toast with Multiple button but this is not working, and last the buttons.


# Additional Information
- The Project Uses Vue3 
- Datepicker for to display Calender
- primevue for toast notification
