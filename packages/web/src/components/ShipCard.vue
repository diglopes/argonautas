<template>
  <li class="ship-card">

    <div class="ship-info">
      <i class="fas fa-signature ship-img"></i>
      <div>
        <span class="title">Nome</span>
        <span class="value">MAERSK LA PAZ</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-ship ship-img"></i>
      <div>
        <span class="title">Tipo</span>
        <span class="value">Cargueiro</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-map-marked-alt ship-img"></i>
      <div>
        <span class="title">Origem</span>
        <span class="value">BR ITJ</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-map-pin ship-img"></i>
      <div>
        <span class="title">Destino</span>
        <span class="value">BR SSZ</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-clock ship-img"></i>
      <div>
        <span class="title">ATD</span>
        <span class="value">19/11/2020 - 05:45</span>
      </div>
    </div>

    <div class="ship-info">
      <i class="fas fa-clock ship-img"></i>
      <div>
        <span class="title">ATA</span>
        <span class="value">19/11/2020 - 18:37</span>
      </div>
    </div>

  </li>
</template>

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
}

.ship-card:hover {
  border-color: var(--primary-color--light);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  background-color: rgba(101, 164, 241, 0.1);
}

.ship-card + .ship-card {
  margin-top: 20px;
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
</style>