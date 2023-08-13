
function Action(ctx, startPosition, canvas, camera, collisionHandler, resources){

    const start = function () {
        const proto = new Proto(ctx, startPosition, canvas, camera, collisionHandler, resources);
    };          //actor=proto

    start();
}