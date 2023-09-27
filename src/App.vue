<template>
  <div id="app">
      <!-- <router-view></router-view> -->
      <AlbumDetail></AlbumDetail>
      <Footer></Footer>
  </div>
</template>

<script>

import Footer from '@/components/all/footer.vue'
import Parents from '@/test/parents.vue'
import AlbumDetail from './views/AlbumDetail.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Parents,
    AlbumDetail,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
.el-button--primary{
  background-color: #27c31c;
  transition: all 0.5s;
  border: none;
}
.el-button--primary:hover{
  background-color: white;
  color: #27c31c;
  transition: all 0.5s;
}
</style>
