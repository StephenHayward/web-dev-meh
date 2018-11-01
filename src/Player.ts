module TimeWaster {

    export class Player extends Phaser.GameObjects.Sprite {

        speed: number;

        constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
            super(scene, x, y, texture, frame);

            this.speed = 0.005;

            // Add the object to the scene
            scene.children.add(this);
        }

        update(time) {
            this.MoveUp(time);
        }

        MoveUp(time) {
            this.y += this.speed * time;
        }
    }

}

