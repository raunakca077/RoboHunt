
function Action(ctx, startPosition, canvas, camera, collisionHandler, resources){
    
    const start = function () {
         this.proto = new Proto(ctx, startPosition, canvas, camera, collisionHandler, resources);
    };          //actor=proto

    start();
}