<template>
    <div>
        <!-- 模糊背景框 -->
        <div>
            <div class="tilted_box">
                <img class="tilted_box_img" :src="singer.img"/>
            </div>
        </div>

        <!-- 歌手信息部分 -->
        <div class="singer_info">
            <!-- 左侧头像 -->
            <img class="avatar" :src="singer.img"/>

            <!-- 右侧信息 -->
            <div class="singer_info_right">
                <div class="singer_info_right_left">
                    <span style="">{{singer.name}}</span>
                    <span>{{singer.otherName}}</span>
                    <span>粉丝数：{{singer.fans}}W</span>
                </div>

                <div class="singer_info_right_right">
                    <span>简介：</span>
                    <br/>
                    <span v-html="singer.description"></span>
                </div>

            </div>
        </div>

        <!-- 歌手热门歌曲部分 -->
        <popularSongs :id="singer._id"></popularSongs>

        <!-- 歌手专辑部分 -->
        <Album :id="singer._id"></Album>

        <!-- 相似歌手部分 -->
        <similarSingers></similarSingers>
    </div>
  
</template>

<script>
import Album from '../components/singer/Album.vue'
import popularSongs from '@/components/singer/popularSongs.vue';
import similarSingers from '@/components/singer/similarSingers.vue';
import singerApi from '@/api/singerApi';
export default {
    name: "Singer",
    components:{
        Album,
        popularSongs,
        similarSingers
    },
    data(){
        return {
            singer:{},
        }
    },
    mounted(){
        this.getSingerInfo();
    },
    methods:{
        getSingerInfo(){
            singerApi.getSingerById(this.$route.params.id)
                .then(response => {
                    const { data } = response.data;
                    this.singer = data;
                    this.id = this.singer._id;
                }).catch(err => console.log(err));
        }
    },
    props:{
    }
}
</script>


<style scoped>
.tilted_box{
    width: 100%;
    height: 300px;
}

.tilted_box_img{
    width: 100%;
    margin-bottom: 500px;
    position: absolute;
    bottom: -100px;
    left: 0px;
    filter: blur(10px);
}

.singer_info{
    
    display: flex;
}

.avatar{
    z-index: 10;
    margin-top:-50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-left: 50px;
    box-shadow: 0 20px 20px gray;
}

.singer_info_right{
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.singer_info_right_left{
    display: flex;
    flex-direction: column;
}

.singer_info_right_left span{
    margin-left: 20px;
    margin-top: 10px;
}

.singer_info_right_left span:nth-child(1){
    margin-left: 20px; 
    font-size: 35px; 
    font-weight: bold;
}

.singer_info_right_right{
    margin-top: 20px;
    width: 80%;
}

.singer_info_right_right span {
    padding: 20px;
}

.singer_info_right_right span:nth-child(1){
    font-weight: 700;
    padding: 20px;
    font-size: 20px;
}


</style>