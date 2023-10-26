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
                    <el-button @click="scrollToPosition">评论（ {{album.collectionNumber}} ）</el-button>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="content_left">
                <el-table :data="album.songArr" style="width: 90%;">

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
                    width="max">
                        <template slot-scope="scope">
                            <div class="song-name" @mouseover="currentIndex = scope.$index" @mouseleave="currentIndex = -1">
                                {{ scope.row.name }}
                                <i v-if="currentIndex === scope.$index" size="200" class="el-icon-video-play el-icon--right" @click="AudioPlay"></i>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column
                    prop="time"
                    label="时长"
                    width="200"
                    >

                    </el-table-column>

                </el-table>

                <!-- 获得奖项 -->
                <div class="awrads_collections">
                    <h2>荣获奖项：</h2>

                    <div class="awrads_item">
                        <img src="../assets/gold.svg.png" />

                        <p>第九届金曲奖</p>
                    </div>

                    <div class="awrads_item">
                        <img src="../assets/200albums.jpg" />

                        <p>1993-2005年台湾流行音乐百佳专辑</p>
                    </div>
                </div>

            </div>

            <div class="content_right">
                <span style="font-size: 30px; font-weight: bold; ">简介：</span>
                <p>音乐新浪潮的萌生，1997年最Shock的声音当「Airport Take Off」的飞机引擎声扬起，「陶喆」这个名字注定要在许多人的音乐记忆里，留下了深刻而美好的印记。 「飞机场的10:30」是这段旅程的起点，所有爱乐者乘坐陶喆预定的班机，开始飞往纯真、崭新的音乐国度...陶喆在1997年发表的首张个人同名专辑，彻底改变华人音乐的流行风潮与型态。也许是一种音乐天赋，但更重要的是他的自信与勇气，陶喆大胆地为华语流行音乐开启了一扇「R&B」的门，拉近了中西方流行音乐的类型距离。首支「飞机场的10:30」洋溢着生命最自由的情感韵律；创意改编台语老歌的「望春风」，在开场的acappella运用人声作为乐器，编织出简单而真实的乐音质地；「王八蛋」则在摇滚funk的节奏中，大方展现陶喆的率性与无畏；琴键间飘散着浪漫情愫的「沙滩」与「爱，很简单」更是20世纪末华人流行音乐不断传唱的情歌经典！陶喆的首张专辑不仅令众人惊艳不已，同时也为他赢得了包括台湾金曲奖、美国告示牌排行榜在内的多项音乐大奖。他被视为将西方R&B流行音乐引进华人音乐工业的首要指标，从词曲创作到唱腔表现，陶喆为后进跟随者做了一个完美的示范。</p>
            </div>
        </div>


        <!-- 评论部分 -->
        <div class="comment" ref="scrollTarget">
            <span style="font-size: 30px; font-weight: bold;">评论</span>
            <span style="padding-left: 10px;">共2769条评论</span>

            <div class="comment_text">
                <textarea @focus="changeText" v-model="text" @blur="focusFlag = !focusFlag"  @keypress="keySubmit"></textarea>
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-end;">
                <el-button type="primary" style=" margin-right: -20px;" @click="submitComment">发表评论</el-button>
            </div>



            <!-- 评论列表部分 -->
            <div class="comment_list">
                <span style="font-size: 20px; font-weight: bold;">精彩评论</span>
                
                <div class="comment_list_item" v-for="item in comment" :key="item.id">
                    <div style="padding: 10px;">
                        <img class="avatar" :src="item.avatar"/>
                    </div>
                    <div class="item_right">
                        <div style="display: flex; align-items: center;">
                            <a style="font-size: 20px; font-weight: 500; color: #999;">{{ item.username }}</a>
                            <img v-if="item.isVip" style="width: 45px; padding-left: 15px;" src="https://pic.imgdb.cn/item/652368cac458853aef30998c.png"/>
                        </div>
                        
                        <span>{{ item.time }}</span>

                        <p>{{ item.text }}</p>


                        <div class="buttom">
                            <img  :src="item.islike ? require('../assets/点赞_active.png') : require('../assets/点赞.png') " @click="isLike(item.id)"/>
                            <span style="padding-left: 10px; padding-top: 5px;">{{ item.likeNmb }}</span>
                            <a style="padding-left: 20px; padding-top: 5px;">回复</a>
                        </div>
                    </div>

                </div>
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
            album:{},
            focusFlag:false,
            text:'',
            comment:[{
                id:1,
                username: 'Nikaido Asuka',
                avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
                islike: false,
                likeNmb: 200,
                isVip: true,
                text: '纯纯的神专',
                time: '09.47'
            },{
                id:2,
                username: 'Nishino Nanase',
                avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
                islike: false,
                likeNmb: 301,
                isVip: false,
                text: '爱情好像流沙～',
                time: '10.47'
            }]
        }
    },
    mounted(){
        //用this.$route.params来接收传递过来的参数
        this.getAlbumById(this.$route.params.id);
        console.log(this.$route.params.id);
    },

    methods:{

        //下滑至评论区函数
        scrollToPosition(){
            //使用 this.$refs.scrollTarget 获取到对应的 DOM 元素，通过 scrollIntoView 方法将该元素滚动到可视区域。
            //{ behavior: 'smooth' } 参数用于提供平滑滚动的效果，如果不需要平滑滚动，可以直接使用 this.$refs.scrollTarget.scrollIntoView()
            this.$refs.scrollTarget.scrollIntoView({ behavior: 'smooth' });
        },

        //评论内容
        changeText(){
            console.log(this.focusFlag);
            this.focusFlag = !this.focusFlag;
            this.text =  this.focusFlag ? this.text : '说说你的看法'
        },

        //索引计算函数
        indexMethod(index) {
        return index * 2 + 1;
        },

        //播放媒体函数
        AudioPlay(){
            console.log("mother fucker")
        },

        //根据Id查找到这个专辑
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
        },

        // 格式化时间的函数
        formatDate(date){
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hour = ('0' + date.getHours()).slice(-2);
            const minute = ('0' + date.getMinutes()).slice(-2);
            return `${year}-${month}-${day} ${hour}:${minute}`;
        },

        //回车提交函数
        keySubmit(e){
            if(e.keyCode === 13){
                this.submitComment();
            }else return ;
        },

        //按钮提交函数
        submitComment(){
            const comment = {
                id: this.comment.length + 1,
                username: 'Nikaido Asuka',
                avatar: 'https://pic.imgdb.cn/item/652368cac458853aef309984.jpg',
                islike: false,
                likeNmb: 0,
                isVip: false,
                text: this.text,
                time: this.formatDate(new Date()),
            }
            this.comment.unshift(comment)
            console.log(this.text);
            this.text = '';
            this.focusFlag = !this.focusFlag;
        },

        //点赞函数
        isLike(id){
            const comment = this.comment.find(item => item.id === id);
            comment.islike = !comment.islike;
            if(comment.islike){
                comment.likeNmb++;
            }else{
                comment.likeNmb--;
            }
        }
    },
    components:{
        popularSongs,
    }
}
</script>

<style scoped>
.box{
    background: linear-gradient(to bottom, #efefef, #fff);
    padding-left: 100px;
    padding-right: 50px;
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
    display: flex;
}

.el-button{
    font-weight: bold;
    width: 120px;
}


.btn .el-button:nth-child(3){
    width: auto;
}
.content_left{
    width: 85%;
    height: 200px;
}
.song-name {
    position: relative;
  }
  
  .song-name i {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .song-name:hover i {
    opacity: 1;
  }
  .el-icon-video-play{
    font-size: 25px!important;
  }
  .content_right{
    width: 500px;

  }
  .awrads_collections{

  }
  .awrads_item{
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .awrads_item img{
    
    margin-left: 20px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  .awrads_item p{
    font-size: 20px;
    font-weight: bold;
    padding-left: 20px;
  }
  .comment{
    width: 65%;
    position: relative;
  }
  .comment_text textarea{
    height: 120px;
    font-family: "微软雅黑";
    font-size: 15px;
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    background-color: #f5f5f5;
    border: 1px solid #ececec;
  }
  .comment_list_item{
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #eaeaea;
    margin-top: 20px;
  }
  .avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .item_right{
    padding-top: 10px;
    margin-left: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
  }
  .item_right span, a{
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
  }
  .item_right a:hover{
    color: #27c31c;
  }
  .item_right p {
    font-weight: bold;
    font-size: 15px;
  }
  .buttom{
    height: 25px;
    display: flex;
    align-items: center;
  }
  .buttom img{
    width: 25px;
    height: 25px;
  }
</style>
