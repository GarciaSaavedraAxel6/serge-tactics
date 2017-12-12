<template>
	<div class="screen">

        <!--Background-->

        <div id="Grid" :style="gridPosition">
            <Tile 
                v-for="(tile, index) in $store.state.grid.flatTiles" 
                :key="index" :tile="tile" 
            />
        </div>

        <!--HUD-->

        <!--PopupMenus-->

        <!--Battle Scene-->

    </div>
</template>

<script>
import Tile from "./Tile";
export default {
    name: 'Battle',
    computed: {
        gridPosition: function () {
            return {
                top: `100px`,
                left: `100px`
            }
        }
    },
    components: {
        Tile
    }
}
</script>

<style scoped>
    #Grid {
        position: absolute;
    }
</style>
