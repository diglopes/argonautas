<template>
    <button class="button" v-bind="$attrs">
        <slot />
    </button>
</template>

<script>
export default {
    props: {}
}
</script>

<style scoped>
    .button {
        border: 2px solid var(--secondary-color--light);
        padding: 5px 10px;
        cursor: pointer;
        background-color: rgba(214, 39, 108, 0.15);
        border-radius: 2px;
    }

    .button:disabled {
        background-color: #ddd;
        border-color: #bbb;
        cursor: initial;
    }

    .button:disabled > i {
        color: #bbb;
    }

    .button:not(:disabled):hover {
        background-color: rgba(214, 39, 108, 0.4);
    }
</style>