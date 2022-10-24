<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/partials/Navbar.vue'
import Footer from '@/components/partials/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

body {
  margin: 0px;
  font-family: 'Poppins', sans-serif;
}
</style>
