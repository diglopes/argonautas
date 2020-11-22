<template>
  <ul class="days">
    <li
      v-for="(day, index) in daysList"
      :key="day"
      :class="{'selected': index === daySelected}"
      @click="handleClick(index)"
    >{{day}}</li>
  </ul>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    daysList: [23, 24, 25, 26, 27, 28, 29],
  }),
  methods: {
    handleClick(index) {
      this.$store.commit('updateDay', index)
    },
  },
  computed: {
    daySelected() {
      return this.$store.state.day;
    },
  },
};
</script>

<style scoped>
.days {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  position: relative;
  border-bottom: 2px solid #e9e9e9;
  padding-bottom: 30px;
}

.days li {
  font-size: 18px;
  font-weight: bold;
  background-color: #ddd;
  display: block;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all ease;
}

.days li:not(.selected):hover {
  background-color: #bbb;
}

.days .selected {
  background-color: #f59d67;
  color: #fff;
  position: relative;
}

.days .selected::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  position: absolute;
  background-color: #f59d67;
  left: 0;
  bottom: -32px;
}
</style>