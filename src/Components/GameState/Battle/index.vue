<template>
	<div class="screen">

        <!--Background-->

        <div id="Grid" :style="gridPosition">
            <Tile v-for="(tile, index) in tiles" :key="index" :tile="tile" />
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
    data: function () {
        return {
            tiles: [{x:0, y:0},{x:1, y:0},{x:2, y:0},{x:0, y:1},{x:1, y:1},{x:2, y:1},{x:0, y:2},{x:1, y:2},{x:2, y:2}]
        }
    },
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
