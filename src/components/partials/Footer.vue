<template>
    <footer class="footer d-flex align-items-center">
        <div class="container">
            <div class="row  align-items-center">
                <div class="col-md-4 d-none d-sm-block">
                    <img src="@/assets/images/foooter-brand.png" alt="" srcset="">
                </div>
                <div class="col-md-4">
                    <div class="grid-container">
                        <a class="link" href="">Home</a>
                        <a class="link" href="">Perpustakaan</a>
                        <a class="link" href="">About</a>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="grid-container">
                        <a class="link" href=""><i class="fa fa-instagram" aria-hidden="true"></i>
                            @perpustakaan_terbuka</a>
                        <a class="link" href=""><i class="fa fa-twitter" aria-hidden="true"></i>
                            @perpustakaan_terbuka</a>
                    </div>
                </div>
                <div class="col-md-4 d-md-none">
                    <img src="@/assets/images/foooter-brand.png" alt="" srcset="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped lang="scss">
.footer {
    $primary-color: #309BDE;
    $secondary-color: #ffff;

    margin: 50px 0px 0px 0px;
    height: 150px;
    width: 100%;
    background-color: $primary-color;

    .grid-container {
        display: grid;
    }

    .link {
        color: $secondary-color;
    }
}

@media only screen and (max-width: 900px) {
    .footer {
        width: 100%;

        img {
            width: 200px;
        }
    }
}

@media only screen and (max-width: 600px) {
    .footer {

        width: 100%;
        height: 350px;

        img {
            width: 250px;
            margin: 20px auto 0px auto;
            margin-right: auto;
            display: block;
        }

        .container {
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .link {
            text-align: center;
            margin-bottom: 15px;
        }
    }
}
</style>