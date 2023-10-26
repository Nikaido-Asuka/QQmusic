<template>
  <div id="app">
      <router-view></router-view> 
      <Footer></Footer>
      <!-- <Test1></Test1> -->
      <!-- <Children></Children> -->

      <!-- <My></My> -->
      
  </div>
</template>

<script>

import Footer from '@/components/all/footer.vue'
import Children from './test/children.vue';
import Test1 from './test/test1.vue'
import AlbumDetail from './views/AlbumDetail.vue';
import My from './views/My.vue';
import Card from './components/singer/Card.vue';
import focusSinger from './components/my/focusSinger.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Children,
    AlbumDetail,
    My,
    Card,
    focusSinger,
    Test1,
  }
}
</script>

<style>
#app {
  font-family: "微软雅黑";
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
