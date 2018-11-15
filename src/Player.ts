module TimeWaster {

    export class Player extends Actor {

        constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number, name?: string) {
            super(scene, x, y, texture, frame, name);

        }

        Update(time: number) {
            super.Update(time);

            
        }


    }

}

