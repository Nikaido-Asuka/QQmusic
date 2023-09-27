<template>
    <div class="box">
        <img src="../assets/img/logo.png"/>

        <el-button class="btn_vip" type="primary">开通VIP
            <i class="el-icon-caret-bottom"></i>
        </el-button>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style scoped>
.box{
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box img{
    margin-left: 20px;
}
.btn_vip{
    margin-right: 20px;
    background-color: #31c27c;
    font-size: 20px;
    color: white;
    border-radius: 8px;
}
</style>