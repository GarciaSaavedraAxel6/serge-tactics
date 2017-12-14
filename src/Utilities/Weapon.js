export class Weapon {
    constructor(config) {
        this.attack = config.attack;
        this.weight = config.weight;
        this.type = config.type;
        this.range = config.range;
        this.accuracy = config.accuracy;
        this.critical = config.critical;
    }

    isPhysical() {
        return "Sword|Axe|Spear|Bow|Fist".indexOf(this.type) > -1;
    }

    isMelee() {
        this.range === [1, 1];
    }
}