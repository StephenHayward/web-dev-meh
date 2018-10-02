var dogGame;

class DogGame {
   
    constructor() {
        var config = {
            type: Phaser.AUTO,
            width: 480,
            height: 640,
            parent: 'content',
            scene: [MenuScene, SceneMain]
        };

         this.game = new Phaser.Game(config);
    }

    game: Phaser.Game;
}

window.onload = () => {
    dogGame = new DogGame;

};