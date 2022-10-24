<template>
    <button type="button" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
}
</script>

<style scoped lang="scss">
.btn {
    border-radius: 10px;
}
</style>
