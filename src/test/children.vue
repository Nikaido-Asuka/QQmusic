<template>
  <div class="bigbox">
    <h2 style="text-align: center; padding-top: 20px;">Asukaのメモ表</h2>
    
    <div class="input_box">
      <el-input v-model="content" placeholder="イベントを入力してください。"></el-input>
      <div class="btn">
        <el-button class="btn" @click="add">追加</el-button>
      </div>
     
    </div>

    <div>
      <Test2 :input="input"></Test2>
    </div>
    
  </div>
</template>

<script>
import Test2 from './test2.vue';
export default {
    name: "children",
    data(){
      return {
        content: '',
        input: ''
      }
    },
    components:{
      Test2,
    },
    computed: {
    },
    methods:{
      add(){
        this.input = this.content;
        this.content = '';
      }
    }
}
</script>

<style scoped>
.bigbox{
  border-radius: 8px;
  box-shadow: 0 0 20px #efefef;
  width: 500px;
  padding-bottom: 30px;
  margin: 0 auto;
}
.input_box{
  display: flex;
  width: 380px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
.el-input{
  width: 61%;
  margin-right: 0px;
}
.btn{
  margin-right: 15px;
}
</style>