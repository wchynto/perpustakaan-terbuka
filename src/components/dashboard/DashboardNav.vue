<template>
    <Button v-for="nav in dashboardNav">
        {{ nav }}
    </Button>
</template>

<script>
import Button from '@/components/partials/Button.vue'

export default {
    name: 'DashboardNav',
    components: {
        Button
    },
    data() {
        return {
            dashboardNav: {
                Profile: 'Profile',
                mostPopular: 'Favorite',
                logout: 'Logout'
            }
        }
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;
$txt-color: #8F8F8F;

.btn {
    font-weight: bold;
    color: $secondary-color;
    margin-bottom: 20px;
    background-color: $primary-color;
    font-weight: bold;
    font-size: 18px;
    width: 100%;
    height: 50px;
}
</style>