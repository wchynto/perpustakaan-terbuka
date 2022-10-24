<template>
    <div class="favorite">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                </div>
                <div class="col-lg-9 d-flex justify-content-center">
                    <Searchbar></Searchbar>
                </div>
                <div class="col-lg-3">
                    <DashboardNav></DashboardNav>
                </div>
                <div class="col-lg-9">
                    <BookFavorite></BookFavorite>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Searchbar from '@/components/partials/Searchbar.vue'
import BookFavorite from '@/components/favorite/BookFavorite.vue'
import DashboardNav from '@/components/dashboard/DashboardNav.vue'


export default {
    name: 'FavoriteView',
    components: {
        Searchbar,
        BookFavorite,
        DashboardNav
    }
}
</script>

<style scoped lang="scss">
.favorite {
    margin-top: 30px;
}
</style>