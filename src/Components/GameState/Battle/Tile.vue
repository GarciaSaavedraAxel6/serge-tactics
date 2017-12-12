<template>
	<div class="tile" :style="sizeAndPosition" @click="tileClickHandler">
		<!--background-->
		<!--object-->
		<div class="unit" v-if="tile.unit !== null"><img src="../../../assets/UI/notification_icon.png" /></div>
		<!--coloring-->
		<div class="coloring" v-if="isAttackTile || isMoveTile" :style="coloring"></div>
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
		},
		coloring: function () {
			if (this.isMoveTile) {
				return {backgroundColor: "blue"};
			}
			if (this.isAttackTile) {
				return {backgroundColor: "red"};
			}
			
			return {};
		},
		isMoveTile: function () {
			if (this.$store.state.moveTiles){
				return this.$store.state.moveTiles.indexOf(this.tile) > -1;
			}

			return false;
		},
		isAttackTile: function () {
			if (this.$store.state.attackTiles) {
				return this.$store.state.attackTiles.indexOf(this.tile) > -1;
			}

			return false;
		},
	},
	methods: {
		tileClickHandler: function (event) {
			console.log("clicked");
			let phase = this.$store.state.battlePhase;
			console.log('phase: ', phase);
			if (phase === "Player Phase") {
				if (this.tile.unit) {
					this.$store.commit("setBattlePhase", "Unit Move Phase");
					this.$store.commit("setSelectedUnit", this.tile.unit);
				}
				return;
			}

			if (phase === "Unit Move Phase"); {
				if (this.isMoveTile) {
					this.$store.commit("moveUnit", this.tile);
					this.$store.commit("setBattlePhase", "Player Phase");
					this.$store.commit("setSelectedUnit", null);
				}
				return;
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
		position: absolute;
		top: 0;
		left: 0;
	}
	.coloring {
		height: 100%;
		width: 100%;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
