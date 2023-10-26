import request from '@/utils/request'

export default{

    // 删除指定的歌单
    removeSheets(arr){
        return request({
            url: '/sheet/removeSheets',
            data: arr,
            method: 'delete'
        })
    },

    // 获取歌单信息
    getAllSheets(){
        return request({
            url: '/sheet/getAllSheet',
            method: 'get'
        })
    }
}