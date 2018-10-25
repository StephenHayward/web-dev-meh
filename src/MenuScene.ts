module TimeWaster {

    export class TestClass {
        constructor() {
            console.log("Called from another script.");
        }
    }

    export class MenuScene extends Phaser.Scene {

        player: Player;

        constructor() {
            super({
                key: 'MenuScene'
            });
        }

        preload() {
            this.load.image("greenBlock", "images/block64.png");
        }

        create() {
            console.log("Ready!");

            //var gameConfig = this.game.config;

            this.player = new Player(this, 50, 50, "greenBlock");
        }

        update(time, delta) {
            this.player.MoveUp(delta);
        }
    }

}
