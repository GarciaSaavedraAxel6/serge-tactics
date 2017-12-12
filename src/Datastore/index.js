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
		grid: new Grid(test),
		selectedUnit: null,
		battlePhase: "Player Phase",
		moveTiles: null,
		attackTiles: null
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
		},
		setBattleState(state, payload) {
			state.battleState = payload;
		},
		setSelectedUnit(state, payload) {
			state.selectedUnit = payload;
			state.moveTiles = payload.getMoveTiles();
			state.attackTiles = payload.getAttackTiles();
		}
	}
});