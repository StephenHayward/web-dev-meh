module TimeWaster {

    export class Game extends Phaser.Game {

        constructor() {

            var config = {
                type: Phaser.AUTO,
                width: 480,
                height: 640,
                parent: 'content',
                pixelArt: true,
                physics: {
                    default: 'arcade',
                    arcade: {
                        debug: true
                    }
                },
                scene: [MenuScene, SceneMain]
            };

            super(config);
        }   
    } 
}