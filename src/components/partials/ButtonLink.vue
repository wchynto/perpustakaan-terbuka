<template>
    <a name="" id="" class="btn" href="#" role="button">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: 'ButtonLink',
}
</script>

<style scoped lang="scss">
.btn {
    border-radius: 10px;
}
</style>
