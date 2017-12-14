<template>
	<div class="menuHolder" :style="menuHolderPosition">
		<div class="menuItem">Attack</div>
		<div class="menuItem">Items</div>
		<div class="menuItem" @click="waitClickHandler">Wait</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "UnitActions",
	computed: {
		menuHolderPosition: function () {
			let x = this.selectedUnit.tile.x + 1;
			let y = this.selectedUnit.tile.y + 1;
			return {
				top: `${(y * this.tileSize) + this.gridPosition.top}px`,
				left: `${(x * this.tileSize) + this.gridPosition.left}px`,
			};
		},
		commit: function () {
			return this.$store.commit;
		},
		...mapState({
			selectedUnit: "selectedUnit",
			tileSize: "tileSize",
			gridPosition: "gridPosition"
		})
	},
	methods: {
		waitClickHandler(event) {
			this.selectedUnit.canMove = false;
			this.commit("closeMenu");
			this.commit("setSelectedUnit", null);
		}
	}
}
</script>

<style scoped>
	.menuHolder {
		position: absolute;
		background-color: #28F;
		display: flex;
		flex-direction: column;
	}
	.menuItem {
		color: #A00;
		border: 1px solid #A00;
	}
	.menuItem:hover {
		color: #28f;
		border: 1px solid #28f;
		background-color: #A00;
	}
</style>