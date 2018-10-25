module TimeWaster {

    export class Game extends Phaser.Game {

        constructor() {
            var test = new TestClass();

            var config = {
                type: Phaser.AUTO,
                width: 480,
                height: 640,
                parent: 'content',
                scene: [MenuScene, SceneMain]
            };

            super(config);
        }

        game: Phaser.Game;
    } 

}