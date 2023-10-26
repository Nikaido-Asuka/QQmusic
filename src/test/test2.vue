<template>
    <ul class="ul">
        <li v-for="(item, index) in thingsArr" :key="index" @mouseenter="enter(index)" @mouseleave="leave">
            <div class="left">
                <span style="width: 20px; display: block;">{{ index + 1 }}.</span>
                <span style="padding-left: 20px;">{{ item }}</span>
            </div>
            
            <el-button v-show="index === isShowIndex" size="mini" type="danger" @click="remove(index)">删除</el-button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'test2',
    props:['input'],
    data(){
        return {
            isShowIndex: -1,
            thingsArr:['助けで', '好きじゃない', '泣きたい']
        }
    },
    watch: {
        input(newVal){
            this.thingsArr.push(newVal);
        }
    },
    methods:{
        enter(index){
            this.isShowIndex = index;
        },
        leave(){
            this.isShowIndex = -1;
        },
        remove(index){
            this.thingsArr.splice(index, 1);
        }
    }
}
</script>

<style scoped>
.ul{
    padding-left: 0px;
    list-style: none;
}
.ul li {
    width: 370px;
    margin: 0 auto;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
}
.ul li:hover{
    background-color: #efefef;
}
.left{
    display: flex;
}
.el-input{
    margin-right: 20px;
}
</style>