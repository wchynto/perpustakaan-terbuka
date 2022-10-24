<template>
    <div class="form-group align-items-center">
        <input type="text" class="form-control search-input" name="" id="" aria-describedby="helpId"
            placeholder="Cari judul buku...">
        <Button class="btn-submit"><i class="fa fa-search" aria-hidden="true"></i></Button>
    </div>
</template>

<script>
import Button from '@/components/partials/Button.vue'

export default {
    name: 'Searchbar',
    components: {
        Button
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;

.form-group {
    display: flex;

    .search-input {
        width: 340px;
        height: 40px;
        border-radius: 10px 0px 0px 10px;
    }

    .btn-submit {
        height: 40px;
        width: 80px;
        font-weight: bold;
        font-size: 18x;
        background-color: $primary-color;
        color: $secondary-color;
        border: 2px solid $primary-color;
        border-radius: 0px 10px 10px 0px;
    }

    .btn-submit:hover {
        background-color: $secondary-color;
        color: $primary-color;
    }
}

@media only screen and (max-width: 600px) {
    .form-group {
        display: flex;

        .search-input {
            width: 300px;
            height: 40px;
        }

        .btn-submit {
            height: 40px;
            width: 80px;
        }
    }
}
</style>