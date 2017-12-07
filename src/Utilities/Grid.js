class Grid {
    constructor (twoDArray) {
        this.tiles = twoDArray.map(row => {
            return row.map(tile => {
                return new Tile(tile);
            });
        });
    }
    
    getTile(x, y) {

        if (!this.tiles[y]) {
            return null;
        }

        return this.tiles[y][x] || null;
    }

    getMoveTiles(startx, starty, maxMove) {
        let startTile = this.getTile(startx, starty);

        return this.moveTiles(startTile, (maxMove + startTile.moveCost));
        
    }

    moveTiles(tile, move) {
        let remaining = move - tile.cost;
        
        if (tile.canMoveTo() && remaining >= 0) {
            return [tile].concat(this.getNeighbors(tile).reduce((runningCollection, neighbor) => {
                return runningCollection.concat(this.moveTiles(neighbor, remaining));
            }, []));
        }
        
        return [];
    }

    getAttackTiles(startx, starty, maxMove, attackRange) {

        let moveTiles = this.getMoveTiles(startx, starty, maxMove);

        //return tiles that the unit can attack.
    }

    getNeighbors(centerTile) {
        let neighbors = [];

        neighbors.push(this.getTile(centerTile.x - 1 , centerTile.y));
        neighbors.push(this.getTile(centerTile.x + 1 , centerTile.y));
        neighbors.push(this.getTile(centerTile.x , centerTile.y - 1));
        neighbors.push(this.getTile(centerTile.x, centerTile.y + 1));

        return neighbors.filter( tile => !isNull(tile) );
    }
}

class Tile {
    constructor (config) {
        this.x = config.x;
        this.y = config.y;
        this.unit = config.unit;
        this.moveCost = config.moveCost;
    }

    canMoveTo() {
        return isNull(this.unit) && this.moveCost > 0;
    }
}