module TimeWaster {

    export class SceneMain extends Phaser.Scene {

        player: Player;
        playerController: PlayerController;
        enemies: Actor[];

        gameOver: Phaser.GameObjects.Text;
        isGameOver: boolean;
        countdown: number;

        constructor() {
            super({
                key: 'SceneMain'
            });
        }

        preload() {
            this.load.multiatlas('dungeonatlas', 'assets/Dungeon-SpriteAtlas.json', 'assets');
            this.load.image('dungeon-tileset-img', 'assets/levels/dungeon-tileset.png');
            this.load.tilemapTiledJSON('level01', 'assets/levels/level01.json');
        }

        create() {
            console.log("Ready!");

            this.isGameOver = false;

            // Add the map
            var map = this.add.tilemap('level01');
            var tileset = map.addTilesetImage('dungeon-tileset', 'dungeon-tileset-img', 16, 16);

            console.log(map);

            var floorLayer = map.createStaticLayer('Floor', tileset, 0, 0);
            var wallLayer = map.createStaticLayer('Walls', tileset, 0, 0);
            var decoLayer = map.createStaticLayer('WallsDeco', tileset, 0, 0);

            map.setCollisionBetween(1, 100);         

            // Add Characters
            this.player = new Player(this,
                16*12,
                16*8,
                'dungeonatlas', 'elf_f_run_anim_f0.png', 'Player');

            this.playerController = new PlayerController(this, this.player);

            this.enemies = new Array();

            for (var i = 0; i < 3; i++) {

                var posX = Phaser.Math.Between(10, 13) * 16;
                var posY = Phaser.Math.Between(5, 10) * 16;

                var enemy = new Player(this, posX, posY, 'dungeonatlas', 'elf_f_run_anim_f0.png', 'Enemy' + i);
                this.physics.add.collider(this.player, enemy);
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
            camera.startFollow(this.player);
            camera.setZoom(2);

            //layer.putTileAt(15, 5, 5);

            // Set up collisions
            this.physics.add.collider(this.player, wallLayer);

            // Initialize UI
            var camera = this.cameras.cameras[0];
            var screenWidth = camera.displayWidth;
            var screenHeight = camera.displayHeight;

           // camera.setPosition(16 * 16, 8 * 16);

            var style = { fill: '#0f0' };
            this.gameOver = new Phaser.GameObjects.Text(this, screenWidth / 2, screenHeight / 2, 'GameOver', style);
            this.gameOver.x -= this.gameOver.width / 2;
            this.gameOver.setActive(false);

            // Debug As Detailed in vlog https://phaser.io/phaser3/devlog/108
            var debugGraphics = this.add.graphics();
            map.renderDebug(debugGraphics, {
                tileColor: new Phaser.Display.Color(105, 210, 231, 200),
                collidingTileColor: new Phaser.Display.Color(243, 134, 48, 200),
                faceColor: new Phaser.Display.Color(40, 39, 37, 255)
            });
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

        onCollisionCheck() {
            console.log('Collided');
        }
    }
}