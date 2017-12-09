<template>
	<div id="app">
		<PreMenu v-if="this.$store.state.globalState === 'Pre Menu'" />
		<TitleScreen v-if="this.$store.state.globalState === 'Title Screen'" />
		<GameState v-if="this.$store.state.globalState ==='Game State'" />
		
	</div>
</template>

<script>
import PreMenu from "./Components/PreMenu";
import TitleScreen from "./Components/TitleScreen";
import GameState from "./Components/GameState";

export default {
	name: 'app',
	methods: {
		
	},
	components: {
		PreMenu,
		TitleScreen,
		GameState
	}
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
