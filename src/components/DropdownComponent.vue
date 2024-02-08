<template>
  <div class="main-container">
    <div class="dropdown">
      <h2>Dropdown with Search</h2>
      <div class="dropdown-toggle" @click="toggleDropdown">
        {{ selectedOption }}
        <span
          class="arrow"
          :class="{ 'arrow-up': isDropdownOpen, 'arrow-down': !isDropdownOpen }"
        ></span>
      </div>
      <div v-if="isDropdownOpen" class="dropdown-menu">
        <input
          class="search-dropdown"
          type="text"
          placeholder="Search in dropdown"
          v-model="searchText"
        />
        <div
          class="dropdown-item"
          v-for="option in filteredOptions"
          :key="option"
          @click="selectOption(option)"
        >
          {{ option }}
        </div>
      </div>
    </div>
    <div class="calender-comp">
      <CalenderComp />
    </div>
    <div class="chip-container">
      <label class="chips-heading">Chips</label>
      <div class="chip" v-for="(chip, i) of chips" :key="chip.label">
        {{ chip }}
        <i class="material-icons" @click="deleteChip(i)">X</i>
      </div>
    </div>
    
  </div>
</template>

<script>
import CalenderComp from './CalenderComp.vue';

export default {
    data() {
        return {
            isDropdownOpen: false,
            chips: [],
            selectedOption: "Dropdown Select",
            options: [
                "Items 1",
                "Items 2",
                "Items 3",
                "Items 4",
                "Items 5",
                "Items 6",
                "Items 7",
            ],
            searchText: ""
        };
    },
    components: {
      CalenderComp
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isDropdownOpen = false;
            this.chips.push(option);
        },
        deleteChip(index) {
            this.chips.splice(index, 1);
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isDropdownOpen = false;
            this.chips.push(option);
        },
        deleteChip(index) {
            this.chips.splice(index, 1);
        },
    },
    computed: {
    filteredOptions() {
      // Filter options based on searchText
      return this.options.filter(option =>
        option.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.dropdown{
  margin-bottom: 15px;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.column-container {
  display: flex;
  flex-direction: row;
}
.dropdown,
.calender-comp {
  margin-right: 20px; 
}
.chip-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 0 15px 0;

}
.dropdown-toggle {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
}
.arrow {
  margin-left: auto;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
}
.arrow-up {
  transform: rotate(-135deg);
}
.arrow-down {
  transform: rotate(45deg);
}
.dropdown-menu {
  max-height: 200px;
  overflow: auto;
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}
.chips-heading {
  font-size: 20px;
  font-weight: 500;
}
.chip {
  display: flex;
  margin: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #4287f5;
  border-radius: 14px;
  width: 100px;
  text-align: center;
  color: #f0f0f0;
}
.dropdown-item {
  padding: 10px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #4287f5;
}
.search-dropdown {
  margin-bottom: 5px;
  border: 1px solid;
  padding: 5px;
  margin: 10px;
  width: 230px;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
}
.material-icons {
  cursor: pointer;
  margin-left: 10px;
}

</style>
