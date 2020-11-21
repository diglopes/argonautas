<template>
    <li class="ship-card">
        
    </li>
</template>

<style scoped>
    .ship-card {
        width: 100%;
        height: 150px;
        border-radius: 4px;
        border: 2px solid #ddd;
        transition: 0.3s all ease;
        cursor: grab;
    }

    .ship-card:hover {
        border-color: var(--primary-color--light);
        box-shadow:
        0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06);
    }

    .ship-card + .ship-card {
        margin-top: 20px;
    }
</style>