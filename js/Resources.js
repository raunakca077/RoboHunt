function Resources(){

    var _this;

    this._init = function () {

        _this = this;
        this.images = [];
        this.audios = [];
        this.imageLoadedCount = 0;
        this.audioLoadedCount = 0;
    };

    this.addImage = function (name, src) {

        var image = new Image();
        image.onload = function () {

            _this.imageLoadedCount += 1;
        };
        image.src = src;
        _this.images[name] = image;
    };

    this.getImage = function (name) {

        return _this.images[name];
    };

    this.addAudio = function (name, src) {

        var audio = new Audio(src);
        _this.audios[name] = audio;
    };

    this.getAudio = function (name) {

        return _this.audios[name];
    };

    this._init();
}
this.resources = new Resources();
    
this.resources.addImage('character_sprite1_left', 'images/hero/character_sprite1_left.png');
this.resources.addImage('character_sprite1_right', 'images/hero/character_sprite1_right.png');
this.resources.addImage('aircraft', 'images/hero/aircraft2.png');

// this.resources.addImage('Enemy-1-left', 'images/character/Enemy-1-left.png');
// this.resources.addImage('Enemy-1-right', 'images/character/Enemy-1-right.png');

// this.resources.addImage('hand_with_gun', 'images/hand_with_gun.png');
// this.resources.addImage('hand_with_gun_left', 'images/hand_with_gun_left.png');
// this.resources.addImage('enemy_gun', 'images/enemy_gun.PNG');
// this.resources.addImage('enemy_gun_left', 'images/enemy_gun_left.PNG');

// this.resources.addAudio('intro', 'audio/intro.mp3');
// this.resources.addAudio('background_music', 'audio/background_music.mp3');
// this.resources.addAudio('gun_shot', 'audio/gun_shot.mp3');
// this.resources.addImage('face', 'images/character/face.png');
