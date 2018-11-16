module TimeWaster {

    export class PlayerController extends Phaser.GameObjects.GameObject {

        scene: Phaser.Scene;
        controllingActor: Actor;
        keys: Phaser.Input.Keyboard.CursorKeys;

        isDisabled = false;

        constructor(scene: Phaser.Scene, controlling: Actor) {
            super(scene, "inputController");

            this.scene = scene;
            this.controllingActor = controlling;

            console.log(this.controllingActor.name);

            this.keys = this.scene.input.keyboard.createCursorKeys();

            scene.add.existing(this);
        }

        preUpdate(time: number, delta: number) {
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
                var menuScene = (this.scene as SceneMain);
                this.controllingActor = menuScene.enemies[Phaser.Math.Between(0, menuScene.enemies.length - 1)];
            }

            if (this.keys.shift.isDown) {
                var menuScene = (this.scene as SceneMain);
                menuScene.onGameOver();
            }

            //this.controllingActor.x += 50 * delta;
        }

        setDisabled(isDisabled: boolean) {
            this.isDisabled = isDisabled;
        }
    }
}