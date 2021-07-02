
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Play2 ] 
}
let game = new Phaser.Game(config);
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyUP, keyA, keyD, keyX;
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;