<template>
    <div class="box">
      <h1>您收藏的歌手</h1>
  
      <div class="row">
        <router-link v-for="(item, index) in singers" :key="index" :to="`/singer/${item.id}`" class="item_row">
          <div class="image-wrapper">
            <img :src="item.img" alt="Singer Image" />
          </div>
  
          <span>{{ item.name }}</span>
  
          <!-- 代表作 -->
          <span v-for="(item_2, index_2) in item.standFor" :key="index_2">
            《{{ item_2.name }}》
          </span>
        </router-link>
      </div>
    </div>
  </template>

<script>
import singerApi from '@/api/singerApi';
export default {
  name: 'SingerList',
  data() {
    return {
      singers: []
    };
  },
  mounted(){
    singerApi.getAllSinger()
        .then(response =>{
           console.log(response.data);
           const { data } = response.data;
           this.singers = data;
          })
        .catch(err => console.log(err.message));
  }
};
</script>

  
  <style scoped>
  .box {
    margin: 10px;
  }
  
  .row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 20px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    gap: 100px;
  }
  
  .item_row {
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-decoration: none;  /* 添加此样式以去除链接默认的下划线 */
  }
  
  .image-wrapper {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.5s;
  }
  
  .item_row img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .item_row:hover .image-wrapper {
    width: 250px;
    height: 250px;
  }
  
  .item_row span {
    text-align: center;
    color: black;
  }
  
  .item_row span:nth-child(2) {
    color: black;
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  span:hover{
    color: #31c27c;
  }
  </style>
  