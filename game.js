var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TimeWaster;
(function (TimeWaster) {
    var Actor = /** @class */ (function (_super) {
        __extends(Actor, _super);
        function Actor(scene, x, y, texture, frame, name) {
            var _this = _super.call(this, scene, x, y, texture, frame) || this;
            // Initialize stats;
            _this.velocity = new Phaser.Math.Vector2();
            _this.time = 200;
            _this.health = 100;
            // Set the GameObjects name if defined
            if (name != null && name.length > 0) {
                _super.prototype.setName.call(_this, name);
            }
            _this.setOrigin(.5, .5);
            // Add the GameObject to the scene
            scene.add.existing(_this);
            return _this;
        }
        Actor.prototype.preUpdate = function (time, delta) {
            this.x += this.velocity.x * delta;
            this.y += this.velocity.y * delta;
        };
        return Actor;
    }(Phaser.GameObjects.Sprite));
    TimeWaster.Actor = Actor;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = this;
            var config = {
                type: Phaser.AUTO,
                width: 480,
                height: 640,
                parent: 'content',
                pixelArt: true,
                zoom: 10,
                physics: {
                    "default": 'arcade',
                    arcade: {
                        debug: true
                    }
                },
                scene: [TimeWaster.MenuScene, TimeWaster.SceneMain]
            };
            _this = _super.call(this, config) || this;
            console.log(_this);
            return _this;
        }
        return Game;
    }(Phaser.Game));
    TimeWaster.Game = Game;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var MenuScene = /** @class */ (function (_super) {
        __extends(MenuScene, _super);
        function MenuScene() {
            var _this = _super.call(this, 'MenuScene') || this;
            console.log(_this);
            return _this;
        }
        MenuScene.prototype.preload = function () {
            this.load.image("greenBlock", "assets/block64.png");
            this.load.multiatlas('dungeonatlas', 'assets/Dungeon-SpriteAtlas.json', 'assets');
            this.load.image('dungeon-tileset-img', 'assets/dungeon-tileset.png');
        };
        MenuScene.prototype.create = function () {
            var _this = this;
            var camera = this.cameras.cameras[0];
            var screenWidth = camera.displayWidth;
            var screenHeight = camera.displayHeight;
            var style = { fill: '#0f0' };
            var newGameBtn = new TimeWaster.TextButton(this, screenWidth / 2, screenHeight / 2, 'New Game', style, function () { return _this.onNewGame(); });
        };
        MenuScene.prototype.update = function (time, delta) {
            _super.prototype.update.call(this, time, delta);
        };
        MenuScene.prototype.onNewGame = function () {
            //for (var i = 0; i < this.plugins.plugins.length; i++) {
            //    console.log(this.plugins.plugins[i].key);
            //}
            this.scene.start('SceneMain');
        };
        return MenuScene;
    }(Phaser.Scene));
    TimeWaster.MenuScene = MenuScene;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //playerController: PlayerController;
        function Player(scene, x, y, texture, frame, name) {
            return _super.call(this, scene, x, y, texture, frame, name) || this;
        }
        Player.prototype.preUpdate = function (time, delta) {
            _super.prototype.preUpdate.call(this, time, delta);
        };
        return Player;
    }(TimeWaster.Actor));
    TimeWaster.Player = Player;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var PlayerController = /** @class */ (function (_super) {
        __extends(PlayerController, _super);
        function PlayerController(scene, controlling) {
            var _this = _super.call(this, scene, "inputController") || this;
            _this.isDisabled = false;
            _this.scene = scene;
            _this.controllingActor = controlling;
            console.log(_this.controllingActor.name);
            _this.keys = _this.scene.input.keyboard.createCursorKeys();
            scene.add.existing(_this);
            return _this;
        }
        PlayerController.prototype.preUpdate = function (time, delta) {
            // Do not process if disabled
            if (this.isDisabled) {
                return;
            }
            // .. Else handle keyboard input            
            if (this.keys.right.isDown) {
                this.controllingActor.velocity.x = 1;
            }
            else if (this.keys.left.isDown) {
                this.controllingActor.velocity.x = -1;
            }
            else {
                this.controllingActor.velocity.x = 0;
            }
            if (this.keys.down.isDown) {
                this.controllingActor.velocity.y = 1;
            }
            else if (this.keys.up.isDown) {
                this.controllingActor.velocity.y = -1;
            }
            else {
                this.controllingActor.velocity.y = 0;
            }
            if (this.keys.space.isDown && this.keys.space.repeats === 1) {
                var menuScene = this.scene;
                this.controllingActor = menuScene.enemies[Phaser.Math.Between(0, menuScene.enemies.length - 1)];
            }
            if (this.keys.shift.isDown) {
                var menuScene = this.scene;
                menuScene.onGameOver();
            }
            //this.controllingActor.x += 50 * delta;
        };
        PlayerController.prototype.setDisabled = function (isDisabled) {
            this.isDisabled = isDisabled;
        };
        return PlayerController;
    }(Phaser.GameObjects.GameObject));
    TimeWaster.PlayerController = PlayerController;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var SceneMain = /** @class */ (function (_super) {
        __extends(SceneMain, _super);
        function SceneMain() {
            return _super.call(this, 'SceneMain') || this;
        }
        SceneMain.prototype.preload = function () {
            //this.load.multiatlas('cityscene', 'assets/cityscene.json', 'assets');
        };
        SceneMain.prototype.create = function () {
            console.log("Ready!");
            this.isGameOver = false;
            this.player = new TimeWaster.Player(this, this.cameras.cameras[0].displayWidth / 2, this.cameras.cameras[0].displayHeight / 2, 'dungeonatlas', 'elf_f_run_anim_f0.png', 'Player');
            this.playerController = new TimeWaster.PlayerController(this, this.player);
            this.enemies = new Array();
            for (var i = 0; i < 5; i++) {
                var posX = Phaser.Math.Between(0, this.cameras.cameras[0].displayWidth);
                var posY = Phaser.Math.Between(0, this.cameras.cameras[0].displayHeight);
                var enemy = new TimeWaster.Player(this, posX, posY, 'dungeonatlas', 'elf_f_run_anim_f0.png', 'Enemy' + i);
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
        };
        SceneMain.prototype.update = function (time, elapsed) {
            // On game over - begin countdown to scene change
            if (this.isGameOver) {
                this.countdown -= elapsed;
                if (this.countdown <= 0) {
                    this.scene.start('MenuScene');
                }
            }
        };
        SceneMain.prototype.onGameOver = function () {
            this.add.existing(this.gameOver);
            this.gameOver.setActive(true);
            this.playerController.setDisabled(true);
            this.countdown = 5 * 1000;
            this.isGameOver = true;
        };
        return SceneMain;
    }(Phaser.Scene));
    TimeWaster.SceneMain = SceneMain;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    // From Tutorial: https://snowbillr.github.io/blog/2018-07-03-buttons-in-phaser-3/
    // Temp till an image or sprite is used
    var TextButton = /** @class */ (function (_super) {
        __extends(TextButton, _super);
        function TextButton(scene, x, y, text, style, callback) {
            var _this = _super.call(this, scene, x, y, text, style) || this;
            _this.setInteractive({ useHandCursor: true })
                .on('pointerover', function () { return _this.enterButtonHoverState(); })
                .on('pointerout', function () { return _this.enterButtonRestState(); })
                .on('pointerdown', function () { return _this.enterButtonActiveState(); })
                .on('pointerup', function () {
                _this.enterButtonHoverState();
                callback();
            });
            scene.add.existing(_this);
            // Centre string on position
            _this.x -= (_this.width / 2);
            _this.y -= (_this.height / 2);
            return _this;
        }
        TextButton.prototype.enterButtonHoverState = function () {
            this.setStyle({ fill: '#ff0' });
        };
        TextButton.prototype.enterButtonRestState = function () {
            this.setStyle({ fill: '#0f0' });
        };
        TextButton.prototype.enterButtonActiveState = function () {
            this.setStyle({ fill: '#0ff' });
        };
        return TextButton;
    }(Phaser.GameObjects.Text));
    TimeWaster.TextButton = TextButton;
})(TimeWaster || (TimeWaster = {}));
//# sourceMappingURL=game.js.map