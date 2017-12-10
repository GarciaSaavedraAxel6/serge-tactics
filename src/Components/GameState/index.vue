<template>
	<div class="screen">
		<StoryScene v-if="phase === 'StoryScene'" />
		<WorldMap v-if="phase === 'WorldMap'" />
		<Battle v-if="phase === 'Battle'" />
	</div>
</template>

<script>
import StoryScene from "./StoryScene";
import WorldMap from "./WorldMap";
import Battle from "./Battle";

export default {
	name: "GameState",
	data: function () {
		return {
			phase: "Battle",
		}
	},
	components: {
		StoryScene,
		WorldMap,
		Battle
	}
}
</script>

<style>

</style>
