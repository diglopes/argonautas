<template>
  <ul class="windows">
    <Draggable
      class="drag"
      ghost-class="ghost"
      v-model="week[daySelected]"
      group="ship"
      @change="handleDrop"
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
  }),
  components: {
    Draggable,
    ShipCard,
  },
  computed: {
    daySelected() {
      return this.$store.state.day;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    handleDrop(event) {
      if (event.added.element) {
        this.$store.commit("updateLoading", true);
        const { areaFundeio, idTrajeto } = event.added.element;
        fetch(
          `http://ec2-18-229-118-175.sa-east-1.compute.amazonaws.com:3000/estimarPraticagem?areaFundeio=${areaFundeio}&idTrajeto=${idTrajeto}`
        )
          .then((data) => data.json())
          .then((json) => {
            this.$set(
              this.week[this.daySelected][event.added.newIndex],
              "praticagem",
              json.tempoEstimado
            );
          })
          .finally(() => {
            this.$store.commit("updateLoading", false);
          });
      }
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