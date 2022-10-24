<template>
    <div class="dashboard">
        .<div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <DashboardNav></DashboardNav>
                </div>
                <div class="col-lg-9">
                    <ProfileBoard></ProfileBoard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardNav from '@/components/dashboard/DashboardNav.vue'
import ProfileBoard from '@/components/dashboard/ProfileBoard.vue'

export default {
    name: 'DashboardView',
    components: {
        DashboardNav,
        ProfileBoard
    }
}
</script>

<style scoped lang="scss">

</style>