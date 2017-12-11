import Vue from 'vue';
import Vuex from 'vuex';

//Classes
import { Grid } from "../Utilities/Grid";
import { test } from "../Database/test";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		globalState: "Pre Menu",
		tileSize: 50,
		grid: new Grid(test)
	},
	mutations: {
		setGlobalState (state, payload) {
			state.globalState = payload;
		},
		changeTileSize (state, payload) {
			let newSize = payload.amount + state.tileSize;
			if (newSize > 10 && newSize < 150 && !isNaN(newSize)) {
				state.tileSize = newSize;
			}
		}
	}
});