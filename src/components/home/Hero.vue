<template>
    <div class="hero-container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="hero-header">Pengalaman Membaca Yang Menyenangkan</div>
                <div class="hero-txt">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat cumque, porro fugit tenetur
                    quisquam eveniet, impedit voluptatum, sed quam enim illum. Ad quibusdam tempore iste maxime mollitia
                    sunt nihil voluptates!
                </div>
                <ButtonLink class="btn-baca">Mulai Baca</ButtonLink>
            </div>
            <div class="col-lg-6 d-flex justify-content-end">
                <img class="d-none d-lg-block" src="@/assets/images/hero-image.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>
import ButtonLink from '../partials/ButtonLink.vue'

export default {
    name: 'Hero',
    components: {
        ButtonLink
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.hero-container {
    margin: 35px 0px 0px 0px;

    .hero-header {
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 40px;
    }

    .hero-txt {
        color: $txt-color;
        margin-bottom: 60px;
    }

    .btn-baca {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        width: 210px;
        height: 50px;
        background-color: $primary-color;
        color: $secondary-color;
        border: 2px solid $primary-color;
    }

    .btn-baca:hover {
        background-color: $secondary-color;
        color: $primary-color;
        border: 2px solid $primary-color;
    }
}

@media only screen and (max-width: 600px) {
    .hero-container {
        .img {
            display: none;
        }
    }
}
</style>