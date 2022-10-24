<template>
    <div class="banner">
        <div class="banner-txt">
            “Penguatan budaya literasi adalah kunci memajukan negeri ini.”
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped lang="scss">
.banner {
    justify-content: center;
    display: flex;
    margin: 110px 0px 0px 0px;
    height: 500px;
    background-image: url(@/assets/images/home-banner.jpg);
    background-size: cover;
    background-repeat: no-repeat;

    .banner-txt {
        width: 900px;
        text-align: center;
        align-self: center;
        color: #ffff;
        font-weight: bold;
        font-size: 50px;
    }
}

@media only screen and (max-width: 1080px) {
    .banner {
        background-size: cover;
        background-position: center;

        .banner-txt {
            width: 500px;
            font-size: 35px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .banner {
        height: 300px;
        background-size: cover;
        background-position: center;

        .banner-txt {
            width: 300px;
            font-size: 22px;
        }
    }
}
</style>