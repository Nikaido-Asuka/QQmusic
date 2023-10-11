<template>
  <div id="app">
      <!-- <router-view></router-view> -->
      <!-- <AlbumDetail></AlbumDetail> -->
      <My></My>
      <!-- <Footer></Footer> -->
  </div>
</template>

<script>

import Footer from '@/components/all/footer.vue'
import Parents from '@/test/parents.vue'
import AlbumDetail from './views/AlbumDetail.vue';
import My from './views/My.vue';
import Card from './components/singer/Card.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Parents,
    AlbumDetail,
    My,
    Card
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
  color: black;
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
