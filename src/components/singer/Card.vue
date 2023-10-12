<template>
    <div class="box">
            <div class="item_box" v-for="(item, index) in arr" :key="item.id" @click="open($event.target)">
                <div class="img_box" @click="playAudio">
                    <img :src="item.img"/>
                </div>

                <div class="box_content">

                    <div class="title">《{{item.name}}》</div>

                    <div class="row">

                        <div class="row_left">
                            <img src="../../assets/img/gs.png" />
                            <a href="https://baike.baidu.com/item/%E9%99%B6%E5%96%86/120592">陶喆</a>
                        </div>

                        <div class="row_right">
                            <img src="../../assets/img/日历.png" style="width: 25px; height: 25px; position: relative; top: 5px;" />
                            <a >{{item.date}}</a>
                        </div>

                    </div>

                    <div class="row">
                        <div class="row_left">
                            <img src="../../assets/img/zj.png"/>
                            <a>{{ item.album }}</a>
                        </div>

                        <div class="row_right" style="margin-right: 42px;">
                            <img src="../../assets/img/律动类型.png" />
                            <a style="margin-left: 5px;">R&B</a>
                        </div>
                    </div>

                </div>



                <div class="box_footer">
                    <div class="box_footer_left">
                        <span>播放量:<span style="color: black; font-size: 15px; margin-left: 5px;">{{item.playAmount}}w</span></span>
                        <span>评分:<span style="color: black; font-size: 15px; margin-left: 5px;">{{item.rating}}</span></span>
                    </div>

                    <div class="box_footer_right" :style="{backgroundColor:item.color}" @click="playAudio(index)">
                        <img v-show="!item.isBF" style="width: 15px; height: 15px; margin-left: 10px;" src="../../assets/img/播放2.png" />
                        <img v-show="item.isBF" style="width: 15px; height: 15px; margin-left: 10px;" src="../../assets/img/暂停.png" />
                        <span style="margin-right: 14px;">播放</span>

                        <audio :src="item.audioUrl"></audio>
                    </div>
                </div>
            </div>
            

            <div class="down">

            </div>
    </div>
</template>

<script>
import songApi from '@/api/songApi';
export default {
    name: "Card",
    data(){
        return {
            currentSongIndex: -1,
            arr:[]
        }
        
    },
    props:['songArr'],
    mounted(){
            this.getAllSongs();
    },
    methods:{
        playAudio(index) {
        //找到音频数组的文件
        const audio = document.getElementsByTagName('audio');

        //判断是否是当前正在播放的音乐，如果是，那就做暂停播放的逻辑，没有切换
        if(this.currentSongIndex === index){
            const song = this.arr[index];
            song.isBF = !song.isBF;
            //找到正确的音频文件
            if(song.isBF){
                audio[index].play();
                this.currentSongIndex = index;
            }else{
                audio[index].pause();
            }
            console.log(song);
            return ;
        }



        //进行判断当前是否有音乐正在播放，如果有，就停止
        if(this.currentSongIndex !== -1){
            audio[this.currentSongIndex].currentTime = 0;
            this.arr[this.currentSongIndex].isBF = false;
            audio[this.currentSongIndex].pause();
        }

        //初次放音乐
        //切换要播放的那首歌的播放状态
        const song = this.arr[index];
        song.isBF = !song.isBF;
        //找到正确的音频文件
        if(song.isBF){
            audio[index].play();
            this.currentSongIndex = index;
        }else{
            audio[index].pause();
        }
            
        },
        
        getAllSongs(){
            songApi.getAllSongs()
                .then(response => {
                    const {data} = response.data;
                    //这是es6语法糖，给每一个对象添加一个isBF的属性
                    this.arr = data.map(item => ({...item, isBF: false}));
                    console.log(this.arr);
                    this.$message({
                        type:'success',
                        message: '请求成功！',
                        showClose: true,
                    })
                })
                .catch(err => {console.log(err)});
        },

        searchSong(event){
            if(event.keyCode === 13){
                console.log(this.keyWord);

                fetch("http://localhost:3000/song/getSongByName/" + this.keyWord)
                    .then((response)=>{
                        if(response.ok){
                            return response.json();
                        }else{
                            throw new Error("请求失败！");
                        }
                    })
                    .then((data) => {
                        this.arr = data.data;
                    })
                    .catch(err => console.log(err));
            }
        }
        
    }

}
</script>

<style scoped>

.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;
    flex-wrap: wrap;
    margin-right: 20px;
}

.item_box{
    flex-basis: calc(33.33% - 20px);
    width: 270px;
    border-radius: 12px;
    margin-top: 20px;
    height: 520px;
    box-shadow: 0 0 20px #efefef;
}
.img_box{
    margin: 0 auto;
    margin-top: 20px;
    width: 200px;
    border-radius: 12px;
    overflow: hidden;
    height: 200px;
    /* 为图片设置一个过渡效果，这里我们使用transform属性，并设置过渡时间为0.3秒，过渡效果使用ease-in-out来让动画看起来更平滑 */
    transition: transform 0.5s ease-in-out;
}
img{
    width: 200px;
    height: 200px;
}
.img_box:hover{
    /* 通过改变图片的transform属性来实现放大效果，这里使用scale函数来放大图片，参数1.1表示放大到原大小的1.1倍 */
    transform: scale(1.1);
    transition: transform 0.5s ;
}
.box_footer{
    height: 120px;
    background-color: #efefef;
    position: relative;
    top: -30px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    box-shadow: 10px 0px  -5px #efefef, 
      -10px 0px  -5px #efefef, 
      0px 5px  -5px #efefef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box_footer_left{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color:  gray;
    margin-left: 20px;
}
.box_footer_right{
    color: white;
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 14px;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.box_footer_right:hover{
    background-color: #f7f2a8!important;
    color: #31c27c;
    transition: 0.5 ;
}
.box_content{
    height: 200px;
    margin-left: 20px;
    margin-right: 20px;
}

.row{
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.row_left{
    margin-left: 20px;
}
.row_right{
    margin-right: 20px;
}

.row a{
    position: relative;
    top: -3px;
    color: gray;
    font-size: 12px;
}
.row img{
    width: 25px; 
    height: 25px; 
    position: relative; 
    top: 5px;
}
.title{
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
}
.lyric{
    width: 270px;
    
}
</style>