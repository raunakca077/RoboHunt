function Move(doc,proto2){
    console.log(proto2)
    const start=()=>{ 
     

this.addMovements = function(e) {

    proto2.commands['G'] = false;
    proto2.commands['O'] = false;
    switch (e.which) {

        case 'W':
            proto2.commands['W'] = true;
            break;
        case 'S':
            proto2.commands['S'] = true;
            break;
        case 'D':
            proto2.commands['D'] = true;
            break;
        case 65:
            proto2.commands['A'] = true;
            break;
            
    }
};

this.removeMovements = function(e) {

    switch (e.which) {

        case 'W':
            proto2.commands['W'] = false;
            break;
        case 'S':
            proto2.commands['S'] = false;
            break;
        case 'D':
            proto2.commands['D'] = false;
            break;
        case 'A':
            proto2.commands['A'] = false;
            break;
    }
};


this.addControls = function() {

    document.addEventListener('keydown', doc.addMovements);
    document.addEventListener('keyup', doc.removeMovements);
    document.addEventListener('mousemove', doc.updateFaceSideEvent);
    document.addEventListener('click', doc.fireBulletEvent);
};

this.removeControls = function () {

    document.removeEventListener('keydown', doc.addMovements);
    document.removeEventListener('keyup', doc.removeMovements);
    document.removeEventListener('mousemove', doc.updateFaceSideEvent);
    document.removeEventListener('click', doc.fireBulletEvent);
};


    }
    start()
}