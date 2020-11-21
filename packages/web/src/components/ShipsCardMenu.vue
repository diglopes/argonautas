<template>
    <ul class="ships-selection">
        <ShipCard />
        <ShipCard />
        <ShipCard />
        <ShipCard />
        <ShipCard />
        <ShipCard />
        <ShipCard />
    </ul>
</template>

<script>
import ShipCard from '@/components/ShipCard.vue'

export default {
    components: {
        ShipCard
    }
}
</script>

<style scoped>
    .ships-selection {
        background-color: #fff;
        max-width: 420px;
        min-height: calc(100vh - 79px);
        max-height: calc(100vh - 79px);
        border-right: 2px solid #eee;
        padding: 20px;
        overflow-y: scroll;
    }
</style>