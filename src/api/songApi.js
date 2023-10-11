import request from '@/utils/request'

export default {
    //获取所有收藏的歌曲
    getAllSongs(){
        return request({
            url:'/song/getAllSongs',
            method: 'get',
        });
    },

    //根据歌手id获取歌曲
    getSongsById(id, skipNumber){
        return request({
            url: '/singer/getSongs/' + id + '/' +skipNumber,
            method: 'get'
        })
    }

    
}