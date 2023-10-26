<template>
    <div class="bigbox">
        <div class="title">
          <h2 style="font-size: 30px; ">排 行 榜</h2>
        </div>

        <div class="content">
            <ul>
                <li v-for="(item) in chartArr" :key="item.id">
                    <h2 style="color: white;">巅 峰 榜</h2>
                    <h3 style="margin-top: -20px; font-size: 32px; margin-left: -25px;">{{ item.name }}</h3>

                    <div>
                        <div class="length"></div>
                        <div class="icon_box">
                            <img src="../../assets/img/三角形.png"/>
                        </div>
                    </div>


                    <div class="song">
                       <div class="item_song" v-for="(item2, index2) in item.songArr" :key="item2.id">
                         <span>{{ index2 + 1 }}.</span>
                         <span class="name">{{ item2.name }}</span><br>
                         <span style="margin-left: 13px;">{{ item2.singer }}</span>
                       </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chart',
    data(){
        return {
            chartArr:[{
                id: '1',
                name: '热歌',
                color: '#ffa500',
                songArr: [{
                    id: '1',
                    name: '奢香夫人',
                    singer: '凤凰传奇'
                },{
                    id: '2',
                    name: '悬拟',
                    singer: '葛东琪'
                },{
                    id: '3',
                    name: 'I\'m OK(Reimagined)',
                    singer: '陶喆'
                }]
            },{
                id: '2',
                name: '新歌',
                songArr: [{
                    id: '3',
                    name: 'I\'m OK(Reimagined)',
                    singer: '陶喆'
                },{
                    id: '4',
                    name: '拨天的富贵',
                    singer: 'ATK/宋盐球'
                },{
                    id: '5',
                    name: '有你在',
                    singer: '赵露思'
                }]
            },{
                id: '3',
                name: '流行指数',
                songArr: [{
                    id: '6',
                    name: '倒带',
                    singer: '蔡依林'
                },{
                    id: '5',
                    name: '有你在',
                    singer: '赵露思'
                },{
                    id: '6',
                    name: '太阳(深情版)',
                    singer: 'en'
                }]
            },{
                id: '4',
                name: '欧美',
                songArr: [{
                    id: '7',
                    name: 'One Of Your Girls',
                    singer: 'Troye Sivan'
                },{
                    id: '8',
                    name: 'Agora Hills(Explicit)',
                    singer: 'Doja Cat'
                },{
                    id: '9',
                    name: 'All My Life',
                    singer: 'Lil Durk'
                }]
            },{
                id: '5',
                name: '韩国',
                songArr: [{
                    id: '10',
                    name: 'Baddie',
                    singer: 'IVE (아이브)'
                },{
                    id: '11',
                    name: '登神（GODS）',
                    singer: 'NewJeans'
                },{
                    id: '12',
                    name: 'You & Me',
                    singer: 'JENNIE (제니)'
                }]
            }]
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>

<style scoped>
.bigbox{
      padding-top: 30px;
      padding-bottom: 30px;
      background: linear-gradient(#eff1ef, white);
      overflow: hidden;
  }
.title{
      text-align: center;
  }

.content{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.content ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    position: relative;
    list-style: none;
    background: url("https://y.qq.com/ryqq/static/media/bg_index_top.5314c494.jpg?max_age=2592000") center;
    background-repeat: no-repeat;
}

.content ul li{
    color: white;
    width: 222px;
    height: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.content ul li:nth-child(1){
    margin-left: 15px!important;
}

.icon_box{
      opacity: 0;
      z-index: 10;
      margin: 0 auto;
      margin-top: -20px;
      background-color: #efefef;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      text-align: center;
      transition: all 1s ease;
  }
.icon_box img{
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 2px;
}

.content ul li:hover .icon_box{
    opacity: 1!important;
    transition: all 1s ease;
}   
.length{
    width: 30px;
    border: 1px solid white;
    margin: 0 auto;
}

.song{
    height: auto;
    padding-bottom: 20px;
    text-align: left;
    padding-left: 20px;
    color: white;
    font-weight: bold;
}
.item_song{
    width: 100%;
    padding: 10px;
}
.name{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>