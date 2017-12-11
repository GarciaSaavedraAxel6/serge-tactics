<template>
	<div class="tile" :style="sizeAndPosition">
		<!--background-->
		<!--object-->
		<div class="unit" v-if="tile.unit !== null">Hiya</div>
		<!--coloring-->
		<!--arrow-->
	</div>
</template>

<script>
export default {
	name: 'tile',
	data: function () {
		return {
			size: 50
		}
	},
	props: [
		'tile'
	],
	computed: {
		sizeAndPosition: function() {
			return {
				height: `${this.$store.state.tileSize}px`,
				width: `${this.$store.state.tileSize}px`,
				left: `${this.$store.state.tileSize * this.tile.x}px`,
				top: `${this.$store.state.tileSize * this.tile.y}px`,
			}
		}
	}
}
</script>

<style scoped>
	.tile {
		border: 1px solid #000;
		position: absolute;
		background-color: #060;
		margin: 0px;
	}
	.unit {
		height: 100%;
		width: 100%;
		color: #00B;
	}
</style>
