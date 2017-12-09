<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<PreMenu v-if="this.$store.state.globalState === 'Pre Menu'" />
		<TitleScreen v-if="this.$store.state.globalState === 'Title Screen'" />
		<button @click="toggle">{{this.$store.state.show ? "Hide" : "Show" }}</button>
	</div>
</template>

<script>
import PreMenu from "./Components/PreMenu";
import TitleScreen from "./Components/TitleScreen";

export default {
	name: 'app',
	methods: {
		toggle: function(event) {
			this.$store.commit("toggle");
		}
	},
	components: {
		PreMenu,
		TitleScreen
	}
}
</script>

<style>
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
