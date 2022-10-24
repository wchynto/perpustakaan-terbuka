<template>
    .<div class="container">
        <div class="row">
            <div class="col-lg-3">
            </div>
            <div class="col-9 d-flex justify-content-center">
                <Searchbar></Searchbar>
            </div>
            <div class="col-md-3">
                <Categories></Categories>
            </div>
            <div class="col-md-9">
                <BookCollection></BookCollection>
            </div>
        </div>
    </div>
</template>

<script>
import Searchbar from '@/components/partials/Searchbar.vue'
import Categories from '@/components/perpustakaan/PerpusCategories.vue'
import BookCollection from '@/components/perpustakaan/BookCollection.vue'


export default {
    name: 'PerpustakaanView',
    components: {
        Searchbar,
        Categories,
        BookCollection
    },
}
</script>

