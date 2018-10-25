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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(scene, x, y, texture, frame) {
            var _this = _super.call(this, scene, x, y, texture, frame) || this;
            _this.speed = 5;
            scene.children.add(_this);
            return _this;
        }
        Player.prototype.update = function (time) {
            this.MoveUp(time);
        };
        Player.prototype.MoveUp = function (time) {
            this.y = this.y * this.speed * time;
        };
        return Player;
    }(Phaser.GameObjects.Sprite));
    TimeWaster.Player = Player;
})(TimeWaster || (TimeWaster = {}));
//# sourceMappingURL=Sprite.js.map