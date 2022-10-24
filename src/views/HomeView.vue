<template>
  <div class="home">
    .<div class="container">
      <Hero></Hero>
    </div>
    <Banner></Banner>
    <div class="container">
      <MostPopular></MostPopular>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import Banner from '@/components/home/Banner.vue'
import MostPopular from '@/components/home/MostPopular.vue'

export default {
  name: 'HomeView',
  components: {
    Hero,
    Banner,
    MostPopular,
  }
}
</script>
