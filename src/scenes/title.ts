
export class TitleScene extends Phaser.Scene {
    private keyTrigger: Phaser.Input.Keyboard.Key;

    public constructor(config: GameConfig) {
        super(config);
    }

    public preload(): void {
        return;
    }

    public create(): void {
        this.keyTrigger = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    public update(): void {
        if (this.keyTrigger.isDown) {
            // Load the main/level 1 scene
        }
    }
}
