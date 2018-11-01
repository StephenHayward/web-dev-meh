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
            this.load.image("greenBlock", "assets/block64.png");
            this.load.multiatlas('dungeonatlas', 'assets/Dungeon-SpriteAtlas.json', 'assets');
            this.load.image('dungeon-tileset-img', 'assets/dungeon-tileset.png');
        }

        create() {
            console.log("Ready!");

            //var gameConfig = this.game.config;
            var background = this.add.sprite(100, 100, 'dungeonatlas', 'doors_leaf_closed.png');

            // Test Animation
            this.player = new Player(this, 50, 50, "greenBlock");
            var elf_f = this.add.sprite(16*5, 16*5, 'dungeonatlas', 'elf_f_run_anim_f0.png');
            var frameNames = this.anims.generateFrameNames('dungeonatlas', { start: 0, end: 3, zeroPad: 0, prefix: 'elf_f_run_anim_f', suffix: '.png' });
            this.anims.create({ key: 'run', frames: frameNames, frameRate: 10, repeat: -1 });
            elf_f.anims.play('run');
            elf_f.flipX = false;
            //elf_f.setScale(2, 2);

            // Test camera settings
            var camera = this.cameras.cameras[0];
            //camera.centerOn(elf_f.x, elf_f.y);
            camera.startFollow(elf_f);
            camera.setZoom(2);

            // Test TileMap        
            // Create a blank TileMap
            var map = this.make.tilemap();

            // Add a tileset
            var tileset = map.addTilesetImage('dungeon-tileset', 'dungeon-tileset-img', 16, 16);

            var layer = map.createBlankDynamicLayer('layer1', tileset, 0, 0, 50, 50, 16, 16);
            
            layer.putTileAt(15, 5, 5);

            
        }

        update(time, delta) {
            this.player.MoveUp(delta);
        }
    }

}
