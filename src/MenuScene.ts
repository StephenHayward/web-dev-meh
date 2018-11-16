module TimeWaster {

    export class MenuScene extends Phaser.Scene {

        constructor() {
            super('MenuScene');
        }

        preload() {

        }
        
        create() {
            var camera = this.cameras.cameras[0];
            var screenWidth = camera.displayWidth;
            var screenHeight = camera.displayHeight;

            var style = { fill: '#0f0' };
            var newGameBtn = new TextButton(this, screenWidth / 2, screenHeight / 2, 'New Game', style, () => this.onNewGame());
        }

        update(time:any , delta: any) {
            super.update(time, delta);
        }

        onNewGame() {
            this.scene.start('SceneMain');       
        }
    }
}
