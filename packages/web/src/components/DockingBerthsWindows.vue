<template>
  <ul class="windows">
    <Draggable
      class="drag"
      ghost-class="ghost"
      v-model="week[daySelected]"
      group="ship"
      @change="handloDrop"
      :disabled="loading"
    >
      <ShipCard
        v-for="(ship, index) in week[daySelected]"
        :key="index"
        :ship="ship"
        class="card"
        :showPraticagem="true"
      >
      </ShipCard>
    </Draggable>
  </ul>
</template>

<script>
import Draggable from "vuedraggable";
import ShipCard from "@/components/ShipCard.vue";

export default {
  data: () => ({
    week: [[], [], [], [], [], [], []],
    loading: false
  }),
  components: {
    Draggable,
    ShipCard,
  },
  computed: {
    daySelected() {
      return this.$store.state.day;
    },
  },
  methods: {
    handloDrop(event) {
      this.loading = true
      fetch(
        "http://ec2-18-229-118-175.sa-east-1.compute.amazonaws.com:3000/estimarPraticagem?areaFundeio=5&idTrajeto=58"
      
      )
        .then((data) => data.json())
        .then((json) => {
          this.$set(this.week[this.daySelected][event.added.newIndex], 'praticagem', json.tempoEstimado)
        }).finally(() => {
          this.loading = false
        })
    },
  },
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

.card li {
  grid-template-columns: repeat(3, 1fr);
}

.ghost {
  opacity: 0.2;
}
</style>