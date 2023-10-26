<template>
    <div>
        <input type="file" ref="fileInput">
        <button @click="uploadFile">上传</button>
        <children></children>
    </div>
</template>

<script>
import axios from 'axios'
import children from './children.vue';
export default {
    name: "parents",
    data(){
        return {
            lyric: "[by:陶喆]\n[00:02.689]你靠进来 我却越走越远\n[00:05.939]说不出来 痛苦藏在里面\n[00:09.948]贪恋夏夜星空你侧脸\n[00:13.197]犹记得清风撩拨心弦\n[00:17.162]初夏的味道是你微笑\n[00:20.343]我捧着月亮别来无恙",
            lyricsObjArr:[],
        };
    },
    components:{
        children
    },
    created(){
    },
    mounted(){
        const regNewLine = /\n/
        const lineArr = this.lyric.split(regNewLine) // 每行歌词的数组
        const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/;
        lineArr.forEach(item => {
            if (item === '') return
            const obj = {}
            const time = item.match(regTime)

            obj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim()
            obj.time = time ? this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0
            obj.uid = Math.random().toString().slice(-6)
            if (obj.lyric === '') {
                console.log('这一行没有歌词')
            } else {
                this.lyricsObjArr.push(obj)
            }
        })
        console.log(this.lyricsObjArr);
    },
    methods:{
        formatLyricTime (time) { // 格式化歌词的时间 转换成 sss:ms
            const regMin = /.*:/
            const regSec = /:.*\./
            const regMs = /\./

            const min = parseInt(time.match(regMin)[0].slice(0, 2))
            let sec = parseInt(time.match(regSec)[0].slice(1, 3))
            const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3)
            if (min !== 0) {
            sec += min * 60
            }
            return Number(sec + '.' + ms)
        },

        async Upload(file){
            const formData = new FormData();

            formData.append('source', file);

            try {
                const response = await axios.post("https://imgloc.com/api/1/upload", formData, {
                    headers:{
                        'Content-Type': 'mutipart/form-data',
                        'X-API-Key': 'chv_VLbp_edd5fdb0c87b0d63d9fb6281582af7daf5af807b37b30db22b9ae91e5840d57013be197a0797b2cd134a55af94f82c188affc2f4ef3d3212733149930b6e508c'
                    }
                })
                return response.data.data;
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        async uploadFile(){
            const file = this.$refs.fileInput.files[0];
            console.log(file);
            const result = await this.Upload(file);
            console.log(result);
        }

    }

}
</script>

<style>

</style>