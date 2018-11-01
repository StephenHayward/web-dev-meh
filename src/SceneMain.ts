module TimeWaster {

    export class SceneMain extends Phaser.Scene {

        constructor() {
            super({
                key: 'SceneMain'
            });
        }

        preload() {
            //this.load.multiatlas('cityscene', 'assets/cityscene.json', 'assets');
        }

        create() {
            console.log("Ready!");
            //var greenBlock = this.add.image(0, 0, "greenBlock");
            //greenBlock.scaleX = 2;
            //greenBlock.scaleY = 2;
            // greenBlock.x = game.config.width / 2;
            // greenBlock.y = game.config.height / 2;
        }

        update() {

        }
    }

}