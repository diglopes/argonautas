<template>
  <ul class="windows">
    <Draggable
      class="drag"
      ghost-class="ghost"
      v-model="week[daySelected]"
      group="ship"
    >
      <ShipCard v-for="(ship, index) in week[daySelected]" :key="index" :ship="ship" class="card">
      </ShipCard>
    </Draggable>
  </ul>
</template>

<script>
import Draggable from "vuedraggable";
import ShipCard from "@/components/ShipCard.vue";


export default {
  data: () => ({
    week: [
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  }),
  components: {
    Draggable,
    ShipCard
  },
  computed: {
    daySelected() {
      return this.$store.state.day;
    },
  }
};
</script>

<style scoped>

.drag {
  margin-top: 20px;
  overflow-y: scroll;
  max-height: 420px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  min-height: 300px;
}

.card  li {
  grid-template-columns: repeat(3, 1fr);
}

.ghost {
  opacity: 0.2;
}
</style>