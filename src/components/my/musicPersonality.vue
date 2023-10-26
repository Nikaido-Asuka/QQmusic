<template>
    <div class="bigbox">
        <div class="head_box">
            <div class="title">
                <h1 style="padding-left: 20px;">我的音乐人格</h1>
            </div>

            <div class="icon">
                <h2 style="margin-left: 20px; font-size: 30px; margin-top: 10px;">ENFP</h2>
                <p style="font-size: 80px; margin-top: -20px; margin-left: 60px;">😜</p>
                <h3 style="margin-top: -80px; margin-left: 50px;">自由创造家</h3>
            </div>

            <!-- 标签 -->
            <div class="tag_box">
                <div class="tag_item">占9.43%</div>
                <div class="tag_item" style="background-color: mediumorchid;">创意怪咖</div>

                <div class="tag_item" style="background-color: aqua;">快乐小狗</div>
                <div class="tag_item" style="background-color: crimson;">热爱自由</div>
            </div>
        </div>

        <!-- 文本 -->
        <div class="text_panel">
            <h2 style="color:white;">音乐人格·ENFP</h2>
            <p style="word-wrap: break-word; margin-top: -20px; font-size: 14px; color: gray;">音乐世界中的另一个你：“热情、自由、有创造力”。你希望在音乐当中寻求放松和慰藉，音乐的律动是你外在能量的来源。你奉行不破不立的准则，以超强的感知力捕捉音符的律动，配合你充沛的想象力与创造力渲染出更华丽的乐章。</p>
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
    name: 'musicPersonality',
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
    }
}
</script>

<style scoped>
.bigbox{
    position: relative;
    width: 400px;
    height: 600px; /* 设置一个合适的高度 */
    word-wrap: break-word;
    padding-bottom: 30px;
    border-radius: 12px;
    box-shadow: 0 0 20px #bfbfbf;
    margin: 20px;
    color: white;
    background-color: #2c2c2c;
    -ms-overflow-style: none;
    overflow-y: auto; /* 如果内容超出了高度，就会显示垂直滚动条 */
    white-space: normal;
    scrollbar-width: none;
}
.head_box{
    background: linear-gradient(rgb(3, 45, 24), #2c2c2c);
}
.title{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    margin: 0 auto;
    border-radius: 12px;
    background: linear-gradient(to right bottom, #106fdc, #0eb9f7 );
}
.tag_box{
    width: 90%;
    height: 100px;
    margin: 20px auto;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.tag_item{
    width: 130px;
    height: 30px;
    border-radius: 12px;
    background-color: #d4d713;
    text-align: center;
    line-height: 30px;
    color: rgb(252, 252, 247);
    font-weight: bold;
}
.text_panel{
    margin: -20px 20px;
    padding-bottom: 20px;
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