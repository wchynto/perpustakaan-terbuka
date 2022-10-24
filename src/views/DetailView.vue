<template>
    <div class="detail-view">
        <Detail></Detail>
    </div>
</template>

<script>
import Detail from '@/components/detail/Detail.vue'

export default {
    name: 'DetailView',
    components: {
        Detail
    }
}
</script>

<style scoped lang="scss">
.detail-view {
    margin: 100px;
}
</style>