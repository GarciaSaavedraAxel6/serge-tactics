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
		},

		newHandler: function() {
			alert("New Game");
		},

		settingsHandler: function() {
			alert("Settings");
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
	}

	.menuItem:hover {
		background-color: #050;
		color: #000;
	}
</style>

