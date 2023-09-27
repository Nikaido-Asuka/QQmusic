<template>
    <footer class="footer">
     <div class="container">
        <!-- 下载QQ音乐客户端 -->
        <div class="client">
            <p>下载QQ音乐客户端</p>

            <ul>
                <li v-for="(item, index) in icon_1" :key="index"
                @mouseover="changeIcon(index, true)"
                @mouseleave="changeIcon(index, false)"
                >
                    <div class="img_box">
                        <img :src="item.img"/>
                    </div>
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </div>

        <!-- 合作链接 -->
        <div class="cooperate">
            <p>合作链接</p>

            <ul>
                <li>最新版QQ空间</li>
                <li>QQ</li>
                <li>微信与朋友圈</li>
                <li>腾讯视频</li>
                <li>全民k歌</li>
                <li>QQ浏览器</li>
            </ul>
        </div>

        <!-- QR Code -->
        <div class="QRCode">
            <p>该网站用于学习，无商用价值，详情请咨询下方二维码👇</p>
            <img src="../../assets/footer/QR.jpg"/>
        </div>
     </div>
    </footer>
</template>

<script>
export default {
    name: "footer",
    data(){
        return{
            icon_1:[{
                id: 1,
                name: "macOS",
                img: require("@/assets/footer/macos.png"),
            },{
                id: 2,
                name: "Windows",
                img: require("@/assets/footer/windows.png"),
            },{
                id: 3,
                name: "iOS",
                img: require("@/assets/footer/ios.png")
            },{
                id: 4,
                name: "安卓",
                img: require("@/assets/footer/安卓.png")
            }],
            icon_1_hover:[
            {
                id: 1,
                name: "macOS",
                img: require("@/assets/footer/macos_hover.png"),
            },{
                id: 2,
                name: "Windows",
                img: require("@/assets/footer/windows_hover.png"),
            },{
                id: 3,
                name: "iOS",
                img: require("@/assets/footer/ios_hover.png")
            },{
                id: 4,
                name: "安卓",
                img: require("@/assets/footer/安卓_hover.png")
            }]
        }
    },
    methods:{
        changeIcon(index, isHover){
            if(isHover){
                this.icon_1[index].img = this.icon_1_hover[index].img;
            }else{
                console.log(this.icon_1[index].name.toLowerCase());
                this.icon_1[index].img = require(`@/assets/footer/${this.icon_1[index].name.toLowerCase()}.png`);
            }
        }
    }
}
</script>

<style scoped>
.footer {
  font-size: 15px;
  font-weight: bold;
  color: #909090;
  background-color: #333;
  padding: 20px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
}

.client{

}

ul{
    list-style-type: none;
    display: flex;
}

li:nth-child(1){
    margin-left:-10px;
}

li{
    cursor: pointer;
    margin: 20px;
    display: flex;
    flex-direction: column;
}

li:hover{
    cursor: pointer;
    color: #27c31c;
}

.img_box img{
    width: 30px;
    height: 30px;
}

.cooperate{
    display: flex;
    flex-direction: column;
}

.cooperate p{
    text-align: center;
}

.cooperate ul{
    display: flex;
    flex-wrap: wrap;
    padding-left: 50px;
}

.cooperate li {
  border: 1px solid #333;
  flex-basis: calc(30% - 20px); /* 计算每个元素的宽度，减去间距 */
  margin: 10px;
}

.QRCode{
    margin-left: 70px;
    width: 200px;
}
.QRCode img{
    width: 200px;
    height: 200px;

}



</style>