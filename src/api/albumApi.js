import request from '@/utils/request'

export default {
    getAlbumBySingerId(id){
        return request({
            url: '/singer/getAlbum/' + id,
            method: 'get'
        })
    },


    //根据专辑id查找到专辑的详细信息
    getAlbumById(id){
        return request({
            url: '/album/getAlbumById/' + id,
            method: 'get' 
        })
    }
}