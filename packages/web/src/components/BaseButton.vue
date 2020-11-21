<template>
    <button class="button">
        <slot />
    </button>
</template>

<style scoped>
    .button {
        border: 2px solid var(--secondary-color--light);
        padding: 5px 10px;
        cursor: pointer;
        background-color: rgba(214, 39, 108, 0.15);
        border-radius: 2px;
    }

    .button:hover {
        background-color: rgba(214, 39, 108, 0.4);
    }
</style>