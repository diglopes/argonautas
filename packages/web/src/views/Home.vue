<template>
  <div class="home">
    <BaseHeader />
    <ShipsCardMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseHeader from '@/components/BaseHeader.vue'
import ShipsCardMenu from '@/components/ShipsCardMenu.vue'


export default {
  name: 'Home',
  components: {
    BaseHeader,
    ShipsCardMenu
  }
}
</script>
