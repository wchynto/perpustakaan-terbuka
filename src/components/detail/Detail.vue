<template>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-5 d-flex justify-content-center">
                <img class="book-cover" src="@/assets/book_cover/laskar-pelangi.jpeg" alt="" srcset="">
            </div>
            <div class="col-lg-7">
                <div class="title">
                    Laskar Pelangi
                </div>
                <div class="describe">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra imperdiet augue sit amet
                    placerat. Donec mollis volutpat libero eu ullamcorper. Donec tincidunt nunc quis urna tincidunt
                    ultrices.”
                </div>
                <div class="btn-wrapper">
                    <ButtonLink class="btn-baca">Mulai Baca</ButtonLink>
                    <ButtonLink class="btn-favorite">Tambahkan Favorite</ButtonLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonLink from '@/components/partials/ButtonLink.vue'

export default {
    name: 'Detail',
    components: {
        ButtonLink
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.book-cover {
    width: 350px;
    height: 500px;
    border-radius: 10px;
}

.title {
    font-weight: bold;
    font-size: 50px;
}

.describe {
    font-size: 20px;
    margin: 50px 0px 50px 0px;
}

.btn-wrapper {
    .btn-baca {
        margin-right: 40px;
        width: 200px;
        margin-bottom: 20px;
        height: 50px;
        font-weight: bold;
        font-size: 18px;
        background-color: $primary-color;
        color: $secondary-color;
        border: 2px solid $primary-color;
    }

    .btn-favorite {
        margin-bottom: 20px;
        height: 50px;
        font-weight: bold;
        font-size: 18px;
        background-color: $primary-color;
        color: $secondary-color;
        border: 2px solid $primary-color;
    }
}
</style>