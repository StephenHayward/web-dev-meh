module TimeWaster {

    export class MenuScene extends Phaser.Scene {

        constructor() {
            super('MenuScene');
            console.log(this);
        }

        preload() {
            this.load.image("greenBlock", "assets/block64.png");
            this.load.multiatlas('dungeonatlas', 'assets/Dungeon-SpriteAtlas.json', 'assets');
            this.load.image('dungeon-tileset-img', 'assets/dungeon-tileset.png');
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
            //for (var i = 0; i < this.plugins.plugins.length; i++) {
            //    console.log(this.plugins.plugins[i].key);
            //}

            this.scene.start('SceneMain');       
        }
    }
}
