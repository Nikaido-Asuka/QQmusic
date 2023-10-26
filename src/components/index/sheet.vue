<template>
    <div class="bigbox">
      <div class="title">
          <h2 style="font-size: 30px; ">歌 单 推 荐</h2>
      </div>
  
      <div class="content">
        <div class="slideOnePage" :style="slideStyle">
            <router-link v-for="(item) in sheetArr" :key="item.id" :to="`/albumDetail/${item.id}`">
                <div class="item" >
                    <div class="frosted-glass"></div>
                    <img :src="item.img"/>
                    
                    <div class="icon_box">
                        <img src="../../assets/img/三角形.png"/>
                    </div>
        
                    <span style="font-weight: bold; font-size: 20px; display: block; width: 100%;">{{ item.name }}</span>
                    <span style="color: gray; display: block; width: 100%;">播放量：{{ item.playCount }}w</span>
                </div>
            </router-link>
          
        </div>
      </div>
  
      <div class="dot_group">
          <ul>
              <li :class="{ active: currentSlideIndex === 0}" @click="handleDotClick(0)"></li>
              <li :class="{ active: currentSlideIndex === 1}" @click="handleDotClick(1)"></li>
          </ul>
      </div>
  
    </div>
  </template>
  
  <script>
import AlbumDetail from '@/views/AlbumDetail.vue';

  export default {
      name: 'sheetIndex',
      data(){
          return {
            currentSlideIndex: 0,
            sheetArr:[{
                id: '7',
                name: 'I\'m OK(Reiamgined)',
                img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
                playCount: 500,
            },{
                id: '4',
                name: '黑色柳丁',
                img: 'https://pic.imgdb.cn/item/650d2e3cc458853aef2b93d9.jpg',
                playCount: 1000,
            },{
                id: '5',
                name: '太平盛世',
                img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg',
                playCount: 2000
            },{
                id: '3',
                name: 'I\'m OK',
                img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6bb2.jpg',
                playCount: 1000,
            },{
                id: '1',
                name: '流沙(Reiamgined)',
                img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
                playCount: 300
            },{
                id: '6',
                name: '太美丽',
                img: 'https://pic.imgdb.cn/item/6508e497204c2e34d3c6d452.jpg',
                playCount: 600
            }]
          }
      },
      methods:{
        handleDotClick(index){
            this.currentSlideIndex = index;
            console.log(this.currentSlideIndex);
        }
      },
      mounted(){
  
      },
      computed:{
        slideStyle(){
            return {
                transform: `translateX(-${this.currentSlideIndex * 84}%)`,
            }
        }
      }
  }
  </script>
  
  <style scoped>
  .bigbox{
      padding-top: 30px;
      padding-bottom: 30px;
      background: linear-gradient(#eff1ef, white);
      overflow: hidden;
  }
  .title{
      text-align: center;
  }
  .content{
      width: 100%;
      height: 320px;
      display: flex;
      padding-left: 20px;
      padding-right: 20px;
      flex-direction: row;
      align-items: center;
  }
  .item{
      width: 200px;
      height: 270px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      position: relative;
      margin: 20px;
  }
  .item img{
      width: 200px;
      height: 200px;
      margin-bottom: 10px;
      transition: all 0.5s ease;
  }
  
  .frosted-glass {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    /* 磨砂效果 */
    backdrop-filter: blur(2px);
    opacity: 0;
    border-radius: 14px;
    transition: opacity 0.3s;
    transition: all 0.5s ;
  }
  .icon_box{
      opacity: 0;
      z-index: 10;
      position: absolute;
      top: 28%;
      background-color: #efefef;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      text-align: center;
  }
  .icon_box img{
    width: 30px;
    height: 30px;
    margin-top: 15px;
    margin-left: 2px;
  }
  
  .item:hover .frosted-glass{
      opacity: 1;
      transition: all 0.5s ease;
  }
  .item:hover .icon_box{
      opacity: 1;
      transition: all 0.5s ease;
  }
  .dot_group{
      width: 100%;
      height: 20px;
      display: flex;
      align-items: center;
  }
  .dot_group ul{
      width: auto;
      margin: 0 auto;
      margin-top: 0px;
      text-align: center;
      list-style: none;
      display: flex;
      padding: 10px;
  }
  .dot_group ul li{
      width: 12px;
      height: 12px;
      background-color: black;
      opacity: 0.5;
      border: none;
      border-radius: 50%;
      margin-right: 10px;
      margin-left: 10px;
  }
  .active{
      opacity: 1!important;
  }
  .slideOnePage{
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: transform 1s ease;
  }
  
  </style>