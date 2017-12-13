<template>
	<div id="app">
		<PreMenu v-if="this.globalState === 'Pre Menu'" />
		<TitleScreen v-if="this.globalState === 'Title Screen'" />
		<GameState v-if="this.globalState ==='Game State'" />
		<MenuState />
		
	</div>
</template>

<script>
import { mapState } from "vuex";
import PreMenu from "./Components/PreMenu";
import TitleScreen from "./Components/TitleScreen";
import GameState from "./Components/GameState";
import MenuState from "./Components/MenuState";

export default {
	name: 'app',
	methods: {
		
	},
	components: {
		PreMenu,
		TitleScreen,
		GameState,
		MenuState
	},
	computed: mapState({
		globalState: "globalState"
	})
}
</script>

<style>
* {
	box-sizing: border-box;
	-webkit-appearance: none;
	margin: 0;
	padding: 0;
}
	.screen {
		height: 100vh;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #000;
		color: #050;
	}
</style>
