<template>
  <div>
    <!-- 触发打开对话框的按钮 -->
    <el-button @click="openDialog">打开对话框</el-button>

    <!-- 对话框组件 -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, // 控制对话框的显示与隐藏
      activeTab: 'wechat',
      username: '',
      password: ''
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true; // 打开对话框
    },
    closeDialog() {
      this.dialogVisible = false; // 关闭对话框
    },
    handleSubmit() {
      // 处理登录逻辑
      // 可以在这里发送登录请求等操作
      console.log('用户名：', this.username);
      console.log('密码：', this.password);

      // 登录成功后关闭对话框
      this.closeDialog();
    },
    setActiveTab(char){
      this.activeTab = char;
    }
  }
};
</script>

<style scoped>
.dialog_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog{
  width: 700px;
  height: 500px;
  background-color: white;
}
.head{
  padding-top: 20px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #efefef;
}
.head div{
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  padding-right: 0px;
  padding-left: 0px;
  cursor: pointer;
}
.active{
  border-bottom: 4px solid #31c27c;
}
.qq_login{
  display: flex;
  height: 330px;
}
.left{
  width: 100%;
}
.title{
  margin-top: 20px;
  font-weight: bold;
  font-size: 22px;
  text-align: center;
}
.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  margin-left: 20px;
  margin-right: 20px;
}
.row{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.row label{
  margin-right: 20px;
}
.el-input{
  width: 300px;
}
.login_btn{
  margin-top: 20px;
  width: 300px;
  background-color: #09F;
  font-size: 15px;
}
.bottom{
  width: 300px;
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
.bottom li{
  font-size: 13px;
  font-weight: bold;
}
.wechat_login{
  height: 330px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.wechat_login .img{
  width: 150px;
  height: 150px;
  margin: 30px auto;
  border: 1px solid #efefef;
}
.wechat_login .img img{
  width: 150px;
  height: 150px;
}
.wechat_login .text{
  border-radius: 999px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f7f7f7;
  width: 300px;
  text-align: center;
  font-size: 15px;
  line-height: 28px;
  margin: 0 auto;
}
.wechat_login span{
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  color: #999;
  width: 300px;
  display: block;
  margin-top: 20px;
}
.downloadClient_btn{
  position: relative;
  text-align: center;
}
.downloadClient_btn .el-button{
  border-radius: 999px;
  background-color: #31c27c;
  color: white;
  font-size: 18px;
}
</style>
