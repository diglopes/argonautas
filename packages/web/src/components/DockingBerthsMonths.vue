<template>
    <ul class="months">
        <li class="before-3">Agosto</li>
        <li class="before-2">Setembro</li>
        <li class="before-1">Outubro</li>
        <li class="selected">Novembro</li>
        <li class="before-1">Dezembro</li>
        <li class="before-2">Janeiro</li>
        <li class="before-3">Fevereiro</li>
    </ul>
</template>

<style scoped>
    .months {
        display: flex;
        justify-content: space-between;
    }

    .months li {
        font-size: 18px;
        font-weight: bold;
    }

    li.before-1 {
        color: rgba(0, 0, 0, 0.3);
    }

    li.before-2 {
        color: rgba(0, 0, 0, 0.2);
    }

    li.before-3 {
        color: rgba(0, 0, 0, 0.1);
    }
</style>