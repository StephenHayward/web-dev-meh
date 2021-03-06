﻿module TimeWaster {

    export class PlayerController extends Phaser.GameObjects.GameObject {

        scene: Phaser.Scene;
        controllingActor: Actor;
        keys: Phaser.Input.Keyboard.CursorKeys;
        accelerationRate: number;

        isDisabled = false;

        constructor(scene: Phaser.Scene, controlling: Actor) {
            super(scene, "inputController");

            this.scene = scene;
            this.controllingActor = controlling;
             
            this.keys = this.scene.input.keyboard.createCursorKeys();

            this.accelerationRate = 3;

            scene.add.existing(this);
        }

        preUpdate(time: number, delta: number) {
            // Do not process if disabled
            if (this.isDisabled) {
                return;
            }

            // .. Else handle keyboard input            
            if (this.keys.right.isDown) {
                this.controllingActor.acceleration.x += this.accelerationRate;
            }
            else if (this.keys.left.isDown) {
                this.controllingActor.acceleration.x += -this.accelerationRate;
            }
            else {
                this.controllingActor.acceleration.x = 0;
            }

            if (this.keys.down.isDown) {
                this.controllingActor.acceleration.y += this.accelerationRate;
            }
            else if (this.keys.up.isDown) {
                this.controllingActor.acceleration.y += -this.accelerationRate;
            }
            else {
                this.controllingActor.acceleration.y = 0;
            }

            // Test Changing Character Control
            if (this.keys.space.isDown && this.keys.space.repeats === 1) {
                var menuScene = (this.scene as SceneMain);
                this.controllingActor = menuScene.enemies[Phaser.Math.Between(0, menuScene.enemies.length - 1)];
            }

            // Test GameOver
            if (this.keys.shift.isDown) {
                var menuScene = (this.scene as SceneMain);
                menuScene.onGameOver();
            }
        }

        setDisabled(isDisabled: boolean) {
            this.isDisabled = isDisabled;
        }
    }
}