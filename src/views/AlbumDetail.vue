<template>
    <div class="box">
        <div class="head">
            <div class="img">
                <img src="https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg"/>
            </div>

            <div class="info">
                <span style="font-size: 30px; font-weight: 700;">{{album.name}}</span>

                <div class="singer">
                    <img style="width: 25px; height: 25px;" src="../assets/img/gs.png"/>
                    <a>{{ album.singerName }}</a>
                </div>

                <span>发行时间：{{ album.date }}</span>

                <span>类型：{{ album.type }}</span>

                <div class="btn">
                    <el-button type="primary">播放音乐</el-button>
                    <el-button>收藏</el-button>
                    <el-button>评论（23423）</el-button>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="content_left">
               
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/singer/Card.vue'
export default {
    name: "AlbumDetail",
    data(){
        return {
            album:{
                "_id":  "651005d8d2e1b31e3b28ae3a",
                "id": 2,
                "name": "陶喆同名专辑",
                "singerName": "陶喆",
                "img": "https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg",
                "type": "录音室专辑",
                "songArr": [{
                    "id": 1,
                    "name": "爱，很简单",
                    "album": "陶喆同名专辑",
                    "singerName": "陶喆",
                    "musicType": "R&B",
                    "playAmount": 1000,
                    "rating": 5,
                    "img": "https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6b95.jpg",
                    "color": "darkslateblue",
                    "audioUrl": "https://3wt.music.eduingame.cn/2023/09-21/ef6ebc4c78794dbf92ce08533442338a3wcn474791.mp3",
                    "date": "1997.12.6",
                    "time": "4:29",
                }],
                "date": "1997.12.6",
            }
        }
    },
    mounted(){

    },
    methods:{

    },
    components:{
        Card
    }
}
</script>

<style scoped>
.box{
    background-color: #efefef;
    padding-left: 100px;
}
.head{
    display: flex;
    flex-direction: row;
}

.img{
    width: 250px;
    height: 250px;
    margin: 50px;
    margin-left: 0px;
}
.img img{
    width: 250px;
    height: 250px;
}
.album_info{
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
.info{
    margin: 50px 20px;
    display: flex;
    flex-direction: column;
}

.singer{
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.singer a {
    margin-left: 10px;
    cursor: pointer;
}

.singer a:hover{
    cursor: pointer;
    color: #27c31c;
}

span{
    margin-top: 20px;
}

.btn{
    margin-top: 20px;
}

.content{

}

.el-button{
    font-weight: bold;
}


.btn .el-button{
    width: 120px;
}
.content_left{
    width: 80%;
    border: 1px solid black;
}
</style>