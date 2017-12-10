<template>
	<div class="tile" :style="sizeAndPosition">
		<!--background-->
		<!--object-->
		<!--unit-->
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
				height: `${this.size}px`,
				width: `${this.size}px`,
				left: `${this.size * this.tile.x}px`,
				top: `${this.size * this.tile.y}px`,
			}
		}
	}
}
</script>

<style>
	.tile {
		border: 1px solid #000;
		position: absolute;
		background-color: #060;
		margin: 0px;
	}
</style>
