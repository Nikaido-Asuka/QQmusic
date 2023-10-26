<template>
    <div class="bigbox">
        <div class="title">
            <h1 style="padding-left: 20px;">我的年度歌手</h1>
            <div class="title_right">
                <span style="color: #bfbfbf; padding-right: 5px;">排行规则</span>
                <img src="../../assets/注意.png"/>
            </div>
        </div>


        <div class="singer_list_box">
            <ul class="singer_list">
                <li class="singer_item" v-for="(item, index) in singerList" :key="item.id">
                    <span class="number" :class="index + 1 <= 3 ? 'active' : ''">{{ index + 1 }}</span>
                    <div class="img">
                        <img :src="item.img"/>
                    </div>

                    <div class="info">
                        <span style="font-weight: bold;">{{ item.name }}</span>
                        <div class="second_info">
                            <img src="../../assets/耳机.png"/>
                            <span style="padding-left: 5px;"> {{ item.playCount }} 次</span>
                            <span style="padding-left: 20px; cursor: pointer;" v-show="item.contribution >= 1000">本周播放贡献排名999+ ></span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'annualSingerList',
    data(){
        return {
            singerList:[{
                id: '1',
                name: '陶喆',
                img: 'https://pic.imgdb.cn/item/650cd875c458853aef112efd.jpg',
                playCount: 4981,
                contribution: 1000,
            },{
                id: '2',
                name: '张雨生',
                img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdd1.jpg',
                playCount: 3012,
                contribution: 872
            },{
                id: '3',
                name: '周杰伦',
                img: 'https://pic.imgdb.cn/item/650e4032c458853aefbfbdb4.jpg',
                playCount: 1000,
                contribution: 300
            },{
                id: '4',
                name: '王力宏',
                img: 'https://pic.imgdb.cn/item/650f9eb7c458853aef466149.webp',
                playCount: 300,
                contribution: 100
            }]
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style scoped>
.bigbox{
    height: 600px; /* 设置一个合适的高度 */
    width: 400px;
    padding-bottom: 30px;
    border-radius: 12px;
    box-shadow: 0 0 20px #bfbfbf;
    padding-left: 10px;
    padding-right: 10px;
    margin: 20px;
    background: linear-gradient(#4b7c8a, #2c2c2e);
    color: white;
    overflow-y: auto;
    white-space: nowrap;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.title{
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title_right{
    display: flex;
    width: 100px;
    height: 30px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.title_right img{
    width: 20px;
    height: 20px;
}
.singer_list_box{
    width: 100%;
    height: 400px;
}
.singer_list{
    margin-left: -10px;
    list-style: none;
}
.number{
    font-weight: bold;
    font-size: 25px;
}
.singer_item{
    display: flex;
    align-items: center;
    justify-content: space-between;   
    margin-top: 25px;
}
.singer_item .img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: -20px;
}
.singer_item img{
    width: 60px;
    height: 60px;
}
.info{
    height: 50px;
    width: 60%;
    margin-right: 10px;
}
.second_info{
    margin-top: 10px;
    width: 100px;
    font-size: 10px;
    display: flex;
    align-items: center;
    width: 100%;
}
.second_info img{
    width: 15px;
    height: 15px;
}
.active{
    color: #31c27c;
    font-weight: bold;
}
</style>