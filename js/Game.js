function Game(canvas,resources) //,
{
    var run;
    const ctx = canvas.getContext('2d');
    

   

    this.start = function() {
        
        run=this
        const ctx = canvas.getContext('2d');
       const messageBox = document.getElementById('msg');
          //Arena=TileGround   Action=Shyame arena =ground
          this.arena = new Arena(ctx); 
          
          const ground = new Arena(ctx);
             const collisionHandler = new CollisionHandler(ctx, this.camera, ground.mapArray);

          this.action = new Action(ctx, { x: 600, y: 200 }, canvas, this.camera, collisionHandler, resources);
          this.proto2 = new Proto(ctx, { x: 600, y: 200 }, canvas, this.camera, collisionHandler, resources);

          

       
        // const movement=new Move(run,this.proto2)
        // movement.addControls()

        this.addControls();

       this.gameAnimationFrame = requestAnimationFrame(this.draw);
    };

    this.draw = function() 
    
        {

        run.gameAnimationFrame = requestAnimationFrame(run.draw);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        run.arena.drawGround();
        run.proto2.move();
       
       


    };

    
this.addMovements = function(e) {

    run.proto2.commands['G'] = false;
    run.proto2.commands['O'] = false;
    switch (e.which) {

        case 87:
            run.proto2.commands['W'] = true;
            break;
        case 83:
            run.proto2.commands['S'] = true;
            break;
        case 68:
            run.proto2.commands['D'] = true;
            break;
        case 65:
            run.proto2.commands['A'] = true;
            break;
            
    }
};

this.removeMovements = function(e) {

    switch (e.which) {

        case 87:
            run.proto2.commands['W'] = false;
            break;
        case 83:
            run.proto2.commands['S'] = false;
            break;
        case 68:
            run.proto2.commands['D'] = false;
            break;
        case 65:
            run.proto2.commands['A'] = false;
            break;
    }
};


this.addControls = function() {

    document.addEventListener('keydown', run.addMovements);
    document.addEventListener('keyup', run.removeMovements);
    document.addEventListener('mousemove', run.updateFaceSideEvent);
    document.addEventListener('click', run.fireBulletEvent);
};

this.removeControls = function () {

    document.removeEventListener('keydown', run.addMovements);
    document.removeEventListener('keyup', run.removeMovements);
    document.removeEventListener('mousemove', run.updateFaceSideEvent);
    document.removeEventListener('click', run.fireBulletEvent);
};




    this.start()


}