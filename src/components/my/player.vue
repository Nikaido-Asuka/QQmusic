<template>
    <!-- :style="" 解决伪类元素的样式绑定 在这里 --bgurl 是一个变量名，它的值是 url() -->
    <div class="bigbox" :style="{'--bgurl': isimg ? ('url(' + song.img + ')') : '' }">
        <div class="content">
            <div class="album">
                <h2>正在播放:</h2>
                <img class="rotate" :src="song.img"/>
            </div>

            <div class="operate">

                <div class="left">
                    <p>{{ song.name }}</p>
                    <p>歌手：{{ song.singer }}</p>
                    <p>专辑：<a href="javascript:;">《{{song.album}}》</a></p>
                    <p>类型：{{ song.type }}</p>
                </div>

                <!-- 分为三部分 第一部分歌词 第二部分进度条 第三部分操作（上下首，重播） -->
                <div class="right">

                    <!-- 第一部分 -->
                    <div class="lyric">
                        <div class="lyric_container"  :style="{ transform: `translateY(${-50 * currentLyricIndex}px)`}">
                            <span v-for="(item, index) in lyrics" :key="index" :class="{active : index === currentLyricIndex}" >
                                {{ item.text }}
                            </span>
                        </div>
                        
                    </div> 

                    
                    <!-- 第二部分 -->
                    <div class="progress-bar" @click="jumpTo($event)">
                        <div class="bar" :style="{ width: progressPercent }"></div>
                    </div>

                    <!-- 第三部分 -->
                    <div class="btn">
                        <div>
                            <img src="../../assets/player/下一首.png"/>
                        </div>

                        <div @click="playOrPause">
                            <img v-show="isPlay" src="../../assets/img/暂停.png"/>
                            <img v-show="!isPlay" src="../../assets/img/播放2.png"/>
                        </div>

                        <div class="front">
                            <img src="../../assets/player/下一首.png"/>
                        </div>

                    </div>

                </div>
            </div>

        </div>
        
    </div>
</template>

<script>
export default {
    name: 'player',
    data(){
        return{
            duration: 20,
            currentTime: 0,
            intervalId: null, // setInterval返回的定时器ID
            isPlay: true,
            lyrics: [
                { text: "你靠进来 我却越走越远", startTime: 0 },
                { text: "说不出来 痛苦藏在里面", startTime: 4 },
                { text: "耐心等待 无法逆转时间", startTime: 8 },
                { text: "没有解套 追溯不到", startTime: 12 },
                // ...
            ],
            currentLyricIndex: 0,
            isimg: false,
        }
    },
    // 父组件向子组件传递参数需要在子组件的props里面需要加''如下
    props: ['song'],
    created(){
        this.formateSongs(this.song.time);
        this.isimg = true;
        this.play();
    },
    computed: {
        progressPercent(){
            return (this.currentTime / this.duration) * 100 + '%';
        },
    },
    methods:{
        //歌曲时间格式化为s
        formateSongs(time){
            const arr = time.split(':');
            this.duration = parseInt(arr[0]) * 60 + Number(arr[1]);
            console.log(this.duration);
        },


        //歌词进度条联动
        jumpTo(event) {
            const progressBar = event.currentTarget; // 获取进度条DOM元素
            //progressBar.getBoundingClientRect().left 是获取进度条元素相对于视窗左侧的距离
            console.log(progressBar.getBoundingClientRect().left);
            const clickX = event.clientX - progressBar.getBoundingClientRect().left; // 获取鼠标点击位置相对于进度条左侧的距离（也就是点击位置于进度条最左侧的长度）
            const totalWidth = progressBar.offsetWidth; // 进度条的总宽度
            const clickedPercent = clickX / totalWidth; // 获取用户点击的百分比
            this.currentTime = Math.floor(this.duration * clickedPercent); // 根据用户点击的百分比计算出播放时间（向下取整）

            
            for(let i = 0; i < this.lyrics.length; i++){
                if(this.currentTime >= this.lyrics[i].startTime && this.currentTime < this.lyrics[i+1].startTime){
                    this.currentTime = this.lyrics[i].startTime;
                    this.currentLyricIndex = i;
                    return ;
                }
            }
        },

        //播放与暂停（判断）
        playOrPause(){
            this.isPlay = !this.isPlay;
            if(this.isPlay){
                this.play();
            }else{
                clearInterval(this.intervalId);
            }
            
        },
        
        // 播放
        play(){
            this.intervalId = setInterval(() => {
            this.currentTime += 1; // 每秒钟增加1s
            if(this.currentLyricIndex < this.lyrics.length - 1 && this.currentTime >= this.lyrics[this.currentLyricIndex + 1].startTime){
                this.currentLyricIndex++; // 当前歌词索引随着时间同步前进
            }
           
        }, 1000);
        },

        // 停止播放
        playOver(){
            clearInterval(this.intervalId);
        }
    },
    beforeDestroy() {
        this.playOver();
    },
}
</script>

<style scoped>
a{
    color: white;
}
.bigbox{
    position: relative;
}
.bigbox::before{
    /* content: ""; 的目的是为了创建一个空的伪元素，作为背景图片的容器，并且这个空的伪元素会被设置为背景图片的blur背景。 */
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bgurl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    filter: blur(20px);
    margin-bottom: 20px;
    padding-bottom: 30px;
    z-index: -2;
}

.content{
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10!important;
}
.album{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.rotate{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: rotate 10s linear infinite,albumDown 4s ease;
}
@keyframes albumDown {
    from{
        margin-top: -1000px;
    }
}

@keyframes rotate {
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
}

.operate{
    width: 50%;
    height: 200px;
    margin-left: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left p{
    font-size: 15px;
    font-weight: bold;
    margin-top: 30px;
}

.left p:nth-child(1){
    font-size: 25px;
    font-weight: bold;
    margin-top: 0px;
}
.right{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
}
.lyric{
    overflow: hidden;
    height: 50px;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    position: relative;
}

.lyric_container {
    width: 100%;
    position: absolute;
    left: 0;
    transform: translateY(-50%);
    transition: transform 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.lyric_container span{
    height:50px;
    opacity: 0.5;
    line-height: 50px;
    margin: 0px;
}


.lyric .active{
    color: #31c27c;
    opacity: 1; /*当前歌词不再透明*/
    font-weight: bold; /*当前歌词变粗*/
    transition: all 0.5s;
    font-size: 17px;
}


.progress-bar {
      margin-top: 20px;
      width: 300px;
      height: 15px;
      background-color: #f0f0f0;
      border-radius: 10px;
      overflow: hidden;
}

.progress-bar .bar {
      height: 100%;
      background-color: #007bff;
      width: 0;
      transition: width 0.3s;
}

.front{
    transform: rotateY(180deg);
}

.btn{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    padding-left: 10px;
    padding-right: 10px;
}
.btn div img{
    width: 30px;
    height: 30px;
   
}
</style>