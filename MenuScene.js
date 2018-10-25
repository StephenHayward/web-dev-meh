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
var MenuScene = /** @class */ (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        return _super.call(this, 'MenuScene') || this;
    }
    MenuScene.prototype.preload = function () {
        this.load.image("greenBlock", "images/block64.png");
    };
    MenuScene.prototype.create = function () {
        console.log("Ready!");
        this.player = new Player(this, dogGame.game.config.width / 2, dogGame.game.config.height / 2, "greenBlock");
        //var greenBlock = this.add.image(0, 0, "greenBlock");
        //greenBlock.scaleX = 2;
        //greenBlock.scaleY = 2;
        //greenBlock.x = ;
        //greenBlock.y = ;
    };
    MenuScene.prototype.update = function () {
    };
    return MenuScene;
}(Phaser.Scene));
//# sourceMappingURL=MenuScene.js.map