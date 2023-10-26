<template>
    <div>
        <!-- 第一部分：播放器 -->
        <Player ref="player" :song="song"></Player>


        <!-- 第二部分：个人信息 -->
        <div class="userinfo_box">
            <div class="userinfo">
                <img style="width:150px; height: 150px; border-radius: 50%;" src="https://pic.imgdb.cn/item/652368cac458853aef309984.jpg"/>

                <div class="username">
                    <h2>Nikaido Asuka</h2>
                    <img src="https://pic.imgdb.cn/item/652368cac458853aef30998c.png"/>
                </div>  

                <div style="display: flex;">

                    <div class="info" style="border-right: 1px solid #efefef;">
                        <span>18</span>
                        <span>关注</span>
                    </div>

                    <div class="info" style="border-left: 1px solid #efefef;">
                        <span>20</span>
                        <span>粉丝</span>
                    </div>
                </div>

            </div>

            <div class="buttom">
                <ul>
                    <li @click="toLike">我喜欢</li>
                    <li @click="toSheet">自建歌单</li>
                    <li @click="toSinger">关注的歌手</li>
                </ul>
            </div>
        </div>


        <!-- 第三部分：面板 -->
        <div class="panel">

            <!-- 3.1我喜欢 -->
            <div class="like child_panel" ref="like">
                <h2 style="font-size: 30px;">我喜欢：</h2>
                <Card></Card>
            </div>

            <!-- 3.2自建歌单 -->
            <div class="child_panel" ref="sheet">
                <Songsheet></Songsheet>
            </div>

            <!-- 3.3收藏歌手 -->
            <div class="focus child_panel" ref="singer">
                <focusSinger></focusSinger>
            </div>

        </div>


        <!-- 第四部分：个性化信息 -->
        <div class="personalization">

            <!-- 4.1年度歌手 -->
            <annualSingerList></annualSingerList>

            <!-- 4.2个性颜色 -->
            <personalColor></personalColor>

            <!-- 4.音乐人格 -->
            <musicPersonality></musicPersonality>


        </div>

    </div>
</template>

<script>
import Player from '@/components/my/player.vue'
import Card from '@/components/singer/Card.vue';
import Songsheet from '@/components/my/Songsheet.vue';
import focusSinger from '@/components/my/focusSinger.vue';
import annualSingerList from '@/components/my/annualSingerList.vue';
import personalColor from '@/components/my/personalColor.vue';
import musicPersonality from '@/components/my/musicPersonality.vue';
export default {
    name: 'My',
    data(){
        return {
            song:{
                "id": 2,
                "name": "流沙(Reimagined)",
                "singer": '陶喆',
                "album": "流沙",
                "type": "R&B",
                "singerName": "陶喆",
                "musicType": "R&B",
                "playAmount": 300,
                "rating": 4.7,
                "img": "https://pic.imgdb.cn/item/6500fdc0661c6c8e543d6ba4.jpg",
                "color": "#ffa500",
                "audioUrl": "https://3wt.music.eduingame.cn/2023/09-21/ef6ebc4c78794dbf92ce08533442338a3wcn474791.mp3",
                "date": "2023.7.1",
                "time": "4:51",
                "lyrics":[
                    {text: "", duration: ""},
                ]
            }
        }
    },
    components:{
        Player,
        Card,
        Songsheet,
        focusSinger,
        annualSingerList,
        personalColor,
        musicPersonality
    },
    mounted(){
        
    },
    methods:{
        Tofunc(El){
            El.scrollIntoView({ behavior: 'smooth'});
            //    const playeEl = this.$refs.like.$el;

            //    const top = playeEl.offsetTop;

            //    window.scrollTo({
            //     top,
            //     behavior: 'smooth'
            //    })
        },
        toLike(){
            this.Tofunc(this.$refs.like)
        },
        toSheet(){
            this.Tofunc(this.$refs.sheet)
        },
        toSinger(){
            this.Tofunc(this.$refs.singer)
        }

    }
}
</script>

<style scoped>
.userinfo_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    margin-top: 30px;
    justify-content: center;
    background-image: url("https://pic.imgdb.cn/item/6482bc7b1ddac507cc752d89.png");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;

    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    overflow: hidden;
}
.userinfo{
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.username{
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    font-size: 20px;
}
.username img{
    width: 50px;
    padding-left: 10px;
}

.info{
    color: white; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    font-size: 20px; 
    font-weight: bold;
    padding: 20px;
}
.buttom{
    width: 100%;
    /* 不要使用opacity，否则会影响盒子内部的文本内容 */
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
}

.buttom ul{
    list-style: none;
    display: flex;
}
.buttom ul li{
    margin-right: 50px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}
.buttom ul li:hover{
    color: #31c27c;
}

.panel{
    width: 100%;
}
.child_panel{
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
}
.focus{
    margin: 0 20px;
    margin-top: -100px;
    border-top: 1px solid #efefef;
}
.like{
    padding-bottom: 100px;
    border-bottom: 1px solid #efefef;
    margin: 0 20px; 
}

.personalization{
    width: 100%;
    border-top: 1px solid #efefef;
    margin: 0 20px;
    margin-right: 20px;
    padding: 20px;
    overflow-x: auto;
    white-space: nowrap;
    display: flex;
    flex-direction: row;

}

</style>