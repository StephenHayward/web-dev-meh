module TimeWaster {

    export class Player extends Actor {

        //playerController: PlayerController;

        constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number, name?: string) {
            super(scene, x, y, texture, frame, name);

            
        }

        preUpdate(time: number, delta: number) {
            super.preUpdate(time, delta);
            
        }
    }

}

