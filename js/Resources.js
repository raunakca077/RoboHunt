
function Resources(){

   

   const doc = function () {

       const images = [];
        const audios = [];
        const imgCnt = 0;

    };

   const addImage = function (name, src) {

        var image = new Image();
        image.onload = function () {

            imgCnt += 1;
        };
        image.src = src;
        doc.images[name] = image;
    };

    const getImage = function (name) {

        return doc.images[name];
    };

    const addAudio = function (name, src) {

        var audio = new Audio(src);
        doc.audios[name] = audio;
    };

    this.getAudio = function (name) {

        return doc.audios[name];
    };

    doc();
}

const resources = new Resources();
    
resources.addImage('character_sprite1_left', 'images/character/character_sprite1_left.png');
resources.addImage('character_sprite1_right', 'images/character/character_sprite1_right.png');

resources.addImage('Enemy-1-left', 'images/character/Enemy-1-left.png');
resources.addImage('Enemy-1-right', 'images/character/Enemy-1-right.png');
resources.addImage('hand_with_gun', 'images/hand_with_gun.png');
resources.addImage('hand_with_gun_left', 'images/hand_with_gun_left.png');
resources.addImage('enemy_gun', 'images/enemy_gun.PNG');
resources.addImage('enemy_gun_left', 'images/enemy_gun_left.PNG');

resources.addAudio('intro', 'audio/intro.mp3');
resources.addAudio('background_music', 'audio/background_music.mp3');
resources.addAudio('gun_shot', 'audio/gun_shot.mp3');
