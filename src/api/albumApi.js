import request from '@/utils/request'

export default {
    getAlbumBySingerId(id){
        return request({
            url: '/singer/getAlbum/' + id,
            method: 'get'
        })
    }
}