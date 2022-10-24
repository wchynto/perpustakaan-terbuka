<template>
    <div class="title">
        Tulisan Populer
    </div>
    <div class="row d-flex">
        <div v-for="bookFile in bookFiles" class="col-lg-4 col-md-4">
            <img :src="require(`@/assets/book_cover/${bookFile.file}`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'MostPopular',
    data() {
        return {
            bookFiles: this.$store.getters.getBookFiles
        }
    },
}
</script>

<style scoped lang="scss">
.title {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0px 40px 0px;
}

.row {
    margin: 0px 0px 0px 0px;

    img {
        width: 335px;
        height: 550px;
        border-radius: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (max-width: 1080px) {
    .row {
        img {
            width: 290px;
        }
    }
}

@media only screen and (max-width: 900px) {
    .row {
        img {
            width: 210px;
            height: 310px;
            // height: auto;
        }
    }
}

@media only screen and (max-width: 600px) {
    .row {
        img {
            margin-top: 30px;
            width: 270px;
            height: 370px;
            // height: auto;
        }
    }
}
</style>