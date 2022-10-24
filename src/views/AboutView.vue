<template>
  <div class="about">
    <div class="container">
      <AboutHeader></AboutHeader>
      <div class="title">Tim Perpustakaan Terbuka</div>
    </div>
    <TimPerpustakaan></TimPerpustakaan>
  </div>
</template>

<script>
import AboutHeader from '../components/about/AboutHeader.vue'
import TimPerpustakaan from '../components/about/TimPerpustakaan.vue'

export default {
  name: 'AboutView',
  components: {
    AboutHeader,
    TimPerpustakaan
  }
}
</script>

<style scoped lang="scss">
.title {
  margin: 250px 0px 40px 0px;
  text-align: center;
  font-weight: bold;
  font-size: 35px;
}
</style>
