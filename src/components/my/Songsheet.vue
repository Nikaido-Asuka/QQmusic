<template>
    <div class="bigbox">
      <div class="head">
        <h2 style="font-size: 30px;">自建歌单：</h2>


        <div class="icon">
          <i class="el-icon-plus" style="font-size: 22px; font-weight: bold; color: gray;" @click="dialogFormVisible = true"></i>
          <i class="el-icon-delete" style="font-size: 22px; font-weight: bold; color: gray;" @click="deleteChange"></i>
        </div>
       
      </div>
      
  
      <div class="srcoll_container">
        <div class="song_sheet">
          <div class="item_sheet" v-for="(item, index) in songSheet" :key="item.id">
            <div class="front" @click="expand(index)">
              <img :src="item.img" />
            </div>
            
  
            <div class="back" :class="item.isVisible ? 'expand':'' ">
              <span style="font-size: 20px; font-weight: bold; margin-top: 30px;">{{ item.name }}</span>
              <p>{{ item.date }}</p>
              <div class="bottom">
                 <el-button class="btn" type="primary">播放</el-button>
                 <i class="el-icon-d-arrow-right forward"></i>
              </div>
            </div>

            <div class="checkbox" v-show="isDelete">
              <el-checkbox :checked="item.isDelete" @change="change(index)"></el-checkbox>
            </div>
           
          </div>
  
        </div>
       
      </div>
      <div class="delete_btn">
        <el-button type="primary" v-show="isDelete" @click="removeSheets">删除</el-button>
      </div>
      

      <el-dialog title="新建歌单" :visible.sync="dialogFormVisible" center width="500px">
        <el-form :model="form">
          <el-form-item
          prop="avatar"
          label="头像"
          :label-width="formLabelWidth"
          >
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
          </el-form-item>


          <el-form-item label="歌单名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>



        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confrimToAddSheet">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import sheetApi from '@/api/sheetApi';
  export default {
    name: "songsheet",
    data() {
      return {
        dialogFormVisible: false,
        isDelete: false,
        isExpandIndex: -1,
        songSheet:[],
        form: {
          name: '',
          time: '',
          img: '',
        },
        formLabelWidth:'100px',
      };
    },
    mounted() {
      this.getAllSheets();
    },
    methods: {

        expand(index){
          this.songSheet[index].isVisible = !this.songSheet[index].isVisible;
        },

        change(index){
          this.songSheet[index].isDelete = !this.songSheet[index].isDelete;
        },

        deleteChange(){
          this.songSheet.map(item => item.isVisible = false);
          this.isDelete = !this.isDelete;
        },

        // 获取歌单信息
        getAllSheets(){
          sheetApi.getAllSheets().then(response => {
            const {data} = response.data;
            this.songSheet = data.map(item => ({...item, isVisible: false, isDelete: false}))
          }).catch(err => {
            this.$message({
              type:'error',
              message: '请检查网络！'
            })
          })
        },


        // 新建歌单
        confrimToAddSheet(){
          this.dialogFormVisible = false;
          //格式化时间
          var currentDate = new Date();
          var year = currentDate.getFullYear();
          var month = currentDate.getMonth() + 1;
          var day = currentDate.getDate();
          const formattedDate = year + '.' + (month < 10 ? '0' + month : month) + '.' + (day < 10 ? '0' + day : day);

          this.form.time = formattedDate;
        },

        // 删除歌单
        removeSheets() {

            const arr = [];
            this.songSheet.map(item => {
              if(item.isDelete){
                arr.push(item.id);
              }
            })

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true,
            type: 'warning'
          }).then(() => {
            sheetApi.removeSheets(arr).then(response => {
              // 重新刷新网页
              this.$message({
              type: 'success',
              message: '删除成功!'
            });
            }).catch(err =>{
              // 重新刷新网页
              location.reload();
              console.error(err.message);
              this.$message({
              type: 'success',
              message: '删除成功！'
            })
            })
            
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
        
          
        }


    },
  };
  </script>
  
  <style scoped>
  .bigbox {
    width: 100%;
    height: 600px;
  }
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon{
    display:flex;
    padding: 20px;
  }
  .icon i{
    margin: 20px;
    transition: color 0.5s ease;
  }
  .icon i:nth-child(1):hover{
    color: #31c27c!important;
    transition: color 0.5s ease;
  }

  .icon i:nth-child(2):hover{
    color: red!important;
    transition: color 0.5s ease;
  }
  
  .srcoll_container {
    overflow-x: auto;
    white-space: nowrap;
    height: 400px;
  }
  
  .song_sheet {
    display: inline-block;
    margin: 0 50px; /* 设置每个 image-container 的间距为 100px */
    position: relative;
    border-radius: 12px;
    cursor: pointer;
  }
  
  .item_sheet {
    display: inline-block;
    width: 200px;
    margin: 0 30px;
    position: relative;
    margin-left: 100px;
  }

  .item_sheet:first-child{
    margin-left: 20px;
  }
  
  .item_sheet img {
    border-radius: 12px;
    width: 200px;
    height: 200px;
  }
  
  .front {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: absolute;
    z-index: 3;
  }
  
  .back {
    width: 200px;
    height: 150px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2e303f;
    position: absolute;
    top: 30px;
    z-index: 2;
    color: white;
    transition: all 1s ease;
    padding-bottom: 10px;
  }

  .expand{
    top: 180px;
    box-shadow: 0 0 10px gray;
    transition: all 1s ease;
  }

  .btn{
    padding: 10px 8px;
    width: 100px;
    margin-left: 25px;
  }
  .bottom{
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .forward{
    margin-right: 30px;
    font-size: 25px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #00a2d6,
    0 0 70px #00a2d6, 0 0 80px #00a2d6, 0 0 100px #00a2d6, 0 0 150px #00a2d6;
    transition: all 0.3s ease-in-out;
  }
  .forward:hover {
    transform: scale(1.2);
    box-shadow: 0 0 20px 20px #00a2d6;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .checkbox{
    margin-top: 240px;
    text-align: center;
  }
  .delete_btn{
    text-align: center;
    position: relative;
    top: -100px;
  }
  
  </style>
  