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

            var preload = function () {

            }
            var create = function () {

            }
            var update = function () {

            }
            // { preload: preload, create:create, update:update }

            // 
            super(config);
        }

        game: Phaser.Game;
    } 

}