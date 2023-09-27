<template>
    <div>
        
    </div>
</template>

<script>
import Children from '@/test/children.vue'
export default {
    name: "parents",
    data(){
        return {
            lyric: "[by:小懒猫stad]\n[00:02.689]我多想回到那个夏天\n[00:05.939]蝉鸣在田边吹过眼睫\n[00:09.948]贪恋夏夜星空你侧脸\n[00:13.197]犹记得清风撩拨心弦\n[00:17.162]初夏的味道是你微笑\n[00:20.343]我捧着月亮别来无恙",
            lyricsObjArr:[],
        };
    },
    components:{

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
        }

    }

}
</script>

<style>

</style>