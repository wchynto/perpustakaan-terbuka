<template>
    <div class="header-wrapper">
        <div class="header">Dukung kami meningkatkan literasi digital di seluruh indonesia </div>
        <div class="about-header shadow">
            <div class="wrapper">
                <div class="title">
                    Tentang Kami
                </div>
                <div class="about-body">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum ea totam sapiente excepturi,
                    odio corporis explicabo dolorem vel ab quo vero nesciunt molestiae dignissimos veritatis blanditiis
                    cumque deleniti obcaecati!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutHeader',
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.header-wrapper {
    display: flex;
    position: relative;
    justify-content: center;

    .header {
        font-size: 40px;
        font-weight: bold;
        color: $secondary-color;
        padding: 150px;
        text-align: center;
        width: 100%;
        height: 450px;
        background-image: url(@/assets/images/book_about.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 0px 0px 40px 40px;
    }

    .about-header {
        display: grid;
        padding: 30px;
        top: 370px;
        background-color: $secondary-color;
        width: 700px;
        height: 250px;
        border-radius: 10px;
        position: absolute;
        align-self: flex-end;
        align-items: center;

        .title {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 20px;
        }

        .about-body {
            text-align: center;
            color: $txt-color;
        }
    }
}

@media only screen and (max-width: 1024px) {
    .header-wrapper {
        .header {
            padding: 20px;

            height: 300px;
        }

        .about-header {
            width: 500px;
            padding: 10px;
            top: 250px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .header-wrapper {
        .header {
            padding: 10px;

            height: 300px;
        }

        .about-header {
            width: 350px;
            padding: 10px;
            top: 250px;
        }
    }
}
</style>