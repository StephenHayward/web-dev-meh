module TimeWaster {

    // From Tutorial: https://snowbillr.github.io/blog/2018-07-03-buttons-in-phaser-3/
    // Temp till an image or sprite is used
    export class TextButton extends Phaser.GameObjects.Text {

        constructor(scene: Phaser.Scene, x, y, text, style, callback) {
            super(scene, x, y, text, style);

            this.setInteractive({ useHandCursor: true })
                .on('pointerover', () => this.enterButtonHoverState())
                .on('pointerout', () => this.enterButtonRestState())
                .on('pointerdown', () => this.enterButtonActiveState())
                .on('pointerup', () => {
                    this.enterButtonHoverState();
                    callback();
                });

            scene.add.existing(this);

            // Centre string on position
            this.x -= (this.width / 2);
            this.y -= (this.height / 2);
        }

        enterButtonHoverState() {
            this.setStyle({ fill: '#ff0' });
        }

        enterButtonRestState() {
            this.setStyle({ fill: '#0f0' });
        }

        enterButtonActiveState() {
            this.setStyle({ fill: '#0ff' });
        }
    }

}