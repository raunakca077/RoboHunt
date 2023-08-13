function Game(canvas) //,resources
{
   
    const ctx = canvas.getContext('2d');
    const arena = new Arena(ctx); 

    const draw = function() 
    
        {

        const gameAnimationFrame = requestAnimationFrame(draw);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        arena.drawGround();
        action.actor.move()


    };

    const start = function() {
        
    
        const ctx = canvas.getContext('2d');
       const messageBox = document.getElementById('msg');
          //Arena=TileGround   Action=Shyame arena =ground
     
          const collisionHandler = new CollisionHandler(ctx, camera, ground.mapArray);

          const action = new Action(ctx, { x: 600, y: 200 }, canvas, camera, collisionHandler, resources);
       

       


       

       const gameAnimationFrame = requestAnimationFrame(draw);
    };


    start()


}