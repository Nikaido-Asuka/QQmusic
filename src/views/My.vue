<template>
    <div>
        <Player ref="player" :song="song"></Player>

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
                    <li @click="play">我喜欢</li>
                    <li>自建歌单</li>
                    <li>关注的歌手</li>
                </ul>
            </div>

        </div>

    </div>
</template>

<script>
import Player from '@/components/my/player.vue'
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
        Player
    },
    mounted(){

    },
    methods:{
        play(){
           const playeEl = this.$refs.player.$el;

           const top = playeEl.offsetTop;

           window.scrollTo({
            top,
            behavior: 'smooth'
           })
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

</style>