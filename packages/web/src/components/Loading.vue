<template>
  <div class="loader">Carregando<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>
</template>

<style scoped>
.loader {
    color: #999;
}
    @keyframes blink {50% { color: transparent }}
.loader__dot { animation: 1s blink infinite }
.loader__dot:nth-child(2) { animation-delay: 250ms }
.loader__dot:nth-child(3) { animation-delay: 500ms }
</style>