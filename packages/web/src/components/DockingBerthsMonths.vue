<template>
    <ul class="months">
        <li class="before-3">Setembro</li>
        <li class="before-2">Outrubro</li>
        <li class="before-1">Novembro</li>
        <li class="selected">Dezembro</li>
        <li class="before-1">Janeiro</li>
        <li class="before-2">Fevereiro</li>
        <li class="before-3">Março</li>
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