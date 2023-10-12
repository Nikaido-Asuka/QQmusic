<template>
    <div class="bigbox">
      <h2 style="font-size: 30px;">自建歌单：</h2>
  
      <div class="srcoll_container">
        <div class="song_sheet">
          <div class="item_sheet" v-for="(item, index) in songSheet" :key="item.id">
            <div class="front" @click="expand(index)">
              <img :src="item.img" />
            </div>
  
            <div class="back" :class="item.isVisible ? 'expand':'' ">
              <span style="font-size: 20px; font-weight: bold; margin-top: 30px;">{{ item.name }}</span>
              <p>{{ item.time }}</p>
              <div class="bottom">
                 <el-button class="btn" type="primary">播放</el-button>
                 <i class="el-icon-d-arrow-right forward"></i>
              </div>
            </div>
          </div>
  
          <!-- 添加更多的 item_sheet 元素 -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "songsheet",
    data() {
      return {
        isExpandIndex: -1,
        songSheet:[{
          id: '1',
          name: '自建歌单',
          img: 'https://pic.imgdb.cn/item/652149acc458853aef689498.jpg',
          time: '2023.10.12',
          isVisible: false,
        },{
          id: '2',
          name: '芜湖！',
          img: 'https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg',
          time: '2023.07.03',
          isVisible: false,
        }]
      };
    },
    mounted() {},
    methods: {
        expand(index){
          this.songSheet[index].isVisible = !this.songSheet[index].isVisible;
            // console.log(index);
            // this.$refs.back.classList.toggle('expand');
        }
    },
  };
  </script>
  
  <style scoped>
  .bigbox {
    width: 100%;
    height: 600px;
  }
  
  .srcoll_container {
    overflow-x: auto;
    white-space: nowrap;
    height: 400px;
  }
  
  .song_sheet {
    display: inline-block;
    margin: 0 50px; /* 设置每个 image-container 的间距为 100px */
    position: relative;
    border-radius: 12px;
    cursor: pointer;
  }
  
  .item_sheet {
    display: inline-block;
    width: 200px;
    margin: 0 30px;
    position: relative;
  }
  
  .item_sheet img {
    border-radius: 12px;
    width: 200px;
    height: 200px;
  }
  
  .front {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: absolute;
    z-index: 3;
  }
  
  .back {
    width: 200px;
    height: 150px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2e303f;
    position: absolute;
    top: 30px;
    z-index: 2;
    color: white;
    transition: all 1s ease;
    padding-bottom: 10px;
  }

  .expand{
    top: 180px;
    box-shadow: 0 0 10px gray;
    transition: all 1s ease;
  }
  .btn{
    padding: 10px 8px;
    width: 100px;
    margin-left: 25px;
  }
  .bottom{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .forward{
    margin-right: 30px;
    font-size: 25px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00a2d6,
    0 0 70px #00a2d6, 0 0 80px #00a2d6, 0 0 100px #00a2d6, 0 0 150px #00a2d6;
    transition: all 0.3s ease-in-out;
  }
  .forward:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px 20px #00a2d6;
  }

  </style>
  