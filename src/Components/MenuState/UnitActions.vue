<template>
	<div class="menuHolder">
		<!--Move-->
		<!--Attack-->
		<!--Items-->
		<!--Wait-->
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	name: "UnitActions",
	computed: {
		...mapState({
			selectedUnit: "selectedUnit"
		})
	}
}
</script>

<style scoped>
	
</style>