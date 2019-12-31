import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        windowWidth: 'desktop'
    },
    getters: {
        getWindowWidth: state => state.windowWidth
    },
    mutations: {
        SET_WINDOW_WIDTH(state, payload) {
            state.windowWidth = payload;
        }
    },
    actions: {},
    modules: {}
});
