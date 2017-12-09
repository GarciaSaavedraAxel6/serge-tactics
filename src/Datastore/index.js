import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		globalState: "Pre Menu"
	},
	mutations: {
		toggle (state, payload) {
			state.show = !state.show;
		},
		
		setGlobalState (state, payload) {
			state.globalState = payload.payload;
		}
	}
});