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
var SceneMain = /** @class */ (function (_super) {
    __extends(SceneMain, _super);
    function SceneMain() {
        return _super.call(this, 'SceneMain') || this;
    }
    SceneMain.prototype.preload = function () {
        //this.load.image("greenBlock", "images/block64.png");
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
//# sourceMappingURL=SceneMain.js.map