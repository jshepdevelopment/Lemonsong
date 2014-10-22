/*
* Happy Time Lemon Song
* Copyright 2014
* Original Gamester
* 
*/

window.onload = function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'wrapper', { });

    game.state.add('levelOneState', levelOne);
    //game.state.add('levelTwoState', levelTwo);

    game.state.start('levelOneState');

}

function collectLemon(player, lemon) {

    // Removes the lemon
    lemon.kill();

}

function collectRottenLemon(player, rottenlemon) {
    
    rottenlemon.kill();

}


function collidePlatform(player, platform){
    //player_doublejump = true;
}

