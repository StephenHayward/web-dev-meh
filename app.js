var dogGame;
var DogGame = /** @class */ (function () {
    function DogGame() {
        var config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'content',
            scene: [MenuScene, SceneMain]
        };
        this.game = new Phaser.Game(config);
    }
    return DogGame;
}());
window.onload = function () {
    dogGame = new DogGame;
};
//# sourceMappingURL=app.js.map