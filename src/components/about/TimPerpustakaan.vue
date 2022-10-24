//tampilan tablet kurang responsif

<template>
    <div v-for="profile in profiles" :class="{blueBg: profile.image === 'hendra.jpeg'}" class="team-info">
        .<div class="container">
            <div v-if="profile.image === 'hendra.jpeg'" class="row">
                <div class="col-md-3 self-center col-sm-12 d-md-none s-lg-block justify-content-end">
                    <img :src="require(`@/assets/team_images/${profile.image}`)" alt="" srcset="">
                </div>
                <div class="col-md-9 align-self-center col-sm-12">
                    <div class="name">
                        {{profile.name}}
                    </div>
                    <div class="role">
                        {{profile.role}}
                    </div>
                </div>
                <div class="col-md-3 align-self-center col-sm-12  ">
                    <img :src="require(`@/assets/team_images/${profile.image}`)" alt="" srcset="">
                </div>
            </div>
            <div v-else class="row">
                <div class="col-md-3 align-self-center col-sm-12">
                    <img :src="require(`@/assets/team_images/${profile.image}`)" alt="" srcset="">
                </div>
                <div class="col-md-9 align-self-center col-sm-12">
                    <div class="name">
                        {{profile.name}}
                    </div>
                    <div class="role">
                        {{profile.role}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TimPerpustakaan',
    data() {
        return {
            profiles: this.$store.getters.getTeamProfile
        }
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.team-info {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 40px 0px 40px 0px;

    .row {

        img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
        }

        .name {
            color: #000000;
            font-weight: bold;
            font-size: 35px;
        }

        .role {
            color: #000000;
            font-weight: bold;
            font-size: 25px;
        }
    }
}

.blueBg {
    background-color: $primary-color;

    .name {
        color: $secondary-color !important;
    }

    .role {
        color: $secondary-color !important;
    }
}

@media only screen and (max-width: 1024px) {
    .team-info {
        .row {

            .name {
                margin-left: 100px;
            }

            .role {
                margin-left: 100px;
            }
        }
    }

    .blueBg {
        background-color: $primary-color;



        .name {
            color: $secondary-color !important;
            margin-left: 0px !important;
        }

        .role {
            color: $secondary-color !important;
            margin-left: 0px !important;
        }
    }
}

@media only screen and (max-width: 600px) {
    .team-info {
        .row {
            text-align: center;

            .name {
                margin-top: 10px;
                margin-left: 0px;
            }

            .role {
                margin-left: 0px;
            }
        }
    }
}
</style>