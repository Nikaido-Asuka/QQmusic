<template>
    <div class="bigbox">
        <div class="head_box">
            <div class="title">
                <h1 style="padding-left: 20px;">我的个性颜色</h1>
            </div>

            <!-- 磨砂圆球 -->
            <div class="big_color">
                <div class="front_glass"></div>
                <h2 class="h2">INK <br> BLUE</h2>
            </div>

            <!-- 横线 -->
            <div class="length">
                <div class="text">
                    <p>舒缓</p>
                    <p>激烈</p>
                </div>
            </div>
        </div>
        

        <!-- 文本 -->
        <div class="text_panel">
            <h2 style="color: #16336c;">水墨蓝</h2>
            <p style="word-wrap: break-word; margin-top: -20px; font-size: 14px; color: gray;">当你仰望月亮，所望见的不仅是一个发光体，它也曾是记忆中的音乐片段或一支深沉玫瑰。世人见你时时常沉默，但却不知，你沉默地将温柔拥抚生命中无数个孤独瞬息</p>
        </div>

        <!-- song -->
        <div class="song">
            <div class="btn">
                <el-button>我的色彩歌曲</el-button>
                <el-button>专属色彩歌曲推荐</el-button>
            </div>

            <ul class="song_list">
                <li class="sont_item" v-for="(item) in songArr" :key="item.id">
                    <div class="img"><img :src="item.img"/></div>
                    <div class="info">
                        <span style="color: white; font-weight: bold; font-size: 20px;">{{ item.name }}</span>
                        <span style="color: rgb(114, 108, 108); font-size: 15px;">{{ item.singer }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'personalColor',
    data(){
        return {
            songArr:[{
                id: '1',
                name: '就是爱你',
                singer: '陶喆',
                img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg'
            },{
                id: '2',
                name: '爱我还是他',
                singer: '陶喆',
                img: 'https://pic.imgdb.cn/item/65083df1204c2e34d3a4e84e.jpg'
            }]
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.bigbox{
    position: relative;
    width: 410px;
    height: 600px; /* 设置一个合适的高度 */
    word-wrap: break-word;
    padding-bottom: 30px;
    border-radius: 12px;
    box-shadow: 0 0 20px #bfbfbf;
    margin: 20px;
    color: white;
    background-color: black;
    -ms-overflow-style: none;
    overflow-y: auto; /* 如果内容超出了高度，就会显示垂直滚动条 */
    white-space: normal;
    scrollbar-width: none;
}
.head_box{
    background: linear-gradient(#16336c, black);
}
.title{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.big_color{
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 0 10px #0d47bc;
    background-color: rgb(0, 123, 255);
}
.front_glass{
    margin-left: -25px;
    width: 250px;
    border-radius: 50%;
    backdrop-filter: blur(50px);
    height: 250px;
}
.h2{
    text-align: center;
    margin-top: -35px;
    margin-left: 7px;
    position: relative;
    top: -120px;
}

.length{
    width: 90%;
    height: 10px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #16336c;
    margin-top: 60px;
}
.text {
    color: snow;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text_panel{
    margin: 0 20px;
    padding-bottom: 20px;
    margin-top: 40px;
}
.song{
    margin: 0 20px;
    padding-bottom: 20px;
    margin-top: -20px;
}
.btn{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.el-button{
    width: 180px;
    color: white;
    border: none;
    background-color: gray;
    font-weight: bold;
    font-size: 15px;
}
.song_list{
    width: 100%;
    margin-top: 20px;
    height: 50px;
    padding-left: 0px;
    list-style: none;
}
.sont_item{
    width: 340px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.song_item .img{
    width: 60px;
    height: 60px;
    border-radius: 8px;
    box-shadow: 0 0 20px #efefef;
}
img{
    width: 60px;
    height: 60px;
}
.info{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
}

</style>