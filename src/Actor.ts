module TimeWaster {

    export class Actor extends Phaser.GameObjects.Sprite {

        acceleration: Phaser.Math.Vector2;
        private time: number;
        private health: number;
        private arcadeBody: Phaser.Physics.Arcade.Body;

        debugText: Phaser.GameObjects.Text;

        constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number, name?: string) {
            super(scene, x, y, texture, frame);

            // Initialize stats;
            this.acceleration = new Phaser.Math.Vector2();
            this.time = 200;
            this.health = 100;

            // Set the GameObjects name if defined
            if (name != null && name.length > 0) {
                super.setName(name);
            }

            this.setOrigin(.5, .5);

            // Create colliders
            scene.physics.add.existing(this);
            this.arcadeBody = this.body as Phaser.Physics.Arcade.Body;
            this.arcadeBody.maxVelocity = new Phaser.Math.Vector2(30, 30);
            this.arcadeBody.setDrag(200, 200);

            // Debug Text
            this.debugText = new Phaser.GameObjects.Text(scene, 0, 0, "Vel: ", { font: '16px Courier', fill: '#ffffff' });
            this.debugText.setScale(.3, .3);
            scene.add.existing(this.debugText);

            // Add the GameObject to the scene
            scene.add.existing(this);
        }

        preUpdate(time: number, delta: number) {
            this.arcadeBody.velocity.x += this.acceleration.x;
            this.arcadeBody.velocity.y += this.acceleration.y;

            this.debugText.text = 'Accl: ' + Phaser.Math.RoundTo(this.acceleration.x) + ':' + Phaser.Math.RoundTo(this.acceleration.y);
            this.debugText.setPosition(this.x, this.y);
        }
    }
}