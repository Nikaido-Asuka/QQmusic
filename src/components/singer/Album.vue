<template>
  <div class="box">
    <div class="title">
      <h2>专辑</h2>

      <h3>更多
        <i class="el-icon-d-arrow-right el-icon--right"></i>
      </h3>
    </div>

    <div class="scroll-container">
      <div class="album">
        <div class="image-container" v-for="(item, index) in arr" :key="index" :style="index === 0 ? {marginLeft : '0px'} : {}" @click="$router.push({ path: '/albumDetail/' + item.id})">
          <div class="frosted-glass"></div>
          <img :src="item.img" alt="Image" class="image">
          <div class="text-overlay">
            <p class="text" style="font-size: 25px; width: 150px; text-align: center;">{{ item.name }}</p>

            <div class="icon_box">
              <img src="../../assets/img/三角形.png"/>
            </div>
             
            <p class="text">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>


    
    
  </div>
</template>

<script>
import albumApi from '@/api/albumApi';
import AlbumDetail from '@/views/AlbumDetail.vue';
export default {
  name: "Album",
  data() {
    return {
      arr: [],
      stop: false,
    }
  },
  props:['id'],
  methods: {
    getAlbumBySingerId(id){
      albumApi.getAlbumBySingerId(id)
              .then(response => {
                console.log(response.data);
                this.arr = response.data.data;
                this.stop = !this.stop;
              }).catch(err => {
                this.$message({
                  type:'error',
                  message: err.message,
                  showClose: true
                })
              })
    }
  },
  //因为最开始传递过来的id是undefined，利用监听来避免id在数据变化时执行异步而造成的较大的开销,
  watch:{
    id:{
      //就是当未设置immediate或者immediate的值为false时，被侦听的变量在页面初次加载时第一次绑定值的时候，并不会执行监听操作；但是当设置了immediate的值为true时，则会立刻执行一次监听操作
      immediate: true,
      handler(newVal){
        if(newVal){
          this.getAlbumBySingerId(newVal);
        }
      }
    }
  },
  
}
</script>

<style scoped>
.box {
  margin: 0 auto;
  margin-top: 30px;
  width: 90%;
  padding: 20px;
}

.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title h2 {
  font-size: 35px;
}

.title h3{
  cursor: pointer;
  transition: all 0.4s;
}

.title h3:hover{
  cursor: pointer;
  transition: all 0.4s;
  color: #27c31c;
}

.scroll-container {
  overflow-x: auto;
  white-space: nowrap;
}

.album {
  display: inline-block;
}

.image-container {
  margin: 0 50px; /* 设置每个 image-container 的间距为 100px */
  position: relative;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
}

.frosted-glass {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 250px;
  backdrop-filter: blur(15px);
  opacity: 0;
  border-radius: 14px;
  transition: opacity 0.3s;
  transition: all 0.5s ;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  width: 250px;
  height: 250px;
  border-radius: 14px;
}

.text-overlay {
  word-wrap: break-word;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
}

.image-container:hover .frosted-glass {
  opacity: 1;
}

.image-container:hover .text-overlay {
  opacity: 1;
}
.icon_box{
  z-index: 10;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: snow;
}
.icon_box img{
  width: 30px;
  height: 30px;
  margin-top: 20px;
  margin-left: 5px;
}


</style>
