Game.Preloader = function(game){
    this.preloaderBar = null;
};

Game.Preloader.prototype = {

    preload:function(){

        //Image de chargement
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);

        //Chargement de la map
        this.load.tilemap('map', 'assets/level2.csv');
        this.load.image('tileset', 'assets/block.png');

        //Chargement du boutons
        this.load.spritesheet('player', 'assets/player.png', 24,26);
        this.load.spritesheet('buttons','assets/buttons.png', 193, 71);

        //Chargement des enemies
        this.load.image('drag','assets/drag.png');
        this.load.image('bird','assets/enemie.png');

        //chargement de l'effet de l'arme a feu
        this.load.image('nut', 'assets/balle.png');

        //changement des images de fond
        this.load.image('fond', 'assets/block.jpg');
        this.load.image('fond2', 'assets/block2.jpg');
        this.load.image('fond3', 'assets/block3.jpg');

        //  Firefox doesn't support mp3 files, so use ogg
        //this.load.audio('song', ['assets/song_track.mp3', 'assets/song_track.ogg']);
    },

    create:function(){
        this.state.start('Level1');
    }


}