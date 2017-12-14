<template>
	<div class="tile" :style="sizeAndPosition" @click="tileClickHandler">
		<!--background-->
		<!--object-->
		<div class="fit" v-if="tile.unit !== null"><img class="fit" src="../../../assets/UI/notification_icon.png" /></div>
		<div class="coloring fit" v-if="isAttackTile || isMoveTile" :style="coloring"></div>
		<!--arrow-->
	</div>
</template>

<script>
import { mapState } from "vuex";

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
				height: `${this.tileSize}px`,
				width: `${this.tileSize}px`,
				left: `${this.tileSize * this.tile.x}px`,
				top: `${this.tileSize * this.tile.y}px`,
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
			if (this.moveTiles){
				return this.moveTiles.indexOf(this.tile) > -1;
			}

			return false;
		},
		isAttackTile: function () {
			if (this.attackTiles) {
				return this.attackTiles.indexOf(this.tile) > -1;
			}

			return false;
		},
		commit: function () {
			return this.$store.commit;
		},
		...mapState({
			battlePhase: 'battlePhase',
			tileSize: 'tileSize',
			moveTiles: 'moveTiles',
			attackTiles: 'attackTiles'
		})
	},
	methods: {
		tileClickHandler: function (event) {
			
			switch (this.battlePhase) {
				case "Player Phase": {
					if (this.tile.unit && this.tile.unit.canMove) {
						this.commit("setSelectedUnit", this.tile.unit);
						this.commit("setBattlePhase", "Unit Move Phase");
					}
					break;
				}
				case "Unit Move Phase": {
					if (this.isMoveTile) {
						this.commit("moveUnit", this.tile);
						this.commit("openMenu", "Unit Actions");
					}
					break;
				}

				default: {
					break;
				}

			}
		}
	}
}
</script>

<style scoped>
	.fit {
		height: 100%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.tile {
		border: 1px solid #000;
		position: absolute;
		background-color: #060;
		margin: 0px;
	}
	.coloring {
		opacity: 0.6;
	}
</style>
