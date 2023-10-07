<template>
    <div class="box">
        <div class="head">
            <div class="img">
                <img :src="album.img"/>
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
                    <el-button>评论（ {{album.collectionNumber}} ）</el-button>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="content_left">
                <el-table :data="album.songArr" style="width: 100%;">

                    <el-table-column
                    type="index"
                    label="序号"
                    width="150"
                    :index="indexMethod"
                    >

                    </el-table-column>


                    <el-table-column
                    prop="name"
                    label="歌名"
                    width="750">
                        <template slot-scope="scope">
                            <div class="song-name" @mouseover="currentIndex = scope.$index" @mouseleave="currentIndex = -1">
                                {{ scope.row.name }}
                                <i v-show="currentIndex === scope.$index" size="200" class="el-icon-video-play el-icon--right" @click="AudioPlay"></i>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column
                    prop="time"
                    label="时长"
                    >

                    </el-table-column>

                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
import popularSongs from '@/components/singer/popularSongs.vue';
import albumApi from '@/api/albumApi';
export default {
    name: "AlbumDetail",
    data(){
        return {
            currentIndex: -1, // 记录当前鼠标所在的行号
            album:{
                
                
            }
        }
    },
    mounted(){
        //用this.$route.params来接收传递过来的参数
        this.getAlbumById(this.$route.params.id);
    },
    methods:{

        indexMethod(index) {
        return index * 2 + 1;
        },

        AudioPlay(){
            console.log("mother fucker")
        },

        getAlbumById(id){
            albumApi.getAlbumById(id).then(response => {
                console.log(response.data);
                this.album = response.data.data;
                this.album.songArr = response.data.songs;
                console.log(this.album);
            }).catch(err => {
                this.$message({
                    type:'error',
                    showClose: true,
                    message: err.message
                })
            })
        }

    },
    components:{
        popularSongs,
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
    height: 200px;
}

.el-button{
    font-weight: bold;
}


.btn .el-button{
    width: 120px;
}
.content_left{
    width: 80%;
    height: 200px;
}
</style>