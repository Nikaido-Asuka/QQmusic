import Vue  from "vue";
import VueRouter from "vue-router";

//引入相关的组件或视图
import Index from '@/views/index'
import SingerList from '@/views/SingerList'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Index',
        component: Index,
    },{
        path: '/singerList',
        name: 'SingerList',
        component: SingerList,
    },{
        path: '/singer/:id',
        name: 'singer',
        component: () => import('../views/Singer')
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;