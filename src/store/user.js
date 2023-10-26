export default {
    namespaced: true,

    state: () => ({
        user: [{
            id: '1',
            name: 'Wuhu'
        }],
        userinfo: JSON.parse(localStorage.getItem('userinfo') || '{}'),
    }),


    mutations: {
        addUser(state, user){
            state.user.push(user);
            console.log(state.user);
        },

        login(state, userinfo){
            state.userinfo = userinfo;
            localStorage.setItem('userinfo', JSON.stringify(userinfo));
        }
    },

    actions:{
        asyncAddUser(context, user){
            context.commit('addUser', user)
        },

        asnycLogin(context, userinfo){
            context.commit('login', userinfo);
        }
    },

    getters:{

    }
}