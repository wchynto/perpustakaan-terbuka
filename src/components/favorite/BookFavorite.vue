<template>
    <div class="row">
        <div v-for="n in 10" class="col-md-4">
            <img src="@/assets/book_cover/laskar-pelangi.jpeg" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: 'BookFavorite',
    components: {
    }
}
</script>

<style scoped lang="scss">
.row {
    margin: 0px 0px 0px 0px;

    img {
        width: 250px;
        height: 350px;
        border-radius: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
    }
}

@media only screen and (max-width: 1080px) {
    .row {
        img {
            width: 200px;
            height: 350px;
        }
    }
}

@media only screen and (max-width: 900px) {
    .row {
        img {
            width: 150px;
            height: 260px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .row {
        img {
            margin-top: 30px;
            width: 160px;
            // height: auto;
        }
    }
}
</style>