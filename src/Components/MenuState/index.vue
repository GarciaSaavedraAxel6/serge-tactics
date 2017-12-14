<template>
	<div class="coverAll">
		<UnitActions v-if="currentMenu === 'Unit Actions'" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import UnitActions from "./UnitActions";

export default {
	name: "MenuState",
	components: {
		UnitActions
	},
	computed: {
		...mapState({
			currentMenu: "currentMenu"
		})
	}
}
</script>

<style scoped>
	.coverAll {
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
	}
</style>
