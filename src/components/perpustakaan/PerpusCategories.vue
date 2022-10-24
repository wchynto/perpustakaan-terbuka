<template>
    <div class="categories display-none">
        <Button class=" category" v-for="category in categories">
            {{category.name}}
        </Button>
    </div>
    <div class="categories d-md-none">
        <div class="btn-group">
            <button class="btn dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                Categories
            </button>
            <div class="dropdown-menu" aria-labelledby="triggerId">
                <Button class="dropdown-item" v-for="category in categories">
                    {{category.name}}
                </Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/partials/Button.vue'

export default {
    name: 'PerpusCategories',
    components: {
        Button
    },
    data() {
        return {
            categories: this.$store.getters.getCategoriesName
        }
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;

.categories {
    display: grid;

    .category {
        margin-bottom: 20px;
        height: 50px;
        font-weight: bold;
        font-size: 18px;
        background-color: $primary-color;
        color: $secondary-color;
        border: 2px solid $primary-color;
    }
}


@media only screen and (max-width: 600px) {

    .display-none {
        display: none
    }

    .dropdown-toggle {
        background-color: $primary-color;
        color: $secondary-color;
    }

    .dropdown-menu {
        width: 100%;
    }
}
</style>