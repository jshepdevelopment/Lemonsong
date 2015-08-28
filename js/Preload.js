var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
	
	this.load.tilemap('level1', 'assets/tilemaps/levelone.json', null, Phaser.Tilemap.TILED_JSON);
	this.load.image('tiles01', 'assets/images/tiles01.png');
	this.load.image('background', 'assets/images/sky.png');
	this.load.image('textBubble', 'assets/images/textbubble.png');

	this.load.image('hills', 'assets/images/hills.png');
	this.load.image('trees', 'assets/images/trees.png');
	this.load.image('heart', 'assets/images/heart.png');
	this.load.image('hudLemon', 'assets/images/hudlemon.png');
	this.load.image('house', 'assets/images/house.png');
	this.load.image('lemonadeStand', 'assets/images/lemonadestand.png');
	this.load.image('rottenLemon', 'assets/images/rottenlemon.png', 32, 32);

	this.load.spritesheet('lemon', 'assets/images/lemon.png', 32, 32);
	this.load.spritesheet('player', 'assets/images/player.png', 32, 32);
	this.load.image('playerDuck', 'assets/images/player_duck.png');
    this.load.image('playerDead', 'assets/images/player_dead.png');
	this.load.spritesheet('bob', 'assets/images/bob.png', 32, 32);
	this.load.spritesheet('george', 'assets/images/george.png', 32, 32);   
	
    
	this.load.image('goldCoin', 'assets/images/goldCoin.png');
    this.load.audio('coin', ['assets/audio/coin.ogg', 'assets/audio/coin.mp3']);
	
  },
  create: function() {
    this.state.start('Game');
  }
};