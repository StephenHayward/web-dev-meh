class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image("greenBlock", "images/block64.png");
    }

    create() {
        console.log("Ready!");
        var greenBlock = this.add.image(0, 0, "greenBlock");
        greenBlock.scaleX = 2;
        greenBlock.scaleY = 2;
        greenBlock.x = dogGame.game.config.width / 2;
        greenBlock.y = dogGame.game.config.height / 2;
    }

    update() {

    }
}