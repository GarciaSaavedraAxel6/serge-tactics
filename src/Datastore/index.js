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
		gridPosition: {top: 100, left: 100},
		grid: new Grid(test),
		selectedUnit: null,
		battlePhase: "Player Phase",
		moveTiles: null,
		attackTiles: null,
		menuOpen: false,
		currentMenu: null
	},
	mutations: {
		setGlobalState (state, payload) {
			state.globalState = payload;
		},
		changeTileSize (state, payload) {
			let newSize = payload + state.tileSize;
			if (newSize > 10 && newSize < 150 && !isNaN(newSize)) {
				state.tileSize = newSize;
			}
		},
		setBattlePhase(state, payload) {
			state.battlePhase = payload;
		},
		setSelectedUnit(state, payload) {
			if (payload) {
				state.selectedUnit = payload;
				state.moveTiles = payload.getMoveTiles();
				state.attackTiles = payload.getAttackTiles();
			}
			else {
				state.selectedUnit = null;
				state.moveTiles = null;
				state.attackTiles = null;
			}
		},
		moveUnit(state, payload) {
			let unit = state.selectedUnit;
			let oldTile = unit.tile;
			let newTile = payload;

			oldTile.unit = null;
			newTile.unit = unit;
			unit.setTile(newTile);
		},
		openMenu(state, payload) {
			state.menuOpen = true;
			state.currentMenu = payload;
		},
		closeMenu(state, payload) {
			state.menuOpen = false;
			state.currentMenu = null;
		}
	}
});