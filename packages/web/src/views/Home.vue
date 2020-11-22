<template>
  <div class="home">
    <BaseHeader />
    <div class="wrapper">
      <ShipsCardMenu/>
      <DockingBerths class="docking-berths"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseHeader from '@/components/BaseHeader.vue'
import ShipsCardMenu from '@/components/ShipsCardMenu.vue'
import DockingBerths from '@/components/DockingBerths.vue'



export default {
  name: 'Home',
  components: {
    BaseHeader,
    DockingBerths,
    ShipsCardMenu
  }
}
</script>


<style>
  .wrapper {
    display: flex;
  }
</style>