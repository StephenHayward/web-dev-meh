module TimeWaster {

    export class Actor extends Phaser.GameObjects.Sprite {

        velocity: Phaser.Math.Vector2;
        private time: number;
        private health: number;

        constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number, name?: string) {
            super(scene, x, y, texture, frame);

            // Initialize stats;
            this.velocity = new Phaser.Math.Vector2();
            this.time = 200;
            this.health = 100;

            // Set the GameObjects name if defined
            if (name != null && name.length > 0) {
                super.setName(name);
            }

            this.setOrigin(.5, .5);

            // Add the GameObject to the scene
            scene.add.existing(this);
        }

        preUpdate(time: number, delta: number) {
            this.x += this.velocity.x * delta;
            this.y += this.velocity.y * delta;
        }
    }
}