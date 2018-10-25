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
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = this;
            var test = new TimeWaster.TestClass();
            var config = {
                type: Phaser.AUTO,
                width: 480,
                height: 640,
                parent: 'content',
                scene: [TimeWaster.MenuScene, TimeWaster.SceneMain]
            };
            _this = _super.call(this, config) || this;
            return _this;
        }
        return Game;
    }(Phaser.Game));
    TimeWaster.Game = Game;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var TestClass = /** @class */ (function () {
        function TestClass() {
            console.log("Called from another script.");
        }
        return TestClass;
    }());
    TimeWaster.TestClass = TestClass;
    var MenuScene = /** @class */ (function (_super) {
        __extends(MenuScene, _super);
        function MenuScene() {
            return _super.call(this, {
                key: 'MenuScene'
            }) || this;
        }
        MenuScene.prototype.preload = function () {
            this.load.image("greenBlock", "images/block64.png");
        };
        MenuScene.prototype.create = function () {
            console.log("Ready!");
            //var gameConfig = this.game.config;
            this.player = new TimeWaster.Player(this, 50, 50, "greenBlock");
            //var greenBlock = this.add.image(0, 0, "greenBlock");
            //greenBlock.scaleX = 2;
            //greenBlock.scaleY = 2;
            //greenBlock.x = ;
            //greenBlock.y = ;
        };
        MenuScene.prototype.update = function (time, delta) {
            this.player.MoveUp(delta);
        };
        return MenuScene;
    }(Phaser.Scene));
    TimeWaster.MenuScene = MenuScene;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(scene, x, y, texture, frame) {
            var _this = _super.call(this, scene, x, y, texture, frame) || this;
            _this.speed = 0.005;
            // Add the object to the scene
            scene.children.add(_this);
            return _this;
        }
        Player.prototype.update = function (time) {
            this.MoveUp(time);
        };
        Player.prototype.MoveUp = function (time) {
            this.y += this.speed * time;
            console.log(this.y);
        };
        return Player;
    }(Phaser.GameObjects.Sprite));
    TimeWaster.Player = Player;
})(TimeWaster || (TimeWaster = {}));
var TimeWaster;
(function (TimeWaster) {
    var SceneMain = /** @class */ (function (_super) {
        __extends(SceneMain, _super);
        function SceneMain() {
            return _super.call(this, {
                key: 'SceneMain'
            }) || this;
        }
        SceneMain.prototype.preload = function () {
            this.load.image("greenBlock", "images/block64.png");
        };
        SceneMain.prototype.create = function () {
            console.log("Ready!");
            //var greenBlock = this.add.image(0, 0, "greenBlock");
            //greenBlock.scaleX = 2;
            //greenBlock.scaleY = 2;
            // greenBlock.x = game.config.width / 2;
            // greenBlock.y = game.config.height / 2;
        };
        SceneMain.prototype.update = function () {
        };
        return SceneMain;
    }(Phaser.Scene));
    TimeWaster.SceneMain = SceneMain;
})(TimeWaster || (TimeWaster = {}));
//# sourceMappingURL=game.js.map