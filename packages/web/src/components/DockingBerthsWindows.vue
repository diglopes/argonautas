<template>
  <ul class="windows">
    <Draggable
      class="drag"
      ghost-class="ghost"
      v-model="ships"
      group="ship"
    >
      <ShipCard v-for="(ship, index) in ships" :key="index" :ship="ship" class="card">
      </ShipCard>
    </Draggable>
  </ul>
</template>

<script>
import Draggable from "vuedraggable";
import ShipCard from "@/components/ShipCard.vue";


export default {
  data: () => ({
    ships: [],
  }),
  components: {
    Draggable,
    ShipCard
  },
};
</script>

<style scoped>
.windows {
  margin-top: 20px;
  overflow-y: scroll;
  max-height: 420px;
}

.drag {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.card  li {
  grid-template-columns: repeat(3, 1fr);
}

.ghost {
  opacity: 0.2;
}
</style>