import request from '@/utils/request'

export default {
    getAllSinger(){
        return request({
            url: '/singer/getAllSinger',
            method: 'get'
        })
    },


    getSingerById(id){
        return request({
            url:'/singer/getSingerById/' + id,
            method: 'get'
        })
    },



    // 在focusSinger组件里面移除不再关注的歌手 
    removeSingerById(){
        return request({
            url: '/singer/removeSinger/' + id,
            method: 'delete'
        })
    }
}