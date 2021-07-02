
class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/fixedback.wav');
        this.load.audio('sfx_explosion', './assets/birdscream.wav');
        this.load.audio('sfx_rocket', './assets/qshoot.wav');
        this.load.image('background', './assets/background.png');

      }

    create() {
        let menuConfig = {
            fontFamily : 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#170469',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        this.background = this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0, 0);


        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'BIRD HUNTING', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'USE <- -> arrows to move & (K) to fire',{ fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#170469',fontSize:'20px' }, menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert',{ fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#170469',fontSize:'20px'}, menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 40, 'Press (S) for 2-Player-Mode',{ fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#170469',fontSize:'20px',backgroundColor:'#d7dade'}, menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 80, 'For 2-Player-Mode, use (A) for moving left and (D) for moving right',{ fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#170469',fontSize:'20px',backgroundColor:'#d7dade'}, menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 120, 'use (X) to fire',{ fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#170469',fontSize:'20px',backgroundColor:'#d7dade'}, menuConfig).setOrigin(0.5);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyUP)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('2playerScene');    
        }
        
      }
      

}