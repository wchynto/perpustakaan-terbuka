<template>
    <nav class="navbar navbar-expand-sm navbar-light shadow">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="@/assets/images/nav-brand.png" alt="" srcset=""></a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <RouterLink :class="{active: $route.name === 'home'}" class="nav-link" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :class="{active: $route.name === 'perpustakaan'}" class="nav-link"
                            to="/perpustakaan">Perpustakaan</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :class="{active: $route.name === 'about'}" class="nav-link" to="about">About
                        </RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <ButtonLink class="login">Login</ButtonLink>
                    <ButtonLink class="register">Register</ButtonLink>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import ButtonLink from '../partials/ButtonLink.vue'

export default {
    name: 'Navbar',
    components: {
        ButtonLink,
    }
}
</script>

<style scoped lang="scss">
$primary-color: #309BDE;
$secondary-color: #ffff;


.login {
    height: 35px;
    width: 80px;
    font-weight: bold;
    font-size: 14px;
    background-color: $secondary-color;
    color: $primary-color;
    margin-right: 10px;
    border: 2px solid $primary-color;
}

.login:hover {
    background-color: $primary-color;
    color: $secondary-color;
}

.register {
    height: 35px;
    width: 80px;
    font-weight: bold;
    font-size: 14px;
    margin-right: 10px;
    background-color: $primary-color;
    color: $secondary-color;
    border: 2px solid $primary-color;
}

.register:hover {
    background-color: $secondary-color;
    color: $primary-color;
    border: 2px solid $primary-color;
}

@media only screen and (max-width: 600px) {
    .navbar {
        text-align: center;
    }

    .login {
        height: 35px;
        width: 100%;
    }

    .register {
        margin: 15px 0px 20px 0px;
        height: 35px;
        width: 100%;
    }
}
</style>