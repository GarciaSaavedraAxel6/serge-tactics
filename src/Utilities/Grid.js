import { Unit } from "./Unit";

export class Grid {
    constructor (twoDArray) {
        this.flatTiles = [];
        this.tiles = twoDArray.map((row, y) => {
            return row.map((tile, x) => {
                let newTile = new Tile(x, y, tile, this);
                this.flatTiles.push(newTile);
                return newTile;
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
        const moveTiles = (tile, move) => {
            let remaining = move - (tile === startTile ? 0 : tile.moveCost);
            
            if (tile.canMoveTo() && remaining >= 0 || tile === startTile) {
                return [tile].concat(this.getNeighbors(tile).reduce((runningCollection, neighbor) => {
                    return runningCollection.concat(moveTiles(neighbor, remaining));
                }, []));
            }
            
            return [];
        };

        let startTile = this.getTile(startx, starty);

        return this.dedupe(moveTiles(startTile, maxMove));
        
    }

    getAttackTiles(startx, starty, maxMove, attackRange) {

        const attackTiles = (tile, range) => {
            if (range >= attackRange[0] && range <= attackRange[1]) {
                result.push(tile);
            }
            if (range < attackRange[1]) {
                this.getNeighbors(tile).forEach((neighbor) => {attackTiles(neighbor, (range + 1))});
            }
        };

        let moveTiles = this.getMoveTiles(startx, starty, maxMove);
        let result = [];

        moveTiles.forEach((tile) => {
            attackTiles(tile, 0);
        });

        return this.dedupe(result);
    }

    getNeighbors(centerTile) {
        let neighbors = [];

        neighbors.push(this.getTile(centerTile.x - 1 , centerTile.y));
        neighbors.push(this.getTile(centerTile.x + 1 , centerTile.y));
        neighbors.push(this.getTile(centerTile.x , centerTile.y - 1));
        neighbors.push(this.getTile(centerTile.x, centerTile.y + 1));

        return neighbors.filter( tile => tile !== null );
    }

    dedupe(array) {
        return array.filter((elem, index, self) => self.findIndex(
            (t) => {return (t.x === elem.x && t.y === elem.y)}) === index);
    }
}

export class Tile {
    constructor (x, y, config, grid) {
        this.x = x;
        this.y = y;
        this.moveCost = config.moveCost;
        this.grid = grid;

        //set up unit
        if (config.unit) {
            this.unit = new Unit(config.unit);
            this.unit.setTile(this);
        }
        else {
            this.unit = null;
        }
    }

    canMoveTo() {
        return this.unit === null && this.moveCost > 0;
    }

    getMoveTiles(maxMove) {
        return this.grid.getMoveTiles(this.x, this.y, maxMove);
    }

    getAttackTiles(maxMove, attackRange) {
        return this.grid.getAttackTiles(this.x, this.y, maxMove, attackRange);
    }

    getNeighbors() {
        return this.grid.getNeighbors(this);
    }
}