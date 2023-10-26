<template>
    <div class="bigbox">
        <div class="head">
            <h2 style="font-size: 30px;">关注的歌手</h2>
        </div>


        <div class="srcoll_container">
          <div class="content">
              <router-link class="item" v-for="(item, index) in singerArr" :key="index" :class="!item.isFocus ? 'item_nofocus' : '' " :to="`/singer/${item.id}`">
                  <div class="img">
                      <img :src="item.img"/>
                  </div>

                  <div class="name">{{ item.name }}</div>

                  <div class="btn">
                      <button @click="isFocus(index)" :class="!item.isFocus ? 'nofocus' :  '' ">
                          <i v-if="item.isFocus" class="el-icon-check" style="font-weight: bold; margin-right: 5px;"></i>
                          <i v-else class="el-icon-plus" style="font-weight: bold; margin-right: 5px;"></i>
                          <span v-text="item.isFocus ? '已关注': '关注'"></span>
                      </button>
                  </div>

              </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import singerApi from '@/api/singerApi';
export default {
    name: 'focusSinger',
    data(){
        return {
            singerArr:[]
        }
    },
    mounted(){
      this.getAllSinger();
    },
    methods:{
      isFocus(index){
        this.singerArr[index].isFocus = !this.singerArr[index].isFocus;
      },
      getAllSinger(){
        singerApi.getAllSinger().then(response => {
          const { data } = response.data;
          this.singerArr = data.map(item => ({...item, isFocus:true}));
          console.log(data);
        })
      }
    }
}
</script>

<style scoped>
.bigbox {
    width: 100%;
    height: 600px;
    padding-left: 20px;
    padding-right: 50px;
  }
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content{
    margin-top: 30px;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
  }
  .item{
    width: 300px;
    padding-bottom: 20px;
    border-radius: 8px;
    margin: 50px;
    box-shadow: 0 0 10px #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;
    padding: 20px;
  }
  .item:nth-child(1){
    margin-left: 50px;
  }
  .item:nth-child(5){
    margin-right: 50px;
  }
  .item:hover{
    margin-top: -10px;
    transition: all 0.5s ease;
    box-shadow: 0 0 5px #31c27c;
  }
  .item_nofocus:hover{
    margin-top: -10px;
    transition: all 0.5s ease;
    box-shadow: 0 0 5px red!important;
  }
  .img{
    width: 150px;
    height: 150px;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 50%;
    overflow: hidden;
  }
  .img img{
    width: 150px;
    height: 150px;
  }
  .name{
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  .btn{
    margin-top: 20px;
    overflow: hidden;
  }
  .btn button{
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: none;
    background-color: #31c27c;
    color: white;
    font-weight: bold;
    font-size: 15px;
    transition: all 0.5s ease;
  }
  .btn button:hover{
    background-color: whitesmoke;
    transition: all 0.5s ease;
    color: #31c27c;
  }
  .nofocus{
    background-color: red!important;
    color: white!important;
  }
  .nofocus:hover{
    color: red!important;
    background-color: whitesmoke!important;
  }
  
  .srcoll_container {
    padding-top: 50px;
    overflow-x: auto;
    white-space: nowrap;
    height: 400px;
  }
</style>