

window.onload = function () {

    
    const doc = function () {

       
        const MainDoc = document.getElementsByClassName('Main')[0];
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

       const intro_Image = new Image('images/front.png');
     intro_Image.src = 'images/front.png';

        intro_Image.onload = function () {

            ctx.drawImage(  intro_Image, 0, 0, MainDoc.clientWidth, MainDoc.clientHeight);
    
        }

    



    const endPreload = setInterval(function () {
        clearInterval(endPreload);
        new Game(canvas,resources);  //,resources
    
}, 5000);


 }


    doc();


Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
}