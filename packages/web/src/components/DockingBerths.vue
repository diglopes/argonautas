<template>
    <div class="docking-Berths">
        <nav class="navigation">
            <h1>Berço de atracação A</h1>
            <div class="buttons">
                <BaseButton disabled>
                    <i class="fas fa-chevron-left button-arrow"></i>
                </BaseButton>
                <BaseButton>
                    <i class="fas fa-chevron-right button-arrow"></i>
                </BaseButton>
            </div>
        </nav>
    </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
    .docking-Berths {
        flex-grow: 1;
        padding: 20px;
    }

    .navigation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #ddd;
        padding-bottom: 10px;
    }

    .buttons button:first-child {
        margin-right: 4px;
    }

    .button-arrow {
        font-size: 15px;
        color:  var(--secondary-color);
    }
</style>