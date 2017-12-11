export class Unit {
    constructor (move) {
        //stats
        this.move = move;
        this.attack = 10;
        this.defense = 10;
        this.resistance = 10;
        this.speed = 10;
        this.skill = 10;
        this.luck = 10;
        this.hp = 10;
        this.level = 1;
        this.experience = 0;

        //description
        this.name = "Test";
        this.class = "test";
        this.description = "A test unit.";
        this.title = "Tester of Tests";

        //images
        this.bust = "../assets/test";
        this.portrait = "../assets/test";
        this.sprite = "../assets/test"
    }

    levelUp() {
        this.level++;
        //some stat distribution algorithm
    }
}