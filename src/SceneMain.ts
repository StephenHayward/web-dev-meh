module TimeWaster {

    export class SceneMain extends Phaser.Scene {

        player: Player;
        playerController: PlayerController;
        enemies: Actor[];

        gameOver: Phaser.GameObjects.Text;
        isGameOver: boolean;
        countdown: number;

        constructor() {
            super('SceneMain');
        }

        preload() {
            //this.load.multiatlas('cityscene', 'assets/cityscene.json', 'assets');
        }

        create() {
            console.log("Ready!");

            this.isGameOver = false;

            this.player = new Player(this,
                this.cameras.cameras[0].displayWidth / 2,
                this.cameras.cameras[0].displayHeight / 2,
                'dungeonatlas', 'elf_f_run_anim_f0.png', 'Player');

            this.playerController = new PlayerController(this, this.player);

            this.enemies = new Array();

            for (var i = 0; i < 5; i++) {

                var posX = Phaser.Math.Between(0, this.cameras.cameras[0].displayWidth);
                var posY = Phaser.Math.Between(0, this.cameras.cameras[0].displayHeight);

                var enemy = new Player(this, posX, posY, 'dungeonatlas', 'elf_f_run_anim_f0.png', 'Enemy' + i);
                this.enemies.push(enemy);
            }

            //var frameNames = this.anims.generateFrameNames('dungeonatlas', { start: 0, end: 3, zeroPad: 0, prefix: 'elf_f_run_anim_f', suffix: '.png' });
            //this.anims.create({ key: 'run', frames: frameNames, frameRate: 10, repeat: -1 });
            //this.player.anims.play('run');

            for (var i = 0; i < this.children.length; i++) {
                var temp = this.children.getAt(i).name;
            }

            console.log(temp);

            //var elf_f = this.add.sprite(16*5, 16*5, 'dungeonatlas', 'elf_f_run_anim_f0.png');
            //elf_f.anims.play('run');
            //elf_f.flipX = false;
            //elf_f.setScale(2, 2);

            // Test camera settings
            var camera = this.cameras.cameras[0];
            //camera.centerOn(elf_f.x, elf_f.y);
            //camera.startFollow(this.player);
            //camera.setZoom(2);

            // Test TileMap        
            // Create a blank TileMap
            var map = this.make.tilemap();

            // Add a tileset
            var tileset = map.addTilesetImage('dungeon-tileset', 'dungeon-tileset-img', 16, 16);

            var layer = map.createBlankDynamicLayer('layer1', tileset, 0, 0, 50, 50, 16, 16);

            //layer.putTileAt(15, 5, 5);

            // Set up collisions
            //this.physics.add.group()

            // Initialize UI
            var camera = this.cameras.cameras[0];
            var screenWidth = camera.displayWidth;
            var screenHeight = camera.displayHeight;

            var style = { fill: '#0f0' };
            this.gameOver = new Phaser.GameObjects.Text(this, screenWidth / 2, screenHeight / 2, 'GameOver', style);
            this.gameOver.x -= this.gameOver.width / 2;
            this.gameOver.setActive(false);
        }

        update(time: number, elapsed: number) {
            // On game over - begin countdown to scene change
            if (this.isGameOver) {
                this.countdown -= elapsed;           

                if (this.countdown <= 0) {
                    this.scene.start('MenuScene');
                }
            }
        }

        onGameOver() {
            this.add.existing(this.gameOver);
            this.gameOver.setActive(true);
            this.playerController.setDisabled(true);
            this.countdown = 5 * 1000;
            this.isGameOver = true;
        }
    }
}