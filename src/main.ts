import 'phaser';
import {
    DEBUG_MODE,
    PHASER_GAME_BACKGROUND,
    PHASER_GAME_TYPE,
    PHASER_PHYSICS_TYPE,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
} from './config';
import { TitleScene } from './scenes/title';

const gameConfig: GameConfig = {
    backgroundColor: PHASER_GAME_BACKGROUND,
    height: WINDOW_HEIGHT,
    parent: 'game',
    physics: {
        arcade: {
            debug: DEBUG_MODE,
        },
        default: PHASER_PHYSICS_TYPE,
    },
    scene: [TitleScene],
    type: PHASER_GAME_TYPE,
    width: WINDOW_WIDTH,
};

export const game: Phaser.Game = new Phaser.Game(gameConfig);
