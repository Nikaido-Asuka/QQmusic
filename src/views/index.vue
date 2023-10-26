<template>
    <div class="bigbox">

        <!-- 第一行 -->
        <div class="head">
            <div class="icon">
                <img src="../assets/img/logo.png"/>
            </div>
            
            <div class="center">
                <ul>
                   <li v-for="(item, index) in headArr" :key="index" :class="headActive === index ? 'active' : '' " @click="chooseOne(index)" >{{ item }}</li>
                </ul>
            </div>


            <div class="right">

                <el-input
                    class="search"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="search">
                </el-input>

                <div v-show="!isToken" class="login" @click="dialogVisible = true">登陆</div>

                <div v-show="isToken" class="user">
                    <img src="https://pic.imgdb.cn/item/652368cac458853aef309984.jpg"/>
                    <span>Nikaido Asuka</span>
                </div>


                <el-dropdown>
                    <el-button class="btn_vip" type="primary" @click="isExpand = !isExpand">开通VIP
                        <i v-if="!isExpand" class="el-icon-caret-bottom"></i>
                        <i v-else class="el-icon-caret-top"></i>
                    </el-button>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="dropdown_item">开通绿钻</el-dropdown-item>
                        <el-dropdown-item class="dropdown_item">开通豪华绿钻</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                
            </div>
        </div>

        <!-- 第二行 -->
        <div class="sub_head">
            <ul>
                <li>首页</li>
                <li>歌手</li>
                <li>新歌</li>
                <li>排行榜</li>
                <li>分类歌单</li>
                <li>MV</li>
            </ul>
        </div>

        <!-- 第三行 -->
        <div class="sheet">
            <sheetVue></sheetVue>
        </div>

        <!-- 第四行 -->
        <div class="chart">
            <chart></chart>
        </div>

        <!-- 对话框 -->
        <el-dialog :visible.sync="dialogVisible">
            <div class="login_head">
                <h2 :class="login_tag === 'qq' ? 'login_active' : ''" @click="login_tag = 'qq'">QQ登陆</h2>
                <h2 :class="login_tag === 'wechat' ? 'login_active' : ''" @click="login_tag = 'wechat'">微信登陆</h2>
            </div>


            <div class="login_content">
                
                <!-- QQ登陆界面 -->
                <div class="qq" v-if="login_tag === 'qq'">
                    <h2>密码登陆</h2>
                    <el-form class="form">
                        <el-input v-model="username" placeholder="支持QQ号/邮箱/手机号登陆"></el-input>
                        <el-input v-model="password" placeholder="请输入密码"></el-input>

                        <el-button class="login_btn">登陆</el-button>
                    </el-form>
                </div>


                <div class="wechat" v-if="login_tag === 'wechat'">
                    <div class="img">
                        <img src="../assets/wechatQR.jpg"/>
                    </div>

                    <span class="text1">请使用微信扫描二维码登陆“QQ音乐”</span>
                    <span class="text2">QQ与微信账号的音乐资产、付费特权不互通</span>
                </div>
            </div>

            <!-- 底部 -->
            <div class="login_bottom">
                <el-button class="btn">下载客户端，体验更多功能</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>

<script>
import sheetVue from '@/components/index/sheet.vue';
import chart from '@/components/index/chart.vue';
export default {
    name: "index",
    components:{
        sheetVue,
        chart,
    },
    data(){
        return {
            isExpand: false,
            isToken: false,
            headActive: 0,
            search: '',
            headArr:['音乐馆', '我的音乐', '客户端', '开放平台', 'VIP'],
            dialogVisible: true,  //展示对话框
            login_tag: 'qq',
            username: '',
            password: '',
        }
    },
    mounted(){

    },
    methods:{
        chooseOne(index){
           this.headActive = index;
        },
        login(){

        }
    }
}
</script>

<style scoped>
.bigbox{
    margin: 0 20px;
}
.head{
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #efefef;

}
.btn_vip{
    background-color: #31c27c;
    font-size: 15px;
    color: white;
    border-radius: 8px;
}
.center{
    width: 50%;
    height: 100px;
}

.head ul{
    display: flex;
    list-style: none;
    margin-top: -5px;
    width: 70%;

}
.head ul li{
    width: 110px;
    height: 105px;
    text-align: center;
    line-height: 105px;
    font-size: 18px;
    color: black;
    font-weight: bold;
    cursor: pointer;
}
.active{
    color: white!important;;
    background-color: #31c27c;
}

.right{
    margin-left: 20px;
    display: flex;
    align-items: center;
    width: 500px;
    justify-content: space-between;
}
.search{
    width: 40%;
    margin-left: -100px;
}

.sub_head{
    width: 100%;
    height: 50px;
}

.sub_head ul{
    margin: 0 auto;
    list-style: none;
    width: 70%;
    height: 50px;
    display: flex;
}

.sub_head ul li{
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0 20px;
    font-weight: bold;
    transition: all 0.5s ease;
}

.sub_head ul li:hover{
    color: #31c27c;
    transition: all 0.5s ease;
}
.chart{
    margin-top: 20px;
}
.el-dropdown {
    vertical-align: top;
}
.el-dropdown + .el-dropdown {
    margin-left: 15px;
}
.dropdown_item{
    width: 100px;
    text-align: center;
}
.user{
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.user img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}
.user span{
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
}
.user span:hover{
    color: #31c27c;
    transition: all 0.5s ease;
}
.login{
    color: black;
    font-weight: bold; 
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    
}
.login:hover{
    color: #31c27c;
    transition: all 0.5s ease;
}
.login_head{
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin: 0 auto;
    cursor: pointer;
    padding-left: 100px;
    padding-right: 100px;
    
}
.login_head h2{
    padding-bottom: 10px;
}
.login_active{
    border-bottom: 4px solid #31c27c;
}
.login_content{
    height: 300px;
    border:1px solid white;
}
.qq{
    text-align: center;
}
.form{
    width: 400px;
    margin: 0 auto;
}
.form .el-input{
    width: 250px;
    margin-top: 20px;
}
.login_btn{
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    background-color: #09F;
    color: white;
    width: 250px;
}

.wechat{
    text-align: center;
}
.wechat .img img{
    width: 150px;
    height: 150px;
}
.wechat .img {
    width: 150px;
    height: 150px;
    border: 1px solid #efefef;
    margin: 0 auto;
}
.wechat .text1{
    display: block;
    width: 300px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 10px auto;
    border-radius: 999px;
    background-color: #f7f7f7;
    font-weight: bold;
}
.wechat .text2{
    font-size: 12px;
    text-align: center;
    margin: 0 auto;
    color: #999;
    width: 300px;
    display: block;
    margin-top: 20px;
}



.login_bottom{
    margin-top: -20px;
    padding-bottom: 20px;
}
.login_bottom .btn{
    display: block;
    margin: 0 auto;
    border-radius: 999px;
    background-color: #31c27c;
    color: white;
}
</style>