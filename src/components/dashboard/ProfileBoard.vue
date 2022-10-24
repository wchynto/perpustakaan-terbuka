<template>
    <div class="board shadow">
        <div class="row justify-items-center">
            <div class="col-lg-12 profile-image">
                <img :src="require(`@/assets/profile_images/${profileImage}`)" alt="" srcset="">
                <div class="profile-name">
                    Hinanonano
                </div>
            </div>
            <div class="col-lg-12 board shadow align-self-center">
                <div class="username-wrapper">
                    <div class="username">
                        Hinanonano
                    </div>
                    <Button>Edit</Button>
                </div>
                <div class="email">
                    hinanonano_kwai@gmail.com
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/partials/Button.vue'

export default {
    name: 'ProfileBoard',
    components: {
        Button
    },
    data() {
        return {
            profileImage: 'hinanonano.jpeg'
        }
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.board {
    padding: 30px 60px 30px 60px;
    width: 800px;
    border-radius: 10px;
    border: 2px solid rgb(224, 224, 224);

    .profile-image {
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: center;
        }

        .profile-name {
            margin-top: 20px;
            text-align: center;
            font-size: 35px;
        }
    }

    .board {
        width: 100px !important;
        background-color: #e9e9e9;
        border: none;

        .username-wrapper {
            display: flex;
            justify-content: space-between;

            .btn {
                background-color: $primary-color;
                width: 100px;
                color: #fff;
                font-weight: bold;
                border: 2px solid $primary-color;
            }

            .btn:hover {
                background-color: $secondary-color;
                width: 100px;
                color: $primary-color;
                border: 2px solid $primary-color;
                font-weight: bold;
            }

            .username {
                font-size: 25px;
            }
        }


        .email {
            margin-top: 50px;
            font-size: 25px;
        }
    }
}
</style>