<template>
    <div class="box">
      <h2>热门歌曲</h2>
      <el-table stripe :data="tableData" style="width:100%">
        <el-table-column type="index" :index="indexMethod"></el-table-column>
        <el-table-column prop="name" label="歌名" width="500%">
          <template slot-scope="scope">
            <div class="song-name" @mouseover="currentIndex = scope.$index" @mouseleave="currentIndex = -1">
              {{ scope.row.name }}
              <i v-show="currentIndex === scope.$index" size="50px" class="el-icon-video-play el-icon--right" @click="AudioPlay"></i>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="album" label="专辑" width="550%"></el-table-column>
        <el-table-column prop="time" label="时长"></el-table-column>
      </el-table>

      
      <el-button type="primary" class="more_btn" @click="getSongsBySingerId(id,skipNumber)">
        <i class="el-icon-arrow-down"></i>
            登陆显示更多
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
    </div>
  </template>
  
  <script>
  import songApi from '@/api/songApi';
  export default {
    name: "popularSongs",
    data() {
      return {
        tableData: [],
        currentIndex: -1, // 记录当前鼠标所在的行号
        skipNumber: 0,    // 跳过的记录号，如果是0意思就是从头开始查询并返回，如果是1就是从第2条数据开始查询并返回
      };
    },
    props:['id'],
    methods: {
      indexMethod(index) {
        return index + 1;
      },
      AudioPlay(){
        console.log("fuck your mother");
      },
      getSongsBySingerId(id, skipNumber){
        console.log(id);
        songApi.getSongsById(id, skipNumber)
                .then(response => {
                  console.log(response.data.data);
                  this.tableData = [...this.tableData, ...response.data.data];

                  this.skipNumber += 3;
                }).catch(err => console.log(err.message));
      }
    },
    watch:{
      id:{
      immediate: true,
      handler(newVal){
        if(newVal){
          this.getSongsBySingerId(newVal, this.skipNumber);
        }
      }
    }
    },
    
  };
  </script>
  
  <style scoped>
  .box {
    margin: 0 auto;
    margin-top: 50px;
    width: 90%;
    padding: 20px;
  }
  .box h2 {
    margin-top: -20px;
    font-size: 35px;
  }
  
  .song-name {
    position: relative;
  }
  
  .song-name i {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .song-name:hover i {
    opacity: 1;
  }
  .el-icon-video-play{
    font-size: 25px!important;
  }
  .more_btn{
    background-color: #27c31c;
    border: none;
    margin: 0 auto;
    text-align: center;
    position: relative;
    left: 40%;
    margin-top: 50px;
  }
  </style>
  