<template>
	<div class="screen">
		<!--Logged In State-->
		<p v-if="hasSaves" class="menuItem" @click.left="loadHandler">Load Game</p>
		<p class="menuItem" @click.left="newHandler">New Game</p>
		<p class="menuItem" @click.left="settingsHandler">Settings</p>
	</div>
</template>

<script>
export default {
	name: "TitleScreen",
	data: function() {
		return {
			selection: 0,
			hasSaves: false
		}
	},

	methods: {
		loadHandler: function(){
			alert("Load Game");
			//Move to Load Menu
		},

		newHandler: function() {
			//Setup New Game
			this.$store.commit("setGlobalState", "Game State");
		},

		settingsHandler: function() {
			alert("Settings");
			//Move to Settings Menu
		}
	}
}
</script>

<style scoped>
	.screen {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}

	.menuItem {
		padding: 10px;
		border-radius: 10px;
		border: 1px solid #050;
		margin: 10px;
	}

	.menuItem:hover {
		background-color: #050;
		color: #000;
	}
</style>

