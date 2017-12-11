<template>
	<div id="PreMenu" class="screen">
		<div v-if="screens[currentIndex] === 'Vue.JS'">
			<p>Built with Vue.JS</p>
			<img src="../../assets/logo.png">
		</div>
		<div v-if="screens[currentIndex] === 'SergeofBIBEK'">
			Made by SergeofBIBEK
		</div>
	</div>
</template>

<script>
export default {
	name: 'PreMenu',
	data: function () {
		return {
			screens: ['Vue.JS','SergeofBIBEK'],
			currentIndex: 0,
			interval: setInterval(this.advance, 2000)
		}
	},
	methods: {
		advance: function() {
			if (this.currentIndex === this.screens.length - 1) {
				clearInterval(this.interval);
				this.$store.commit("setGlobalState", "Title Screen");
			}
			else {
				this.currentIndex++;
			}
		}
	}
}
</script>

<style scoped>
	#PreMenu {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	p {
		text-align: center;
	}
</style>
