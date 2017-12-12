export class Unit {
    constructor (config) {
        //stats
        this.move = config.move;
        this.attack = 10;
        this.defense = 10;
        this.resistance = 10;
        this.speed = 10;
        this.skill = 10;
        this.luck = 10;
        this.hp = 10;
        this.level = 1;
        this.experience = 0;
        this.range = [1, 2];

        //description
        this.name = "Test";
        this.class = "test";
        this.description = "A test unit.";
        this.title = "Tester of Tests";

        //images
        this.bust = "../assets/test";
        this.portrait = "../assets/test";
        this.sprite = "../assets/test"

        //programming stuffs
        this.tile = null;
    }

    levelUp() {
        this.level++;
        //some stat distribution algorithm
    }

    setTile(tile) {
        this.tile = tile;
    }

    getMoveTiles() {
        if (this.tile) {
            return this.tile.getMoveTiles(this.move);
        }

        return null;
    }

    getAttackTiles() {
        if (this.tile) {
            return this.tile.getAttackTiles(this.move, this.range);
        }

        return null;
    }
}