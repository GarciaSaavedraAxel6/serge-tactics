import { weapons } from "../Database/weapons";

export class Unit {
    constructor (config) {
        //stats
        this.move = config.move;
        this.attack = config.attack;
        this.defense = config.defense;
        this.resistance = config.resistance;
        this.speed = config.speed;
        this.skill = config.skill;
        this.luck = config.luck;
        this.hp = config.hp;
        this.level = 1;
        this.experience = 0;
        this.range = weapons[config.weapon].range;

        //description
        this.name = config.name;
        this.class = config.class;
        this.description = config.description;
        this.title = config.title;

        //images
        this.imageDirectory = config.imageDirectory;

        //programming stuffs
        this.tile = config.tile;
        this.army = config.army;

        //inventory
        this.inventory = [];
        this.weapon = weapons[config.weapon];
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