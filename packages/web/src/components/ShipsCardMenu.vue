<template>
  <ul class="ships-selection">
    <Draggable v-model="ships" ghost-class="ghost" class="draga" group="ship">
      <ShipCard class="card" v-for="(ship, index) in ships" :key="index" :ship="ship"/>
    </Draggable>
  </ul>
</template>

<script>
import ShipCard from "@/components/ShipCard.vue";
import Draggable from "vuedraggable";

export default {
  components: {
    ShipCard,
    Draggable,
  },
  data: () => ({
    ships: [
      {
        name: "MAERSK LA PAZ",
        type: "Cargueiro",
        origin: "BR ITJ",
        destiny: "BR SSZ",
        atd: "22/11/2020 - 05:45",
        ata: "22/11/2020 - 18:37",
      },
      {
        name: "CAP SAN ARTEMISSIO",
        type: "Cargueiro",
        origin: "BR PNG",
        destiny: "BR SSZ",
        atd: "21/11/2020 - 23:15",
        ata: "22/11/2020 - 13:30",
      },
       {
        name: "CAP SAN NICOLLS",
        type: "Cargueiro",
        origin: "BR SSZ",
        destiny: "BR PNG",
        atd: "21/11/2020 - 23:11",
        ata: "22/11/2020 - 12:00",
      },
       {
        name: "FEDERAL SUTTON",
        type: "Cargueiro",
        origin: "BR IQI",
        destiny: "BR SSZ",
        atd: "13/11/2020 - 16:24",
        ata: "23/11/2020 - 08:03",
      },
      {
        name: "ULTRA LEOPARD",
        type: "Cargueiro",
        origin: "AE CHK",
        destiny: "BR SSZ",
        atd: "21/10/2020 - 21:25",
        ata: "23/11/2020 - 17:04",
      },
       {
        name: "G R A",
        type: "Cargueiro",
        origin: "CN TXG",
        destiny: "BR SSZ",
        atd: "05/10/2020 - 15:29",
        ata: "22/11/2020 - 07:29",
      },
      {
        name: "ULTRA LEOPARD",
        type: "Cargueiro",
        origin: "AE CHK",
        destiny: "BR SSZ",
        atd: "21/10/2020 - 21:25",
        ata: "23/11/2020 - 17:04",
      },
       {
        name: "G R A",
        type: "Cargueiro",
        origin: "CN TXG",
        destiny: "BR SSZ",
        atd: "05/10/2020 - 15:29",
        ata: "22/11/2020 - 07:29",
      },
       {
        name: "MSC BRUNELLA",
        type: "Cargueiro",
        origin: "BR RIO",
        destiny: "BR SSZ",
        atd: "21/10/2020 - 16:29",
        ata: "22/11/2020 - 07:38",
      },
    ],
  }),
};
</script>

<style scoped>
.ships-selection {
  background-color: #fff;
  width: 420px;
  min-height: calc(100vh - 79px);
  max-height: calc(100vh - 79px);
  border-right: 2px solid #eee;
  padding: 20px;
  overflow-y: scroll;
}

.ghost {
    opacity: 0.2;
}

.draga {
  height: 100%;
}

.card + .card {
    margin-top: 20px;
}
</style>