<template>
    <div class="box">

       <h2>相似歌手</h2>

       <ul class="singer_list_list">
        <li class="singer_list_item" v-for="(item, index) in arr" :key="index">
            <div class="singer_list_item_box">
                <div class="singer_list_item_img">
                    <img :src="item.img"/>
                </div>

                <span style="text-align: center; font-size: 20px; font-weight: bold; margin: 10px; padding: 10px;">{{ item.name }}</span>
            </div>
        </li>
       </ul>

    </div>
</template>

<script>
export default {
    name: "similarSingers",
    data(){
        return {
            arr:[{
                name: "王力宏",
                img: "https://pic.imgdb.cn/item/650f9eb7c458853aef466149.webp"
            },{
                name: "孙燕姿",
                img: "https://pic.imgdb.cn/item/650fa413c458853aef47425e.webp"
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
.box{
    margin: 0 auto;
    margin-top: 30px;
    width: 90%;
    padding: 20px;
}

.box h2 {
  font-size: 35px;
}


ul{
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.singer_list_list{
    margin-bottom: 4px;
    margin-right: -20px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    zoom: 1;
}
.singer_list_item{
    width: 25%;
    height: 250px;
    margin: 20px;
}

.singer_list_item_box{
    cursor: pointer;
    position: relative;
    margin-right: 20px;
    background-color: #fbfbfd;
    min-height: 195px;
    padding: 25px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.singer_list_item_img{
    margin: 0 auto; 
    width: 150px;
    height: 150px;
}
.singer_list_item_img img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
}
</style>