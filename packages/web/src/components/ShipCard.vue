<template>
  <li class="ship-card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.042 512.042"
      class="vessel-bg"
    >
      <path d="M511.593 273.091c-.008-.041-.019-.08-.027-.121a21.38 21.38 0 00-.43-1.672c-.043-.145-.082-.29-.127-.434a21.792 21.792 0 00-.514-1.434l-.132-.33-.029-.072-42.506-106.265a21.333 21.333 0 00-19.807-13.41v-64c0-11.782-9.551-21.333-21.333-21.333h-64c-11.782 0-21.333 9.551-21.333 21.333v170.666h-21.333v-42.667c0-11.782-9.551-21.333-21.333-21.333h-21.333v-42.667c0-11.782-9.551-21.333-21.333-21.333H234.69V85.354c0-11.782-9.551-21.333-21.333-21.333h-85.333c-11.782 0-21.333 9.551-21.333 21.333v42.667H85.354c-11.782 0-21.333 9.551-21.333 21.333v42.667H42.688c-11.782 0-21.333 9.551-21.333 21.333v42.667c-15.093 0-25.413 15.243-19.807 29.256l41.141 102.852v17.289c0 23.515 19.087 42.603 42.603 42.603h315.157c9.387 0 18.498-2.975 26.162-8.38 1.776-1.207 2.802-1.959 4.217-3.213l18.798-16.928L460 410.151l42.268-38.024a29.456 29.456 0 009.754-21.876v-72.194a21.003 21.003 0 00-.429-4.966zM384.021 106.688h21.333v42.667h-21.333v-42.667zm0 85.333h49.557l25.6 64h-75.157v-64zm-234.667 64v-21.333h42.666v21.333h-42.666zm85.334-21.333h42.666v21.333h-42.667v-21.333zm-21.334-42.667h-21.333v-21.333h42.666v21.333h-21.333zm-64-85.333h42.667v21.333h-42.666v-21.333zm-42.666 64h42.666v21.333h-42.666v-21.333zm-42.667 64h42.666v21.333H64.021v-21.333zm405.333 109.656l-37.905 34.099-10.382 9.357-18.661 16.805c-.955.569-1.506.748-1.958.748H85.354V384.02c0-2.714-.518-5.403-1.526-7.923l-30.964-77.41h416.49v45.657z" />
    </svg>

    <div class="ship-info">
      <i class="fas fa-signature ship-img"></i>
      <div>
        <span class="title">Nome</span>
        <span class="value">{{ship.name}}</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-ship ship-img"></i>
      <div>
        <span class="title">Tipo</span>
        <span class="value">{{ship.type}}</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-map-marked-alt ship-img"></i>
      <div>
        <span class="title">Origem</span>
        <span class="value">{{ship.origin}}</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-map-pin ship-img"></i>
      <div>
        <span class="title">Destino</span>
        <span class="value">{{ship.destiny}}</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-clock ship-img"></i>
      <div>
        <span class="title">ATD</span>
        <span class="value">{{ship.atd}}</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-clock ship-img"></i>
      <div>
        <span class="title">ATA</span>
        <span class="value">{{ship.ata}}</span>
      </div>
    </div>

  </li>
</template>

<script>
export default {
  props: {
    ship: { type: Object },
  },
};
</script>

<style scoped>
.ship-card {
  border-radius: 4px;
  border: 2px solid #ddd;
  transition: 0.3s all ease;
  padding: 20px;
  cursor: grab;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  position: relative;
  overflow: hidden;
}

.ship-card:hover {
  border-color: var(--primary-color--light);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  background-color: rgba(101, 164, 241, 0.1);
}


.ship-info {
  display: flex;
  align-items: center;
}

.ship-info + .ship-info {
  margin-top: 10px;
}

.ship-img {
  font-size: 18px;
  width: 20px;
  margin-right: 10px;
  text-align: center;
}

.title {
  font-size: 10px;
  color: #666;
  display: block;
}

.value {
  font-weight: bold;
  font-size: 12px;
}

.vessel-bg {
  position: absolute;
  width: 200px;
  right: 0;
  bottom: -30px;
  fill: rgba(0, 0, 0, 0.045);
}
</style>