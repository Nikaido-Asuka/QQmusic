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
    }
}